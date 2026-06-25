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
        this.profile = data || null;
      } catch (e) { this.profile = null; }
    },

    // Returnerer { needsConfirmation } — true hvis email-bekræftelse er slået til
    async signUp({ name, email, password, examLevel }) {
      if (!client) throw new Error('Online-funktioner er ikke tilgængelige lige nu.');
      const { data, error } = await client.auth.signUp({
        email, password,
        options: { data: { full_name: name, exam_level: examLevel } },
      });
      if (error) throw error;
      return { needsConfirmation: !data.session };
    },

    async signIn(email, password) {
      if (!client) throw new Error('Online-funktioner er ikke tilgængelige lige nu.');
      const { error } = await client.auth.signInWithPassword({ email, password });
      if (error) throw error;
    },

    async signOut() { if (client) await client.auth.signOut(); },

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
    async adminProgressCounts() {
      if (!client || !this.isAdmin()) return {};
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
  };

  async function refresh() {
    if (client) {
      try {
        const { data } = await client.auth.getSession();
        Auth.user = data.session ? data.session.user : null;
        await Auth._loadProfile();
      } catch (e) { Auth.user = null; Auth.profile = null; }
      await Auth.loadQuizOverrides();
    }
    if (typeof window.onAuthChanged === 'function') await window.onAuthChanged();
  }

  if (client) {
    client.auth.onAuthStateChange((_event, session) => {
      Auth.user = session ? session.user : null;
      Auth._loadProfile().then(() => {
        if (typeof window.onAuthChanged === 'function') window.onAuthChanged();
      });
    });
  }

  Auth.init = refresh;
  window.Auth = Auth;
})();
