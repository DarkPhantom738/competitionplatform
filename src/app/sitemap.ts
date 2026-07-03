import type { MetadataRoute } from "next";
import { competitions } from "@/data/competitions";
import { getPublishedInterviews } from "@/data/interviews";
import { stories } from "@/data/stories";
import { getSiteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: siteUrl, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/explore`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/submit`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteUrl}/interviews`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteUrl}/competitions`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];

  const storyPages: MetadataRoute.Sitemap = stories.map((story) => ({
    url: `${siteUrl}/explore/${story.slug}`,
    lastModified: new Date(story.publishedAt),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const competitionPages: MetadataRoute.Sitemap = competitions.map((competition) => ({
    url: `${siteUrl}/competitions/${competition.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const interviewPages: MetadataRoute.Sitemap = getPublishedInterviews().map((interview) => ({
    url: `${siteUrl}/interviews/${interview.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...storyPages, ...competitionPages, ...interviewPages];
}
