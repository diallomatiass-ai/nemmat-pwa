# NemMat PWA — 1:1 Rebuild Plan

Baseret på grundig gennemgang af nemmat.dk med Playwright screenshots, HTML-udtræk og CSS-analyse.

---

## BEKRÆFTEDE DESIGN-VÆRDIER (fra nemmat.dk kildekode)

### Farver
```
--lp-primary-color:    #356df1   ← blå (h1, links, chevrons, knap-bg)
--lp-secondary-color:  #082645   ← mørkeblå (hover)
Grøn:                  #29CC57   ← knapper (border + tekst)
Header baggrund:       #d6e4f7   ← lys blå/lavendel (bekræftet fra screenshots)
Footer baggrund:       #d6e4f7   ← samme lys blå
Body tekst:            #444444
Titler:                #444444 (mørk) / #356df1 (blå h1)
Border:                #ddd / #e4e4e4
Hvid:                  #ffffff
```

### Typografi
```
Overskrifter:  Poppins, 600
Brødtekst:     Inter, 400
h1:            48px, #356df1, Poppins 600
h2:            28px
Body:          16px, #444444, Inter
```

### Knapper
```
"Start Kursus":    width:100%, bg:#fff, border:2px solid #29CC57, color:#29CC57, radius:10px, padding:~14px
"Køb Medlemskab":  width:auto, bg:#fff, border:2px solid #29CC57, color:#29CC57, radius:10px, padding:11px 20px
"Opret konto":     bg:#356df1, color:#fff, radius:8px, padding:10px 22px
```

---

## SIDER OG SCREENS I APPEN

### Screen 1: Kursussiden (= nemmat.dk/courses/vektorer-i-planen-stx-a)

**Layout top→bund:**
1. Header
2. Vektor-illustration billede (fra nemmat.dk)
3. H1 "Vektorer 2D(planen)" — blå, 48px
4. Tab: "Beskrivelse" (blå, bold)
5. Beskrivelsestekst med bold bullet-liste
6. "Start Kursus" knap (grøn outline, fuld bredde)
7. "Køb Medlemskab" knap (grøn outline, lille)
8. "Lektioner" bold heading + `<hr>`
9. Curriculum-liste (13 sektioner, accordion)
10. Footer

### Screen 2: Lektion/Quiz (= lesson viewer)

**Layout:**
- Top bar: ← blå cirkel + kursustitel (fed) + søgefelt
- Split-layout desktop:
  - VENSTRE sidebar (430px): curriculum-liste
    - Sektion: chevron ∨ + titel (bold) + antal (blå, højre)
    - Lektion-item: dokument/quiz ikon + titel (blå link) + lås ikon + varighed
    - Aktiv sektion: lys blå baggrund på sektion-header
  - HØJRE content: lektionsindhold (video/tekst/quiz)
- Bottom bar: "Next →" + næste lektions titel
- Sidebar kan foldes ind (← knap midt på sidebar-kant)

---

## ALLE 13 SEKTIONER (rigtige data fra nemmat.dk)

