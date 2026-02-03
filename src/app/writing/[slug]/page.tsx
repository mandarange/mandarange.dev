import type { Metadata } from "next";
import { getPostBySlug, getPosts } from "@/lib/db";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { format } from "date-fns";
import { TOC } from "@/components/branding/TOC";
import { Callout } from "@/components/branding/Callout";
import { TagPill } from "@/components/branding/PostCard";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { SITE } from "@/lib/site";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";

const components = {
  Callout,
};

export const dynamicParams = true;
export const revalidate = 60;

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export const generateMetadata: ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => Promise<Metadata> = async ({ params }) => {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    authors: [{ name: SITE.title }],
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `${SITE.url}/writing/${slug}`,
      publishedTime: post.date,
      ...(post.updated_at && { modifiedTime: post.updated_at }),
      authors: [SITE.title],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
    alternates: {
      canonical: `${SITE.url}/writing/${slug}`,
    },
  };
};

function BlogPostingJsonLd({ post, slug }: { post: { title: string; excerpt: string; date: string; updated_at?: string; tags: string[]; content: string }; slug: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    ...(post.updated_at && { dateModified: post.updated_at }),
    author: {
      "@type": "Person",
      name: SITE.title,
      url: SITE.url,
    },
    publisher: {
      "@type": "Person",
      name: SITE.title,
      url: SITE.url,
    },
    url: `${SITE.url}/writing/${slug}`,
    mainEntityOfPage: `${SITE.url}/writing/${slug}`,
    keywords: post.tags,
    wordCount: post.content.split(/\s+/).length,
    inLanguage: "en-US",
    image: `${SITE.url}/writing/${slug}/opengraph-image`,
  };

  return (
    <script type="application/ld+json">{JSON.stringify(schema)}</script>
  );
}

function BreadcrumbJsonLd({ postTitle, slug }: { postTitle: string; slug: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Writing", item: `${SITE.url}/writing` },
      { "@type": "ListItem", position: 3, name: postTitle, item: `${SITE.url}/writing/${slug}` },
    ],
  };

  return (
    <script type="application/ld+json">{JSON.stringify(schema)}</script>
  );
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <BlogPostingJsonLd post={post} slug={slug} />
      <BreadcrumbJsonLd postTitle={post.title} slug={slug} />
      <article className="max-w-5xl mx-auto px-6 py-12 md:py-24">
        <div className="flex flex-col lg:flex-row gap-12">
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
                {post.updated_at && (
                  <>
                    <span>&bull;</span>
                    <span>Updated {format(new Date(post.updated_at), "MMM d, yyyy")}</span>
                  </>
                )}
              </div>
            </header>

            <div className="prose prose-invert prose-headings:font-serif prose-headings:italic prose-headings:not-font-bold prose-h2:text-3xl prose-h2:mt-12 prose-h3:text-xl prose-p:text-charcoal/80 prose-p:leading-relaxed prose-p:whitespace-pre-line prose-li:text-charcoal/80 prose-li:whitespace-pre-line max-w-none">
              <MDXRemote
                source={post.content}
                components={components}
                options={{
                  mdxOptions: {
                    remarkPlugins: [remarkGfm, remarkBreaks],
                  },
                }}
              />
            </div>
          </div>

          <aside className="hidden lg:block w-64 shrink-0">
            <TOC />
          </aside>
        </div>
      </article>
    </>
  );
}
