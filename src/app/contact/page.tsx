"use client";

import { Mail, Send, Loader2, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { submitContactForm } from "./actions";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    try {
      await submitContactForm(formData);
      setIsSuccess(true);
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setError("Something went wrong. Please try again or email me directly.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 md:py-24 space-y-16">
      <header className="space-y-6 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-sans font-bold tracking-tight text-charcoal">
          Contact
        </h1>
        <p className="text-xl text-charcoal/60 leading-relaxed font-light">
          Have a complex engineering challenge? I&apos;m always open to discussing architecture, data models, and team culture.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-16">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-2xl font-serif italic text-charcoal">What I can help with</h2>
            <ul className="space-y-4">
              {[
                "Architecture Review",
                "Data Model Design & SSOT",
                "Engineering Standards & Tooling",
                "Leadership & Culture Strategy",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm font-medium text-charcoal/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-mandarange" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-serif italic text-charcoal">Direct Reach</h2>
            <a
              href="mailto:hello@mandarange.dev"
              className="inline-flex items-center gap-4 p-6 rounded-2xl border border-white/5 bg-surface hover:border-mandarange hover:bg-mandarange/[0.02] transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-mandarange/10 text-mandarange flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail size={24} />
              </div>
              <div className="space-y-0.5">
                <p className="text-sm font-mono text-charcoal/40 uppercase tracking-wider">Email</p>
                <p className="text-lg font-medium text-charcoal">hello@mandarange.dev</p>
              </div>
            </a>
          </div>
        </div>

        <div className="relative">
          {isSuccess ? (
            <div className="h-full flex flex-col items-center justify-center p-12 text-center space-y-4 bg-surface rounded-[2rem] border border-white/5 animate-in fade-in zoom-in duration-500">
              <div className="w-16 h-16 rounded-full bg-mandarange/10 text-mandarange flex items-center justify-center">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="text-2xl font-serif italic text-charcoal">Message Sent!</h3>
              <p className="text-charcoal/60">
                Thanks for reaching out. I&apos;ll get back to you as soon as possible.
              </p>
              <button
                onClick={() => setIsSuccess(false)}
                className="text-sm font-bold uppercase tracking-widest text-mandarange hover:underline pt-4"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 p-8 md:p-12 rounded-[2rem] border border-white/5 bg-surface shadow-sm">
              <div className="space-y-2">
                <label className="text-xs font-mono font-bold uppercase tracking-wider text-charcoal/40 ml-1">
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  className="w-full bg-offwhite border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-mandarange/20 focus:border-mandarange transition-all"
                  placeholder="Daniel Choi"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono font-bold uppercase tracking-wider text-charcoal/40 ml-1">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  className="w-full bg-offwhite border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-mandarange/20 focus:border-mandarange transition-all"
                  placeholder="daniel@example.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono font-bold uppercase tracking-wider text-charcoal/40 ml-1">
                  Message
                </label>
                <textarea
                  name="message"
                  className="w-full bg-offwhite border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-mandarange/20 focus:border-mandarange transition-all min-h-[150px]"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>
              
              {error && (
                <p className="text-xs text-red-500 font-medium ml-1">{error}</p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-charcoal text-offwhite py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-mandarange transition-all shadow-lg shadow-charcoal/5 hover:shadow-mandarange/20 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
