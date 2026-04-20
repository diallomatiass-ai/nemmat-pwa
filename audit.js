// Audit: find quiz-items i curricula uden tilsvarende key i ALL_QUIZ_DATA
const fs = require('fs');
const vm = require('vm');

const src = fs.readFileSync(__dirname + '/app.js', 'utf8');

const elStub = new Proxy({}, {
  get(_, k) {
    if (k === 'classList') return { add() {}, remove() {}, toggle() {}, contains: () => false };
    if (k === 'style') return {};
    if (k === 'dataset') return {};
    if (k === 'children' || k === 'childNodes') return [];
    if (typeof k === 'string' && ['addEventListener','removeEventListener','appendChild','removeChild','setAttribute','getAttribute','insertAdjacentHTML','click','focus','blur','scrollIntoView'].includes(k)) return () => {};
    if (['querySelector','closest','parentElement','parentNode','firstChild','lastChild','nextElementSibling','previousElementSibling'].includes(k)) return () => null;
    if (k === 'querySelectorAll') return () => [];
    return undefined;
  },
  set() { return true; },
});
const sandbox = {
  window: { addEventListener() {}, scrollTo() {}, location: { hash: '' }, innerWidth: 1280, innerHeight: 800 },
  document: {
    addEventListener() {},
    getElementById: () => elStub,
    querySelector: () => elStub,
    querySelectorAll: () => [],
    createElement: () => elStub,
    body: elStub,
    documentElement: elStub,
  },
  localStorage: { getItem: () => null, setItem() {}, removeItem() {} },
  console,
  setTimeout, clearTimeout, setInterval, clearInterval,
  navigator: { onLine: true, serviceWorker: { register() { return Promise.resolve(); } } },
  location: { hash: '', pathname: '/', search: '' },
  history: { pushState() {}, replaceState() {} },
};
sandbox.globalThis = sandbox;

try {
  vm.createContext(sandbox);
  // const/let er block-scoped; pak i IIFE og eksportér via globalThis
  const wrapped = `(function(){\n${src}\n;globalThis.__EXPORT = { ALL_CURRICULA, ALL_QUIZ_DATA, QUIZ_DATA };\n})();`;
  vm.runInContext(wrapped, sandbox);
} catch (e) {
  console.error('Exec failed:', e.message);
  process.exit(1);
}

const { ALL_CURRICULA, ALL_QUIZ_DATA, QUIZ_DATA } = sandbox.__EXPORT || {};
if (!ALL_CURRICULA || !ALL_QUIZ_DATA) {
  console.error('Missing globals'); process.exit(1);
}

const results = [];
for (const [slug, curr] of Object.entries(ALL_CURRICULA)) {
  if (!curr) continue; // null entries håndteres andetsteds
  const qd = ALL_QUIZ_DATA[slug] || (slug.startsWith('vektorer') ? QUIZ_DATA : null) || {};
  const missing = [];
  const present = [];
  curr.forEach((sec, si) => {
    (sec.items || []).forEach((it, ii) => {
      if (it.type === 'quiz') {
        const key = `${si}-${ii}`;
        if (qd[key] && Array.isArray(qd[key]) && qd[key].length > 0) {
          present.push(key);
        } else {
          missing.push({ key, section: sec.title, title: it.title });
        }
      }
    });
  });
  results.push({ slug, present: present.length, missing });
}

console.log('\n=== QUIZ AUDIT ===\n');
let totalMissing = 0;
for (const r of results) {
  const missCount = r.missing.length;
  totalMissing += missCount;
  const marker = missCount === 0 ? 'OK' : `MANGLER ${missCount}`;
  console.log(`[${marker}] ${r.slug} — ${r.present} quizzer OK`);
  for (const m of r.missing) {
    console.log(`    - ${m.key}  (sektion: ${m.section}) — ${m.title}`);
  }
}
console.log(`\nI alt manglende: ${totalMissing}`);
