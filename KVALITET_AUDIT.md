# NemMat - kvalitets-audit (2026-06-29)

Fuld gennemgang af alle quiz-data: struktur-tjek (automatisk) + matematisk
korrekthed af facit (13 parallelle agenter gennemregnede alle 1148 spilbare
spørgsmål). Nedenfor er ALT der blev fundet, og hvad der er rettet.

---

## 1. RETTEDE forkerte facit (15 spørgsmål)

Rettet direkte i `nemmat-scraped.js` (det rigtige svar fandtes blandt
svarmulighederne, så facit er flyttet til den korrekte mulighed).

| qid | Kursus | Spørgsmål | Var markeret | Rettet til |
|---|---|---|---|---|
| 26786 | geometri-og-trigonometri | cos(53,1) på enhedscirklen | 0,65 | **0,6** (3-4-5-trekant) |
| 26924 | lineaer-funktioner-hf-c | f(x)=x+10, bestem a | a=0 | **a=1** |
| 39118 | funktioner-b-niveau-hf | stykvis f, f(3) (x>0: -x+4) | f(3)=2 | **f(3)=1** |
| 44580 | funktioner-b-niveau-hf | er x=1 løsning til x²+3x-4=ln(x)? | nej | **ja** (0=0) |
| 30498 | andengradspolynomier-hf-b | toppunkt (1,5), bestem b,c | b=-4, c=7 | **b=4, c=-7** |
| 30949 | analytisk-plan-geometri-hf-b | y=2x-3 → ax+by+c=0 | c=3 | **c=-3** |
| 45367 | differentialregning-hf-b | nulpunkter for 1,5^x-3x+6 | 6,316 og 4,936 | **6,316 og 3,240** |
| 31337 | differentialregning-hf-b | fortegn på f'(30), logistisk vækst | negativ (falder) | **positiv (vokser)** |
| 26448 | deskriptiv-statistik | middelværdi af 7 tal (=12,86) | 13,5 | **13** |
| 26458 | deskriptiv-statistik | gennemsnit af 10 karakterer (=7,0) | 7,5 | **7,0** |
| 26903 | sandsynlighedsregning | valg fra A(7)&B(5) eller A(7)&C(9) | 80 | **98** (7·5+7·9) |
| 31084 | sandsynlighedsregning-og-statistik-hf-b | E(Y) (=3,95) | 3 | **4** |
| 31086 | sandsynlighedsregning-og-statistik-hf-b | Var(Y) (=9,15) | 10,05 | **9,10** |
| 31206 | sandsynlighedsregning-og-statistik-hf-b | er 25 exceptionelt, b(100;0,5)? | nej | **ja** (5σ væk) |
| 37131 | potens-funktioner-hf-b | f(150) for 1,3354·x^0,5124 | 9,91 | **16,43** |

---

## 2. FORKERTE facit RETTET via svar-tekst (10 spørgsmål)

Her var det markerede svar matematisk forkert, OG det rigtige svar fandtes ikke
blandt svarmulighederne. Løst ved at rette selve svar-tekstens værdi (alle
værdier gennemregnet og verificeret numerisk før ændring).

| qid | Kursus | Rettelse |
|---|---|---|
| 31161 | sandsynlighedsregning-og-statistik-hf-b | "Højst 12" P(X≤12): 85,35% (var P(X≥12)) → **25,07%** |
| 31252 | sandsynlighedsregning-og-statistik-hf-b | P(X≤9) b(20;0,5): 0,2517 (var P(X≤8)) → **0,4119** |
| 31211 | sandsynlighedsregning-og-statistik-hf-b | n,p for cappuccino (12 typer): p=0,40 → **p≈0,083** (1/12) |
| 43655 | analytisk-plan-geometri-hf-b | cirkel m. diameter A(2,-2)B(2,4): centrum (-2,1) → **(x-2)²+(y-1)²=9** |
| 31017 | analytisk-plan-geometri-hf-b | tangent gennem P(3,9): y=-0,75x+15,75 → **y=-0,75x+11,25** |
| 44494 | differentialregning-hf-b | f(2) for 3t²+2t+5: 45 → **21** |
| 44898 | andengradspolynomier-hf-b | 2(x-1)(x+2): 2x²+2x+4 → **2x²+2x-4** (fortegn på c) |
| 26456 | deskriptiv-statistik | gennemsnit: 65 → **60,71** |
| 37111 | potens-funktioner-hf-b | lysforurening a,b: a=-0,3583,b=2340 → **a≈-0,95, b≈1549** |
| 37116 | potens-funktioner-hf-b | 15% mere lys → % færre: 4,88% → **12,48%** |

**I alt 25 forkerte facit rettet** (15 i afsnit 1 + 10 her).

---

## 3. STRUKTUR-fejl rettet (dublet-svarmuligheder)

10 spørgsmål havde identiske svarmuligheder (skrabe-artefakt). Dubletter er
fjernet og facit-indeks reindekseret. Vigtigst: **qid 31251** havde det RIGTIGE
svar stående to gange, hvor kun den ene var markeret korrekt - en elev der valgte
den "anden" identiske mulighed blev talt forkert. Nu fjernet.

Berørte: 25025, 25150, 28354, 28370, 25710, 30359, 30445, 30764, 31251, 31253.

---

## 4. Mistænkelig opgavetekst (kilde-data, gennemgå manuelt)

Ikke facit-fejl, men opgaveteksten/tabellen ser korrupt ud (svarsættet passer
ikke til de opgivne tal) - sandsynligvis transskriberingsfejl fra nemmat.dk:

- **annuitetsregning:** qid 37213, 37227, 37233 (rente/lånebeløb passer ikke).
- **andengradspolynomier-hf-b:** qid 30615, 30633 (regressionstabel matcher ikke).
- **Tvetydig ordlyd:** qid 30642, 30764, 30966, 31070, 44907, 42149, 45534.

---

## 5. Udfyld-selv-spørgsmål (44 stk) - NU UNDERSTØTTET

44 "fill-in-blanks"-spørgsmål blev tidligere udeladt (kun 1 "svarmulighed" med
`{{FIB_id}}`-pladsholdere og `ans=-1`). De er nu **re-scrapet** fra nemmat.dk:
hver blank har fået sit facit (`fib.blanks[].correct`), og der er bygget en ægte
udfyld-selv-UI (inputfelter i opgaven, "Tjek svar", facit vist ved fejl).
Scoring: alle felter rigtige = korrekt (ufølsom for mellemrum/store bogstaver/$).
Quiz-editoren viser dem som skrivebeskyttede, så de ikke kan ødelægges ved gem.
(qid 31307 havde én defekt blank i kilden - facit "aftagende" udfyldt manuelt.)

---

## Metode

- Struktur-tjek: deterministisk scan (svar uden for rækkevidde, tomme/dublet-svar,
  manglende tekst).
- Facit-tjek: 1148 spilbare spørgsmål delt i 13 batches, hver gennemregnet af en
  selvstændig agent med konservativ regel (flag kun SIKRE fejl; spring
  figur-afhængige og rene begrebsspørgsmål over).
- Figur/graf-afhængige spørgsmål uden vedlagt figur kunne ikke verificeres.
