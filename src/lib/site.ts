const DEFAULT_SITE_URL = "https://beyondthemedal.vercel.app";

export function getSiteUrl(): string {
  return process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_SITE_URL;
}

export const SITE_NAME = "Beyond the Medal";

export const SITE_DESCRIPTION =
  "Honest reflections on every part of the competition experience — from FTC and USACO to ISEF, DECA, debate, and more.";
