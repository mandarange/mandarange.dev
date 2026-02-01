export const metadata = {
  title: "Projects | Mandarange",
  description: "A showcase of engineering systems and architectural deep dives.",
};

const projects = [
  {
    title: "Mandarange.dev",
    slug: "mandarange-dev",
    description: "A personal brand platform built with Next.js 15, MDX, and Supabase.",
    outcome: "Lighthouse 100/100/100/100",
    tags: ["Next.js", "MDX", "Tailwind", "Supabase"],
  },
  {
    title: "Distributed Outbox System",
    slug: "distributed-outbox",
    description: "A reliable message delivery system using the transactional outbox pattern.",
    outcome: "99.99% Reliability",
    tags: ["Go", "PostgreSQL", "Kafka"],
  },
];

export default function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 md:py-24 space-y-16">
      <header className="space-y-6 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-sans font-bold tracking-tight text-charcoal">
          Projects
        </h1>
        <p className="text-xl text-charcoal/60 leading-relaxed font-light">
          A selection of systems I&apos;ve designed and built, focusing on architectural integrity and operational durability.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div key={project.slug} className="group p-8 rounded-[2rem] border border-white/5 bg-surface hover:border-mandarange/20 hover:bg-mandarange/[0.01] transition-all flex flex-col gap-6">
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-[10px] font-mono font-bold uppercase tracking-widest text-charcoal/30">
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="text-3xl font-serif italic text-charcoal group-hover:text-mandarange transition-colors">
                {project.title}
              </h2>
              <p className="text-charcoal/60 leading-relaxed">
                {project.description}
              </p>
            </div>
            
            <div className="mt-auto space-y-2">
              <span className="text-xs font-mono font-bold text-mandarange/60 uppercase tracking-widest">Outcome</span>
              <p className="font-medium text-charcoal">{project.outcome}</p>
            </div>
            
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-charcoal/40 group-hover:text-mandarange transition-colors pt-4"
            >
              Case Study <ArrowRight size={16} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

import Link from "next/link";
import { ArrowRight } from "lucide-react";
