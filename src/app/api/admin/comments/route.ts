import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { createAdminSupabaseClient } from "@/lib/supabase";

export async function GET() {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const supabase = createAdminSupabaseClient();
  if (!supabase) {
    return NextResponse.json(
      { error: "Supabase is not configured." },
      { status: 503 }
    );
  }

  const { data, error } = await supabase
    .from("comments")
    .select("*")
    .order("submitted_at", { ascending: false });

  if (error) {
    console.error("Failed to load admin comments:", error);
    return NextResponse.json({ error: "Could not load comments." }, { status: 500 });
  }

  return NextResponse.json({ comments: data ?? [] });
}

export async function PATCH(request: Request) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const supabase = createAdminSupabaseClient();
  if (!supabase) {
    return NextResponse.json(
      { error: "Supabase is not configured." },
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
  const id = String(data.id ?? "").trim();
  if (!id) {
    return NextResponse.json({ error: "Missing comment id." }, { status: 400 });
  }

  const updates: Record<string, unknown> = {};

  if (typeof data.approved === "boolean") {
    updates.approved = data.approved;
    if (data.approved && !data.displayed_at) {
      updates.displayed_at = new Date().toISOString();
    }
  }

  if (typeof data.displayed_at === "string" && data.displayed_at) {
    updates.displayed_at = data.displayed_at;
  }

  if (Object.keys(updates).length === 0) {
    return NextResponse.json({ error: "No updates provided." }, { status: 400 });
  }

  const { data: updated, error } = await supabase
    .from("comments")
    .update(updates)
    .eq("id", id)
    .select("*")
    .single();

  if (error) {
    console.error("Failed to update comment:", error);
    return NextResponse.json({ error: "Could not update comment." }, { status: 500 });
  }

  return NextResponse.json({ comment: updated });
}

export async function DELETE(request: Request) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const supabase = createAdminSupabaseClient();
  if (!supabase) {
    return NextResponse.json(
      { error: "Supabase is not configured." },
      { status: 503 }
    );
  }

  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (!id) {
    return NextResponse.json({ error: "Missing comment id." }, { status: 400 });
  }

  const { error } = await supabase.from("comments").delete().eq("id", id);
  if (error) {
    console.error("Failed to delete comment:", error);
    return NextResponse.json({ error: "Could not delete comment." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
