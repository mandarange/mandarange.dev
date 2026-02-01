"use server";

import { createClientServer } from "@/lib/supabase-server";

/**
 * Server Action for contact form submission.
 * Uses the secure server-side client with Publishable Key.
 * (Note: If RLS is enabled and public insert is allowed, 
 * this works with the publishable key).
 */
export async function submitContactForm(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    throw new Error("Missing required fields");
  }

  // Create a server-side client for Next.js 15
  const supabase = await createClientServer();

  const { error } = await supabase.from("contact_submissions").insert([
    { name, email, message },
  ]);

  if (error) {
    console.error("Error submitting contact form:", error);
    throw new Error("Failed to submit message: " + error.message);
  }

  return { success: true };
}
