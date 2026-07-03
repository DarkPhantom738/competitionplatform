import Link from "next/link";
import type { Interview } from "@/data/interviews";

interface SidebarProps {
  featuredInterview?: Interview;
  showAbout?: boolean;
}

export function Sidebar({
  featuredInterview,
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
            Official sites tell you the rules. We collect honest firsthand accounts
            from students about what competitions actually feel like.
          </p>
          <Link href="/about" className="mt-2 inline-block text-sm text-link">
            Learn more →
          </Link>
        </div>
      )}
    </aside>
  );
}
