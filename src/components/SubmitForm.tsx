"use client";

import { useState, FormEvent } from "react";
import type { Domain } from "@/data/competitions";

export function SubmitForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? ""),
      grade: String(formData.get("grade") ?? ""),
      competition: String(formData.get("competition") ?? ""),
      domain: String(formData.get("domain") ?? "Academics") as Domain,
      year: String(formData.get("year") ?? ""),
      role: String(formData.get("role") ?? ""),
      title: String(formData.get("title") ?? ""),
      excerpt: String(formData.get("excerpt") ?? ""),
      wentWell: String(formData.get("wentWell") ?? ""),
      difficult: String(formData.get("difficult") ?? ""),
      wishKnew: String(formData.get("wishKnew") ?? ""),
      advice: String(formData.get("advice") ?? ""),
    };

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as { error?: string };
      if (!response.ok) {
        setError(result.error ?? "Could not send submission. Try again.");
        return;
      }

      setSubmitted(true);
      form.reset();
    } catch {
      setError("Could not reach the server. Try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="py-4">
        <p className="font-serif text-xl font-semibold text-ink">
          Thank you! Your response has been submitted!
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm text-ink-muted hover:text-ink transition-colors"
        >
          Submit another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <p className="text-sm text-ink-muted leading-relaxed">
        All submissions are reviewed before publishing. Share what was real — the good,
        the hard, and what you wish someone had told you.
      </p>

      {error && (
        <p className="border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          {error}
        </p>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm text-ink">
            Your name
          </label>
          <input id="name" name="name" required className="input-plain" placeholder="First name or initials" />
        </div>
        <div>
          <label htmlFor="grade" className="mb-1.5 block text-sm text-ink">
            Grade
          </label>
          <select id="grade" name="grade" required className="select-plain w-full">
            <option value="">Select grade</option>
            <option value="9">9th grade</option>
            <option value="10">10th grade</option>
            <option value="11">11th grade</option>
            <option value="12">12th grade</option>
            <option value="graduated">Recently graduated</option>
          </select>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="competition" className="mb-1.5 block text-sm text-ink">
            Competition
          </label>
          <input id="competition" name="competition" required className="input-plain" placeholder="e.g. FTC, USACO, AMC" />
        </div>
        <div>
          <label htmlFor="domain" className="mb-1.5 block text-sm text-ink">
            Category
          </label>
          <select id="domain" name="domain" required className="select-plain w-full">
            <option value="Academics">Academics</option>
            <option value="Sports">Sports</option>
          </select>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="year" className="mb-1.5 block text-sm text-ink">
            Year participated
          </label>
          <input id="year" name="year" required className="input-plain" placeholder="e.g. 2024–2025" />
        </div>
        <div>
          <label htmlFor="role" className="mb-1.5 block text-sm text-ink">
            Role / result <span className="text-ink-faint">(optional)</span>
          </label>
          <input id="role" name="role" className="input-plain" placeholder="e.g. Team captain, qualified for states" />
        </div>
      </div>

      <div>
        <label htmlFor="title" className="mb-1.5 block text-sm text-ink">
          Story title
        </label>
        <input id="title" name="title" required className="input-plain" placeholder="What would you title your experience?" />
      </div>

      <div>
        <label htmlFor="excerpt" className="mb-1.5 block text-sm text-ink">
          Short preview <span className="text-ink-faint">(optional)</span>
        </label>
        <textarea
          id="excerpt"
          name="excerpt"
          rows={2}
          className="input-plain resize-y"
          placeholder="One or two sentences for the story feed."
        />
      </div>

      <div>
        <label htmlFor="wentWell" className="mb-1.5 block text-sm text-ink">
          What went well?
        </label>
        <textarea id="wentWell" name="wentWell" required rows={3} className="input-plain resize-y" placeholder="The highlights, surprises, or things you'd do again..." />
      </div>

      <div>
        <label htmlFor="difficult" className="mb-1.5 block text-sm text-ink">
          What was difficult?
        </label>
        <textarea id="difficult" name="difficult" required rows={3} className="input-plain resize-y" placeholder="Stress, setbacks, things that were harder than expected..." />
      </div>

      <div>
        <label htmlFor="wishKnew" className="mb-1.5 block text-sm text-ink">
          What do you wish you knew?
        </label>
        <textarea id="wishKnew" name="wishKnew" required rows={3} className="input-plain resize-y" placeholder="Advice you would give your past self..." />
      </div>

      <div>
        <label htmlFor="advice" className="mb-1.5 block text-sm text-ink">
          Advice for future competitors
        </label>
        <textarea id="advice" name="advice" required rows={3} className="input-plain resize-y" placeholder="Anything else you'd want someone starting out to hear..." />
      </div>

      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          name="permission"
          required
          className="mt-1 h-4 w-4 border-border"
        />
        <span className="text-sm text-ink-muted leading-relaxed">
          I give permission for Beyond the Medal to review, edit lightly for clarity,
          and publish my submission. I confirm this is my honest experience.
        </span>
      </label>

      <button
        type="submit"
        disabled={submitting}
        className="border border-ink bg-ink px-6 py-2.5 text-sm font-medium text-white hover:bg-ink/90 transition-colors disabled:cursor-not-allowed disabled:opacity-60"
      >
        {submitting ? "Sending..." : "Submit for review"}
      </button>
    </form>
  );
}
