import type { Domain } from "./competitions";

export interface Interview {
  slug: string;
  title: string;
  studentName: string;
  competitionSlug: string;
  competitionTag: string;
  domain: Domain;
  description: string;
  duration: string;
  featured?: boolean;
  youtubeId?: string;
}

export const interviews: Interview[] = [
  {
    slug: "ftc-worlds-journey",
    title: "From Rookie Team to FTC Worlds",
    studentName: "Maya R.",
    competitionSlug: "ftc",
    competitionTag: "FTC",
    domain: "Academics",
    description:
      "A senior captain walks through three seasons of robotics — the failures, the mentor relationships, and what Worlds actually feels like on the floor.",
    duration: "18 min",
    featured: true,
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    slug: "usaco-bronze-to-gold",
    title: "Bronze to Gold: A USACO Timeline",
    studentName: "Alex K.",
    competitionSlug: "usaco",
    competitionTag: "USACO",
    domain: "Academics",
    description:
      "Honest talk about plateaus, problem-solving habits, and why comparing yourself to Discord grind culture can backfire.",
    duration: "22 min",
    featured: true,
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    slug: "isef-without-winning",
    title: "ISEF Without a Grand Award",
    studentName: "Priya S.",
    competitionSlug: "isef",
    competitionTag: "ISEF",
    domain: "Academics",
    description:
      "Research fairs aren't just about medals. Priya shares what judges asked, how she handled rejection, and what she'd tell her freshman self.",
    duration: "16 min",
    featured: true,
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    slug: "deca-roleplay-nerves",
    title: "Handling Nerves in DECA Role-Plays",
    studentName: "Jordan L.",
    competitionSlug: "deca",
    competitionTag: "DECA",
    domain: "Academics",
    description:
      "Tips that aren't in the prep materials — managing anxiety, reading judges, and recovering when a role-play goes sideways.",
    duration: "14 min",
    featured: false,
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    slug: "scio-ly-captain",
    title: "Leading a Science Olympiad Team",
    studentName: "Sam T.",
    competitionSlug: "science-olympiad",
    competitionTag: "SciOly",
    domain: "Academics",
    description:
      "How one captain coordinated 15 events, delegated study plans, and kept the team from burning out before states.",
    duration: "20 min",
    featured: false,
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    slug: "debate-circuit-life",
    title: "Life on the Debate Circuit",
    studentName: "Chris M.",
    competitionSlug: "debate",
    competitionTag: "Debate",
    domain: "Academics",
    description:
      "Weekend tournaments, travel costs, and the community that keeps debaters coming back — even when records aren't perfect.",
    duration: "24 min",
    featured: false,
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    slug: "first-hackathon-story",
    title: "My First Hackathon — No Experience Required",
    studentName: "Taylor W.",
    competitionSlug: "hackathon",
    competitionTag: "Hackathons",
    domain: "Academics",
    description:
      "A freshman's first 24-hour build sprint: finding a team, learning on the fly, and discovering that shipping beats perfection.",
    duration: "12 min",
    featured: false,
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    slug: "amc-aime-prep",
    title: "AMC to AIME: What Actually Worked",
    studentName: "Daniel H.",
    competitionSlug: "amc-aime",
    competitionTag: "AMC/AIME",
    domain: "Academics",
    description:
      "Problem selection, mock tests, and the mental shift needed when problems stop being pattern-matching exercises.",
    duration: "19 min",
    featured: false,
    youtubeId: "dQw4w9WgXcQ",
  },
];

export function getInterview(slug: string): Interview | undefined {
  return interviews.find((i) => i.slug === slug);
}

export function getInterviewsByCompetition(competitionSlug: string): Interview[] {
  return interviews.filter((i) => i.competitionSlug === competitionSlug);
}

export function getFeaturedInterviews(): Interview[] {
  return interviews.filter((i) => i.featured);
}
