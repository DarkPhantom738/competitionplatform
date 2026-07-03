import type { Metadata } from "next";
import { AdminCommentsPage } from "@/components/AdminCommentsPage";

export const metadata: Metadata = {
  title: "Moderate Comments",
  robots: { index: false, follow: false },
};

export default function AdminCommentsRoute() {
  return (
    <section className="form-container py-10 sm:py-12">
      <h1 className="font-serif text-2xl font-bold text-ink sm:text-3xl">
        Moderate comments
      </h1>
      <div className="mt-8">
        <AdminCommentsPage />
      </div>
    </section>
  );
}
