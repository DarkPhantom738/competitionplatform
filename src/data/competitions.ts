export type Domain = "Academics" | "Sports";

export type Grade = "9" | "10" | "11" | "12" | "graduated";

export interface Competition {
  slug: string;
  name: string;
  shortName: string;
  domain: Domain;
}

export const domains: Domain[] = ["Academics", "Sports"];

export const grades: { value: Grade; label: string }[] = [
  { value: "9", label: "9th grade" },
  { value: "10", label: "10th grade" },
  { value: "11", label: "11th grade" },
  { value: "12", label: "12th grade" },
  { value: "graduated", label: "Recently graduated" },
];

export const competitions: Competition[] = [
  { slug: "ftc", name: "FIRST Tech Challenge", shortName: "FTC", domain: "Academics" },
  { slug: "usaco", name: "USA Computing Olympiad", shortName: "USACO", domain: "Academics" },
  { slug: "isef", name: "Regeneron ISEF", shortName: "ISEF", domain: "Academics" },
  { slug: "deca", name: "DECA", shortName: "DECA", domain: "Academics" },
  { slug: "science-olympiad", name: "Science Olympiad", shortName: "SciOly", domain: "Academics" },
  { slug: "debate", name: "High School Debate", shortName: "Debate", domain: "Academics" },
  { slug: "mathcounts", name: "MATHCOUNTS", shortName: "MATHCOUNTS", domain: "Academics" },
  { slug: "hackathon", name: "High School Hackathons", shortName: "Hackathons", domain: "Academics" },
  { slug: "amc-aime", name: "AMC / AIME", shortName: "AMC/AIME", domain: "Academics" },
  { slug: "scholastic-writing", name: "Scholastic Art & Writing", shortName: "Scholastic", domain: "Academics" },
  { slug: "track-and-field", name: "Track & Field", shortName: "Track", domain: "Sports" },
  { slug: "swimming", name: "Competitive Swimming", shortName: "Swimming", domain: "Sports" },
  { slug: "varsity-tennis", name: "Varsity Tennis", shortName: "Tennis", domain: "Sports" },
];

export function getCompetition(slug: string): Competition | undefined {
  return competitions.find((c) => c.slug === slug);
}

export function getCompetitionByShortName(shortName: string): Competition | undefined {
  return competitions.find(
    (c) => c.shortName.toLowerCase() === shortName.toLowerCase()
  );
}

export function getCompetitionsByDomain(domain: Domain): Competition[] {
  return competitions.filter((c) => c.domain === domain);
}
