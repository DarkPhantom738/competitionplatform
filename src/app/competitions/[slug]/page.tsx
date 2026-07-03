import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleFeed } from "@/components/ArticleFeed";
import { getCompetition, competitions } from "@/data/competitions";
import { getStoriesByCompetition } from "@/data/stories";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return competitions.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const competition = getCompetition(slug);
  if (!competition) return { title: "Not Found" };
  return {
    title: competition.name,
    description: `Stories about ${competition.name} from high school students.`,
  };
}

export default async function CompetitionPage({ params }: Props) {
  const { slug } = await params;
  const competition = getCompetition(slug);
  if (!competition) notFound();

  const stories = getStoriesByCompetition(slug);

  return (
    <section className="page-container py-10 sm:py-12">
      <p className="text-sm text-ink-faint">{competition.domain}</p>
      <h1 className="mt-1 font-serif text-2xl font-bold text-ink sm:text-3xl">
        {competition.name}
      </h1>
      <p className="mt-2 text-sm text-ink-muted">
        {stories.length} {stories.length === 1 ? "story" : "stories"}
      </p>

      <div className="mt-8">
        <ArticleFeed stories={stories} />
      </div>
    </section>
  );
}
