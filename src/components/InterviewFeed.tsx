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
      <div className="flex min-h-[50vh] items-center justify-center py-16 sm:min-h-[55vh] sm:py-20">
        <p className="max-w-xl text-center font-serif text-3xl font-bold leading-tight text-ink sm:text-4xl lg:text-5xl">
          Interviews with some of you coming soon!
        </p>
      </div>
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
