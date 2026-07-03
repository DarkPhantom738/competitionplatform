"use client";

import type { Domain, Grade } from "@/data/competitions";
import { competitions, domains, grades } from "@/data/competitions";

export interface FilterState {
  search: string;
  domain: Domain | "All";
  competition: string;
  grade: Grade | "All";
}

interface FilterBarProps {
  filters: FilterState;
  onChange: (filters: FilterState) => void;
}

export function FilterBar({ filters, onChange }: FilterBarProps) {
  const competitionOptions =
    filters.domain === "All"
      ? competitions
      : competitions.filter((c) => c.domain === filters.domain);

  return (
    <div className="border-b border-border pb-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-center">
        <div className="flex-1">
          <input
            type="search"
            placeholder="Search by title, competition, or topic..."
            value={filters.search}
            onChange={(e) => onChange({ ...filters, search: e.target.value })}
            className="input-plain w-full"
          />
        </div>

        <div className="flex flex-wrap gap-3">
          <select
            value={filters.domain}
            onChange={(e) =>
              onChange({
                ...filters,
                domain: e.target.value as Domain | "All",
                competition: "",
              })
            }
            className="select-plain"
            aria-label="Filter by domain"
          >
            <option value="All">All topics</option>
            {domains.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>

          <select
            value={filters.competition}
            onChange={(e) => onChange({ ...filters, competition: e.target.value })}
            className="select-plain"
            aria-label="Filter by competition"
          >
            <option value="">All competitions</option>
            {competitionOptions.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.shortName}
              </option>
            ))}
          </select>

          <select
            value={filters.grade}
            onChange={(e) =>
              onChange({ ...filters, grade: e.target.value as Grade | "All" })
            }
            className="select-plain"
            aria-label="Filter by grade"
          >
            <option value="All">All grades</option>
            {grades.map((g) => (
              <option key={g.value} value={g.value}>
                {g.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export function filterStories<T extends {
  title: string;
  competitionTag: string;
  competitionSlug: string;
  domain: Domain;
  grade: Grade;
  excerpt: string;
}>(
  items: T[],
  filters: FilterState
): T[] {
  const q = filters.search.toLowerCase();

  return items.filter((item) => {
    const matchesSearch =
      q === "" ||
      item.title.toLowerCase().includes(q) ||
      item.competitionTag.toLowerCase().includes(q) ||
      item.excerpt.toLowerCase().includes(q);

    const matchesDomain =
      filters.domain === "All" || item.domain === filters.domain;

    const matchesCompetition =
      filters.competition === "" || item.competitionSlug === filters.competition;

    const matchesGrade =
      filters.grade === "All" || item.grade === filters.grade;

    return matchesSearch && matchesDomain && matchesCompetition && matchesGrade;
  });
}
