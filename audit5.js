// Audit 5: Runtime-accurate — afspejler title-based mapping i getQuizData()
const fs = require('fs');
const vm = require('vm');
const scrapedSrc = fs.readFileSync(__dirname + '/nemmat-scraped.js', 'utf8');
const appSrc = fs.readFileSync(__dirname + '/app.js', 'utf8');

const elStub = new Proxy({}, { get(_, k) {
  if (k === 'classList') return { add(){},remove(){},toggle(){},contains:()=>false };
  return undefined;
}, set(){return true;}});
const sandbox = {
  window:{addEventListener(){},SCRAPED_QUIZZES:null},
  document:{addEventListener(){},getElementById:()=>elStub,querySelector:()=>elStub,querySelectorAll:()=>[]},
  localStorage:{getItem:()=>null,setItem(){},removeItem(){}},
  console, setTimeout, clearTimeout,
  navigator:{onLine:true,serviceWorker:{register(){return Promise.resolve();}}},
  location:{hash:'',pathname:'/',search:''}, history:{pushState(){},replaceState(){}}
};
sandbox.globalThis = sandbox;
vm.createContext(sandbox);
vm.runInContext(scrapedSrc, sandbox);
vm.runInContext(`(function(){\n${appSrc}\n;globalThis.__E={ALL_CURRICULA,SCRAPED_SLUG_MAP,_quizIndexFromKey,_mapScrapedQuestions,getQuizData,VEKTORER_CURRICULUM};\nglobalThis.__setCourse=(slug)=>{currentCourse={slug}};\n})();`, sandbox);

const { ALL_CURRICULA, SCRAPED_SLUG_MAP, getQuizData, VEKTORER_CURRICULUM } = sandbox.__E;

console.log('\n=== RUNTIME AUDIT (title-based inkluderet) ===\n');
let totalQuiz = 0, matched = 0, totalQ = 0, totalYt = 0;
for (const [slug, curr] of Object.entries(ALL_CURRICULA)) {
  const c = curr || VEKTORER_CURRICULUM;
  if (!c) continue;
  sandbox.__setCourse(slug);
  let slugQuizzes = 0, slugMatched = 0, slugQ = 0, slugYt = 0;
  c.forEach((sec, si) => (sec.items || []).forEach((it, ii) => {
    if (it.type !== 'quiz') return;
    slugQuizzes++; totalQuiz++;
    const qs = getQuizData(`${si}-${ii}`);
    if (!qs?.length) return;
    slugMatched++; matched++;
    slugQ += qs.length; totalQ += qs.length;
    const yt = qs.filter(q => q.ytId).length;
    slugYt += yt; totalYt += yt;
  }));
  if (slugQuizzes === 0) continue;
  const pct = Math.round(100*slugMatched/slugQuizzes);
  console.log(`${pct===100?'✅':pct>=50?'⚠️ ':'❌'} ${slug.padEnd(38)}  ${slugMatched}/${slugQuizzes} quizzer  ${slugQ} Q  ${slugYt} videoer`);
}
console.log(`\nTotal: ${matched}/${totalQuiz} quizzer (${Math.round(100*matched/totalQuiz)}%)`);
console.log(`Spørgsmål: ${totalQ}, videoer: ${totalYt} (${totalQ?Math.round(100*totalYt/totalQ):0}%)`);
