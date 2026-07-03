import { NextResponse } from "next/server";
import { createPublicSupabaseClient } from "@/lib/supabase";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const storySlug = searchParams.get("storySlug");

  if (!storySlug) {
    return NextResponse.json({ error: "Missing storySlug." }, { status: 400 });
  }

  const supabase = createPublicSupabaseClient();
  if (!supabase) {
    return NextResponse.json({ comments: [] });
  }

  const { data, error } = await supabase
    .from("comments")
    .select("id, story_slug, author_name, body, displayed_at")
    .eq("story_slug", storySlug)
    .eq("approved", true)
    .order("displayed_at", { ascending: true });

  if (error) {
    console.error("Failed to load comments:", error);
    return NextResponse.json({ error: "Could not load comments." }, { status: 500 });
  }

  return NextResponse.json({ comments: data ?? [] });
}

export async function POST(request: Request) {
  const supabase = createPublicSupabaseClient();
  if (!supabase) {
    return NextResponse.json(
      { error: "Comments are not configured yet." },
      { status: 503 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const data = body as Record<string, unknown>;
  const storySlug = String(data.storySlug ?? "").trim();
  const commentBody = String(data.body ?? "").trim();
  const authorName = String(data.authorName ?? "").trim() || "Anonymous";

  if (!storySlug || !commentBody) {
    return NextResponse.json(
      { error: "Story and comment text are required." },
      { status: 400 }
    );
  }

  if (commentBody.length > 2000) {
    return NextResponse.json(
      { error: "Comment is too long (max 2000 characters)." },
      { status: 400 }
    );
  }

  const { error } = await supabase.from("comments").insert({
    story_slug: storySlug,
    author_name: authorName.slice(0, 80),
    body: commentBody,
    approved: false,
  });

  if (error) {
    console.error("Failed to submit comment:", error);
    return NextResponse.json(
      { error: "Could not submit comment. Try again." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
