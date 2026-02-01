import { createClientServer } from "@/lib/supabase-server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { LayoutDashboard, FileText, Mail, LogOut, Globe, AlertCircle } from "lucide-react";

const sidebarItems = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Writing", href: "/admin/writing", icon: FileText },
  { name: "Contacts", href: "/admin/contacts", icon: Mail },
];

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClientServer();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  // Check if the user is approved
  const { data: profile, error } = await supabase
    .from("profiles")
    .select("is_approved")
    .eq("id", user.id)
    .single();

  if (error || !profile?.is_approved) {
    return (
      <div className="min-h-screen bg-offwhite flex items-center justify-center p-6 text-charcoal">
        <div className="w-full max-w-md text-center space-y-6 p-8 rounded-[2rem] border border-white/5 bg-surface shadow-2xl shadow-black/40 animate-in fade-in zoom-in duration-500">
          <div className="w-16 h-16 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center mx-auto">
            <AlertCircle size={32} />
          </div>
          <h1 className="text-2xl font-serif italic">Access Denied</h1>
          <p className="text-charcoal/60 leading-relaxed font-light">
            Your account ({user.email}) is currently pending approval. <br />
            Please contact the administrator to gain access.
          </p>
          <form action="/admin/logout" method="POST">
            <button
              type="submit"
              className="text-sm font-bold uppercase tracking-widest text-mandarange hover:underline pt-4"
            >
              Sign out and try another account
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-offwhite flex text-charcoal">
      {/* Admin Sidebar */}
      <aside className="w-64 border-r border-white/5 bg-surface flex flex-col fixed h-full">
        <div className="p-6">
          <Link href="/" className="group flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-mandarange flex items-center justify-center text-offwhite font-serif italic font-bold text-xl">
              M
            </div>
            <span className="font-serif italic text-xl tracking-tight text-charcoal group-hover:text-mandarange transition-colors">
              Mandarange
            </span>
          </Link>
          <p className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-charcoal/20 mt-4 ml-1">
            Control Panel
          </p>
        </div>

        <nav className="flex-1 px-4 space-y-1">
          {sidebarItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-charcoal/60 hover:text-mandarange hover:bg-mandarange/5 transition-all group"
            >
              <item.icon size={18} className="group-hover:scale-110 transition-transform" />
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-white/5">
          <div className="px-4 py-2 mb-2">
            <p className="text-[10px] font-mono text-charcoal/20 uppercase tracking-widest truncate">
              {user.email}
            </p>
          </div>
          <Link
            href="/"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-charcoal/40 hover:text-charcoal transition-all"
          >
            <Globe size={18} />
            View Site
          </Link>
          <form action="/admin/logout" method="POST">
            <button
              type="submit"
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-500/60 hover:text-red-500 hover:bg-red-500/5 transition-all"
            >
              <LogOut size={18} />
              Sign Out
            </button>
          </form>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 p-8">
        <div className="max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
          {children}
        </div>
      </main>
    </div>
  );
}
