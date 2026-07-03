import Link from "next/link";
import { getFeaturedInterviews } from "@/data/interviews";
import { getFeaturedStories, getRecentStories } from "@/data/stories";
import { ArticleFeed } from "./ArticleFeed";
import { Hero } from "./Hero";
import { Sidebar } from "./Sidebar";

export function HomePage() {
  const recentStories = getRecentStories(10);
  const featuredInterview = getFeaturedInterviews()[0];
  const featuredStory = getFeaturedStories()[0];

  return (
    <>
      <Hero />

      <section className="page-container py-10">
        <div className="layout-with-sidebar">
          <div>
            <h2 className="font-serif text-xl font-semibold text-ink">Recent stories</h2>
            <div className="mt-4">
              <ArticleFeed stories={recentStories} />
            </div>
            <div className="py-6">
              <Link href="/explore" className="text-link text-sm font-medium">
                See all stories →
              </Link>
            </div>
          </div>

          <Sidebar
            featuredInterview={featuredInterview}
            featuredStory={featuredStory}
            showAbout
          />
        </div>
      </section>
    </>
  );
}
