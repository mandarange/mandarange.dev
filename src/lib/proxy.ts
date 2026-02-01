import { createAdminClient } from "./supabase-server";

/**
 * Modern Proxy utility for Supabase operations.
 * Bypasses RLS using the Secret Key on the server.
 */
export async function supabaseProxy(table: string, action: string, data?: any) {
  const adminClient = createAdminClient();

  let query;
  switch (action) {
    case "insert":
      query = adminClient.from(table).insert(data).select();
      break;
    case "select":
      query = adminClient.from(table).select(data?.select || "*").match(data?.match || {});
      break;
    case "update":
      query = adminClient.from(table).update(data).match(data?.match || {});
      break;
    case "delete":
      query = adminClient.from(table).delete().match(data?.match || {});
      break;
    default:
      throw new Error(`Invalid proxy action: ${action}`);
  }

  const result = await query;
  if (result.error) {
    throw new Error(result.error.message);
  }

  return result.data;
}
