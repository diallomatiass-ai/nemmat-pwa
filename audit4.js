// Audit 4: efter integration — hvor mange quiz-items bruger nu scraped data (med video)?
const fs = require('fs');
const vm = require('vm');
const scrapedSrc = fs.readFileSync(__dirname + '/nemmat-scraped.js', 'utf8');
const appSrc = fs.readFileSync(__dirname + '/app.js', 'utf8');

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
sandbox.window.SCRAPED_QUIZZES = null;
sandbox.globalThis = sandbox;
vm.createContext(sandbox);
vm.runInContext(scrapedSrc, sandbox);
vm.runInContext(`(function(){\n${appSrc}\n;globalThis.__E={ALL_CURRICULA,SCRAPED_SLUG_MAP,_quizIndexFromKey,VEKTORER_CURRICULUM};\n})();`, sandbox);

const { ALL_CURRICULA, SCRAPED_SLUG_MAP, _quizIndexFromKey, VEKTORER_CURRICULUM } = sandbox.__E;
const SCRAPED = sandbox.window.SCRAPED_QUIZZES;

console.log('\n=== INTEGRATION AUDIT ===\n');
let totalQuiz = 0, matched = 0, withYt = 0, totalQ = 0, totalYt = 0;
for (const [slug, curr] of Object.entries(ALL_CURRICULA)) {
  const c = curr || VEKTORER_CURRICULUM;
  if (!c) continue;
  const nemmatSlug = SCRAPED_SLUG_MAP[slug];
  let slugQuizzes = 0, slugMatched = 0, slugWithYt = 0, slugQ = 0, slugYt = 0;
  c.forEach((sec, si) => (sec.items || []).forEach((it, ii) => {
    if (it.type !== 'quiz') return;
    slugQuizzes++; totalQuiz++;
    if (!nemmatSlug || !SCRAPED?.[nemmatSlug]) return;
    const qIdx = _quizIndexFromKey(slug, `${si}-${ii}`);
    const quiz = SCRAPED[nemmatSlug][qIdx];
    if (!quiz) return;
    const usable = quiz.questions.filter(q => q.type === 'single_choice' && q.ans >= 0 && q.opts?.length >= 2);
    if (!usable.length) return;
    slugMatched++; matched++;
    slugQ += usable.length; totalQ += usable.length;
    const yt = usable.filter(q => q.ytId).length;
    slugYt += yt; totalYt += yt;
    if (yt > 0) { slugWithYt++; withYt++; }
  }));
  if (slugQuizzes === 0) continue;
  const pct = Math.round(100*slugMatched/slugQuizzes);
  console.log(`${pct===100?'✅':pct>=50?'⚠️ ':'❌'} ${slug.padEnd(38)}  ${slugMatched}/${slugQuizzes} quizzer mappet  ${slugQ} Q  ${slugYt} videoer`);
}
console.log(`\nTotal: ${matched}/${totalQuiz} quizzer integreret (${Math.round(100*matched/totalQuiz)}%)`);
console.log(`Spørgsmål: ${totalQ}, videoer: ${totalYt} (${totalQ?Math.round(100*totalYt/totalQ):0}%)`);
