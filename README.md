# Competition Stories

A student-run publication for honest high school competition experiences — interviews, written stories, and reflections from students who actually competed.

Built with Next.js, TypeScript, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

- **Home** — Simple hero, recent stories feed, featured interview, why we exist
- **Stories** (`/explore`) — Search/filter by Academics/Sports, competition, or grade
- **Interviews** — Text list of video interviews
- **Submit** — Moderated submission form
- **About** — Mission and contact
- **Competition tags** (`/competitions/ftc`) — Recent posts for a specific competition (reachable via tags, not main nav)

## Adding content

Placeholder data lives in `src/data/`:

- `competitions.ts` — Competition names and Academics/Sports domain
- `stories.ts` — Written student stories
- `interviews.ts` — Video interviews

## Design

Editorial, Medium-inspired layout: serif headlines, flat white background, single-column story feed. Tags for competition name and Academics/Sports — no competition-first browsing.
