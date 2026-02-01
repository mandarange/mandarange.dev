"use server";

import { createClientServer } from "@/lib/supabase-server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const extractTags = (value: FormDataEntryValue | null) => {
  if (typeof value !== "string") {
    return [] as string[];
  }

  return value
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean);
};

type ActionState = null;

export async function createPost(formData: FormData): Promise<void>;
export async function createPost(
  _prevState: ActionState,
  formData: FormData
): Promise<ActionState>;
export async function createPost(
  arg1: ActionState | FormData,
  arg2?: FormData
): Promise<ActionState | void> {
  const formData = arg1 instanceof FormData ? arg1 : arg2;
  if (!formData) {
    return null;
  }
  const supabase = await createClientServer();

  const title = formData.get("title")?.toString().trim() ?? "";
  const slug = formData.get("slug")?.toString().trim() ?? "";
  const excerpt = formData.get("excerpt")?.toString().trim() || null;
  const content = formData.get("content")?.toString().trim() ?? "";
  const type = formData.get("type")?.toString().trim() ?? "";
  const tags = extractTags(formData.get("tags"));
  const isDraft = formData.get("is_draft") === "on";

  await supabase.from("posts").insert({
    title,
    slug,
    excerpt,
    content,
    type,
    tags,
    is_draft: isDraft,
  });

  revalidatePath("/admin/writing");
  revalidatePath("/writing");
  redirect("/admin/writing");
}

export async function updatePost(id: string, formData: FormData): Promise<void>;
export async function updatePost(
  id: string,
  _prevState: ActionState,
  formData: FormData
): Promise<ActionState>;
export async function updatePost(
  id: string,
  arg2: ActionState | FormData,
  arg3?: FormData
): Promise<ActionState | void> {
  const formData = arg2 instanceof FormData ? arg2 : arg3;
  if (!formData) {
    return null;
  }
  const supabase = await createClientServer();

  const title = formData.get("title")?.toString().trim() ?? "";
  const slug = formData.get("slug")?.toString().trim() ?? "";
  const excerpt = formData.get("excerpt")?.toString().trim() || null;
  const content = formData.get("content")?.toString().trim() ?? "";
  const type = formData.get("type")?.toString().trim() ?? "";
  const tags = extractTags(formData.get("tags"));
  const isDraft = formData.get("is_draft") === "on";

  await supabase
    .from("posts")
    .update({
      title,
      slug,
      excerpt,
      content,
      type,
      tags,
      is_draft: isDraft,
      updated_at: new Date().toISOString(),
    })
    .eq("id", id);

  revalidatePath("/admin/writing");
  revalidatePath("/writing");
  redirect("/admin/writing");
}

export async function deletePost(id: string) {
  const supabase = await createClientServer();

  await supabase.from("posts").delete().eq("id", id);

  revalidatePath("/admin/writing");
  revalidatePath("/writing");
}
