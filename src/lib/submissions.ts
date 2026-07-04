import { competitions, type Domain, type Grade } from "@/data/competitions";

export const STORY_SECTION_HEADINGS = [
  "What went well",
  "What was difficult",
  "What I wish I knew",
  "Advice for future competitors",
] as const;

export const SUBMISSION_EMAIL = "aniket.mangalampalli@gmail.com";

export const SUBMISSION_START = "=== BTM-STORY-SUBMISSION ===";
export const SUBMISSION_END = "=== END BTM-STORY-SUBMISSION ===";

export interface StorySubmissionInput {
  name: string;
  grade: Grade;
  competition: string;
  domain: Domain;
  year: string;
  role?: string;
  title: string;
  excerpt?: string;
  wentWell: string;
  difficult: string;
  wishKnew: string;
  advice: string;
  contactEmail?: string;
}

export interface ParsedStorySubmission {
  title: string;
  slug: string;
  authorName: string;
  grade: Grade;
  authorGrade: string;
  competition: string;
  competitionSlug: string;
  competitionTag: string;
  domain: Domain;
  yearParticipated: string;
  roleResult?: string;
  excerpt: string;
  submittedAt: string;
  contactEmail?: string;
  sections: { heading: (typeof STORY_SECTION_HEADINGS)[number]; text: string }[];
}

const GRADE_LABELS: Record<Grade, string> = {
  "9": "9th grade",
  "10": "10th grade",
  "11": "11th grade",
  "12": "12th grade",
  graduated: "Recently graduated",
};

