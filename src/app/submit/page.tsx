import type { Metadata } from "next";
import { SubmitForm } from "@/components/SubmitForm";

export const metadata: Metadata = {
  title: "Submit Your Experience",
  description: "Share your honest high school competition experience with future competitors.",
  openGraph: {
    title: "Submit Your Experience",
    description: "Share your honest high school competition experience with future competitors.",
    url: "/submit",
  },
  alternates: { canonical: "/submit" },
};

export default function SubmitPage() {
  return (
    <section className="form-container py-10 sm:py-12">
      <h1 className="font-serif text-2xl font-bold text-ink sm:text-3xl">
        Submit your experience
      </h1>
      <p className="mt-2 text-base text-ink-muted">
        Help the next student understand what a competition is really like.
      </p>

      <p className="mt-6 text-sm text-ink-muted">
        Every story is reviewed before publishing. Expect a response within one week.
      </p>

      <div className="mt-8">
        <SubmitForm />
      </div>
    </section>
  );
}
