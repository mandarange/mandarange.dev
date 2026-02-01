"use client";

import { useActionState, useState } from "react";
import { createPost, updatePost } from "./actions";

interface WritingFormProps {
  post?: {
    id: string;
    title: string;
    slug: string;
    excerpt: string | null;
    content: string;
    type: string;
    tags: string[];
    is_draft: boolean;
  };
}

const toSlug = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

export default function WritingForm({ post }: WritingFormProps) {
  const [title, setTitle] = useState(post?.title ?? "");
  const [slug, setSlug] = useState(post?.slug ?? "");
  const [slugEdited, setSlugEdited] = useState(Boolean(post));

  const action = post ? updatePost.bind(null, post.id) : createPost;
  const [, formAction, isPending] = useActionState(action, null);

  const handleTitleChange = (value: string) => {
    setTitle(value);
    if (!slugEdited) {
      setSlug(toSlug(value));
    }
  };

  const handleSlugChange = (value: string) => {
    setSlug(value);
    setSlugEdited(true);
  };

  return (
    <form action={formAction} className="space-y-6">
      <div className="space-y-2">
        <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-charcoal/30">
          Title
        </label>
        <input
          name="title"
          type="text"
          value={title}
          onChange={(event) => handleTitleChange(event.target.value)}
          className="w-full bg-offwhite border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-mandarange/20 focus:border-mandarange transition-all"
          required
        />
      </div>

      <div className="space-y-2">
        <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-charcoal/30">
          Slug
        </label>
        <input
          name="slug"
          type="text"
          value={slug}
          onChange={(event) => handleSlugChange(event.target.value)}
          className="w-full bg-offwhite border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-mandarange/20 focus:border-mandarange transition-all"
          required
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-charcoal/30">
            Type
          </label>
          <select
            name="type"
            defaultValue={post?.type ?? "playbook"}
            className="w-full bg-offwhite border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-mandarange/20 focus:border-mandarange transition-all"
            required
          >
            <option value="playbook">Playbook</option>
            <option value="decision">Decision</option>
            <option value="case-study">Case Study</option>
            <option value="notes">Notes</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-charcoal/30">
            Tags
          </label>
          <input
            name="tags"
            type="text"
            defaultValue={post?.tags?.join(", ") ?? ""}
            placeholder="strategy, growth, editorial"
            className="w-full bg-offwhite border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-mandarange/20 focus:border-mandarange transition-all"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-charcoal/30">
          Excerpt
        </label>
        <textarea
          name="excerpt"
          rows={2}
          defaultValue={post?.excerpt ?? ""}
          className="w-full bg-offwhite border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-mandarange/20 focus:border-mandarange transition-all"
        />
      </div>

      <div className="space-y-2">
        <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-charcoal/30">
          Content
        </label>
        <textarea
          name="content"
          rows={14}
          defaultValue={post?.content ?? ""}
          className="w-full bg-offwhite border border-white/10 rounded-xl px-4 py-3 font-mono text-sm leading-relaxed focus:outline-none focus:ring-2 focus:ring-mandarange/20 focus:border-mandarange transition-all"
          required
        />
      </div>

      <label className="flex items-center gap-3 text-sm text-charcoal/70">
        <input
          name="is_draft"
          type="checkbox"
          defaultChecked={post?.is_draft ?? false}
          className="h-4 w-4 rounded border-white/20 bg-offwhite text-mandarange focus:ring-mandarange/30"
        />
        Save as draft
      </label>

      <button
        type="submit"
        className="bg-mandarange text-offwhite px-6 py-3 rounded-full font-medium hover:bg-mandarange/90 transition-all disabled:opacity-70"
        disabled={isPending}
      >
        {isPending
          ? post
            ? "Updating..."
            : "Publishing..."
          : post
            ? "Update Article"
            : "Publish Article"}
      </button>
    </form>
  );
}
