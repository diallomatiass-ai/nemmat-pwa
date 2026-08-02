# Gap-analyse: nemmat.dk vs. PWA (2026-08-02)

Kilde: `https://nemmat.dk/wp-json/wp/v2/lp_course` (102 publicerede kurser).
PWA'en dækker i dag 19 unikke kilde-kurser (via SCRAPED_SLUG_MAP + håndskrevne fallbacks).
**83 kurser mangler.** Feedbacken "mangler 1-års kurser og HHX findes ikke" er bekræftet.

## Manglende pr. kategori

| Kategori | På nemmat.dk | Mangler i appen |
|---|---|---|
| HF-C/basis | 21 | 10 (mest beviser/mundtlighed + brobygning) |
| HF/B-niveau | 15 | 7 (beviser-kurser + sandstat-b-gym) |
| STX 1. år | 11 | **11 (alle)** |
| STX 2. år | 8 | **8 (alle)** |
| STX/A-niveau | 19 | **19 (alle)** |
| HHX (C+B+A) | 24 | **24 (alle)** |
| Gratis/prøv | 4 | 4 (alias-varianter af eksisterende) |

Bemærk: Appens nuværende STX-C- og HHX-C-menuer viser HF-C-indhold via fallback -
de reelle STX-/HHX-kurser fra kilden er aldrig hentet.

## Vigtige noter til hentning

- WP REST er åbent: `wp/v2/lp_course` giver id/slug/titel/`modified` (brug `modified`
  til inkrementel synk). `lp/v1/courses` giver beskrivelser m.m.
- Quiz-facit kræver stadig login + enrollment pr. kursus (start-quiz + submit-quiz
  med GLOBAL nonce - se memory `nemmat-quiz-progress.md`).
- Simply.com har bot-challenge på almindelige HTTP-klienter (HTTP 454/455) -
  al hentning skal ske gennem agent-browser (challenge-cookie) eller fra WP/DB direkte.
- STRATEGI-BESLUTNING: Diallo får sourcekoden + DB til nemmat.dk snart - derfor
  hentes de 83 manglende kurser via DB/WP-adgang (robust), ikke via scraping.

## Fuld liste (mangler = MGL)

Kør analysen igen: hent kursuslisten via WP REST og sammenlign med SCRAPED_SLUG_MAP-værdierne i app.js.
