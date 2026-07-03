"use client";

import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import type { Domain } from "@/data/competitions";
import { stories } from "@/data/stories";
import { ArticleFeed } from "./ArticleFeed";
import { FilterBar, filterStories, type FilterState } from "./FilterBar";

const defaultFilters: FilterState = {
  search: "",
  domain: "All",
  competition: "",
  grade: "All",
};

export function StoryFilters() {
  const searchParams = useSearchParams();
  const [filters, setFilters] = useState<FilterState>(defaultFilters);

  useEffect(() => {
    const domainParam = searchParams.get("domain");
    if (domainParam === "Academics" || domainParam === "Sports") {
      setFilters((prev) => ({ ...prev, domain: domainParam as Domain }));
    }
  }, [searchParams]);

  const filtered = useMemo(
    () =>
      filterStories(stories, filters).sort((a, b) =>
        b.publishedAt.localeCompare(a.publishedAt)
      ),
    [filters]
  );

  return (
    <div>
      <FilterBar filters={filters} onChange={setFilters} />

      <p className="mt-6 text-sm text-ink-faint">
        {filtered.length} {filtered.length === 1 ? "story" : "stories"}
      </p>

      <ArticleFeed stories={filtered} />
    </div>
  );
}
