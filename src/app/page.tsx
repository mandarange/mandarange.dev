import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { getPosts } from "@/lib/mdx";
import { PostCard } from "@/components/branding/PostCard";

export default async function Home() {
  const posts = await getPosts("writing");
  const featuredPosts = posts.slice(0, 3);

  return (
    <div className="max-w-5xl mx-auto px-6 space-y-24 pb-24 text-charcoal">
      {/* Hero Section */}
      <section className="pt-12 md:pt-24 space-y-8 max-w-3xl">
        <h1 className="text-5xl md:text-7xl !not-italic font-sans font-bold tracking-tight text-charcoal leading-[1.1]">
          Mandarange—<span className="font-serif italic font-medium text-mandarange">engineering notes</span> for systems you can trust.
        </h1>
        <p className="text-xl md:text-2xl text-charcoal/60 leading-relaxed font-light">
          Data integrity, reliable APIs, and shipping culture—written from real projects. I build systems teams can trust.
        </p>
        <div className="flex flex-wrap gap-4 pt-4">
            <Link
            href="/writing"
            className="group flex items-center gap-2 bg-mandarange text-offwhite px-6 py-3 rounded-full font-medium hover:bg-mandarange/90 transition-all"
          >
            Read Writing
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/principles"
            className="group flex items-center gap-2 border border-charcoal/10 px-6 py-3 rounded-full font-medium hover:border-mandarange hover:text-mandarange transition-all"
          >
            View Principles
            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Featured Writing */}
      <section className="space-y-8">
        <div className="flex items-end justify-between border-b border-white/5 pb-4">
          <div className="space-y-1">
            <h2 className="text-3xl font-serif italic text-charcoal">Featured Writing</h2>
            <p className="text-sm text-charcoal/40 font-mono uppercase tracking-wider">Deep dives & Playbooks</p>
          </div>
          <Link href="/writing" className="text-sm font-medium text-mandarange hover:underline flex items-center gap-1 mb-1">
            View all posts <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredPosts.length > 0 ? (
            featuredPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))
          ) : (
            <p className="col-span-full text-charcoal/40 italic py-12 text-center border border-dashed border-white/10 rounded-2xl">
              No posts found yet. Check back soon.
            </p>
          )}
        </div>
      </section>

      {/* Principles Preview */}
      <section className="grid md:grid-cols-2 gap-12 items-center bg-white/[0.02] p-8 md:p-12 rounded-[2rem] border border-white/5">
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-4xl font-serif italic text-charcoal leading-tight">
              A philosophy of <br />
              <span className="text-mandarange">operational clarity.</span>
            </h2>
            <p className="text-charcoal/60 leading-relaxed">
              I believe in engineering as a craft of reducing complexity. My principles are the distillation of years spent building and scaling systems.
            </p>
          </div>
          <ul className="space-y-4">
            {[
              "Data Integrity & SSOT",
              "Idempotency & Consistency",
              "Operational Simplicity",
              "Standards & Documentation",
            ].map((p, i) => (
              <li key={i} className="flex items-center gap-3 text-sm font-medium text-charcoal/80">
                <span className="w-5 h-5 rounded-full bg-mandarange/10 text-mandarange flex items-center justify-center text-[10px] font-bold">
                  {i + 1}
                </span>
                {p}
              </li>
            ))}
          </ul>
          <Link
            href="/principles"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-mandarange hover:gap-3 transition-all pt-4"
          >
            Learn about my principles <ArrowRight size={16} />
          </Link>
        </div>
        <div className="relative aspect-square bg-surface rounded-2xl shadow-xl overflow-hidden border border-white/5 hidden md:block">
           <div className="absolute inset-0 bg-gradient-to-br from-mandarange/5 to-transparent" />
           <div className="absolute inset-0 flex items-center justify-center p-12">
              <div className="w-full aspect-video bg-offwhite border border-white/10 rounded-lg shadow-inner flex flex-col p-4 gap-2">
                 <div className="w-1/3 h-2 bg-charcoal/10 rounded" />
                 <div className="w-2/3 h-2 bg-mandarange/20 rounded" />
                 <div className="w-full h-32 bg-charcoal/[0.02] rounded mt-2 border border-dashed border-charcoal/10" />
                 <div className="mt-auto flex justify-between items-center">
                    <div className="w-8 h-8 rounded-full bg-mandarange/40" />
                    <div className="w-24 h-4 bg-charcoal/5 rounded" />
                 </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
