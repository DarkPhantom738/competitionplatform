"use client";

import { useCallback, useEffect, useState } from "react";
import { CommentForm } from "@/components/CommentForm";
import { formatCommentDateTime } from "@/lib/utils";

interface Comment {
  id: string;
  author_name: string;
  body: string;
  displayed_at: string;
}

interface Props {
  storySlug: string;
}

export function CommentSection({ storySlug }: Props) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [configured, setConfigured] = useState(true);

  const loadComments = useCallback(async () => {
    try {
      const response = await fetch(`/api/comments?storySlug=${encodeURIComponent(storySlug)}`);
      const result = (await response.json()) as {
        comments?: Comment[];
        error?: string;
      };

      if (response.status === 503) {
        setConfigured(false);
        return;
      }

      setComments(result.comments ?? []);
    } catch {
      setConfigured(false);
    } finally {
      setLoading(false);
    }
  }, [storySlug]);

  useEffect(() => {
    loadComments();
  }, [loadComments]);

  return (
    <section className="article-container border-t border-border py-10 sm:py-12">
      <h2 className="font-serif text-2xl font-semibold text-ink">Comments</h2>

      {loading ? (
        <p className="mt-4 text-sm text-ink-muted">Loading comments...</p>
      ) : comments.length === 0 ? (
        <p className="mt-4 text-sm text-ink-muted">No comments yet. Be the first.</p>
      ) : (
        <ul className="mt-6 space-y-6">
          {comments.map((comment) => (
            <li key={comment.id} className="border-b border-border pb-6 last:border-0">
              <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 text-sm">
                <span className="font-medium text-ink">{comment.author_name}</span>
                {comment.displayed_at && (
                  <>
                    <span className="text-ink-faint">·</span>
                    <time
                      dateTime={comment.displayed_at}
                      className="text-ink-muted"
                    >
                      {formatCommentDateTime(comment.displayed_at)}
                    </time>
                  </>
                )}
              </div>
              <p className="mt-2 text-base leading-relaxed text-ink whitespace-pre-wrap">
                {comment.body}
              </p>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-8">
        {configured ? (
          <CommentForm storySlug={storySlug} onSubmitted={loadComments} />
        ) : (
          <p className="text-sm text-ink-muted">
            Comments are not live yet. Check back soon.
          </p>
        )}
      </div>
    </section>
  );
}
