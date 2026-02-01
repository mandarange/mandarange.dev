import { getPostBySlug, getPosts } from "@/lib/mdx";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { format } from "date-fns";
import { TOC } from "@/components/branding/TOC";
import { Callout } from "@/components/branding/Callout";
import { TagPill } from "@/components/branding/PostCard";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const components = {
  Callout,
  // Add other custom components here
};

export async function generateStaticParams() {
  const posts = await getPosts("writing");
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug("writing", slug);
  if (!post) return {};

  return {
    title: `${post.title} | Mandarange`,
    description: post.excerpt,
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug("writing", slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-5xl mx-auto px-6 py-12 md:py-24">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Main content */}
        <div className="flex-1 min-w-0">
          <Link
            href="/writing"
            className="inline-flex items-center gap-2 text-sm font-medium text-charcoal/40 hover:text-mandarange transition-colors mb-12 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Writing
          </Link>

          <header className="space-y-6 mb-16">
            <div className="flex flex-wrap gap-2">
              <TagPill tag={post.type.toUpperCase()} />
              {post.tags.map((tag) => (
                <TagPill key={tag} tag={tag} />
              ))}
            </div>
            <h1 className="text-4xl md:text-6xl font-sans font-bold tracking-tight text-charcoal leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-sm font-mono text-charcoal/40">
              <span>{format(new Date(post.date), "MMMM d, yyyy")}</span>
              {post.updated && (
                <>
                  <span>•</span>
                  <span>Updated {format(new Date(post.updated), "MMM d, yyyy")}</span>
                </>
              )}
            </div>
          </header>

          <div className="prose prose-invert prose-headings:font-serif prose-headings:italic prose-headings:not-font-bold prose-h2:text-3xl prose-h2:mt-12 prose-h3:text-xl prose-p:text-charcoal/80 prose-p:leading-relaxed prose-li:text-charcoal/80 max-w-none">
            <MDXRemote source={post.content} components={components} />
          </div>
        </div>

        {/* Sidebar */}
        <aside className="hidden lg:block w-64 shrink-0">
          <TOC />
        </aside>
      </div>
    </article>
  );
}
