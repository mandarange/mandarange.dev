export const metadata = {
  title: "Principles | Mandarange",
  description: "The engineering philosophy that guides my work.",
};

const principles = [
  {
    title: "Data Integrity & SSOT",
    desc: "Single Source of Truth is not a slogan, it's a technical requirement. Systems should be designed to make contradictions impossible.",
    points: [
      "Normalize where it matters for integrity.",
      "Clear ownership of data across services.",
      "Strict schema enforcement.",
    ],
  },
  {
    title: "Reliability by Design",
    desc: "Failure is inevitable; resilience is a choice. We build systems that can fail gracefully and recover predictably.",
    points: [
      "Idempotent operations by default.",
      "Predictable retry strategies with backoff.",
      "Observability that tells you *why*, not just *what*.",
    ],
  },
  {
    title: "Operational Simplicity",
    desc: "The most reliable code is the code that isn't there. We favor boring technology and simple architectures over cleverness.",
    points: [
      "Reduce cognitive load for operators.",
      "Standardize on proven patterns.",
      "Automate everything that is repetitive.",
    ],
  },
];

export default function PrinciplesPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 md:py-24 space-y-16">
      <header className="space-y-6 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-sans font-bold tracking-tight text-charcoal">
          Principles
        </h1>
        <p className="text-xl text-charcoal/60 leading-relaxed font-light">
          My engineering philosophy is focused on reducing complexity and building systems that scale operationally.
        </p>
      </header>

      <div className="grid gap-12">
        {principles.map((p, i) => (
          <section key={p.title} className="group flex flex-col md:flex-row gap-8 md:gap-16 items-start">
            <div className="shrink-0 w-12 h-12 rounded-2xl bg-mandarange/5 text-mandarange flex items-center justify-center font-serif italic text-2xl font-bold">
              {i + 1}
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-3xl font-serif italic text-charcoal group-hover:text-mandarange transition-colors">
                  {p.title}
                </h2>
                <p className="text-lg text-charcoal/60 leading-relaxed max-w-2xl">
                  {p.desc}
                </p>
              </div>
              <ul className="grid sm:grid-cols-2 gap-4">
                {p.points.map((point) => (
                  <li key={point} className="flex items-center gap-3 text-sm text-charcoal/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-mandarange" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>

      <div className="bg-white/[0.02] p-8 md:p-12 rounded-[2rem] border border-white/5 text-center space-y-6">
        <h3 className="text-2xl font-serif italic text-charcoal">Want to see these in action?</h3>
        <p className="text-charcoal/60 max-w-lg mx-auto">
          I write deep dives into how I apply these principles in real-world engineering projects.
        </p>
        <Link
          href="/writing"
          className="inline-flex items-center gap-2 bg-charcoal text-offwhite px-6 py-3 rounded-full font-medium hover:bg-mandarange transition-all"
        >
          Explore Writing
        </Link>
      </div>
    </div>
  );
}

import Link from "next/link";
