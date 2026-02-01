import { ImageResponse } from "next/og";
import { getPostBySlug } from "@/lib/mdx";

export const runtime = "nodejs";

export default async function Image({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug("writing", params.slug);

  if (!post) {
    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#FAF9F6",
            padding: "80px",
          }}
        >
          <div style={{ display: "flex", fontSize: 60, fontWeight: "bold", color: "#FF6B00", fontStyle: "italic" }}>
            Mandarange
          </div>
        </div>
      ),
      { width: 1200, height: 630 }
    );
  }

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#FAF9F6",
          padding: "80px",
          position: "relative",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "40px" }}>
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              backgroundColor: "#FF6B00",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#FAF9F6",
              fontSize: "24px",
              fontWeight: "bold",
              fontStyle: "italic",
            }}
          >
            M
          </div>
          <div style={{ fontSize: "32px", color: "#1A1A1A", fontStyle: "italic" }}>Mandarange</div>
        </div>

        <div
          style={{
            fontSize: "64px",
            fontWeight: "bold",
            color: "#1A1A1A",
            lineHeight: 1.1,
            marginBottom: "24px",
          }}
        >
          {post.title}
        </div>

        <div
          style={{
            fontSize: "28px",
            color: "#1A1A1A",
            opacity: 0.6,
            maxWidth: "800px",
          }}
        >
          {post.excerpt}
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "80px",
            left: "80px",
            display: "flex",
            gap: "12px",
          }}
        >
          {post.tags.map((tag) => (
            <div
              key={tag}
              style={{
                padding: "8px 16px",
                borderRadius: "20px",
                backgroundColor: "rgba(255, 107, 0, 0.05)",
                border: "1px solid rgba(255, 107, 0, 0.1)",
                color: "#FF6B00",
                fontSize: "18px",
                fontWeight: "bold",
                textTransform: "uppercase",
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
