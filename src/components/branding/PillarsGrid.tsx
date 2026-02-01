"use client";

import { motion } from "framer-motion";
import { PILLARS } from "@/lib/site";

interface PillarsGridProps {
  compact?: boolean;
}

export function PillarsGrid({ compact = false }: PillarsGridProps) {
  return (
    <div className={`grid gap-6 ${compact ? "md:grid-cols-2 lg:grid-cols-3" : "md:grid-cols-2 lg:grid-cols-3"}`}>
      {PILLARS.map((pillar, i) => (
        <motion.div
          key={pillar.id}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
          className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] space-y-4 hover:bg-white/[0.04] hover:border-mandarange/10 transition-colors"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-mandarange/10 text-mandarange flex items-center justify-center">
              <pillar.icon size={20} />
            </div>
            <h3 className="text-base font-sans font-semibold text-charcoal !not-italic">
              {pillar.title}
            </h3>
          </div>

          {!compact && (
            <p className="text-sm text-charcoal/50 leading-relaxed">
              {pillar.thesis}
            </p>
          )}

          <ul className="space-y-1.5">
            {(compact ? pillar.bullets.slice(0, 2) : pillar.bullets).map((bullet) => (
              <li key={bullet} className="flex items-start gap-2.5 text-sm text-charcoal/60">
                <div className="w-1 h-1 rounded-full bg-mandarange/40 mt-2 shrink-0" />
                {bullet}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}
