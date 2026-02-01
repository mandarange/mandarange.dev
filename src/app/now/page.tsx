import { Server, Wrench, FileText, Brain } from "lucide-react";

export const metadata = {
  title: "Now | Mandarange",
  description:
    "What Daniel Choi is currently building, operating, and thinking about.",
};

const focusAreas = [
  {
    icon: Server,
    title: "Operating",
    color: "bg-mandarange",
    cardBg: "bg-mandarange/[0.03]",
    description:
      "Running production infrastructure at Hypercape Inc.\u2014K-beauty commerce platform serving cross-border supply chain operations.",
    bullets: [
      "Stabilizing Shopify-integrated fulfillment pipelines",
      "Enforcing idempotency across order and inventory mutations",
      "Building audit trails for every critical state transition",
    ],
  },
  {
    icon: Wrench,
    title: "Building",
    color: "bg-emerald-400",
    cardBg: "bg-emerald-400/[0.03]",
    description:
      "Architecting systems and tooling across Hypercape and WeKlem.",
    bullets: [
      "Supply-chain data model redesign with strict SSOT enforcement",
      "Internal admin tooling with role-based access and IP restrictions",
      "Cross-platform mobile apps at WeKlem (React Native, Flutter)",
    ],
  },
  {
    icon: FileText,
    title: "Documenting",
    color: "bg-amber-400",
    cardBg: "bg-amber-400/[0.03]",
    description:
      "Writing engineering knowledge as operational tools, not artifacts.",
    bullets: [
      "Migration playbooks for every schema change",
      "ADRs (Architecture Decision Records) as team memory",
      "Publishing engineering insights on mandarange.dev",
    ],
  },
  {
    icon: Brain,
    title: "Learning",
    color: "bg-blue-400",
    cardBg: "bg-blue-400/[0.03]",
    description:
      "Exploring patterns at the intersection of distributed systems and AI-assisted development.",
    bullets: [
      "Event-driven consistency models for eventually-consistent pipelines",
      "AI-agent workflows that leverage machine-readable documentation",
      "Observability patterns for complex multi-service architectures",
    ],
  },
];

export default function NowPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 md:py-24 space-y-16">
      <header className="space-y-6 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-sans font-bold tracking-tight text-charcoal">
          Now
        </h1>
        <p className="text-xl text-charcoal/60 leading-relaxed font-light">
          A snapshot of what I&apos;m currently building, operating, and thinking
          about.
        </p>
        <div className="text-xs font-mono text-charcoal/30 uppercase tracking-widest pt-2">
          Last updated: February 2026
        </div>
      </header>

      <div className="grid md:grid-cols-2 gap-8">
        {focusAreas.map((area) => (
          <section key={area.title} className="space-y-6">
            <h2 className="text-2xl font-serif italic text-charcoal flex items-center gap-3">
              <span className={`w-2 h-2 rounded-full ${area.color}`} />
              {area.title}
            </h2>
            <div
              className={`p-6 rounded-2xl border border-white/5 ${area.cardBg} space-y-4`}
            >
              <p className="text-charcoal/80">{area.description}</p>
              <ul className="space-y-2 text-sm text-charcoal/60">
                {area.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-charcoal/30 shrink-0" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>

      <div className="pt-12 border-t border-white/5 text-center">
        <p className="text-sm text-charcoal/40 italic">
          Inspired by Derek Sivers&apos;{" "}
          <a
            href="https://nownownow.com/about"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-mandarange"
          >
            Now
          </a>{" "}
          project.
        </p>
      </div>
    </div>
  );
}
