-- ============================================================
--  NEMMAT — Supabase skema (auth + fremgang + admin quiz-indhold)
--  Kør HELE denne fil i Supabase → SQL Editor → New query → Run.
--  Idempotent: kan køres igen uden fejl.
-- ============================================================

-- ---------- TABELLER ----------

-- 1:1 med auth.users — brugerprofil, rolle og medlemskab
create table if not exists public.profiles (
  id          uuid primary key references auth.users(id) on delete cascade,
  email       text,
  full_name   text,
  role        text not null default 'user'  check (role in ('user','admin')),
  membership  text not null default 'none'  check (membership in ('none','basis','pro')),
  exam_level  text check (exam_level in ('HF','STX','HHX')),
  created_at  timestamptz not null default now()
);

-- Gennemførte lektioner/quizzer (erstatter localStorage)
create table if not exists public.progress (
  user_id      uuid not null references auth.users(id) on delete cascade,
  lesson_key   text not null,                       -- format: '{course_slug}:{si}-{ii}'
  completed_at timestamptz not null default now(),
  primary key (user_id, lesson_key)
);

-- Admin-redigeret/tilføjet quiz-indhold (merges oven på den statiske data)
create table if not exists public.quiz_overrides (
  id          uuid primary key default gen_random_uuid(),
  course_slug text not null,
  quiz_key    text not null,                        -- format: '{si}-{ii}'
  questions   jsonb not null,                       -- [{title, options:[{text,correct}], ytId, explanation}]
  updated_by  uuid references auth.users(id),
  updated_at  timestamptz not null default now(),
  unique (course_slug, quiz_key)
);

-- Admin-tilføjet forklaringsvideo til lektioner (overrider/udfylder lektion-ytId)
create table if not exists public.lesson_overrides (
  id          uuid primary key default gen_random_uuid(),
  course_slug text not null,
  lesson_key  text not null,                        -- format: '{si}-{ii}'
  yt_id       text not null,                        -- YouTube-video-ID
  updated_by  uuid references auth.users(id),
  updated_at  timestamptz not null default now(),
  unique (course_slug, lesson_key)
);

-- ---------- HJÆLPEFUNKTION (security definer = ingen RLS-rekursion) ----------
create or replace function public.is_admin()
returns boolean
language sql security definer stable
set search_path = public
as $$
  select exists (
    select 1 from public.profiles where id = auth.uid() and role = 'admin'
  );
$$;

-- ---------- AUTO-OPRET PROFIL VED SIGNUP ----------
create or replace function public.handle_new_user()
returns trigger
language plpgsql security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, email, full_name, exam_level)
  values (
    new.id,
    new.email,
    new.raw_user_meta_data->>'full_name',
    new.raw_user_meta_data->>'exam_level'
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ---------- BESKYT MOD SELV-OPGRADERING (rolle/medlemskab) ----------
-- Almindelige brugere må redigere navn/niveau, men IKKE role eller membership.
create or replace function public.protect_profile_privileges()
returns trigger
language plpgsql security definer
set search_path = public
as $$
begin
  -- Beskyt kun mod INDLOGGEDE ikke-admins. Service-role/SQL-editor
  -- (auth.uid() er null) og admins får lov — så admin-seeding virker.
  if auth.uid() is not null and not public.is_admin() then
    new.role       := old.role;
    new.membership := old.membership;
  end if;
  return new;
end;
$$;

drop trigger if exists trg_protect_profile on public.profiles;
create trigger trg_protect_profile
  before update on public.profiles
  for each row execute function public.protect_profile_privileges();

-- ---------- SLET EGEN KONTO (GDPR) ----------
-- Security definer: kører som ejer og kan slette i auth.users (cascade → profil+fremgang)
create or replace function public.delete_own_account()
returns void
language plpgsql security definer
set search_path = public
as $$
begin
  if auth.uid() is null then raise exception 'Ikke logget ind'; end if;
  delete from auth.users where id = auth.uid();
end;
$$;
revoke all on function public.delete_own_account() from public;
grant execute on function public.delete_own_account() to authenticated;

-- ---------- ROW LEVEL SECURITY ----------
alter table public.profiles       enable row level security;
alter table public.progress       enable row level security;
alter table public.quiz_overrides enable row level security;

-- profiles
drop policy if exists profiles_select on public.profiles;
create policy profiles_select on public.profiles
  for select using (auth.uid() = id or public.is_admin());

drop policy if exists profiles_insert on public.profiles;
create policy profiles_insert on public.profiles
  for insert with check (auth.uid() = id);

drop policy if exists profiles_update on public.profiles;
create policy profiles_update on public.profiles
  for update using (auth.uid() = id or public.is_admin());

-- progress
drop policy if exists progress_select on public.progress;
create policy progress_select on public.progress
  for select using (auth.uid() = user_id or public.is_admin());

drop policy if exists progress_write on public.progress;
create policy progress_write on public.progress
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- quiz_overrides (alle læser så indhold er universelt, kun admin skriver)
drop policy if exists quiz_overrides_select on public.quiz_overrides;
create policy quiz_overrides_select on public.quiz_overrides
  for select using (true);

drop policy if exists quiz_overrides_write on public.quiz_overrides;
create policy quiz_overrides_write on public.quiz_overrides
  for all using (public.is_admin()) with check (public.is_admin());

-- lesson_overrides (alle læser, kun admin skriver)
alter table public.lesson_overrides enable row level security;
drop policy if exists lesson_overrides_select on public.lesson_overrides;
create policy lesson_overrides_select on public.lesson_overrides
  for select using (true);
drop policy if exists lesson_overrides_write on public.lesson_overrides;
create policy lesson_overrides_write on public.lesson_overrides
  for all using (public.is_admin()) with check (public.is_admin());

-- ---------- RETTIGHEDER (PostgREST) ----------
grant usage on schema public to anon, authenticated;
grant select, insert, update, delete on public.profiles       to authenticated;
grant select, insert, update, delete on public.progress       to authenticated;
grant select, insert, update, delete on public.quiz_overrides to authenticated;
grant select on public.quiz_overrides to anon;
grant select, insert, update, delete on public.lesson_overrides to authenticated;
grant select on public.lesson_overrides to anon;

-- ============================================================
--  EFTER FØRSTE SIGNUP: gør din egen konto til admin.
--  Erstat emailen og kør linjen:
--
--  update public.profiles set role='admin', membership='pro'
--  where email = 'DIN-ADMIN-EMAIL@eksempel.dk';
-- ============================================================
