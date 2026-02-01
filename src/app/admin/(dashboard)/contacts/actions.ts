"use server";

import { createClientServer } from "@/lib/supabase-server";
import { revalidatePath } from "next/cache";

export async function deleteContact(id: string) {
  const supabase = await createClientServer();
  await supabase.from("contact_submissions").delete().eq("id", id);
  revalidatePath("/admin/contacts");
}
