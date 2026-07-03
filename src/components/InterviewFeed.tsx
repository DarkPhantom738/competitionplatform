import Link from "next/link";
import type { Interview } from "@/data/interviews";

export function InterviewRow({ interview }: { interview: Interview }) {
  return (
    <Link href={`/interviews/${interview.slug}`} className="article-row">
      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-ink-muted">
        <span>{interview.studentName}</span>
        <span>·</span>
        <span>{interview.duration}</span>
      </div>

      <h2 className="mt-2 font-serif text-xl font-semibold leading-snug text-ink sm:text-2xl">
        {interview.title}
      </h2>

      <p className="mt-2 line-clamp-2 text-base leading-relaxed text-ink-muted">
        {interview.description}
      </p>

      <div className="mt-3 flex flex-wrap gap-x-3 text-sm text-ink-faint">
        <span>{interview.competitionTag}</span>
        <span>{interview.domain}</span>
      </div>
    </Link>
  );
}

export function InterviewFeed({ interviews }: { interviews: Interview[] }) {
  if (interviews.length === 0) {
    return (
      <p className="py-12 text-center text-sm text-ink-muted">
        No interviews yet.
      </p>
    );
  }

  return (
    <div>
      {interviews.map((interview) => (
        <InterviewRow key={interview.slug} interview={interview} />
      ))}
    </div>
  );
}
