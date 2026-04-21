// Audit 2: find lektioner uden ytId — grupperet pr. kursus
const fs = require('fs');
const vm = require('vm');

const src = fs.readFileSync(__dirname + '/app.js', 'utf8');

const elStub = new Proxy({}, {
  get(_, k) {
    if (k === 'classList') return { add(){}, remove(){}, toggle(){}, contains: () => false };
    if (k === 'style' || k === 'dataset') return {};
    if (k === 'children' || k === 'childNodes') return [];
    if (typeof k === 'string' && ['addEventListener','removeEventListener','appendChild','removeChild','setAttribute','getAttribute','insertAdjacentHTML','click','focus','blur','scrollIntoView'].includes(k)) return () => {};
    if (['querySelector','closest','parentElement','parentNode','firstChild','lastChild','nextElementSibling','previousElementSibling'].includes(k)) return () => null;
    if (k === 'querySelectorAll') return () => [];
    return undefined;
  },
  set() { return true; },
});
const sandbox = {
  window: { addEventListener(){}, scrollTo(){}, location: { hash: '' }, innerWidth: 1280, innerHeight: 800 },
  document: {
    addEventListener(){}, getElementById: () => elStub, querySelector: () => elStub,
    querySelectorAll: () => [], createElement: () => elStub, body: elStub, documentElement: elStub,
  },
  localStorage: { getItem: () => null, setItem(){}, removeItem(){} },
  console, setTimeout, clearTimeout, setInterval, clearInterval,
  navigator: { onLine: true, serviceWorker: { register() { return Promise.resolve(); } } },
  location: { hash: '', pathname: '/', search: '' },
  history: { pushState(){}, replaceState(){} },
};
sandbox.globalThis = sandbox;
vm.createContext(sandbox);
vm.runInContext(`(function(){\n${src}\n;globalThis.__EXPORT={ALL_CURRICULA,VEKTORER_CURRICULUM};\n})();`, sandbox);
const { ALL_CURRICULA, VEKTORER_CURRICULUM } = sandbox.__EXPORT;

console.log('\n=== LEKTION ytId AUDIT ===\n');
let totalLessons = 0, totalNoYt = 0;
const bySlug = [];
for (const [slug, curr] of Object.entries(ALL_CURRICULA)) {
  const c = curr || VEKTORER_CURRICULUM;
  if (!c) continue;
  let lessons = 0, noYt = 0, quizzes = 0, noYtQuiz = 0;
  c.forEach(sec => (sec.items || []).forEach(it => {
    if (it.type === 'lesson') { lessons++; if (!it.ytId) noYt++; }
    else if (it.type === 'quiz') { quizzes++; if (!it.ytId) noYtQuiz++; }
  }));
  bySlug.push({slug, lessons, noYt, quizzes});
  totalLessons += lessons; totalNoYt += noYt;
}
bySlug.sort((a,b) => b.noYt - a.noYt);
for (const r of bySlug) {
  const pct = r.lessons ? Math.round(100*(r.lessons - r.noYt)/r.lessons) : 100;
  const mark = r.noYt === 0 ? '✅' : r.noYt === r.lessons ? '❌' : '⚠️ ';
  console.log(`${mark} ${r.slug.padEnd(38)}  ${r.lessons - r.noYt}/${r.lessons} lektioner har video (${pct}%)`);
}
console.log(`\nTotal: ${totalLessons - totalNoYt}/${totalLessons} lektioner har video (${Math.round(100*(totalLessons-totalNoYt)/totalLessons)}%)`);
console.log(`Lektioner uden video: ${totalNoYt}`);
