# NemMat PWA - overdragelse & backend-adgang

Denne fil forklarer (1) hvor data og fejl ligger, og (2) hvordan projektet
overdrages til ejeren af nemmat.dk, så han selv kan ændre i alt.

---

## 1. Hvor ligger indholdet og de fundne fejl?

### Quiz-data
Alt quiz-indhold ligger i **`nemmat-scraped.js`** som ét stort JavaScript-objekt:

```
window.SCRAPED_QUIZZES = {
  "<kursus-slug>": [
    { key: "<quiz-nøgle>", title: "...", questions: [
        { qid: 25670, type: "...", q: "...", content: "...",
          opts: [...], ans: 2,            // enkelt-valg: indeks på rigtigt svar
          corrects: [0,3],               // multi-select: indeks på alle rigtige
          fib: { template, blanks },     // udfyld-selv: skabelon + facit
          ytId: "..." }                  // forklarings-video
    ]}
  ]
}
```

**Hvert spørgsmål har et unikt `qid`-nummer.** For at finde et bestemt spørgsmål:
søg i filen efter `"qid":25670`.

### De rettede/fundne fejl
Den fulde liste er i **`KVALITET_AUDIT.md`** - hvert punkt har `qid` + kursus +
hvad der var galt + rettelsen. Eksempel: fejlen "cos(53,1)=0,65" findes ved at
søge `"qid":26786` i `nemmat-scraped.js`.

### Hvor i koden hvad sker
- `app.js` - hele appen (visning, quiz-logik, admin-panel).
- `auth.js` - login/konto/admin via Supabase.
- `supabase/schema.sql` - databasestrukturen (kør i Supabase ved opsætning).
- `KVALITET_AUDIT.md` - rapport over alle data-fejl.

---

## 2. De tre "backends" - og hvordan ejeren får adgang

### A) Daglig drift = admin-panelet i appen (INGEN kode nødvendig)
Det meste laver ejeren direkte i appen:
**Log ind → "Min konto" → "⚙️ Admin-panel".** Der kan han:
- Se alle brugere + deres fremgang.
- Skifte medlemskab (Gratis / Basis / Pro) og rolle (Bruger / Admin).
- **Quiz-editor:** rette spørgsmål, svar, markere rigtige svar (også multi-select),
  og indsætte forklarings-videoer. Gemmes live for alle elever.
- **Lektion-videoer:** tilføje/rette forklaringsvideoer pr. lektion.

**Sådan gør du ham til admin:**
1. Bed ham oprette en konto i appen (eller opret den for ham).
2. I Supabase → SQL Editor, kør:
   ```sql
   update public.profiles set role='admin', membership='pro'
   where email='HANS-EMAIL';
   ```
   (Eller, hvis du selv er admin: gør det fra admin-panelets rolle-dropdown.)

### B) Database + login = Supabase (her bor data og brugere)
Projektet: `kkipmxxgfgeyjyjqruui` (https://kkipmxxgfgeyjyjqruui.supabase.co).
Her ligger: brugere, profiler, fremgang, quiz-/video-rettelser, RLS-regler.

**Giv ham adgang - vælg én:**
- **Overdrag projektet:** Supabase dashboard → projektet → Settings →
  General → "Transfer project" til hans egen organisation. (Kræver han har en
  Supabase-konto/organisation.)
- **Eller tilføj ham som medlem:** Organization → Team / Members → Invite,
  med rollen Owner eller Administrator.

Vigtigt om nøgler:
- `anon`/publishable-nøglen i `supabase-config.js` er offentlig og ufarlig
  (alt er beskyttet af RLS).
- `service_role`-nøglen (i Supabase-dashboardet) er hemmelig - del den ALDRIG
  offentligt og læg den aldrig i GitHub.

### C) Kode + hosting = GitHub + Vercel
- **GitHub** (kildekode): `github.com/diallomatiass-ai/nemmat-pwa`.
  Overdrag: repo → Settings → "Transfer ownership" til hans GitHub-bruger,
  ELLER tilføj ham: Settings → Collaborators → Add people.
- **Vercel** (hosting, https://nemmat-pwa.vercel.app):
  Project Settings → enten "Transfer" til hans Vercel-konto, eller inviter ham
  til teamet (Settings → Members). Han kan så selv deploye (`vercel --prod`)
  eller bare lade Vercel auto-deploye ved push til GitHub.
- **Domæne:** hvis det skal ligge på hans eget domæne, tilføjes det i
  Vercel → Project → Settings → Domains.

---

## 3. Hurtig tjekliste til fuld overdragelse

- [ ] GitHub-repo overdraget/delt med hans bruger.
- [ ] Vercel-projekt overdraget/delt (så deploys er hans).
- [ ] Supabase-projekt overdraget eller han tilføjet som Owner.
- [ ] Hans app-konto sat til `role='admin'`.
- [ ] (Valgfrit) kør `supabase/schema.sql` igen for nyeste funktioner.
- [ ] Han har læst denne fil + `KVALITET_AUDIT.md`.

Når A+B+C er overdraget, ejer han alt: indhold (via admin-panel), data/login
(Supabase) og kode/hosting (GitHub + Vercel).
