import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "src/content");

export type PostType = "playbook" | "decision" | "case-study" | "notes";

export interface Frontmatter {
  title: string;
  date: string;
  updated?: string;
  excerpt: string;
  tags: string[];
  type: PostType;
  draft?: boolean;
}

export interface Post extends Frontmatter {
  slug: string;
  content: string;
}

export async function getPosts(category: string): Promise<Post[]> {
  const directory = path.join(contentDirectory, category);
  
  if (!fs.existsSync(directory)) {
    return [];
  }

  const files = fs.readdirSync(directory);

  const posts = files
    .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"))
    .map((file) => {
      const filePath = path.join(directory, file);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(fileContent);

      return {
        ...(data as Frontmatter),
        slug: file.replace(/\.(md|mdx)$/, ""),
        content,
      };
    })
    .filter((post) => !post.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export async function getPostBySlug(category: string, slug: string): Promise<Post | null> {
  const directory = path.join(contentDirectory, category);
  const mdxPath = path.join(directory, `${slug}.mdx`);
  const mdPath = path.join(directory, `${slug}.md`);
  
  const filePath = fs.existsSync(mdxPath) ? mdxPath : fs.existsSync(mdPath) ? mdPath : null;

  if (!filePath) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    ...(data as Frontmatter),
    slug,
    content,
  };
}
