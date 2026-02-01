import { createClientServer } from "@/lib/supabase-server";
import { FileText, Briefcase, Lightbulb, Mail } from "lucide-react";

export default async function AdminDashboard() {
  const supabase = await createClientServer();

  // Fetch quick stats
  const [
    { count: postsCount },
    { count: projectsCount },
    { count: principlesCount },
    { count: contactsCount },
  ] = await Promise.all([
    supabase.from("posts").select("*", { count: "exact", head: true }),
    supabase.from("projects").select("*", { count: "exact", head: true }),
    supabase.from("principles").select("*", { count: "exact", head: true }),
    supabase.from("contact_submissions").select("*", { count: "exact", head: true }),
  ]);

  const stats = [
    { name: "Articles", count: postsCount || 0, icon: FileText, color: "text-blue-500" },
    { name: "Projects", count: projectsCount || 0, icon: Briefcase, color: "text-green-500" },
    { name: "Principles", count: principlesCount || 0, icon: Lightbulb, color: "text-amber-500" },
    { name: "Inquiries", count: contactsCount || 0, icon: Mail, color: "text-mandarange" },
  ];

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-4xl font-serif italic text-charcoal">Dashboard</h1>
        <p className="text-charcoal/60 leading-relaxed font-light mt-2">
          Welcome back. Here&apos;s an overview of your platform content.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.name}
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
          </div>
        ))}
      </div>

      <section className="p-8 rounded-[2rem] border border-white/5 bg-surface">
        <h2 className="text-2xl font-serif italic text-charcoal mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button className="flex items-center justify-between p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-mandarange hover:text-offwhite transition-all group">
            <span className="font-medium">Create New Article</span>
            <FileText size={18} className="opacity-40 group-hover:opacity-100" />
          </button>
          <button className="flex items-center justify-between p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-mandarange hover:text-offwhite transition-all group">
            <span className="font-medium">Add New Project</span>
            <Briefcase size={18} className="opacity-40 group-hover:opacity-100" />
          </button>
        </div>
      </section>
    </div>
  );
}
