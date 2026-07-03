import type { Metadata } from "next";
import { InterviewFeed } from "@/components/InterviewFeed";
import { Sidebar } from "@/components/Sidebar";
import { getFeaturedInterviews, getPublishedInterviews } from "@/data/interviews";
import { getFeaturedStories } from "@/data/stories";

export const metadata: Metadata = {
  title: "Interviews",
  description: "Video interviews with high school students about their competition experiences.",
};

export default function InterviewsPage() {
  const publishedInterviews = getPublishedInterviews();
  const featuredInterview = getFeaturedInterviews()[0];
  const featuredStory = getFeaturedStories()[0];

  return (
    <section className="page-container py-10 sm:py-12">
      <div className="layout-with-sidebar">
        <div>
          <h1 className="font-serif text-2xl font-bold text-ink sm:text-3xl">Interviews</h1>
          <p className="mt-2 text-base text-ink-muted">
            Conversations with students about what competitions actually felt like.
          </p>
          <div className="mt-8">
            <InterviewFeed interviews={publishedInterviews} />
          </div>
        </div>

        <Sidebar
          featuredInterview={featuredInterview}
          featuredStory={featuredStory}
          showAbout
        />
      </div>
    </section>
  );
}
