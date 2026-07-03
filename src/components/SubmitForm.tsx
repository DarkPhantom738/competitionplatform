"use client";

import { useState, FormEvent } from "react";

export function SubmitForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="py-8 text-center">
        <h3 className="font-serif text-xl font-semibold text-ink">Thanks for sharing</h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-muted">
          Your submission is in our review queue. We moderate every story before
          publishing. You&apos;ll hear back within a week.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <p className="text-sm text-ink-muted leading-relaxed">
        All submissions are reviewed before publishing. Share what was real — the good,
        the hard, and what you wish someone had told you.
      </p>

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
          <input id="competition" name="competition" required className="input-plain" placeholder="e.g. FTC, USACO, Track" />
        </div>
        <div>
          <label htmlFor="year" className="mb-1.5 block text-sm text-ink">
            Year participated
          </label>
          <input id="year" name="year" required className="input-plain" placeholder="e.g. 2024–2025" />
        </div>
      </div>

      <div>
        <label htmlFor="role" className="mb-1.5 block text-sm text-ink">
          Role / result <span className="text-ink-faint">(optional)</span>
        </label>
        <input id="role" name="role" className="input-plain" placeholder="e.g. Team captain, qualified for states" />
      </div>

      <div>
        <label htmlFor="title" className="mb-1.5 block text-sm text-ink">
          Story title
        </label>
        <input id="title" name="title" required className="input-plain" placeholder="What would you title your experience?" />
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
          I give permission for Competition Stories to review, edit lightly for clarity,
          and publish my submission. I confirm this is my honest experience.
        </span>
      </label>

      <button
        type="submit"
        className="border border-ink bg-ink px-6 py-2.5 text-sm font-medium text-white hover:bg-ink/90 transition-colors"
      >
        Submit for review
      </button>
    </form>
  );
}
