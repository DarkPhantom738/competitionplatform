"use client";

import { useState, FormEvent } from "react";

interface Props {
  storySlug: string;
  onSubmitted?: () => void;
}

export function CommentForm({ storySlug, onSubmitted }: Props) {
  const [authorName, setAuthorName] = useState("");
  const [body, setBody] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          storySlug,
          authorName: authorName.trim() || "Anonymous",
          body: body.trim(),
        }),
      });

      const result = (await response.json()) as { error?: string };
      if (!response.ok) {
        setError(result.error ?? "Could not submit comment.");
        return;
      }

      setSubmitted(true);
      setBody("");
      onSubmitted?.();
    } catch {
      setError("Could not reach the server. Try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <p className="border border-border bg-border-light px-4 py-3 text-sm text-ink-muted">
        Thanks — your comment was sent for review and will appear after moderation.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <p className="border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          {error}
        </p>
      )}

      <div>
        <label htmlFor="comment-name" className="mb-1.5 block text-sm text-ink">
          Name <span className="text-ink-faint">(optional)</span>
        </label>
        <input
          id="comment-name"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
          className="input-plain"
          placeholder="Anonymous"
          maxLength={80}
        />
      </div>

      <div>
        <label htmlFor="comment-body" className="mb-1.5 block text-sm text-ink">
          Comment
        </label>
        <textarea
          id="comment-body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
          rows={4}
          className="input-plain resize-y"
          placeholder="Share your thoughts..."
          maxLength={2000}
        />
      </div>

      <button
        type="submit"
        disabled={submitting || !body.trim()}
        className="border border-ink bg-ink px-5 py-2 text-sm font-medium text-white hover:bg-ink/90 transition-colors disabled:cursor-not-allowed disabled:opacity-60"
      >
        {submitting ? "Posting..." : "Post comment"}
      </button>
    </form>
  );
}
