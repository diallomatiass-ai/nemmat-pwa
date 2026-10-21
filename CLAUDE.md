# NemMat PWA

Statisk progressiv webapp med quizzer og kursusindhold: `index.html`, `app.js`, `style.css` og service workeren `sw.js`. Login og fremskridt går gennem Supabase. Sitet ligger på Vercel.

## Kør lokalt
```
python3 -m http.server 8000
```
Åbn http://localhost:8000. Der er ingen build og ingen tests i repoet.

## Arbejdsregler
- Hæv `CACHE_NAME` i `sw.js` ved hver ændring af en fil, der ligger i `PRECACHE`. Ellers ser brugerne den gamle udgave.
- Repoet er offentligt. Ingen hemmeligheder, ingen persondata og ingen logins.
- `supabase-config.js` må kun indeholde den offentlige publishable-nøgle, aldrig en secret-nøgle. Data beskyttes af reglerne for rækkeadgang i `supabase/schema.sql`.
- Quiz-indholdet ligger i `nemmat-scraped.js`. Hvor data og fejl ligger, og hvordan projektet overdrages, står i `HANDOVER.md`.
- Workflowet `supabase-keepalive.yml` holder Supabase-projektet vågent.
