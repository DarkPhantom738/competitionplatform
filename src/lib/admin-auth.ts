import { cookies } from "next/headers";

export const ADMIN_COOKIE = "btm_admin";

export function isAdminPasswordValid(password: string): boolean {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) return false;
  return password === expected;
}

export async function isAdminAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  return cookieStore.get(ADMIN_COOKIE)?.value === "1";
}
