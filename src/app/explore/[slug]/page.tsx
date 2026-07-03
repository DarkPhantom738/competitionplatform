import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getStory } from "@/data/stories";
import { getCompetition } from "@/data/competitions";
import { formatDate } from "@/lib/utils";
import { CommentSection } from "@/components/CommentSection";

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

  const sections = story.sections;

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

      <CommentSection storySlug={slug} />
    </article>
  );
}
