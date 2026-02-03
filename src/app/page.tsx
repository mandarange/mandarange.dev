import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight, Gamepad2, Globe, Server, ExternalLink } from "lucide-react";
import { getPosts } from "@/lib/db";
import { PostCard } from "@/components/branding/PostCard";
import { SectionHeading } from "@/components/branding/SectionHeading";
import { PillarsGrid } from "@/components/branding/PillarsGrid";
import { SITE, COMPANIES, ALL_EXTERNAL_LINKS } from "@/lib/site";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: `${SITE.title} — Engineer, CTO & CEO`,
  description: SITE.description,
  alternates: { canonical: SITE.url },
};

async function FeaturedWriting() {
  const posts = await getPosts();
  const featuredPosts = posts
    .sort((a, b) => {
      if (a.is_featured && !b.is_featured) return -1;
      if (!a.is_featured && b.is_featured) return 1;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    })
    .slice(0, 3);

  return (
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
  );
}

const careerPath = [
  {
    icon: Gamepad2,
    phase: "Origin",
    title: "Game Graphics & Shader",
    description:
      "Started with Unity-based graphics and shader development. Built a deep sense for performance and structure through real-time rendering.",
  },
  {
    icon: Globe,
    phase: "Expansion",
    title: "Web & App Development",
    description:
      "Cross-platform product development with React, Flutter, and Node.js. Applied the performance instincts forged in game dev to the web.",
  },
  {
    icon: Server,
    phase: "Current",
    title: "Platform Architecture",
    description:
      "Service architecture, operational reliability, and automation. Designing commerce and supply-chain systems where data integrity is everything.",
  },
];

export default async function Home() {
  return (
    <div className="max-w-5xl mx-auto px-6 space-y-28 pb-28 text-charcoal">
      {/* ── Hero ── */}
      <section className="pt-12 md:pt-24">
        <div className="grid md:grid-cols-[1fr_auto] gap-12 items-center">
          <div className="space-y-8 max-w-2xl">
            <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono font-medium text-mandarange/80">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mandarange opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-mandarange"></span>
              </span>
              CTO @ HYPERCAPE &middot; CEO @ WEKLEM
            </div>
            <h1 className="text-5xl md:text-7xl !not-italic font-sans font-bold tracking-tight text-charcoal leading-[1.08]">
              Daniel Choi
            </h1>
            <p className="text-xl md:text-2xl text-charcoal/60 leading-relaxed font-light">
              {SITE.description}
            </p>
            <p className="text-base text-charcoal/40 leading-relaxed max-w-xl">
              {SITE.tagline}
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/writing"
                className="group flex items-center gap-2 bg-mandarange text-offwhite px-6 py-3 rounded-full font-medium hover:bg-mandarange/90 transition-all"
              >
                Read Writing
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/principles"
                className="group flex items-center gap-2 border border-white/10 px-6 py-3 rounded-full font-medium hover:border-mandarange hover:text-mandarange transition-all"
              >
                View Principles
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="relative w-56 h-56 lg:w-64 lg:h-64 rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl shadow-mandarange/5 group">
              <div className="absolute inset-0 bg-gradient-to-br from-mandarange/10 via-transparent to-transparent z-10" />
              <Image
                src="/mandarange.png"
                alt="Daniel Choi — Mandarange"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Philosophy Preview ── */}
      <section className="space-y-10">
        <SectionHeading title="Engineering Philosophy" eyebrow="Six pillars I build by" />
        <PillarsGrid compact />
        <Link
          href="/principles"
          className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-mandarange hover:gap-3 transition-all"
        >
          Explore all principles <ArrowRight size={16} />
        </Link>
      </section>

      {/* ── Featured Writing ── */}
      <section className="space-y-8">
        <div className="flex items-end justify-between border-b border-white/5 pb-4">
          <SectionHeading title="Featured Writing" eyebrow="Deep dives & playbooks" />
          <Link href="/writing" className="text-sm font-medium text-mandarange hover:underline flex items-center gap-1 mb-1">
            View all posts <ArrowRight size={14} />
          </Link>
        </div>
        <Suspense
          fallback={
            <div className="grid md:grid-cols-3 gap-6 animate-pulse">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-48 bg-white/5 rounded-2xl" />
              ))}
            </div>
          }
        >
          <FeaturedWriting />
        </Suspense>
      </section>

      {/* ── Career Journey ── */}
      <section className="space-y-10">
        <SectionHeading title="Career Journey" eyebrow="Game Graphics → Web/App → Platform Architecture" />
        <div className="grid md:grid-cols-3 gap-6">
          {careerPath.map((step, i) => (
            <div
              key={step.title}
              className="relative p-6 rounded-2xl border border-mandarange/10 bg-white/[0.02] space-y-4 hover:bg-white/[0.04] transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-mandarange/10 text-mandarange flex items-center justify-center">
                  <step.icon size={20} />
                </div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-charcoal/30">
                  {step.phase}
                </span>
              </div>
              <h3 className="text-xl !not-italic font-sans font-semibold text-charcoal">
                {step.title}
              </h3>
              <p className="text-sm text-charcoal/60 leading-relaxed">
                {step.description}
              </p>
              {/* connector line between career cards */}
              {i < careerPath.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-white/10" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── Where I Build ── */}
      <section className="space-y-10">
        <SectionHeading title="Where I Build" eyebrow="Current roles" />
        <div className="grid md:grid-cols-2 gap-6">
          {COMPANIES.map((company) => (
            <a
              key={company.name}
              href={company.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 rounded-[2rem] border border-white/5 bg-white/[0.02] hover:border-mandarange/20 hover:bg-mandarange/[0.02] transition-all space-y-5"
            >
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-mandarange/60">
                    {company.role}
                  </span>
                  <h3 className="text-2xl font-sans font-bold text-charcoal group-hover:text-mandarange transition-colors !not-italic">
                    {company.name}
                  </h3>
                </div>
                <ExternalLink size={16} className="text-charcoal/20 group-hover:text-mandarange transition-colors" />
              </div>
              <p className="text-sm text-charcoal/60 leading-relaxed">
                {company.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {company.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/[0.04] text-charcoal/50 border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ── Connect ── */}
      <section className="space-y-8">
        <SectionHeading title="Connect" eyebrow="Find me elsewhere" />
        <div className="flex flex-wrap gap-3">
          {ALL_EXTERNAL_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-5 py-3 rounded-full border border-white/5 bg-white/[0.02] hover:border-mandarange/30 hover:bg-mandarange/[0.03] transition-all"
            >
              <link.icon size={16} className="text-charcoal/40 group-hover:text-mandarange transition-colors" />
              <span className="text-sm font-medium text-charcoal/70 group-hover:text-charcoal transition-colors">
                {link.name}
              </span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
