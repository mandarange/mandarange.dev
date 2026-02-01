import { createBrowserClient, createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabasePublishableKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!;
const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY!;

/**
 * Client for Browser/Client Components.
 * Uses the new Publishable Key.
 */
export const createClient = () =>
  createBrowserClient(supabaseUrl, supabasePublishableKey);

/**
 * Client for Server Components, Actions, and Route Handlers.
 * Handles cookie management for SSR.
 */
export const createClientServer = async () => {
  const cookieStore = await cookies();

  return createServerClient(supabaseUrl, supabasePublishableKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options)
          );
        } catch {
          // Ignore if called from Server Component
        }
      },
    },
  });
};

/**
 * Client for static generation (build time).
 * Does not use cookies.
 */
export const createClientStatic = () =>
  createBrowserClient(supabaseUrl, supabasePublishableKey);

/**
 * Admin client for secure server-side operations.
 * Uses the new Secret Key.
 * ONLY use this on the server.
 */
export const createAdminClient = () =>
  createBrowserClient(supabaseUrl, supabaseSecretKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
