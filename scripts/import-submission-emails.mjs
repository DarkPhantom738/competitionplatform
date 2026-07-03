#!/usr/bin/env node
/**
 * Paste one or more submission emails, get stories.ts entries.
 *
 * Usage:
 *   node scripts/import-submission-emails.mjs path/to/pasted-emails.txt
 *   pbpaste | node scripts/import-submission-emails.mjs
 */

import { readFileSync } from "node:fs";

const STORY_SECTION_HEADINGS = [
  "What went well",
  "What was difficult",
  "What I wish I knew",
  "Advice for future competitors",
];

const SUBMISSION_START = "=== BTM-STORY-SUBMISSION ===";
const SUBMISSION_END = "=== END BTM-STORY-SUBMISSION ===";

const GRADE_LABELS = {
  9: "9th grade",
  10: "10th grade",
  11: "11th grade",
  12: "12th grade",
  graduated: "Recently graduated",
};

function slugifyTitle(title) {
  return title
    .toLowerCase()
    .trim()
    .replace(/['']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

function estimateReadTime(...texts) {
  const words = texts.join(" ").split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min`;
}

function parseMetadataLine(line) {
  const match = line.match(/^([a-z_]+):\s*(.*)$/i);
  if (!match) return null;
  return [match[1].toLowerCase(), match[2].trim()];
}

function parseGrade(value) {
  const normalized = value.toLowerCase();
  if (normalized.includes("graduat")) return "graduated";
  const digit = normalized.match(/\b(9|10|11|12)\b/)?.[1];
  if (digit) return digit;
  return "12";
}

function parseDomain(value) {
  return value.toLowerCase() === "sports" ? "Sports" : "Academics";
}

function parseSubmissionBlock(block) {
  const trimmed = block.trim();
  if (!trimmed) return null;

  const metadata = {};
  const sectionTexts = {};
  let mode = null;
  let currentSection = null;
  const sectionLines = [];

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
      const heading = sectionMatch[1].trim();
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

  if (!metadata.title) return null;

  const grade = parseGrade(metadata.grade || metadata.author_grade || "12");

  return {
    title: metadata.title,
    slug: metadata.slug || slugifyTitle(metadata.title),
    authorName: metadata.author_name || "Anonymous",
    grade,
    authorGrade: metadata.author_grade || GRADE_LABELS[grade],
    competitionSlug: metadata.competition_slug || slugifyTitle(metadata.competition || "other"),
    competitionTag: metadata.competition_tag || metadata.competition || "Other",
    domain: parseDomain(metadata.domain || "Academics"),
    excerpt: metadata.excerpt || "",
    sections: STORY_SECTION_HEADINGS.map((heading) => ({
      heading,
      text: sectionTexts[heading] || "",
    })).filter((section) => section.text.length > 0),
  };
}

function parseSubmissionEmails(text) {
  const normalized = text.replace(/\r\n/g, "\n");
  return normalized
    .split(SUBMISSION_START)
    .slice(1)
    .map((block) => parseSubmissionBlock(block.split(SUBMISSION_END)[0] ?? block))
    .filter(Boolean);
}

function formatStoriesForImport(submissions) {
  const publishedAt = new Date().toISOString().slice(0, 10);

  return submissions
    .map((submission) => {
      const readTime = estimateReadTime(...submission.sections.map((s) => s.text));
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
    })
    .join(",\n\n");
}

const input =
  process.argv[2]
    ? readFileSync(process.argv[2], "utf8")
    : readFileSync(0, "utf8");

const submissions = parseSubmissionEmails(input);

if (submissions.length === 0) {
  console.error("No submissions found. Look for blocks starting with:", SUBMISSION_START);
  process.exit(1);
}

console.log(`// Found ${submissions.length} submission(s). Paste into stories: Story[]\n`);
console.log(formatStoriesForImport(submissions));
