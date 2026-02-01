"use server";

import { supabase } from "@/lib/supabase";

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    throw new Error("Missing required fields");
  }

  const { error } = await supabase.from("contact_submissions").insert([
    { name, email, message },
  ]);

  if (error) {
    console.error("Error submitting contact form:", error);
    throw new Error("Failed to submit message");
  }

  return { success: true };
}
