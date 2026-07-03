create table if not exists comments (
  id uuid primary key default gen_random_uuid(),
  story_slug text not null,
  author_name text not null default 'Anonymous',
  body text not null,
  submitted_at timestamptz not null default now(),
  displayed_at timestamptz,
  approved boolean not null default false
);

create index if not exists comments_story_slug_idx on comments (story_slug);
create index if not exists comments_approved_idx on comments (approved);

alter table comments enable row level security;

-- Anyone can read approved comments
create policy "Public can read approved comments"
  on comments for select
  using (approved = true);

-- Anyone can submit a pending comment
create policy "Public can submit comments"
  on comments for insert
  with check (approved = false);

-- Service role bypasses RLS for admin API routes
