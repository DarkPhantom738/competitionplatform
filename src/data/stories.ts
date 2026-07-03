import type { Domain, Grade } from "./competitions";

export interface Story {
  slug: string;
  title: string;
  competitionSlug: string;
  competitionTag: string;
  domain: Domain;
  authorName: string;
  grade: Grade;
  authorGrade: string;
  excerpt: string;
  publishedAt: string;
  featured?: boolean;
  readTime: string;
}

export const stories: Story[] = [
  {
    slug: "what-i-wish-i-knew-before-ftc-worlds",
    title: "What I Wish I Knew Before FTC Worlds",
    competitionSlug: "ftc",
    competitionTag: "FTC",
    domain: "Academics",
    authorName: "Maya R.",
    grade: "12",
    authorGrade: "12th grade",
    excerpt:
      "Worlds felt overwhelming until our team stopped trying to copy top teams and focused on what we actually built well. Here's the honest breakdown of stress, logistics, and what mattered.",
    publishedAt: "2025-11-14",
    featured: true,
    readTime: "6 min",
  },
  {
    slug: "my-first-usaco-season-was-rough",
    title: "My First USACO Season Was Rough — Here's What Helped",
    competitionSlug: "usaco",
    competitionTag: "USACO",
    domain: "Academics",
    authorName: "Alex K.",
    grade: "10",
    authorGrade: "10th grade",
    excerpt:
      "I stuck in bronze for two contests and almost quit. The turning point wasn't grinding harder — it was changing how I reviewed problems and finding one person to discuss solutions with.",
    publishedAt: "2025-10-28",
    featured: true,
    readTime: "8 min",
  },
  {
    slug: "losing-at-isef-taught-me-more",
    title: "Losing at ISEF Taught Me More Than Winning",
    competitionSlug: "isef",
    competitionTag: "ISEF",
    domain: "Academics",
    authorName: "Priya S.",
    grade: "11",
    authorGrade: "11th grade",
    excerpt:
      "I didn't place at ISEF, but the judges' questions reshaped my entire research direction. Here's what the experience actually felt like — the good, the awkward, and the worth-it parts.",
    publishedAt: "2025-09-03",
    featured: true,
    readTime: "7 min",
  },
  {
    slug: "deca-internationals-honest-take",
    title: "DECA Internationals: The Parts Nobody Warns You About",
    competitionSlug: "deca",
    competitionTag: "DECA",
    domain: "Academics",
    authorName: "Jordan L.",
    grade: "11",
    authorGrade: "11th grade",
    excerpt:
      "The role-plays were intense, but the real challenge was managing sleep, team dynamics, and the pressure to perform in front of hundreds of strangers.",
    publishedAt: "2025-08-19",
    readTime: "5 min",
  },
  {
    slug: "science-olympiad-build-events",
    title: "SciOly Build Events Are Chaos — And I Loved It",
    competitionSlug: "science-olympiad",
    competitionTag: "SciOly",
    domain: "Academics",
    authorName: "Sam T.",
    grade: "9",
    authorGrade: "9th grade",
    excerpt:
      "Our tower collapsed twice at regionals. We still learned more about engineering in one season than in any class. A realistic look at time management and team roles.",
    publishedAt: "2025-07-22",
    readTime: "6 min",
  },
  {
    slug: "debate-first-tournament",
    title: "My First Debate Tournament Was Terrifying (In a Good Way)",
    competitionSlug: "debate",
    competitionTag: "Debate",
    domain: "Academics",
    authorName: "Chris M.",
    grade: "10",
    authorGrade: "10th grade",
    excerpt:
      "I barely knew the resolution and lost every round. But the community, the speed of thinking, and the research depth hooked me anyway.",
    publishedAt: "2025-06-10",
    readTime: "5 min",
  },
  {
    slug: "first-hackathon-no-experience",
    title: "I Went to My First Hackathon With Zero Experience",
    competitionSlug: "hackathon",
    competitionTag: "Hackathons",
    domain: "Academics",
    authorName: "Taylor W.",
    grade: "9",
    authorGrade: "9th grade",
    excerpt:
      "I showed up not knowing React. A teammate taught me on the spot, we shipped something broken but real, and I left knowing I wanted to keep building.",
    publishedAt: "2025-05-14",
    readTime: "4 min",
  },
  {
    slug: "amc-aime-gap",
    title: "The Gap Between AMC 10 and AIME Is Real",
    competitionSlug: "amc-aime",
    competitionTag: "AMC/AIME",
    domain: "Academics",
    authorName: "Daniel H.",
    grade: "11",
    authorGrade: "11th grade",
    excerpt:
      "Qualifying for AIME felt like a cliff, not a slope. Here's how I structured practice, what resources actually helped, and why comparison was my biggest enemy.",
    publishedAt: "2025-04-02",
    readTime: "7 min",
  },
  {
    slug: "ftc-team-dynamics",
    title: "FTC Team Dynamics Matter More Than Your Robot",
    competitionSlug: "ftc",
    competitionTag: "FTC",
    domain: "Academics",
    authorName: "Elena V.",
    grade: "11",
    authorGrade: "11th grade",
    excerpt:
      "We had a competitive robot and still struggled because we never talked about roles. Honest advice on communication, mentors, and avoiding burnout.",
    publishedAt: "2025-03-18",
    readTime: "6 min",
  },
  {
    slug: "usaco-platinum-reality",
    title: "What Platinum USACO Actually Feels Like",
    competitionSlug: "usaco",
    competitionTag: "USACO",
    domain: "Academics",
    authorName: "Kevin Z.",
    grade: "12",
    authorGrade: "12th grade",
    excerpt:
      "Getting to platinum didn't fix imposter syndrome. Here's a grounded take on time investment, camp culture, and whether it's worth it for college apps (spoiler: that's the wrong reason).",
    publishedAt: "2025-02-07",
    readTime: "9 min",
  },
  {
    slug: "scholastic-writing-rejection",
    title: "Getting Rejected by Scholastic Still Changed My Writing",
    competitionSlug: "scholastic-writing",
    competitionTag: "Scholastic",
    domain: "Academics",
    authorName: "Riley P.",
    grade: "10",
    authorGrade: "10th grade",
    excerpt:
      "No gold key, but the feedback from my teacher and the revision process made me a better writer. A honest look at creative competition pressure.",
    publishedAt: "2025-01-20",
    readTime: "5 min",
  },
  {
    slug: "isef-lab-hours",
    title: "The Lab Hours Nobody Talks About Before ISEF",
    competitionSlug: "isef",
    competitionTag: "ISEF",
    domain: "Academics",
    authorName: "Aisha N.",
    grade: "12",
    authorGrade: "12th grade",
    excerpt:
      "Between school, research, and fair paperwork, I averaged 15 hours a week for eight months. Was it worth it? Yes — but not for the reasons I expected.",
    publishedAt: "2024-12-05",
    readTime: "8 min",
  },
  {
    slug: "track-states-nerves",
    title: "What Nobody Tells You About Running at States",
    competitionSlug: "track-and-field",
    competitionTag: "Track",
    domain: "Sports",
    authorName: "Jamie L.",
    grade: "11",
    authorGrade: "11th grade",
    excerpt:
      "The atmosphere at state track is nothing like dual meets. Here's how I dealt with pre-race anxiety, the travel, and racing against people I'd only seen on Milesplit.",
    publishedAt: "2025-10-05",
    readTime: "5 min",
  },
  {
    slug: "swimming-club-vs-high-school",
    title: "Club Swimming vs. High School Season — Two Different Worlds",
    competitionSlug: "swimming",
    competitionTag: "Swimming",
    domain: "Sports",
    authorName: "Noah P.",
    grade: "10",
    authorGrade: "10th grade",
    excerpt:
      "I swam club year-round and high school in the winter. The schedules collided, the cultures were different, and nobody explained how to manage both without burning out.",
    publishedAt: "2025-08-30",
    readTime: "6 min",
  },
  {
    slug: "varsity-tennis-first-year",
    title: "Making Varsity Tennis as a Junior — Without a Private Coach",
    competitionSlug: "varsity-tennis",
    competitionTag: "Tennis",
    domain: "Sports",
    authorName: "Sofia M.",
    grade: "11",
    authorGrade: "11th grade",
    excerpt:
      "I started playing seriously in sophomore year. No country club background, just public courts and a lot of YouTube. Here's what the varsity season actually demanded.",
    publishedAt: "2025-07-14",
    readTime: "5 min",
  },
];

export function getStory(slug: string): Story | undefined {
  return stories.find((s) => s.slug === slug);
}

export function getStoriesByCompetition(competitionSlug: string): Story[] {
  return stories
    .filter((s) => s.competitionSlug === competitionSlug)
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function getStoriesByDomain(domain: Domain): Story[] {
  return stories
    .filter((s) => s.domain === domain)
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function getFeaturedStories(): Story[] {
  return stories.filter((s) => s.featured);
}

export function getRecentStories(limit = 10): Story[] {
  return [...stories]
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    .slice(0, limit);
}
