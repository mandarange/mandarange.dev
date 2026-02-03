"use client";

import { useActionState, useState } from "react";
import MDEditor from "@uiw/react-md-editor";
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
  const [content, setContent] = useState(post?.content ?? "");

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
    <form action={formAction} className="space-y-6 admin-fade-up admin-fade-delay-1">
      <div className="space-y-2">
        <label
          htmlFor="title"
          className="text-[10px] font-mono font-bold uppercase tracking-widest text-charcoal/30"
        >
          Title
        </label>
        <input
          id="title"
          name="title"
          type="text"
          value={title}
          onChange={(event) => handleTitleChange(event.target.value)}
          className="w-full bg-offwhite border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-mandarange/20 focus:border-mandarange transition-all"
          required
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="slug"
          className="text-[10px] font-mono font-bold uppercase tracking-widest text-charcoal/30"
        >
          Slug
        </label>
        <input
          id="slug"
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
          <label
            htmlFor="type"
            className="text-[10px] font-mono font-bold uppercase tracking-widest text-charcoal/30"
          >
            Type
          </label>
          <select
            id="type"
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
          <label
            htmlFor="tags"
            className="text-[10px] font-mono font-bold uppercase tracking-widest text-charcoal/30"
          >
            Tags
          </label>
          <input
            id="tags"
            name="tags"
            type="text"
            defaultValue={post?.tags?.join(", ") ?? ""}
            placeholder="strategy, growth, editorial"
            className="w-full bg-offwhite border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-mandarange/20 focus:border-mandarange transition-all"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label
          htmlFor="excerpt"
          className="text-[10px] font-mono font-bold uppercase tracking-widest text-charcoal/30"
        >
          Excerpt
        </label>
        <textarea
          id="excerpt"
          name="excerpt"
          rows={2}
          defaultValue={post?.excerpt ?? ""}
          className="w-full bg-offwhite border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-mandarange/20 focus:border-mandarange transition-all"
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="content"
          className="text-[10px] font-mono font-bold uppercase tracking-widest text-charcoal/30"
        >
          Content
        </label>
        <div
          data-color-mode="dark"
          className="rounded-xl border border-white/10 bg-offwhite overflow-hidden shadow-[0_0_0_1px_rgba(255,255,255,0.02)]"
        >
          <MDEditor
            value={content}
            onChange={(value) => setContent(value ?? "")}
            height={360}
            preview="live"
            className="border-0"
            textareaProps={{ placeholder: "Write in Markdown..." }}
          />
        </div>
        <textarea
          id="content"
          name="content"
          value={content}
          readOnly
          required
          className="sr-only"
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
