import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-border bg-white">
      <div className="page-container py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <Link href="/" className="font-serif text-base font-semibold text-ink">
              Competition Stories
            </Link>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-ink-muted">
              Honest experiences from high school competitors. Written and run by students.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-ink-muted">
            <Link href="/about" className="hover:text-ink">About</Link>
            <Link href="/submit" className="hover:text-ink">Submit</Link>
            <Link href="/explore" className="hover:text-ink">Stories</Link>
            <Link href="/interviews" className="hover:text-ink">Interviews</Link>
            <a href="mailto:hello@competitionstories.org" className="hover:text-ink">Contact</a>
          </div>
        </div>

        <p className="mt-8 text-xs text-ink-faint">
          © {new Date().getFullYear()} Competition Stories. All submissions are moderated before publishing.
        </p>
      </div>
    </footer>
  );
}
