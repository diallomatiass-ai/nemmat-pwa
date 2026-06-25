# Supabase-opsætning for NemMat

Følg disse trin. Tager ca. 5 minutter.

## 1. Opret projekt
1. Gå til https://supabase.com → log ind / opret gratis konto.
2. **New project** → vælg organisation, navn fx `nemmat`, vælg en stærk database-adgangskode (gem den), region: **Frankfurt (eu-central-1)**.
3. Vent ~2 min til projektet er klar.

## 2. Kør skemaet
1. I venstre menu: **SQL Editor** → **New query**.
2. Åbn `supabase/schema.sql` (i dette repo), kopiér ALT, indsæt, tryk **Run**.
3. Du skal se "Success. No rows returned".

## 3. Find dine nøgler (dem giver du til mig)
1. Venstre menu: **Project Settings** (tandhjul) → **API**.
2. Kopiér:
   - **Project URL** (fx `https://abcxyz.supabase.co`)
   - **anon public** key (lang `eyJ...`-streng — denne er offentlig og må ligge i frontend)
3. **service_role**-keyen skal du IKKE dele eller lægge i frontend — den er hemmelig.

## 4. Slå email-bekræftelse fra (valgfrit, men nemmest til start)
- **Authentication → Providers → Email** → slå **Confirm email** FRA, så konti virker med det samme uden email-link.
- (Kan slås til igen senere.)

## 5. Lav din admin-konto
1. Når frontend er klar (Fase 1), opretter du en konto med din email via appen.
2. Derefter i **SQL Editor**, kør (med din email):
   ```sql
   update public.profiles set role='admin', membership='pro'
   where email = 'DIN-ADMIN-EMAIL@eksempel.dk';
   ```

---

### Det jeg har brug for fra dig for at fortsætte:
- **Project URL**
- **anon public** key
- Hvilken **email** du vil bruge som admin

Så lægger jeg nøglerne i `supabase-config.js` og bygger auth-laget.
