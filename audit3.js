// Audit 3: videoer til quizzer (både item-level ytId og per-question ytId)
const fs = require('fs');
const vm = require('vm');
const src = fs.readFileSync(__dirname + '/app.js', 'utf8');

const elStub = new Proxy({}, { get(_, k) {
  if (k === 'classList') return { add(){},remove(){},toggle(){},contains:()=>false };
  if (k === 'style' || k === 'dataset') return {};
  if (k === 'children' || k === 'childNodes') return [];
  if (typeof k === 'string' && ['addEventListener','removeEventListener','appendChild','removeChild','setAttribute','getAttribute','insertAdjacentHTML','click','focus','blur','scrollIntoView'].includes(k)) return ()=>{};
  if (['querySelector','closest','parentElement','parentNode','firstChild','lastChild','nextElementSibling','previousElementSibling'].includes(k)) return ()=>null;
  if (k === 'querySelectorAll') return () => [];
  return undefined;
}, set(){return true;}});
const sandbox = {
  window:{addEventListener(){},scrollTo(){},location:{hash:''},innerWidth:1280,innerHeight:800},
  document:{addEventListener(){},getElementById:()=>elStub,querySelector:()=>elStub,querySelectorAll:()=>[],createElement:()=>elStub,body:elStub,documentElement:elStub},
  localStorage:{getItem:()=>null,setItem(){},removeItem(){}},
  console, setTimeout, clearTimeout, setInterval, clearInterval,
  navigator:{onLine:true,serviceWorker:{register(){return Promise.resolve();}}},
  location:{hash:'',pathname:'/',search:''}, history:{pushState(){},replaceState(){}}
};
sandbox.globalThis = sandbox;
vm.createContext(sandbox);
vm.runInContext(`(function(){\n${src}\n;globalThis.__E={ALL_CURRICULA,ALL_QUIZ_DATA,QUIZ_DATA,VEKTORER_CURRICULUM};\n})();`, sandbox);
const { ALL_CURRICULA, ALL_QUIZ_DATA, QUIZ_DATA, VEKTORER_CURRICULUM } = sandbox.__E;

console.log('\n=== QUIZ VIDEO AUDIT ===\n');
console.log('A) Item-level ytId på quiz-items (vist efter quiz er gennemført):');

let totalQuizzes = 0, itemWithYtId = 0;
const missingItems = [];
for (const [slug, curr] of Object.entries(ALL_CURRICULA)) {
  const c = curr || VEKTORER_CURRICULUM;
  if (!c) continue;
  c.forEach((sec, si) => (sec.items || []).forEach((it, ii) => {
    if (it.type === 'quiz') {
      totalQuizzes++;
      if (it.ytId) itemWithYtId++;
      else missingItems.push(`${slug} ${si}-${ii}: ${it.title}`);
    }
  }));
}
console.log(`  ${itemWithYtId}/${totalQuizzes} quizzer har item-level forklaringsvideo (${Math.round(100*itemWithYtId/totalQuizzes)}%)`);
if (missingItems.length <= 20) missingItems.forEach(m => console.log('    - ' + m));
else console.log(`    (${missingItems.length} quizzer uden item-level video)`);

console.log('\nB) Per-question ytId (vises efter hvert spørgsmål):');
let totalQs = 0, qsWithYtId = 0;
const byQuiz = new Map();
const processQuiz = (slug, key, questions) => {
  let local = 0, localYt = 0;
  questions.forEach(q => { totalQs++; local++; if (q.ytId) { qsWithYtId++; localYt++; } });
  byQuiz.set(`${slug} ${key}`, { total: local, yt: localYt });
};
for (const [slug, data] of Object.entries(ALL_QUIZ_DATA)) {
  for (const [key, qs] of Object.entries(data || {})) {
    if (Array.isArray(qs)) processQuiz(slug, key, qs);
  }
}
// vektorer QUIZ_DATA
for (const [key, qs] of Object.entries(QUIZ_DATA || {})) {
  if (Array.isArray(qs)) processQuiz('QUIZ_DATA(vektorer)', key, qs);
}
console.log(`  ${qsWithYtId}/${totalQs} spørgsmål har forklaringsvideo (${Math.round(100*qsWithYtId/totalQs)}%)`);

// Group by quiz and show ones that have ANY video but not ALL
console.log('\nC) Quizzer med delvis video-dækning:');
let fullCount=0, partialCount=0, noneCount=0;
for (const [q, s] of byQuiz) {
  if (s.yt === s.total) fullCount++;
  else if (s.yt > 0) { partialCount++; console.log(`  ⚠️  ${q}: ${s.yt}/${s.total}`); }
  else noneCount++;
}
console.log(`\n  Fuld videoer: ${fullCount} quizzer`);
console.log(`  Delvis videoer: ${partialCount} quizzer`);
console.log(`  Ingen videoer: ${noneCount} quizzer`);
