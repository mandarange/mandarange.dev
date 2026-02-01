import { getPosts } from "@/lib/db";
import { PostCard } from "@/components/branding/PostCard";

export const metadata = {
  title: "Writing | Mandarange",
  description: "Playbooks, decision records, and notes on engineering and leadership.",
};

export default async function WritingPage() {
  const posts = await getPosts();
  const tags = Array.from(new Set(posts.flatMap((p) => p.tags))).sort();

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 md:py-24 space-y-16">
      <header className="space-y-6 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-sans font-bold tracking-tight text-charcoal">
          Writing
        </h1>
        <p className="text-xl text-charcoal/60 leading-relaxed font-light">
          Deep dives into data models, operational reliability, and the culture of shipping software.
        </p>
      </header>

        <div className="flex flex-col md:flex-row gap-12">
        {/* Main Content */}
        <div className="flex-1 space-y-8">
          <div className="grid gap-6">
            {posts.length > 0 ? (
              posts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))
            ) : (
              <p className="text-charcoal/40 italic py-12 text-center border border-dashed border-white/10 rounded-2xl">
                No posts published yet.
              </p>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <aside className="w-full md:w-64 space-y-12">
          <div className="space-y-4">
            <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-charcoal/30 font-bold">
              Filter by Tag
            </h4>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <button
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-medium border border-white/10 hover:border-mandarange hover:text-mandarange transition-colors text-charcoal/60"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-charcoal/30 font-bold">
              Post Types
            </h4>
            <div className="space-y-2">
              {[
                { name: "Playbook", desc: "Practical guides" },
                { name: "Decision", desc: "Why it was built" },
                { name: "Case Study", desc: "Real-world results" },
                { name: "Notes", desc: "Quick observations" },
              ].map((type) => (
                <div key={type.name} className="group cursor-pointer">
                  <span className="text-xs font-bold text-charcoal/80 group-hover:text-mandarange transition-colors">
                    {type.name}
                  </span>
                  <p className="text-[11px] text-charcoal/40">{type.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
