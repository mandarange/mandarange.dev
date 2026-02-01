import { createClientStatic } from "./supabase-server";

export type PostType = "playbook" | "decision" | "case-study" | "notes";

export interface Post {
  id: string;
  title: string;
  slug: string;
  date: string;
  updated_at?: string;
  excerpt: string;
  content: string;
  tags: string[];
  type: PostType;
  is_draft: boolean;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  outcome: string;
  tags: string[];
  date: string;
  is_featured: boolean;
}

export interface Principle {
  id: string;
  title: string;
  description: string;
  points: string[];
  display_order: number;
}

export async function getPosts(): Promise<Post[]> {
  const supabase = createClientStatic();
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("is_draft", false)
    .order("date", { ascending: false });

  if (error) {
    console.error("Error fetching posts:", error);
    return [];
  }

  return data as Post[];
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const supabase = createClientStatic();
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) {
    console.error("Error fetching post by slug:", error);
    return null;
  }

  return data as Post;
}

export async function getProjects(): Promise<Project[]> {
  const supabase = createClientStatic();
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .order("date", { ascending: false });

  if (error) {
    console.error("Error fetching projects:", error);
    return [];
  }

  return data as Project[];
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const supabase = createClientStatic();
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) {
    console.error("Error fetching project by slug:", error);
    return null;
  }

  return data as Project;
}

export async function getPrinciples(): Promise<Principle[]> {
  const supabase = createClientStatic();
  const { data, error } = await supabase
    .from("principles")
    .select("*")
    .order("display_order", { ascending: true });

  if (error) {
    console.error("Error fetching principles:", error);
    return [];
  }

  return data as Principle[];
}
