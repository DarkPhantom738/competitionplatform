"use client";

import { FormEvent, useEffect, useState } from "react";
import { AdminCommentsPanel } from "@/components/AdminCommentsPanel";

export function AdminCommentsPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [checking, setChecking] = useState(true);
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function checkAuth() {
    try {
      const response = await fetch("/api/admin/comments");
      setAuthenticated(response.ok);
    } catch {
      setAuthenticated(false);
    } finally {
      setChecking(false);
    }
  }

  useEffect(() => {
    checkAuth();
  }, []);

  async function handleLogin(e: FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const result = (await response.json()) as { error?: string };
      if (!response.ok) {
        setError(result.error ?? "Login failed.");
        return;
      }

      setAuthenticated(true);
      setPassword("");
    } catch {
      setError("Could not reach the server.");
    } finally {
      setSubmitting(false);
    }
  }

  async function handleLogout() {
    await fetch("/api/admin/login", { method: "DELETE" });
    setAuthenticated(false);
  }

  if (checking) {
    return <p className="text-sm text-ink-muted">Checking access...</p>;
  }

  if (!authenticated) {
    return (
      <form onSubmit={handleLogin} className="max-w-sm space-y-4">
        <p className="text-sm text-ink-muted">
          Enter the admin password to review comments and set display times.
        </p>
        {error && (
          <p className="border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
            {error}
          </p>
        )}
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-plain"
          placeholder="Admin password"
          required
        />
        <button
          type="submit"
          disabled={submitting}
          className="border border-ink bg-ink px-5 py-2 text-sm font-medium text-white hover:bg-ink/90 disabled:opacity-60"
        >
          {submitting ? "Signing in..." : "Sign in"}
        </button>
      </form>
    );
  }

  return (
    <div>
      <div className="mb-8 flex items-center justify-between gap-4">
        <p className="text-sm text-ink-muted">
          Approve comments before they go live. You can change the display time readers see.
        </p>
        <button
          type="button"
          onClick={handleLogout}
          className="text-sm text-ink-muted hover:text-ink"
        >
          Sign out
        </button>
      </div>
      <AdminCommentsPanel />
    </div>
  );
}
