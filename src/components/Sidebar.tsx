import Link from "next/link";
import type { Interview } from "@/data/interviews";
import type { Story } from "@/data/stories";

interface SidebarProps {
  featuredInterview?: Interview;
  featuredStory?: Story;
  showAbout?: boolean;
}

export function Sidebar({
  featuredInterview,
  featuredStory,
  showAbout = true,
}: SidebarProps) {
  return (
    <aside className="sidebar space-y-8 lg:border-l lg:border-border lg:pl-8">
      {featuredInterview && (
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-wide text-ink-faint">
            Featured interview
          </h2>
          <Link href={`/interviews/${featuredInterview.slug}`} className="mt-3 block group">
            <p className="text-sm text-ink-muted">
              {featuredInterview.studentName} · {featuredInterview.duration}
            </p>
            <h3 className="mt-1 font-serif text-base font-semibold text-ink group-hover:text-accent transition-colors leading-snug">
              {featuredInterview.title}
            </h3>
            <p className="mt-2 text-sm text-ink-muted line-clamp-3 leading-relaxed">
              {featuredInterview.description}
            </p>
            <span className="mt-2 inline-block text-sm text-link">
              Watch interview →
            </span>
          </Link>
        </div>
      )}

      {!featuredInterview && featuredStory && (
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-wide text-ink-faint">
            Featured story
          </h2>
          <Link href={`/explore/${featuredStory.slug}`} className="mt-3 block group">
            <p className="text-sm text-ink-muted">
              {featuredStory.authorName} · {featuredStory.competitionTag}
            </p>
            <h3 className="mt-1 font-serif text-base font-semibold text-ink group-hover:text-accent transition-colors leading-snug">
              {featuredStory.title}
            </h3>
            <p className="mt-2 text-sm text-ink-muted line-clamp-3 leading-relaxed">
              {featuredStory.excerpt}
            </p>
            <span className="mt-2 inline-block text-sm text-link">
              Read story →
            </span>
          </Link>
        </div>
      )}

      <div>
        <h2 className="text-xs font-semibold uppercase tracking-wide text-ink-faint">
          Browse by topic
        </h2>
        <ul className="mt-3 space-y-2 text-sm">
          <li>
            <Link href="/explore?domain=Academics" className="text-ink-muted hover:text-accent transition-colors">
              Academics
            </Link>
          </li>
          <li>
            <Link href="/explore?domain=Sports" className="text-ink-muted hover:text-accent transition-colors">
              Sports
            </Link>
          </li>
          <li>
            <Link href="/submit" className="text-ink-muted hover:text-accent transition-colors">
              Submit a story
            </Link>
          </li>
        </ul>
      </div>

      {showAbout && (
        <div>
          <h2 className="text-xs font-semibold uppercase tracking-wide text-ink-faint">
            About
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-muted">
            Every competition has a winner, but every competitor has a story. At Beyond
            the Medal, we believe that the most valuable lessons are independent of a
            person&apos;s merit.
          </p>
          <Link href="/about" className="mt-2 inline-block text-sm text-link">
            Learn more →
          </Link>
        </div>
      )}
    </aside>
  );
}
