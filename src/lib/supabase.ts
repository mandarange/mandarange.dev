import { createBrowserClient } from "@supabase/ssr";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabasePublishableKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!;

/**
 * Client for Browser/Client Components.
 * Uses the new Publishable Key.
 */
export const createClient = () =>
  createBrowserClient(supabaseUrl, supabasePublishableKey);
