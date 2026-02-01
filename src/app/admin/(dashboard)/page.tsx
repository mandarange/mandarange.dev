import { createClientServer } from "@/lib/supabase-server";
import { FileText, Mail } from "lucide-react";
import Link from "next/link";

export default async function AdminDashboard() {
  const supabase = await createClientServer();

  const [{ count: postsCount }, { count: contactsCount }] = await Promise.all([
    supabase.from("posts").select("*", { count: "exact", head: true }),
    supabase.from("contact_submissions").select("*", { count: "exact", head: true }),
  ]);

  const stats = [
    { name: "Articles", count: postsCount || 0, icon: FileText, color: "text-blue-500", href: "/admin/writing" },
    { name: "Inquiries", count: contactsCount || 0, icon: Mail, color: "text-mandarange", href: "/admin/contacts" },
  ];

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-4xl font-serif italic text-charcoal">Dashboard</h1>
        <p className="text-charcoal/60 leading-relaxed font-light mt-2">
          Welcome back. Here&apos;s an overview of your platform content.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {stats.map((stat) => (
          <Link
            key={stat.name}
            href={stat.href}
            className="p-6 rounded-[2rem] border border-white/5 bg-surface hover:border-white/10 transition-all group"
          >
            <div className={`w-12 h-12 rounded-2xl bg-white/[0.03] flex items-center justify-center mb-4 ${stat.color}`}>
              <stat.icon size={24} />
            </div>
            <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-charcoal/30">
              {stat.name}
            </p>
            <p className="text-3xl font-serif italic text-charcoal mt-1">
              {stat.count}
            </p>
          </Link>
        ))}
      </div>

      <section className="p-8 rounded-[2rem] border border-white/5 bg-surface">
        <h2 className="text-2xl font-serif italic text-charcoal mb-4">Quick Actions</h2>
        <Link
          href="/admin/writing/new"
          className="flex items-center justify-between p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-mandarange hover:text-offwhite transition-all group"
        >
          <span className="font-medium">Create New Article</span>
          <FileText size={18} className="opacity-40 group-hover:opacity-100" />
        </Link>
      </section>
    </div>
  );
}
