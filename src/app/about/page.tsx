import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Globe, Server, Gamepad2 } from "lucide-react";
import { SectionHeading } from "@/components/branding/SectionHeading";
import { PillarsGrid } from "@/components/branding/PillarsGrid";
import { SITE, SOCIAL_LINKS, COMPANY_LINKS, COMPANIES, TIMELINE } from "@/lib/site";

export const metadata = {
  title: "About | Mandarange",
  description:
    "Daniel Choi — From game graphics and shader development to platform architecture. CTO and CEO building systems teams can trust.",
};

const domains = [
  {
    icon: Globe,
    title: "Web / App",
    items: [
      "React / Next.js",
      "Flutter",
      "Node.js",
      "Cross-platform product development",
    ],
  },
  {
    icon: Server,
    title: "Backend / Platform",
    items: [
      "Java / Spring Boot / JPA",
      "MySQL / AWS",
      "Commerce & logistics systems",
      "High-volume processing & automation",
    ],
  },
  {
    icon: Gamepad2,
    title: "Game / Graphics",
    items: [
      "Unity / C#",
      "Shader development",
      "Real-time rendering optimization",
      "Graphics pipeline engineering",
    ],
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 md:py-24 space-y-20">
      <div className="grid md:grid-cols-[1fr_auto] gap-12 items-start">
        <header className="space-y-6 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-sans font-bold tracking-tight text-charcoal leading-[1.1]">
            From Game Graphics to{" "}
            <span className="font-serif italic font-medium text-mandarange">
              Platform Architecture.
            </span>
          </h1>
          <p className="text-xl text-charcoal/60 leading-relaxed font-light">
            Obsessively focused on making things fast, accurate, and visible on
            screen&mdash;first in real-time rendering, now in service
            architecture and operational reliability.
          </p>
        </header>
        <div className="hidden md:block">
          <div className="relative w-48 h-48 rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl shadow-mandarange/5 group">
            <div className="absolute inset-0 bg-gradient-to-br from-mandarange/10 via-transparent to-transparent z-10" />
            <Image
              src="/mandarange.png"
              alt="Mandarange Mascot"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              priority
            />
          </div>
        </div>
      </div>

      <section className="grid md:grid-cols-3 gap-12 items-start">
        <div className="md:col-span-2 space-y-6 text-charcoal/80 leading-relaxed">
          <p>
            I started my career as a game developer, deeply immersed in graphics
            and shader engineering&mdash;obsessed with making what&apos;s on
            screen fast and pixel-perfect. As my focus expanded into web, app,
            and platform development, the performance instincts and structural
            discipline forged in real-time rendering became the foundation for
            everything I build today: service architecture, operational
            stability, and automation at scale.
          </p>
          <p>
            Currently, I serve as <strong>CTO of Hypercape Inc.</strong>, where I
            architect K-beauty commerce and supply-chain systems built around
            Shopify-integrated dropshipping and fulfillment. I also run{" "}
            <strong>WeKlem Inc.</strong> as CEO, leading a cross-platform
            development studio specializing in web, app, and game engineering
            with patented technology.
          </p>
          <p>
            I founded <strong>Mandarange</strong> as a personal brand to share
            engineering insights, architectural patterns, and the philosophy of
            building systems that teams can understand, operate, and trust.
          </p>
        </div>

        <aside className="space-y-6">
          <div className="space-y-2">
            <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-charcoal/30 font-bold">
              Connect
            </h4>
            <div className="flex flex-col gap-2">
              {[...SOCIAL_LINKS, ...COMPANY_LINKS].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 text-sm font-medium hover:text-mandarange transition-colors"
                >
                  <link.icon
                    size={14}
                    className="text-charcoal/30 group-hover:text-mandarange transition-colors"
                  />
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </aside>
      </section>

      <section className="space-y-10">
        <SectionHeading title="How I Work" eyebrow="Philosophy in practice" />
        <PillarsGrid />
      </section>

      <section className="space-y-8">
        <SectionHeading title="Domains" eyebrow="What I work with" />
        <div className="grid md:grid-cols-3 gap-6">
          {domains.map((domain) => (
            <div
              key={domain.title}
              className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] space-y-4 hover:bg-white/[0.04] transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-mandarange/10 text-mandarange flex items-center justify-center">
                  <domain.icon size={20} />
                </div>
                <h3 className="text-lg font-sans font-semibold text-charcoal !not-italic">
                  {domain.title}
                </h3>
              </div>
              <ul className="space-y-2">
                {domain.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-sm text-charcoal/60"
                  >
                    <div className="w-1 h-1 rounded-full bg-charcoal/20" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionHeading title="Timeline" eyebrow="Key milestones" />
        <div className="relative">
          <div className="absolute left-[27px] top-2 bottom-2 w-px bg-white/5" />
          <div className="space-y-8">
            {TIMELINE.map((item) => (
              <div key={item.year} className="flex gap-6 items-start">
                <div className="relative z-10 w-14 shrink-0 text-right">
                  <span
                    className={`text-sm font-mono font-bold ${
                      item.year === "Now"
                        ? "text-mandarange"
                        : "text-charcoal/40"
                    }`}
                  >
                    {item.year}
                  </span>
                </div>
                <div
                  className={`relative mt-1.5 w-2 h-2 rounded-full shrink-0 ${
                    item.year === "Now" ? "bg-mandarange" : "bg-charcoal/20"
                  }`}
                />
                <p className="text-sm text-charcoal/70 leading-relaxed -mt-0.5">
                  {item.event}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white/[0.02] p-8 md:p-12 rounded-[2rem] border border-white/5 text-center space-y-6">
        <h3 className="text-2xl font-serif italic text-charcoal">
          Want to build something together?
        </h3>
        <p className="text-charcoal/60 max-w-lg mx-auto">
          Architecture reviews, technical consulting, or a new
          venture&mdash;I&apos;m always open to interesting conversations.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-mandarange text-offwhite px-6 py-3 rounded-full font-medium hover:bg-mandarange/90 transition-all"
        >
          Get in Touch <ArrowRight size={16} />
        </Link>
      </section>
    </div>
  );
}
