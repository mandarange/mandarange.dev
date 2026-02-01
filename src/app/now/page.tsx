import { format } from "date-fns";

export const metadata = {
  title: "Now | Mandarange",
  description: "What I'm currently focused on.",
};

export default function NowPage() {
  const lastUpdated = new Date(); // In a real app, this might come from a DB or file

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 md:py-24 space-y-16">
      <header className="space-y-6 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-sans font-bold tracking-tight text-charcoal">
          Now
        </h1>
        <p className="text-xl text-charcoal/60 leading-relaxed font-light">
          A high-level view of what I&apos;m currently building, learning, and thinking about.
        </p>
        <div className="text-xs font-mono text-charcoal/30 uppercase tracking-widest pt-2">
          Last updated: {format(lastUpdated, "MMMM yyyy")}
        </div>
      </header>

      <div className="grid md:grid-cols-2 gap-12">
        <section className="space-y-6">
          <h2 className="text-2xl font-serif italic text-charcoal flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-mandarange" />
            Building
          </h2>
          <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.01] space-y-4">
            <p className="text-charcoal/80">
              Currently focused on building <strong>mandarange.dev</strong> as a platform to share engineering insights and architectural patterns.
            </p>
            <ul className="space-y-2 text-sm text-charcoal/60">
              <li>• Refined MDX content pipeline</li>
              <li>• Performance-first UI components</li>
              <li>• AI-friendly documentation structures</li>
            </ul>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-serif italic text-charcoal flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-blue-400" />
            Learning
          </h2>
          <div className="p-6 rounded-2xl border border-white/5 bg-blue-400/[0.03] space-y-4">
            <p className="text-charcoal/80">
              Exploring advanced patterns in <strong>distributed systems</strong> and <strong>AI-assisted development workflows</strong>.
            </p>
            <ul className="space-y-2 text-sm text-charcoal/60">
              <li>• Event-driven consistency models</li>
              <li>• Context-aware AI agents</li>
              <li>• Modern frontend performance auditing</li>
            </ul>
          </div>
        </section>
      </div>

      <div className="pt-12 border-t border-white/5 text-center">
        <p className="text-sm text-charcoal/40 italic">
          Inspired by Derek Sivers&apos; <a href="https://nownownow.com/about" className="underline hover:text-mandarange">Now</a> project.
        </p>
      </div>
    </div>
  );
}
