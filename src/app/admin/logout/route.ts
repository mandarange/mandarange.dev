import { createClientServer } from "@/lib/supabase-server";
import { redirect } from "next/navigation";

export async function POST() {
  const supabase = await createClientServer();
  await supabase.auth.signOut();
  redirect("/admin/login");
}