```json
[
  { "title": "1. Motivation on Indledning",
    "desc": "Indføring af position og retning i et koordinatsystem",
    "items": [
      { "title": "Teori – Vektor som en bevægelse", "type": "lesson", "dur": "4 min" }
    ]
  },
  { "title": "2. Hvad må jeg med Vektorer",
    "desc": "Regning med vektor",
    "items": [
      { "title": "Teori – Skalering, Modsat og Længde", "type": "lesson", "dur": "5 min" },
      { "title": "Test dig selv", "type": "quiz", "dur": "7 spørgsmål" }
    ]
  },
  { "title": "3. Fra Punkter til Vektorer samt addition og subtraktion",
    "desc": "Omdannelse af punkter til vektor",
    "items": [
      { "title": "Teori – Fra punkter til vektorer", "type": "lesson", "dur": "5 min" },
      { "title": "Teori – Addition og subtraktion", "type": "lesson", "dur": "4 min" },
      { "title": "Test dig selv med addition subtraktion om punkter til vektorer", "type": "quiz", "dur": "12 spørgsmål" }
    ]
  },
  { "title": "4. SkalarProdukt (Prikprodukt)",
    "desc": "Sammenhæng mellem vinkler og at prikke vektorer sammen",
    "items": [
      { "title": "Vinkler og vektorer", "type": "lesson", "dur": "3 min" },
      { "title": "Skalarprodukt", "type": "lesson", "dur": "5 min" },
      { "title": "Test dig selv med skalarprodukt", "type": "quiz", "dur": "7 spørgsmål" }
    ]
  },
  { "title": "5. Ortogonale vektorer og Skalarprodukt",
    "desc": "",
    "items": [
      { "title": "Teori – At afgøre om vektorer er vinkelret med skalarprodukt", "type": "lesson", "dur": "3 min" },
      { "title": "Test dig selv om ortogonale vektorer", "type": "quiz", "dur": "5 spørgsmål" }
    ]
  },
  { "title": "6. Bestemmelse af vinkel mellem vektorer",
    "desc": "",
    "items": [
      { "title": "Teori – Eksempel på bestemmelse af vinkel mellem to vektorer", "type": "lesson", "dur": "5 min" },
      { "title": "Test dig selv med bestemmelse af vinkel ml. vektorer", "type": "quiz", "dur": "5 spørgsmål" }
    ]
  },
  { "title": "7. Projektion af vektor på vektor",
    "desc": "",
    "items": [
      { "title": "Teori – projektion", "type": "lesson", "dur": "4 min" },
      { "title": "Teori – længden af projektion", "type": "lesson", "dur": "3 min" },
      { "title": "Test din forståelse af projektion formlerne", "type": "quiz", "dur": "4 spørgsmål" }
    ]
  },
  { "title": "8. Determinanter",
    "desc": "",
    "items": [
      { "title": "Teori – Tværvektor og Determinanter", "type": "lesson", "dur": "6 min" },
      { "title": "Test dig selv med definition af determinanter", "type": "quiz", "dur": "4 spørgsmål" },
      { "title": "Teori – Anvendelse af Determinant", "type": "lesson", "dur": "4 min" },
      { "title": "Teori – Formlerne til bestemmelse af parallelitet og vinkel", "type": "lesson", "dur": "3 min" },
      { "title": "Teori – Eksempel på parallelitet", "type": "lesson", "dur": "4 min" },
      { "title": "Test dig selv med Areal, Vinkler og Parallelitet", "type": "quiz", "dur": "6 spørgsmål" }
    ]
  },
  { "title": "9. Linjen i planen",
    "desc": "linjens ligning og linjens parameterfremstilling",
    "items": [
      { "title": "Teori – Linjens ligning og parameterfremstilling", "type": "lesson", "dur": "6 min" },
      { "title": "Eksempel på linjen med vektorer", "type": "lesson", "dur": "4 min" },
      { "title": "Test dig selv med at skifte fra ligning til parameterfremstilling", "type": "quiz", "dur": "6 spørgsmål" }
    ]
  },
  { "title": "10. Linjens ligning givet et punkt og normalvektor",
    "desc": "",
    "items": [
      { "title": "Bestemmelse af linjens ligningen med et givent punkt og normalvektor", "type": "lesson", "dur": "3 min" },
      { "title": "Test din forståelse", "type": "quiz", "dur": "4 spørgsmål" }
    ]
  },
  { "title": "11. Vinkel mellem Linjer",
    "desc": "",
    "items": [
      { "title": "Teori – Vinkel mellem to linjer", "type": "lesson", "dur": "5 min" },
      { "title": "Test dig selv med vinkler mellem to linjer", "type": "quiz", "dur": "3 spørgsmål" }
    ]
  },
  { "title": "12. Cirklen",
    "desc": "",
    "items": [
      { "title": "Cirklens parameterfremstilling", "type": "lesson", "dur": "4 min" },
      { "title": "Skæring mellem linjen (parameterfremstilling) og cirklens ligning", "type": "lesson", "dur": "7 min" },
      { "title": "Skæring mellem linjens ligning og cirklens ligning", "type": "lesson", "dur": "4 min" },
      { "title": "Test dig selv om cirkler og dens skæring med linjen", "type": "quiz", "dur": "6 spørgsmål" }
    ]
  },
  { "title": "13. Eksamensforberedelse",
    "desc": "",
    "items": [
      { "title": "Skriftlighed (Delprøve 1)", "type": "quiz", "dur": "50 spørgsmål" },
      { "title": "Skriftlighed (Delprøve 2)", "type": "quiz", "dur": "31 spørgsmål" }
    ]
  }
]
```

---

## HVAD DER SKAL BYGGES (trin-for-trin)

### Trin 1 — Header (lys blå)
- `background: #d6e4f7`
- Logo: `<img src="logo.webp">` (downloadet)
- Nav: Gymnasium | Institutioner | Private og Forældre | Om os | Kontakt
- Højre: "Log ind" tekst-link + "Opret konto" blå knap
- Mobil: Logo øverst, hamburger (≡) under, Log ind + Opret konto

### Trin 2 — Kursusside
- Vektor-illustration centered (download fra nemmat.dk)
- H1 blå "Vektorer 2D(planen)"
- Beskrivelse-tab med al tekst (fra HTML-udtræk)
- "Start Kursus" + "Køb Medlemskab" grønne outline-knapper
- "Lektioner" heading + hr
- Curriculum accordion (13 sektioner)

### Trin 3 — Lektion-viewer (split-layout)
- Top bar: ← + kursustitel + søgefelt
- Sidebar (430px): sektioner med items
- Content-area: video/tekst placeholder
- Bottom bar: Next →
- Sidebar fold-knap

### Trin 4 — Footer
- `background: #d6e4f7`
- 4 kolonner: Logo stor | Adresse | Kontakt | NemMat-links
- Adresse: Sønder Boulevard 108, 1720 Kbh V
- Kontakt: 50435078 / info@nemmat.dk
- Links: Om NemMat, Privatpolitik, Handelsbetingelser

### Trin 5 — Mobil bottom nav (app-specifik)
- Kursus | Profil
- Erstatter desktop-nav på mobil

### Trin 6 — PWA (manifest + sw)
- Allerede på plads — justér theme-color til `#d6e4f7`

---

## HVAD INDHOLDET MANGLER (Kofi skal levere)
- Videoer (YouTube/Vimeo embed URLs per lektion)
- Quiz-spørgsmål (tekst + svarmuligheder + korrekt svar)
- Lektionstekst/noter per lektion

Strukturen i `app.js` COURSE-objekt er klar til at modtage det.

---

## STATUS
- [x] Plan skrevet
- [ ] Header rebuilt
- [ ] Kursusside rebuilt
- [ ] Lektion-viewer rebuilt
- [ ] Footer rebuilt
- [ ] Mobil testet
