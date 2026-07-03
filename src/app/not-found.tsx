import Link from "next/link";

export default function NotFound() {
  return (
    <section className="article-container flex min-h-[50vh] flex-col items-center justify-center py-20 text-center">
      <h1 className="font-serif text-2xl font-bold text-ink">Page not found</h1>
      <p className="mt-3 text-sm text-ink-muted">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link href="/" className="text-link mt-6 text-sm font-medium">
        Back to home
      </Link>
    </section>
  );
}
