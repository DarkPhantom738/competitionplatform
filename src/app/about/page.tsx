import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT_EMAIL } from "@/lib/submissions";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Beyond the Medal — a student-run archive of honest competition experiences.",
  openGraph: {
    title: "About Beyond the Medal",
    description: "Learn about Beyond the Medal — a student-run archive of honest competition experiences.",
    url: "/about",
  },
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <article className="form-container py-10 sm:py-12">
      <h1 className="font-serif text-2xl font-bold text-ink sm:text-3xl">
        About Beyond the Medal
      </h1>
      <p className="mt-2 text-base text-ink-muted">
        A student-run publication collecting honest competition experiences.
      </p>

      <div className="prose-article mt-8">
        <p>
          Many high schoolers participate in competitions. Although many places highlight
          the enjoyment and the experiences of past winners, it&apos;s rare to find how
          experiences felt to the general public who weren&apos;t as successful.
        </p>
        <p>
          How disappointing was it to miss qualifying for the next level of a competition
          by one place? Was the months of endless preparation worth it? What would someone
          do differently if they could start over? What was an unexpected pleasant surprise
          of deciding to participate in a specific competition?
        </p>
        <p>
          Beyond the Medal exists to answer those questions.
        </p>
        <p>
          We collect honest stories from competitors of every level, not just champions.
          Through written reflections and interviews, we encourage students to share their
          setbacks, breakthroughs, regrets, friendships, etc.
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
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-link font-medium">
            Get in touch
          </a>
        </div>
      </div>
    </article>
  );
}
