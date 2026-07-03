"use client";

import { useCallback, useEffect, useState } from "react";
import type { CommentRow } from "@/lib/supabase";
import { formatCommentDateTime, fromDatetimeLocalValue, toDatetimeLocalValue } from "@/lib/utils";

export function AdminCommentsPanel() {
  const [comments, setComments] = useState<CommentRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [displayTimes, setDisplayTimes] = useState<Record<string, string>>({});

  const loadComments = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/admin/comments");
      const result = (await response.json()) as {
        comments?: CommentRow[];
        error?: string;
      };

      if (!response.ok) {
        setError(result.error ?? "Could not load comments.");
        return;
      }

      const rows = result.comments ?? [];
      setComments(rows);
      setDisplayTimes(
        Object.fromEntries(
          rows.map((comment) => [
            comment.id,
            toDatetimeLocalValue(comment.displayed_at ?? comment.submitted_at),
          ])
        )
      );
    } catch {
      setError("Could not reach the server.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadComments();
  }, [loadComments]);

  async function approveComment(id: string) {
    const displayedAt = fromDatetimeLocalValue(
      displayTimes[id] ?? toDatetimeLocalValue(new Date().toISOString())
    );

    const response = await fetch("/api/admin/comments", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, approved: true, displayed_at: displayedAt }),
    });

    if (!response.ok) {
      const result = (await response.json()) as { error?: string };
      setError(result.error ?? "Could not approve comment.");
      return;
    }

    await loadComments();
  }

  async function updateDisplayTime(id: string) {
    const displayedAt = fromDatetimeLocalValue(displayTimes[id]);
    const response = await fetch("/api/admin/comments", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, displayed_at: displayedAt }),
    });

    if (!response.ok) {
      const result = (await response.json()) as { error?: string };
      setError(result.error ?? "Could not update time.");
      return;
    }

    await loadComments();
  }

  async function deleteComment(id: string) {
    if (!window.confirm("Delete this comment permanently?")) return;

    const response = await fetch(`/api/admin/comments?id=${encodeURIComponent(id)}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      const result = (await response.json()) as { error?: string };
      setError(result.error ?? "Could not delete comment.");
      return;
    }

    await loadComments();
  }

  const pending = comments.filter((comment) => !comment.approved);
  const approved = comments.filter((comment) => comment.approved);

  if (loading) {
    return <p className="text-sm text-ink-muted">Loading comments...</p>;
  }

  return (
    <div className="space-y-10">
      {error && (
        <p className="border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          {error}
        </p>
      )}

      <section>
        <h2 className="font-serif text-xl font-semibold text-ink">
          Pending ({pending.length})
        </h2>
        {pending.length === 0 ? (
          <p className="mt-3 text-sm text-ink-muted">No comments waiting for review.</p>
        ) : (
          <ul className="mt-4 space-y-6">
            {pending.map((comment) => (
              <li key={comment.id} className="border border-border p-4">
                <p className="text-sm text-ink-muted">
                  <span className="font-medium text-ink">{comment.author_name}</span>
                  {" · "}
                  {comment.story_slug}
                  {" · submitted "}
                  {formatCommentDateTime(comment.submitted_at)}
                </p>
                <p className="mt-3 whitespace-pre-wrap text-base text-ink">{comment.body}</p>

                <div className="mt-4 flex flex-wrap items-end gap-3">
                  <div>
                    <label className="mb-1 block text-xs text-ink-muted">
                      Display time (what readers see)
                    </label>
                    <input
                      type="datetime-local"
                      value={displayTimes[comment.id] ?? ""}
                      onChange={(e) =>
                        setDisplayTimes((current) => ({
                          ...current,
                          [comment.id]: e.target.value,
                        }))
                      }
                      className="input-plain"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => approveComment(comment.id)}
                    className="border border-ink bg-ink px-4 py-2 text-sm font-medium text-white hover:bg-ink/90"
                  >
                    Approve
                  </button>
                  <button
                    type="button"
                    onClick={() => deleteComment(comment.id)}
                    className="px-2 py-2 text-sm text-ink-muted hover:text-ink"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section>
        <h2 className="font-serif text-xl font-semibold text-ink">
          Published ({approved.length})
        </h2>
        {approved.length === 0 ? (
          <p className="mt-3 text-sm text-ink-muted">No published comments yet.</p>
        ) : (
          <ul className="mt-4 space-y-6">
            {approved.map((comment) => (
              <li key={comment.id} className="border border-border p-4">
                <p className="text-sm text-ink-muted">
                  <span className="font-medium text-ink">{comment.author_name}</span>
                  {" · "}
                  {comment.story_slug}
                </p>
                <p className="mt-3 whitespace-pre-wrap text-base text-ink">{comment.body}</p>

                <div className="mt-4 flex flex-wrap items-end gap-3">
                  <div>
                    <label className="mb-1 block text-xs text-ink-muted">
                      Display time
                    </label>
                    <input
                      type="datetime-local"
                      value={displayTimes[comment.id] ?? ""}
                      onChange={(e) =>
                        setDisplayTimes((current) => ({
                          ...current,
                          [comment.id]: e.target.value,
                        }))
                      }
                      className="input-plain"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => updateDisplayTime(comment.id)}
                    className="border border-border px-4 py-2 text-sm font-medium text-ink hover:bg-border-light"
                  >
                    Save time
                  </button>
                  <button
                    type="button"
                    onClick={() => deleteComment(comment.id)}
                    className="px-2 py-2 text-sm text-ink-muted hover:text-ink"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
