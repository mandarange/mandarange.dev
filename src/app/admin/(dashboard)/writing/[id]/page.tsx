import Link from "next/link";
import { notFound } from "next/navigation";
import { createClientServer } from "@/lib/supabase-server";
import WritingForm from "../WritingForm";

export default async function EditWritingPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createClientServer();
  const { data: post } = await supabase
    .from("posts")
    .select("*")
    .eq("id", id)
    .single();

  if (!post) {
    notFound();
  }

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <Link href="/admin/writing" className="text-sm text-charcoal/60 hover:text-charcoal">
          Back to Writing
        </Link>
        <h1 className="text-4xl font-serif italic text-charcoal">Edit Article</h1>
      </div>
      <WritingForm post={post} />
    </div>
  );
}
