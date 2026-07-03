import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getInterview } from "@/data/interviews";
import { getCompetition } from "@/data/competitions";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const interview = getInterview(slug);
  if (!interview) return { title: "Interview Not Found" };
  return { title: interview.title, description: interview.description };
}

export default async function InterviewPage({ params }: Props) {
  const { slug } = await params;
  const interview = getInterview(slug);
  if (!interview) notFound();

  const competition = getCompetition(interview.competitionSlug);

  return (
    <article>
      <header className="article-container border-b border-border py-10 sm:py-12">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-ink-muted">
          <span>{interview.studentName}</span>
          <span>·</span>
          <span>{interview.duration}</span>
        </div>

        <h1 className="mt-4 font-serif text-3xl font-bold leading-tight text-ink sm:text-4xl">
          {interview.title}
        </h1>

        <p className="mt-6 text-xl leading-relaxed text-ink-muted">
          {interview.description}
        </p>
      </header>

      <div className="article-container py-10 sm:py-12">
        <div className="flex aspect-video items-center justify-center border border-border bg-[#fafafa]">
          <p className="text-sm text-ink-muted">
            Video placeholder — embed YouTube here when ready
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-x-4 text-sm">
          <Link href="/interviews" className="text-link">
            ← All interviews
          </Link>
          {competition && (
            <Link href={`/competitions/${competition.slug}`} className="text-link">
              More {competition.shortName} stories
            </Link>
          )}
        </div>
      </div>

      <footer className="article-container border-t border-border pb-12 pt-6">
        <div className="flex flex-wrap gap-x-4 text-sm text-ink-muted">
          {competition && (
            <Link href={`/competitions/${competition.slug}`} className="text-link">
              {interview.competitionTag}
            </Link>
          )}
          <span>{interview.domain}</span>
        </div>
      </footer>
    </article>
  );
}
