import Link from "next/link";
import type { Story } from "@/data/stories";
import { formatDate } from "@/lib/utils";

export function ArticleRow({ story }: { story: Story }) {
  return (
    <Link href={`/explore/${story.slug}`} className="article-row">
      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-ink-muted">
        <span>{story.authorName}</span>
        <span>·</span>
        <span>{story.authorGrade}</span>
        <span>·</span>
        <time dateTime={story.publishedAt}>{formatDate(story.publishedAt)}</time>
        <span>·</span>
        <span>{story.readTime} read</span>
      </div>

      <h2 className="mt-2 font-serif text-xl font-semibold leading-snug text-ink sm:text-2xl">
        {story.title}
      </h2>

      <p className="mt-2 line-clamp-2 text-base leading-relaxed text-ink-muted">
        {story.excerpt}
      </p>

      <div className="mt-3 flex flex-wrap gap-x-3 text-sm text-ink-faint">
        <span>{story.competitionTag}</span>
        <span>{story.domain}</span>
      </div>
    </Link>
  );
}

export function ArticleFeed({ stories }: { stories: Story[] }) {
  if (stories.length === 0) {
    return (
      <p className="py-12 text-center text-sm text-ink-muted">
        No stories match your filters.
      </p>
    );
  }

  return (
    <div>
      {stories.map((story) => (
        <ArticleRow key={story.slug} story={story} />
      ))}
    </div>
  );
}
