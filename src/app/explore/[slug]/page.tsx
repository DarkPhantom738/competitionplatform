import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getStory } from "@/data/stories";
import { getCompetition } from "@/data/competitions";
import { formatDate } from "@/lib/utils";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const story = getStory(slug);
  if (!story) return { title: "Story Not Found" };
  return { title: story.title, description: story.excerpt };
}

export default async function StoryPage({ params }: Props) {
  const { slug } = await params;
  const story = getStory(slug);
  if (!story) notFound();

  const competition = getCompetition(story.competitionSlug);

  const sections = [
    {
      heading: "What went well",
      text: "Looking back, the best part wasn't the result — it was how much I learned about working under pressure with people I trusted. There were moments I didn't expect to enjoy, and those ended up mattering more than any award.",
    },
    {
      heading: "What was difficult",
      text: "Nobody warned me about the time commitment during the school week, or how easy it is to compare yourself to people who seem to have everything figured out. That part was harder than the actual competition.",
    },
    {
      heading: "What I wish I knew",
      text: "You don't need to have a perfect season to get something meaningful out of this. Starting messy is normal. Finding one person to talk honestly with makes a bigger difference than grinding alone.",
    },
    {
      heading: "Advice for future competitors",
      text: "Go in curious, not desperate to prove something. Document your process — you'll want to remember how you actually felt, not just how it looked from the outside. And if it's not worth it for you, that's a valid conclusion too.",
    },
  ];

  return (
    <article>
      <header className="article-container border-b border-border py-10 sm:py-12">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-ink-muted">
          <span>{story.authorName}</span>
          <span>·</span>
          <span>{story.authorGrade}</span>
          <span>·</span>
          <time dateTime={story.publishedAt}>{formatDate(story.publishedAt)}</time>
          <span>·</span>
          <span>{story.readTime} read</span>
        </div>

        <h1 className="mt-4 font-serif text-3xl font-bold leading-tight text-ink sm:text-4xl">
          {story.title}
        </h1>

        <p className="mt-6 text-xl leading-relaxed text-ink-muted">
          {story.excerpt}
        </p>
      </header>

      <div className="article-container prose-article py-10 sm:py-12">
        {sections.map((section) => (
          <div key={section.heading}>
            <h2>{section.heading}</h2>
            <p>{section.text}</p>
          </div>
        ))}

        <p className="mt-10 border-t border-border pt-6 text-sm text-ink-faint">
          Placeholder content — full stories will be published here after moderation.
        </p>
      </div>

      <footer className="article-container border-t border-border pb-12 pt-6">
        <div className="flex flex-wrap gap-x-4 text-sm text-ink-muted">
          {competition && (
            <Link href={`/competitions/${competition.slug}`} className="text-link">
              {story.competitionTag}
            </Link>
          )}
          <span>{story.domain}</span>
        </div>
        <p className="mt-6">
          <Link href="/submit" className="text-link text-sm">
            Share your own experience →
          </Link>
        </p>
      </footer>
    </article>
  );
}
