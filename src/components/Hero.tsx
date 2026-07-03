import Link from "next/link";

export function Hero() {
  return (
    <section className="border-b border-border">
      <div className="page-container py-12 sm:py-16">
        <h1 className="font-serif text-3xl font-bold leading-tight text-ink sm:text-4xl lg:text-[2.75rem]">
          Real stories from high school competitors.
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-ink-muted">
          Honest interviews and student-written experiences about competitions,
          from the people who actually did them.
        </p>
        <div className="mt-6 flex flex-wrap gap-4 text-sm">
          <Link href="/explore" className="text-link font-medium">
            Browse stories
          </Link>
          <Link href="/submit" className="text-link font-medium">
            Submit yours
          </Link>
        </div>
      </div>
    </section>
  );
}
