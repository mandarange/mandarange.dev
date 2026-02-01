import { MetadataRoute } from "next";
import { getPosts } from "@/lib/mdx";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts("writing");
  const projects = await getPosts("projects");

  const baseUrl = "https://mandarange.dev";

  const postUrls = posts.map((post) => ({
    url: `${baseUrl}/writing/${post.slug}`,
    lastModified: post.updated || post.date,
  }));

  const projectUrls = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
  }));

  const routes = ["", "/writing", "/projects", "/principles", "/now", "/about", "/contact"].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
    })
  );

  return [...routes, ...postUrls, ...projectUrls];
}
