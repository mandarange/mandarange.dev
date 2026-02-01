import { createClientServer } from "@/lib/supabase-server";
import { format } from "date-fns";
import Link from "next/link";
import { Plus, Edit, Trash2, Eye } from "lucide-react";
import { deletePost } from "./actions";
import { DeleteButton } from "./DeleteButton";

export default async function AdminWritingPage() {
  const supabase = await createClientServer();
  const { data: posts } = await supabase
    .from("posts")
    .select("*")
    .order("date", { ascending: false });

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-serif italic text-charcoal">Writing</h1>
          <p className="text-charcoal/60 mt-2">Manage your articles and notes.</p>
        </div>
        <Link
          href="/admin/writing/new"
          className="flex items-center gap-2 bg-mandarange text-offwhite px-6 py-3 rounded-full font-medium hover:bg-mandarange/90 transition-all"
        >
          <Plus size={18} />
          New Article
        </Link>
      </div>

      <div className="overflow-hidden rounded-[2rem] border border-white/5 bg-surface">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-white/5">
              <th className="px-6 py-4 text-[10px] font-mono font-bold uppercase tracking-widest text-charcoal/30">Status</th>
              <th className="px-6 py-4 text-[10px] font-mono font-bold uppercase tracking-widest text-charcoal/30">Title</th>
              <th className="px-6 py-4 text-[10px] font-mono font-bold uppercase tracking-widest text-charcoal/30">Type</th>
              <th className="px-6 py-4 text-[10px] font-mono font-bold uppercase tracking-widest text-charcoal/30">Date</th>
              <th className="px-6 py-4 text-[10px] font-mono font-bold uppercase tracking-widest text-charcoal/30 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {posts?.map((post) => (
              <tr key={post.id} className="hover:bg-white/[0.02] transition-colors group">
                <td className="px-6 py-4">
                  {post.is_draft ? (
                    <span className="px-2 py-1 rounded-md bg-amber-500/10 text-amber-500 text-[10px] font-bold uppercase tracking-wider">Draft</span>
                  ) : (
                    <span className="px-2 py-1 rounded-md bg-green-500/10 text-green-500 text-[10px] font-bold uppercase tracking-wider">Published</span>
                  )}
                </td>
                <td className="px-6 py-4">
                  <p className="font-medium text-charcoal">{post.title}</p>
                  <p className="text-xs text-charcoal/40 font-mono">/{post.slug}</p>
                </td>
                <td className="px-6 py-4">
                  <span className="text-xs font-mono text-charcoal/60 uppercase">{post.type}</span>
                </td>
                <td className="px-6 py-4 text-sm text-charcoal/40">
                  {format(new Date(post.date), "MMM d, yyyy")}
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Link href={`/writing/${post.slug}`} target="_blank" className="p-2 rounded-lg hover:bg-white/5 text-charcoal/40 hover:text-charcoal transition-all">
                      <Eye size={16} />
                    </Link>
                    <Link href={`/admin/writing/${post.id}`} className="p-2 rounded-lg hover:bg-white/5 text-charcoal/40 hover:text-mandarange transition-all">
                      <Edit size={16} />
                    </Link>
                    <DeleteButton action={deletePost.bind(null, post.id)}>
                      <Trash2 size={16} />
                    </DeleteButton>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
