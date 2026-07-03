import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Competition Stories — a student-run archive of honest competition experiences.",
};

export default function AboutPage() {
  return (
    <article className="form-container py-10 sm:py-12">
      <h1 className="font-serif text-2xl font-bold text-ink sm:text-3xl">
        About Competition Stories
      </h1>
      <p className="mt-2 text-base text-ink-muted">
        A student-run publication collecting honest competition experiences.
      </p>

      <div className="prose-article mt-8">
        <p>
          When you&apos;re deciding whether to join FTC, start USACO, or commit to a research
          fair, the official resources tell you about registration deadlines and event rules.
          What they don&apos;t tell you is how it feels to lose at regionals, whether the time
          commitment is manageable during AP season, or if the experience is worth it even
          without a trophy.
        </p>
        <p>
          Competition Stories exists to fill that gap. We collect written submissions and
          video interviews from students who&apos;ve actually competed — sharing what surprised
          them, what was hard, what they&apos;d do differently, and what they wish someone had
          told them before they started.
        </p>
        <p>
          Think of it as part student magazine, part honest review platform, and part archive
          for the next generation of competitors.
        </p>
      </div>

      <div className="mt-10 border-t border-border pt-8">
        <h2 className="font-serif text-lg font-semibold text-ink">Want to contribute?</h2>
        <p className="mt-2 text-sm text-ink-muted">
          Whether you have a story to write, want to be interviewed, or help moderate
          submissions — we&apos;d love to hear from you.
        </p>
        <div className="mt-4 flex flex-wrap gap-4 text-sm">
          <Link href="/submit" className="text-link font-medium">
            Submit a story
          </Link>
          <a href="mailto:hello@competitionstories.org" className="text-link font-medium">
            Get in touch
          </a>
        </div>
      </div>
    </article>
  );
}
