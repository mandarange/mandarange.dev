import { Mail } from "lucide-react";
import { SITE } from "@/lib/site";
import { ContactForm } from "./ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Daniel Choi",
  description:
    "Get in touch about architecture, data integrity, operational reliability, or engineering leadership.",
  alternates: { canonical: `${SITE.url}/contact` },
  openGraph: {
    title: "Contact — Daniel Choi",
    description:
      "Get in touch about architecture, data integrity, operational reliability, or engineering leadership.",
    url: `${SITE.url}/contact`,
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 md:py-24 space-y-16">
      <header className="space-y-6 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-sans font-bold tracking-tight text-charcoal">
          Contact
        </h1>
        <p className="text-xl text-charcoal/60 leading-relaxed font-light">
          Building something that needs to be reliable, consistent, and
          operationally sound? Let&apos;s talk architecture, data integrity, and
          systems that scale.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-16">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-2xl font-serif italic text-charcoal">
              What I can help with
            </h2>
            <ul className="space-y-4">
              {[
                "Data Model Design & SSOT Architecture",
                "Operational Reliability & Idempotency",
                "Security Infrastructure & Audit Systems",
                "Engineering Standards & Team Scaling",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm font-medium text-charcoal/80"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-mandarange" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-serif italic text-charcoal">
              Direct Reach
            </h2>
            <a
              href={`mailto:${SITE.email}`}
              className="inline-flex items-center gap-4 p-6 rounded-2xl border border-white/5 bg-surface hover:border-mandarange hover:bg-mandarange/[0.02] transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-mandarange/10 text-mandarange flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail size={24} />
              </div>
              <div className="space-y-0.5">
                <p className="text-sm font-mono text-charcoal/40 uppercase tracking-wider">
                  Email
                </p>
                <p className="text-lg font-medium text-charcoal">
                  {SITE.email}
                </p>
              </div>
            </a>
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}
