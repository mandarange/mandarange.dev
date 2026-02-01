import { getPosts } from "@/lib/mdx";

export async function GET() {
  const posts = await getPosts("writing");
  const baseUrl = "https://mandarange.dev";

  const items = posts
    .map((post) => `
    <item>
      <title>${post.title}</title>
      <link>${baseUrl}/writing/${post.slug}</link>
      <description>${post.excerpt}</description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <guid>${baseUrl}/writing/${post.slug}</guid>
    </item>
  `)
    .join("");

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Mandarange</title>
    <link>${baseUrl}</link>
    <description>Engineering notes for systems you can trust.</description>
    <language>en-us</language>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml" />
    ${items}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  });
}
