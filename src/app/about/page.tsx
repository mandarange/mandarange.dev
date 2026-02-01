import Image from "next/image";

export const metadata = {
  title: "About | Mandarange",
  description: "Learn more about Daniel Choi and the Mandarange brand.",
};

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 md:py-24 space-y-16">
      <header className="space-y-6 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-sans font-bold tracking-tight text-charcoal">
          I&apos;m Daniel, an engineering leader focused on systems that scale <span className="font-serif italic font-medium text-mandarange text-5xl md:text-7xl">operationally.</span>
        </h1>
        <p className="text-xl text-charcoal/60 leading-relaxed font-light">
          I build and lead engineering teams with a focus on data integrity, reliable APIs, and a culture of radical clarity.
        </p>
      </header>

      <div className="grid md:grid-cols-3 gap-12 items-start">
        <div className="md:col-span-2 space-y-8 prose prose-slate max-w-none">
          <p>
            For over a decade, I&apos;ve been navigating the complexities of software engineering, from early-stage startups to scaling platforms. My journey has always been driven by a single question: <strong>How do we build things that last?</strong>
          </p>
          <p>
            I founded <strong>Mandarange</strong> as a personal brand to represent the intersection of &quot;warm clarity&quot; and &quot;hard engineering.&quot; I believe that technical excellence is only half the battle; the other half is building systems that humans can understand, operate, and trust.
          </p>
          
          <h3 className="font-serif italic text-2xl mt-12 mb-4">How I Work</h3>
          <ul className="space-y-4">
            <li>
              <strong>Docs over Chatter:</strong> I believe clear documentation is the ultimate leverage for a team.
            </li>
            <li>
              <strong>SSOT:</strong> Every piece of data and logic should have a single source of truth.
            </li>
            <li>
              <strong>AI as a Partner:</strong> I embrace AI-assisted workflows to accelerate development without sacrificing quality.
            </li>
          </ul>
        </div>

        <aside className="space-y-8">
            <div className="aspect-square bg-white/[0.03] rounded-[2rem] overflow-hidden relative border border-white/5 shadow-xl shadow-black/20">
             {/* Placeholder for real photo */}
             <div className="absolute inset-0 flex items-center justify-center text-white/5 font-serif italic text-8xl select-none">
                M
             </div>
          </div>
          <div className="space-y-2">
            <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-charcoal/30 font-bold">
              Connect
            </h4>
            <div className="flex flex-col gap-2">
               <a href="mailto:hello@mandarange.dev" className="text-sm font-medium hover:text-mandarange transition-colors">Email</a>
               <a href="#" className="text-sm font-medium hover:text-mandarange transition-colors">LinkedIn</a>
               <a href="#" className="text-sm font-medium hover:text-mandarange transition-colors">GitHub</a>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