export function slugifyTitle(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/['']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

export function estimateReadTime(...texts: string[]): string {
  const words = texts.join(" ").split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min`;
}

export function matchCompetition(input: string): {
  slug: string;
  tag: string;
  domain: Domain;
} {
  const normalized = input.trim().toLowerCase();

  const exact = competitions.find(
    (c) =>
      c.slug === normalized ||
      c.shortName.toLowerCase() === normalized ||
      c.name.toLowerCase() === normalized
  );
  if (exact) {
    return { slug: exact.slug, tag: exact.shortName, domain: exact.domain };
  }

  const partial = competitions.find(
    (c) =>
      normalized.includes(c.shortName.toLowerCase()) ||
      normalized.includes(c.slug) ||
      c.name.toLowerCase().includes(normalized)
  );
  if (partial) {
    return { slug: partial.slug, tag: partial.shortName, domain: partial.domain };
  }

  const tag = input.trim() || "Other";
  const slug = slugifyTitle(tag) || "other";
  return { slug, tag, domain: "Academics" };
}

function buildExcerpt(input: StorySubmissionInput): string {
  if (input.excerpt?.trim()) return input.excerpt.trim();
  const source = input.wentWell.trim() || input.title.trim();
  if (source.length <= 200) return source;
  return `${source.slice(0, 197).trimEnd()}...`;
}

export function buildParsedSubmission(
  input: StorySubmissionInput,
  submittedAt = new Date().toISOString()
): ParsedStorySubmission {
  const matched = matchCompetition(input.competition);
  const domain = input.domain || matched.domain;

  return {
    title: input.title.trim(),
    slug: slugifyTitle(input.title),
    authorName: input.name.trim(),
    grade: input.grade,
    authorGrade: GRADE_LABELS[input.grade],
    competition: input.competition.trim(),
    competitionSlug: matched.slug,
    competitionTag: matched.tag,
    domain,
    yearParticipated: input.year.trim(),
    roleResult: input.role?.trim() || undefined,
    excerpt: buildExcerpt(input),
    submittedAt,
    contactEmail: input.contactEmail?.trim() || undefined,
    sections: [
      { heading: "What went well", text: input.wentWell.trim() },
      { heading: "What was difficult", text: input.difficult.trim() },
      { heading: "What I wish I knew", text: input.wishKnew.trim() },
      { heading: "Advice for future competitors", text: input.advice.trim() },
    ],
  };
}

function escapeBlock(text: string): string {
  return text.replace(/\r\n/g, "\n").trim();
}

export function formatSubmissionEmail(submission: ParsedStorySubmission): {
  subject: string;
  text: string;
} {
  const metadata = [
    `title: ${submission.title}`,
    `slug: ${submission.slug}`,
    `author_name: ${submission.authorName}`,
    `grade: ${submission.grade}`,
    `author_grade: ${submission.authorGrade}`,
    `competition: ${submission.competition}`,
    `competition_slug: ${submission.competitionSlug}`,
    `competition_tag: ${submission.competitionTag}`,
    `domain: ${submission.domain}`,
    `year_participated: ${submission.yearParticipated}`,
    `role_result: ${submission.roleResult ?? ""}`,
    `excerpt: ${submission.excerpt}`,
    `read_time: ${estimateReadTime(...submission.sections.map((s) => s.text))}`,
    `submitted_at: ${submission.submittedAt}`,
    `contact_email: ${submission.contactEmail ?? ""}`,
  ].join("\n");

  const sections = submission.sections
    .map(
      (section) =>
        `[SECTION: ${section.heading}]\n${escapeBlock(section.text)}`
    )
    .join("\n\n");

  const text = [
    SUBMISSION_START,
    "",
    "--- METADATA ---",
    metadata,
    "",
    "--- BODY ---",
    sections,
    "",
    SUBMISSION_END,
  ].join("\n");

  return {
    subject: `[BTM Submission] ${submission.title} — ${submission.authorName}`,
    text,
  };
}

function parseMetadataLine(line: string): [string, string] | null {
  const match = line.match(/^([a-z_]+):\s*(.*)$/i);
  if (!match) return null;
  return [match[1].toLowerCase(), match[2].trim()];
}

function parseGrade(value: string): Grade {
  const normalized = value.toLowerCase();
  if (normalized.includes("graduat")) return "graduated";
  const digit = normalized.match(/\b(9|10|11|12)\b/)?.[1];
  if (digit === "9" || digit === "10" || digit === "11" || digit === "12") {
    return digit;
  }
  return "12";
}

function parseDomain(value: string): Domain {
  return value.toLowerCase() === "sports" ? "Sports" : "Academics";
}

export function parseSubmissionBlock(block: string): ParsedStorySubmission | null {
  const trimmed = block.trim();
  if (!trimmed) return null;

  const metadata: Record<string, string> = {};
  const sectionTexts: Partial<
    Record<(typeof STORY_SECTION_HEADINGS)[number], string>
  > = {};

  let mode: "metadata" | "body" | "section" | null = null;
  let currentSection: (typeof STORY_SECTION_HEADINGS)[number] | null = null;
  const sectionLines: string[] = [];

  const flushSection = () => {
    if (currentSection && sectionLines.length > 0) {
      sectionTexts[currentSection] = sectionLines.join("\n").trim();
    }
    sectionLines.length = 0;
  };

  for (const rawLine of trimmed.split("\n")) {
    const line = rawLine.replace(/^>\s?/, "").trimEnd();

    if (line === "--- METADATA ---") {
      flushSection();
      mode = "metadata";
      currentSection = null;
      continue;
    }
    if (line === "--- BODY ---") {
      flushSection();
      mode = "body";
      currentSection = null;
      continue;
    }

    const sectionMatch = line.match(/^\[SECTION:\s*(.+)\]$/i);
    if (sectionMatch) {
      flushSection();
      const heading = sectionMatch[1].trim() as (typeof STORY_SECTION_HEADINGS)[number];
      if (STORY_SECTION_HEADINGS.includes(heading)) {
        currentSection = heading;
        mode = "section";
      }
      continue;
    }

    if (mode === "metadata") {
      const parsed = parseMetadataLine(line);
      if (parsed) metadata[parsed[0]] = parsed[1];
      continue;
    }

    if (mode === "section" && currentSection) {
      sectionLines.push(rawLine.replace(/^>\s?/, ""));
    }
  }

  flushSection();

  const title = metadata.title;
  if (!title) return null;

  const grade = parseGrade(metadata.grade || metadata.author_grade || "12");

  return {
    title,
    slug: metadata.slug || slugifyTitle(title),
    authorName: metadata.author_name || "Anonymous",
    grade,
    authorGrade: metadata.author_grade || GRADE_LABELS[grade],
    competition: metadata.competition || metadata.competition_tag || "Other",
    competitionSlug: metadata.competition_slug || slugifyTitle(metadata.competition || "other"),
    competitionTag: metadata.competition_tag || metadata.competition || "Other",
    domain: parseDomain(metadata.domain || "Academics"),
    yearParticipated: metadata.year_participated || "",
    roleResult: metadata.role_result || undefined,
    excerpt: metadata.excerpt || "",
    submittedAt: metadata.submitted_at || new Date().toISOString(),
    contactEmail: metadata.contact_email || undefined,
    sections: STORY_SECTION_HEADINGS.map((heading) => ({
      heading,
      text: sectionTexts[heading] || "",
    })).filter((section) => section.text.length > 0),
  };
}

/** Parse one or many pasted submission emails into structured objects. */
export function parseSubmissionEmails(text: string): ParsedStorySubmission[] {
  const normalized = text.replace(/\r\n/g, "\n");
  const blocks = normalized.split(SUBMISSION_START).slice(1);
  return blocks
    .map((block) => parseSubmissionBlock(block.split(SUBMISSION_END)[0] ?? block))
    .filter((submission): submission is ParsedStorySubmission => submission !== null);
}

/** Render TypeScript objects ready to paste into src/data/stories.ts */
export function formatStoriesForImport(
  submissions: ParsedStorySubmission[],
  publishedAt = new Date().toISOString().slice(0, 10)
): string {
  const objects = submissions.map((submission) => {
    const readTime =
      submission.excerpt && submission.sections.length > 0
        ? estimateReadTime(...submission.sections.map((s) => s.text))
        : "5 min";

    const sections = submission.sections
      .map(
        (section) =>
          `      {\n        heading: ${JSON.stringify(section.heading)},\n        text: ${JSON.stringify(section.text)},\n      }`
      )
      .join(",\n");

    return `  {
    slug: ${JSON.stringify(submission.slug)},
    title: ${JSON.stringify(submission.title)},
    competitionSlug: ${JSON.stringify(submission.competitionSlug)},
    competitionTag: ${JSON.stringify(submission.competitionTag)},
    domain: ${JSON.stringify(submission.domain)},
    authorName: ${JSON.stringify(submission.authorName)},
    grade: ${JSON.stringify(submission.grade)},
    authorGrade: ${JSON.stringify(submission.authorGrade)},
    excerpt: ${JSON.stringify(submission.excerpt)},
    publishedAt: ${JSON.stringify(publishedAt)},
    readTime: ${JSON.stringify(readTime)},
    sections: [
${sections}
    ],
  }`;
  });

  return objects.join(",\n\n");
}
