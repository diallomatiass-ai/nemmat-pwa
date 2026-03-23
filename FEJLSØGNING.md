# Fejlsøgning & Metoder — nemmat-pwa

Dokumentation af alle metoder brugt til at finde og rette fejl i projektet.

---

## METODE 1: Tæl lektioner vs ytIds per curriculum

**Hvornår:** Verificer at alle lektioner har en YouTube-video tilknyttet.

**Kommando (node):**
```js
const fs = require('fs');
const code = fs.readFileSync('app.js', 'utf8');

const curricula = ['TAL_ALGEBRA_CURRICULUM', 'PROCENT_CURRICULUM', ...];
for (const name of curricula) {
  const start = code.indexOf('const ' + name);
  const end = code.indexOf('\nconst ', start + 10);
  const section = code.slice(start, end);
  const lessons = (section.match(/type: 'lesson'/g) || []).length;
  const ytIds  = (section.match(/ytId:/g) || []).length;
  console.log(lessons === ytIds ? '✅' : '❌', name, lessons, ytIds);
}
```

**Hvad den finder:**
- Lektioner uden ytId (manglende video)
- Quiz-items der fejlagtigt har fået et ytId

**Resultat her:** Opdagede at en quiz i TAL_ALGEBRA havde ytId (normalt forkert), og at scriptet kun tæller korrekt når quiz-items IKKE har ytIds.

---

## METODE 2: Sammenlign med nemmat.dk — tæl lektioner

**Hvornår:** Verificer at antallet af lektioner i app.js matcher det rigtige antal på nemmat.dk.

**Fremgangsmåde:**
1. Åbn kursussiden: `agent-browser open "https://nemmat.dk/courses/SLUG"`
2. Klik Lektioner-tab: `agent-browser eval 'document.querySelectorAll("[role=tab]")[1]?.click()'`
3. Læs antal: `agent-browser eval 'document.body.innerText.match(/(\d+ (?:Sections?|Lessons?))/g)?.join(", ")'`

**Resultat her:** Opdagede at PROCENT-kurset har 12 lektioner på nemmat.dk men kun 11 i app.js → manglede "Teori – Renteformlen".

---

## METODE 3: Find den manglende lektions URL via DOM

**Hvornår:** Når en specifik lektion er identificeret som manglende, find dens URL.

**Fremgangsmåde:**
```js
// I agent-browser eval:
const items = Array.from(document.querySelectorAll('[class*="curriculum"] [class*="item"] a, .tutor-course-topic-list a'));
const renteItem = items.find(el => el.textContent.includes('Renteformlen'));
JSON.stringify({ href: renteItem?.href, text: renteItem?.textContent });
```

**Resultat her:** Fandt `https://nemmat.dk/courses/procent-og-rentesregning/lektion/teori-renteformlen/`

---

## METODE 4: Udtræk YouTube-ID fra lektionsside

**Hvornår:** Når lektionens URL er kendt — hent YouTube embed-ID.

**Kommando:**
```js
// I agent-browser eval:
const html = document.documentElement.innerHTML;
const match = html.match(/youtube\.com\/embed\/([a-zA-Z0-9_-]{11})|youtu\.be\/([a-zA-Z0-9_-]{11})/);
match ? (match[1] || match[2]) : 'INGEN VIDEO'
```

**Resultat her:** Fandt ytId `-Oi_Zdg7rF8` for Renteformlen.

---

## METODE 5: Verificer quiz-svar matematisk (manuel gennemgang)

**Hvornår:** Tjek at alle svar (`ans:`) i QUIZ_DATA er matematisk korrekte.

**Fremgangsmåde:** Læs hvert spørgsmål og regn svaret ud manuelt. Tjek at `ans` peger på korrekt index i `opts`-array.

**Hvad man kigger efter:**
- `ans: N` hvor `opts[N]` ikke er det rigtige svar
- Duplikate valgmuligheder (to identiske strenge i `opts`)
- Off-by-one fejl (0-indekseret)

**Eksempel på fejl fundet:**
```js
// BUG: index 0 og 1 er identiske
opts: ['$5x - 9$', '$5x - 9$', '$11x - 9$', '$5x - 15$'], ans: 0

// RETTET: index 1 er nu et forkert (men distinkt) svar
opts: ['$5x - 9$', '$5x + 9$', '$11x - 9$', '$5x - 15$'], ans: 0
```

**Kurser gennemgået:** Vektorer, Tal og Algebra, Ligninger, Procent, Lineær, Eksponentielle, Geometri, Statistik, Sandsynlighed, Logaritme, Andengrads, Differentialregning.

---

## METODE 6: Grep efter lektioner uden ytId

**Hurtig kommando til fremtidig brug:**
```bash
# Find alle lesson-linjer uden ytId (ekskl. placeholders)
grep -n "type: 'lesson'" app.js | grep -v "ytId" | grep -v "Kommer snart" | grep -v "currentCourse"
```

**Forventet output:** Tomt (ingen manglende ytIds).

---

## FUNDNE OG RETTEDE FEJL

| # | Fil | Problem | Løsning |
|---|---|---|---|
| 1 | `app.js` PROCENT_CURRICULUM | Manglede "Teori – Renteformlen" (lektion 6.1) | Tilføjet med `ytId: '-Oi_Zdg7rF8'` |
| 2 | `app.js` TAL_ALGEBRA quiz `'7-0'` | Duplikat option: `$5x - 9$` på index 0 og 1 | Rettet index 1 til `$5x + 9$` |
| 3 | `app.js` LOG quiz `'1-1'` | Duplikat option: `6` på index 1 og 3 | Rettet index 3 til `3` |

---

## FREMTIDIG TJEKLISTE

Når nye kurser eller lektioner tilføjes:
- [ ] Kør Metode 1 (tæl lektioner vs ytIds)
- [ ] Kør Metode 2 (sammenlign med nemmat.dk)
- [ ] Kør `node --check app.js` (syntakstjek)
- [ ] Gennemgå nye quiz-spørgsmål matematisk (Metode 5)
- [ ] `git commit` med beskrivende besked
