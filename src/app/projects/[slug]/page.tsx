import { getPostBySlug, getPosts } from "@/lib/mdx";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { format } from "date-fns";
import { TOC } from "@/components/branding/TOC";
import { Callout } from "@/components/branding/Callout";
import { TagPill } from "@/components/branding/PostCard";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Link from "next/link";

const components = {
  Callout,
};

export async function generateStaticParams() {
  const posts = await getPosts("projects");
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug("projects", slug);
  if (!post) return {};

  return {
    title: `${post.title} | Mandarange Projects`,
    description: post.excerpt,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug("projects", slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-5xl mx-auto px-6 py-12 md:py-24">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Main content */}
        <div className="flex-1 min-w-0">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-charcoal/40 hover:text-mandarange transition-colors mb-12 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </Link>

          <header className="space-y-8 mb-16">
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <TagPill tag={post.type.toUpperCase()} />
                {post.tags.map((tag) => (
                  <TagPill key={tag} tag={tag} />
                ))}
              </div>
              <h1 className="text-4xl md:text-6xl font-sans font-bold tracking-tight text-charcoal leading-tight">
                {post.title}
              </h1>
              <p className="text-xl text-charcoal/60 leading-relaxed font-light max-w-2xl">
                {post.excerpt}
              </p>
            </div>

            <div className="flex flex-wrap gap-6 pt-4 border-t border-white/5">
               <div className="space-y-1">
                 <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-charcoal/30">Date</p>
                 <p className="text-sm font-medium text-charcoal">{format(new Date(post.date), "MMMM yyyy")}</p>
               </div>
               <div className="space-y-1">
                 <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-charcoal/30">Role</p>
                 <p className="text-sm font-medium text-charcoal">Lead Architect</p>
               </div>
               <div className="flex gap-4 items-end">
                  <a href="#" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-mandarange hover:underline">
                    Live Demo <ExternalLink size={14} />
                  </a>
                  <a href="#" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-charcoal/40 hover:text-charcoal transition-colors">
                    GitHub <Github size={14} />
                  </a>
               </div>
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
