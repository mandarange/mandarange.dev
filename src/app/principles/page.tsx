import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getPrinciples } from "@/lib/db";
import { SectionHeading } from "@/components/branding/SectionHeading";
import { PillarsGrid } from "@/components/branding/PillarsGrid";
import { SITE } from "@/lib/site";

export const metadata = {
  title: "Principles | Mandarange",
  description:
    "The engineering philosophy and operational patterns that guide how I build systems.",
};

export default async function PrinciplesPage() {
  const principles = await getPrinciples();

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 md:py-24 space-y-20">
      <header className="space-y-6 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-sans font-bold tracking-tight text-charcoal">
          Principles
        </h1>
        <p className="text-xl text-charcoal/60 leading-relaxed font-light">
          {SITE.tagline}
        </p>
      </header>

      <section className="space-y-10">
        <SectionHeading
          title="Six Pillars"
          eyebrow="The foundation of how I build"
        />
        <PillarsGrid />
      </section>

      <section className="space-y-10">
        <SectionHeading
          title="Operational Patterns"
          eyebrow="Applied principles from real projects"
        />
        {principles.length > 0 ? (
          <div className="grid gap-12">
            {principles.map((p, i) => (
              <div
                key={p.title}
                className="group flex flex-col md:flex-row gap-8 md:gap-16 items-start"
              >
                <div className="shrink-0 w-12 h-12 rounded-2xl bg-mandarange/5 text-mandarange flex items-center justify-center font-serif italic text-2xl font-bold">
                  {i + 1}
                </div>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-serif italic text-charcoal group-hover:text-mandarange transition-colors">
                      {p.title}
                    </h2>
                    <p className="text-lg text-charcoal/60 leading-relaxed max-w-2xl">
                      {p.description}
                    </p>
                  </div>
                  <ul className="grid sm:grid-cols-2 gap-4">
                    {p.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-center gap-3 text-sm text-charcoal/80"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-mandarange" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-charcoal/40 italic py-12 text-center border border-dashed border-white/10 rounded-2xl">
            More patterns coming soon.
          </p>
        )}
      </section>

      <section className="bg-white/[0.02] p-8 md:p-12 rounded-[2rem] border border-white/5 text-center space-y-6">
        <h3 className="text-2xl font-serif italic text-charcoal">
          Want to see these in action?
        </h3>
        <p className="text-charcoal/60 max-w-lg mx-auto">
          I write deep dives into how I apply these principles in real-world
          engineering projects.
        </p>
        <Link
          href="/writing"
          className="inline-flex items-center gap-2 bg-mandarange text-offwhite px-6 py-3 rounded-full font-medium hover:bg-mandarange/90 transition-all"
        >
          Explore Writing <ArrowRight size={16} />
        </Link>
      </section>
    </div>
  );
}
