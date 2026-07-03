import type { Metadata } from "next";
import { Suspense } from "react";
import { StoryFilters } from "@/components/StoryFilters";
import { Sidebar } from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "Explore Stories",
  description: "Browse honest student-written experiences about high school competitions.",
};

export default function ExplorePage() {
  return (
    <section className="page-container py-10 sm:py-12">
      <div className="layout-with-sidebar">
        <div>
          <h1 className="font-serif text-2xl font-bold text-ink sm:text-3xl">Stories</h1>
          <p className="mt-2 text-base text-ink-muted">
            Search and filter by topic, competition, or grade.
          </p>
          <div className="mt-8">
            <Suspense fallback={<p className="text-sm text-ink-muted">Loading stories...</p>}>
              <StoryFilters />
            </Suspense>
          </div>
        </div>

        <Sidebar showAbout />
      </div>
    </section>
  );
}
