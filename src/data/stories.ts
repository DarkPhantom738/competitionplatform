import type { Domain, Grade } from "./competitions";

export interface StorySection {
  heading: string;
  text: string;
}

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
  sections: StorySection[];
}

export const stories: Story[] = [
  {
    slug: "the-amc-experience",
    title: "The AMC Experience",
    competitionSlug: "amc-aime",
    competitionTag: "AMC",
    domain: "Academics",
    authorName: "Aniket M.",
    grade: "12",
    authorGrade: "12th grade",
    excerpt:
      "The amount of time and effort going into the AMC doesn't necessarily translate to the amount of success you'll have. That said, I don't regret it at all.",
    publishedAt: "2025-11-14",
    featured: true,
    readTime: "6 min",
    sections: [
      {
        heading: "What went well",
        text: "Looking back, I was elated when I realized that I got into JMO. After many years of hard work and hours dedicated, I finally thought I got some sort of recognition I deserved. I think there is truth in the saying that practice will make perfect, but to be honest, I was a kid with lofty goals, and I wanted to be even better."
      },
      {
        heading: "What was difficult",
        text: "It was definitely really difficcult trying to balance the time commitment of the AMC with the rest of my schoolwork and other activities. I think AMC prep is definitely a huge time commitment that often can go unpaid in the end. I think especially with the AMC and Bay Area pressure, comparison has always been a huge part of my life, and I think it honestly was hard to not let that get to me. I remember doing countless past tests, all to have a seemingly bad day on the day of the test. I also think that talent is a real thing in math competitions that not many people talk about, there are just evidently some people who are naturally better at solving math/remembering concepts that others, and that's a reality that took me a long time to come to terms with. ",
      },
      {
        heading: "What I wish I knew",
        text: "I think honestly, it's a competition with a high risk and high reward. I know many people who spent many hours and didn't get the award they expected. That being said, I think I should have realized that I shouldn't put too high expectations on math competitions in general, and that there is much more to math than just the score on your paper, which is determined by not just your intellect but many uncontrollable variables that go on the day of the test.",
      },
      {
        heading: "Advice for future competitors",
        text: "I think the prime target for AMC are for people who are either curious in math rather than thinking its a prestigious competition to join. The way I see it, there are two types of AMC test takers that I feel like are ultiimately successful, the ones who spend some time to make AIME qualification and call it a day, and the prodigies who have been grinding for a long time and aim for MOP, so it's best to pick which side of the spectrum you want to be a part of.",
      },
    ],
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
