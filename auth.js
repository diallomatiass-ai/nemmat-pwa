// ── NemMat auth-lag (Supabase) ──────────────────────────────
// Selvstændigt modul. Eksponerer window.Auth. Hvis supabase-js ikke
// kunne loades (offline), kører appen videre i localStorage-only-tilstand.
(function () {
  const cfg = window.NEMMAT_SUPABASE || {};
  let client = null;
  try {
    if (window.supabase && cfg.url && cfg.key) {
      client = window.supabase.createClient(cfg.url, cfg.key, {
        auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true },
      });
    }
  } catch (e) { console.warn('[auth] Supabase init fejlede:', e); }

  const Auth = {
    client,
    available: !!client,
    user: null,
    profile: null,

    isLoggedIn() { return !!this.user; },
    isAdmin() { return !!(this.profile && this.profile.role === 'admin'); },
    membership() { return this.profile ? this.profile.membership : 'none'; },
    displayName() {
      return (this.profile && this.profile.full_name)
        || (this.user && this.user.email) || '';
    },

    async _loadProfile() {
      if (!client || !this.user) { this.profile = null; return; }
      try {
        const { data } = await client.from('profiles').select('*').eq('id', this.user.id).single();
        // Overskriv KUN ved et rigtigt resultat — en netop oprettet profil kan
        // lagge bag PostgREST, og et null-svar må ikke nulstille en kendt profil.
        if (data) this.profile = data;
        else if (!this.profile) this.profile = null;
      } catch (e) { if (!this.profile) this.profile = null; }
    },

    // Opretter brugeren via DB-funktion (springer GoTrue email-bekræftelse +
    // free-tier rate-limit over) og logger ind med det samme.
    async signUp({ name, email, password, examLevel }) {
      if (!client) throw new Error('Online-funktioner er ikke tilgængelige lige nu.');
      const { data, error } = await client.rpc('signup', {
        p_email: (email || '').trim(), p_password: password, p_name: name, p_level: examLevel,
      });
      if (error) throw error;
      if (data && data.error) throw new Error(data.error);
      const { error: e2 } = await client.auth.signInWithPassword({ email: (email || '').trim(), password });
      if (e2) throw e2;
      // Optimistisk profil (den lige oprettede række kan lagge bag PostgREST)
      if (this.user) {
        this.profile = { id: this.user.id, email: this.user.email, full_name: name,
          exam_level: examLevel || 'HF', role: 'user', membership: 'none' };
      }
      return { needsConfirmation: false };
    },

    async signIn(email, password) {
      if (!client) throw new Error('Online-funktioner er ikke tilgængelige lige nu.');
      const { data, error } = await client.auth.signInWithPassword({ email, password });
      if (error) throw error;
      // Hent profilen FØR vi vender tilbage, så konto-siden ikke kortvarigt viser
      // "Gratis"/intet admin-link mens profilen lagger ind asynkront.
      this.user = data.user || this.user;
      await this._loadProfile();
    },

    async signOut() { if (client) await client.auth.signOut(); },

    async deleteAccount() {
      if (!client || !this.user) throw new Error('Du skal være logget ind.');
      const { error } = await client.rpc('delete_own_account');
      if (error) throw error;
      await client.auth.signOut();
    },

    async resetPassword(email) {
      if (!client) throw new Error('Online-funktioner er ikke tilgængelige lige nu.');
      const { error } = await client.auth.resetPasswordForEmail(email, { redirectTo: window.location.origin });
      if (error) throw error;
    },

    async updatePassword(newPassword) {
      if (!client) throw new Error('Online-funktioner er ikke tilgængelige lige nu.');
      const { error } = await client.auth.updateUser({ password: newPassword });
      if (error) throw error;
    },

    async updateProfile({ full_name, exam_level }) {
      if (!client || !this.user) throw new Error('Du skal være logget ind.');
      const patch = {};
      if (full_name != null) patch.full_name = full_name;
      if (exam_level != null) patch.exam_level = exam_level;
      const { error } = await client.from('profiles').update(patch).eq('id', this.user.id);
      if (error) throw error;
      // Skrivningen lykkedes (ellers kastet) → opdatér lokal profil direkte.
      // Vi re-reader IKKE, da PostgREST kan returnere en stale værdi lige efter skriv.
      if (this.profile) Object.assign(this.profile, patch);
    },

    async loadProgressKeys() {
      if (!client || !this.user) return [];
      try {
        const { data } = await client.from('progress').select('lesson_key').eq('user_id', this.user.id);
        return (data || []).map(r => r.lesson_key);
      } catch (e) { return []; }
    },

    async markProgress(key) {
      if (!client || !this.user) return;
      try {
        await client.from('progress').upsert(
          { user_id: this.user.id, lesson_key: key }, { onConflict: 'user_id,lesson_key' });
      } catch (e) { /* offline — localStorage holder den, merges ved næste login */ }
    },

    async uploadLocalProgress(keys) {
      if (!client || !this.user || !keys.length) return;
      try {
        const rows = keys.map(k => ({ user_id: this.user.id, lesson_key: k }));
        await client.from('progress').upsert(rows, { onConflict: 'user_id,lesson_key' });
      } catch (e) {}
    },

    // ── ADMIN (Fase 2) ──
    async adminListUsers() {
      if (!client || !this.isAdmin()) return [];
      const { data } = await client.from('profiles').select('*').order('created_at', { ascending: false });
      return data || [];
    },
    async adminSetMembership(userId, membership) {
      if (!client || !this.isAdmin()) throw new Error('Kun admin.');
      const { error } = await client.from('profiles').update({ membership }).eq('id', userId);
      if (error) throw error;
    },
    async adminSetRole(userId, role) {
      if (!client || !this.isAdmin()) throw new Error('Kun admin.');
      if (!['user','admin'].includes(role)) throw new Error('Ugyldig rolle.');
      // Trigger'en protect_profile_privileges tillader rolle-skift når den der
      // skriver selv er admin (is_admin()), så denne update går igennem.
      const { error } = await client.from('profiles').update({ role }).eq('id', userId);
      if (error) throw error;
    },
    async adminProgressCounts() {
      if (!client || !this.isAdmin()) return {};
      // Forsøg den aggregerede DB-funktion (skalerer godt). Falder tilbage til
      // klient-optælling hvis RPC'en ikke er kørt endnu i Supabase.
      try {
        const { data, error } = await client.rpc('admin_progress_counts');
        if (!error && Array.isArray(data)) {
          const counts = {};
          data.forEach(r => { counts[r.user_id] = Number(r.n) || 0; });
          return counts;
        }
      } catch (e) { /* falder tilbage nedenfor */ }
      const { data } = await client.from('progress').select('user_id');
      const counts = {};
      (data || []).forEach(r => { counts[r.user_id] = (counts[r.user_id] || 0) + 1; });
      return counts;
    },

    // ── QUIZ-OVERRIDES (admin-redigeret indhold) ──
    async loadQuizOverrides() {
      if (!client) return;
      try {
        const { data } = await client.from('quiz_overrides').select('course_slug,quiz_key,questions');
        const map = {};
        (data || []).forEach(r => { map[r.course_slug + '::' + r.quiz_key] = r.questions; });
        window.QUIZ_OVERRIDES = map;
      } catch (e) { window.QUIZ_OVERRIDES = window.QUIZ_OVERRIDES || {}; }
    },
    async saveQuizOverride(slug, key, questions) {
      if (!client || !this.isAdmin()) throw new Error('Kun admin.');
      const { error } = await client.from('quiz_overrides').upsert(
        { course_slug: slug, quiz_key: key, questions, updated_by: this.user.id, updated_at: new Date().toISOString() },
        { onConflict: 'course_slug,quiz_key' });
      if (error) throw error;
      window.QUIZ_OVERRIDES = window.QUIZ_OVERRIDES || {};
      window.QUIZ_OVERRIDES[slug + '::' + key] = questions;
    },
    async deleteQuizOverride(slug, key) {
      if (!client || !this.isAdmin()) throw new Error('Kun admin.');
      const { error } = await client.from('quiz_overrides').delete().eq('course_slug', slug).eq('quiz_key', key);
      if (error) throw error;
      if (window.QUIZ_OVERRIDES) delete window.QUIZ_OVERRIDES[slug + '::' + key];
    },

    // ── LEKTION-VIDEO-OVERRIDES (admin tilføjer forklaringsvideo til lektioner) ──
    async loadLessonOverrides() {
      if (!client) return;
      try {
        const { data } = await client.from('lesson_overrides').select('course_slug,lesson_key,yt_id');
        const map = {};
        (data || []).forEach(r => { map[r.course_slug + '::' + r.lesson_key] = r.yt_id; });
        window.LESSON_OVERRIDES = map;
      } catch (e) { window.LESSON_OVERRIDES = window.LESSON_OVERRIDES || {}; }
    },
    async saveLessonOverride(slug, key, ytId) {
      if (!client || !this.isAdmin()) throw new Error('Kun admin.');
      const { error } = await client.from('lesson_overrides').upsert(
        { course_slug: slug, lesson_key: key, yt_id: ytId, updated_by: this.user.id, updated_at: new Date().toISOString() },
        { onConflict: 'course_slug,lesson_key' });
      if (error) throw error;
      window.LESSON_OVERRIDES = window.LESSON_OVERRIDES || {};
      window.LESSON_OVERRIDES[slug + '::' + key] = ytId;
    },
    async deleteLessonOverride(slug, key) {
      if (!client || !this.isAdmin()) throw new Error('Kun admin.');
      const { error } = await client.from('lesson_overrides').delete().eq('course_slug', slug).eq('lesson_key', key);
      if (error) throw error;
      if (window.LESSON_OVERRIDES) delete window.LESSON_OVERRIDES[slug + '::' + key];
    },
  };

  async function refresh() {
    if (client) {
      try {
        const { data } = await client.auth.getSession();
        Auth.user = data.session ? data.session.user : null;
        await Auth._loadProfile();
      } catch (e) { Auth.user = null; Auth.profile = null; }
      await Auth.loadQuizOverrides();
      await Auth.loadLessonOverrides();
    }
    if (typeof window.onAuthChanged === 'function') await window.onAuthChanged();
  }

  if (client) {
    client.auth.onAuthStateChange((event, session) => {
      Auth.user = session ? session.user : null;
      if (event === 'PASSWORD_RECOVERY') window._passwordRecovery = true;
      Auth._loadProfile().then(() => {
        if (typeof window.onAuthChanged === 'function') window.onAuthChanged();
      });
    });
  }

  Auth.init = refresh;
  window.Auth = Auth;
})();
