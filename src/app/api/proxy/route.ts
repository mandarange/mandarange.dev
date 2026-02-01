import { NextRequest, NextResponse } from "next/server";
import { supabaseProxy } from "@/lib/proxy";
import { createClientServer } from "@/lib/supabase-server";

/**
 * Modern Proxy Route Handler for Next.js 15.
 * Handles secure server-side Supabase operations without middleware.
 * Protected: Only accessible by approved admins.
 */
export async function POST(request: NextRequest) {
  try {
    // 1. Verify authentication and approval
    const supabase = await createClientServer();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { data: profile } = await supabase
      .from("profiles")
      .select("is_approved")
      .eq("id", user.id)
      .single();

    if (!profile?.is_approved) {
      return NextResponse.json({ error: "Forbidden: Not approved" }, { status: 403 });
    }

    // 2. Proceed with proxy operation
    const body = await request.json();
    const { table, action, data } = body;

    if (!table || !action) {
      return NextResponse.json({ error: "Missing parameters" }, { status: 400 });
    }

    const result = await supabaseProxy(table, action, data);
    return NextResponse.json(result);
  } catch (error: any) {
    console.error("Proxy Error:", error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
