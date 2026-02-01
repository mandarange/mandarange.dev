"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

export function TOC() {
  const [items, setItems] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const headings = Array.from(document.querySelectorAll("h2, h3"))
      .map((heading) => ({
        id: heading.id,
        text: heading.textContent || "",
        level: parseInt(heading.tagName.charAt(1)),
      }))
      .filter((item) => item.id);

    setItems(headings);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "0% 0% -80% 0%" }
    );

    document.querySelectorAll("h2, h3").forEach((h) => observer.observe(h));
    return () => observer.disconnect();
  }, []);

  if (items.length === 0) return null;

  return (
    <nav className="flex flex-col gap-4 sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto pr-4 scrollbar-hide">
      <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-charcoal/30 font-bold mb-2">
        Table of Contents
      </h4>
      <div className="flex flex-col gap-3">
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(item.id)?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className={`text-xs transition-all hover:text-mandarange ${
              activeId === item.id
                ? "text-mandarange font-medium translate-x-1"
                : "text-charcoal/40"
            } ${item.level === 3 ? "pl-4" : ""}`}
          >
            {item.text}
          </a>
        ))}
      </div>
    </nav>
  );
}
