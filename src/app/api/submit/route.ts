import { NextResponse } from "next/server";
import { Resend } from "resend";
import type { Domain, Grade } from "@/data/competitions";
import {
  buildParsedSubmission,
  formatSubmissionEmail,
  SUBMISSION_EMAIL,
  type StorySubmissionInput,
} from "@/lib/submissions";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

function isGrade(value: string): value is Grade {
  return ["9", "10", "11", "12", "graduated"].includes(value);
}

function isDomain(value: string): value is Domain {
  return value === "Academics" || value === "Sports";
}

export async function POST(request: Request) {
  if (!resend) {
    return NextResponse.json(
      { error: "Story submissions are not configured yet." },
      { status: 503 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const data = body as Record<string, unknown>;
  const grade = String(data.grade ?? "");
  const domain = String(data.domain ?? "Academics");

  if (!isGrade(grade)) {
    return NextResponse.json({ error: "Please select a valid grade." }, { status: 400 });
  }

  if (!isDomain(domain)) {
    return NextResponse.json({ error: "Please select a valid category." }, { status: 400 });
  }

  const requiredFields = [
    "name",
    "competition",
    "year",
    "title",
    "wentWell",
    "difficult",
    "wishKnew",
    "advice",
  ] as const;

  for (const field of requiredFields) {
    if (!String(data[field] ?? "").trim()) {
      return NextResponse.json(
        { error: `Missing required field: ${field}` },
        { status: 400 }
      );
    }
  }

  const input: StorySubmissionInput = {
    name: String(data.name),
    grade,
    competition: String(data.competition),
    domain,
    year: String(data.year),
    role: data.role ? String(data.role) : undefined,
    title: String(data.title),
    excerpt: data.excerpt ? String(data.excerpt) : undefined,
    wentWell: String(data.wentWell),
    difficult: String(data.difficult),
    wishKnew: String(data.wishKnew),
    advice: String(data.advice),
  };

  const submission = buildParsedSubmission(input);
  const email = formatSubmissionEmail(submission);
  const to = process.env.SUBMISSION_TO_EMAIL ?? SUBMISSION_EMAIL;
  const from =
    process.env.RESEND_FROM_EMAIL?.replace(/^["']|["']$/g, "") ??
    "Beyond the Medal <onboarding@resend.dev>";

  const { error } = await resend.emails.send({
    from,
    to: [to],
    subject: email.subject,
    text: email.text,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      {
        error:
          error.message ??
          "Could not send submission. Check your Resend setup and try again.",
      },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
