"use client";

import Link from "next/link";
import { format } from "date-fns";
import type { Post } from "@/lib/mdx";
import { motion } from "framer-motion";

export function TagPill({ tag }: { tag: string }) {
  return (
    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-mono font-medium bg-mandarange/5 text-mandarange/80 border border-mandarange/10">
      {tag}
    </span>
  );
}

export function PostCard({ post }: { post: Post }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative"
    >
      <Link href={`/writing/${post.slug}`} className="block">
        <article className="flex flex-col gap-3 p-6 rounded-2xl border border-white/5 bg-surface hover:border-mandarange/20 transition-all hover:bg-mandarange/[0.02] hover:shadow-sm">
          <div className="flex justify-between items-start gap-4">
            <h3 className="text-xl font-serif italic text-charcoal group-hover:text-mandarange transition-colors">
              {post.title}
            </h3>
            <span className="text-xs font-mono text-charcoal/30 whitespace-nowrap pt-1">
              {format(new Date(post.date), "MMM d, yyyy")}
            </span>
          </div>
          
          <p className="text-sm text-charcoal/60 line-clamp-2 leading-relaxed">
            {post.excerpt}
          </p>

          <div className="flex flex-wrap gap-2 mt-2">
            <TagPill tag={post.type.toUpperCase()} />
            {post.tags.map((tag) => (
              <TagPill key={tag} tag={tag} />
            ))}
          </div>
        </article>
      </Link>
    </motion.div>
  );
}
