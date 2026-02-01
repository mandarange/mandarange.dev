import type { Metadata } from "next";
import { Geist, Geist_Mono, Newsreader } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { SITE } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: "italic",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.title} | ${SITE.name}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [...SITE.keywords],
  authors: [{ name: SITE.title, url: SITE.url }],
  creator: SITE.title,
  publisher: SITE.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: SITE.url,
    title: `${SITE.title} — ${SITE.name}`,
    description: SITE.description,
    siteName: SITE.name,
    images: [
      {
        url: "/mandarange.png",
        width: 512,
        height: 512,
        alt: `${SITE.title} — ${SITE.name}`,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: `${SITE.title} — ${SITE.name}`,
    description: SITE.description,
    images: ["/mandarange.png"],
  },
  alternates: {
    canonical: SITE.url,
    types: {
      "application/rss+xml": `${SITE.url}/rss.xml`,
    },
  },
  icons: {
    icon: "/mandarange.png",
    apple: "/mandarange.png",
  },
};

function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE.title,
    url: SITE.url,
    email: SITE.email,
    jobTitle: "CTO & CEO",
    description: SITE.description,
    knowsAbout: [
      "Software Architecture",
      "Platform Engineering",
      "Data Integrity",
      "SSOT",
      "Operational Reliability",
      "Game Graphics",
      "Shader Development",
      "K-beauty Commerce",
      "Supply Chain Systems",
      "Cross-platform Development",
      "Spring Boot",
      "Next.js",
      "React",
      "Flutter",
      "Unity",
    ],
    worksFor: [
      {
        "@type": "Organization",
        name: "Hypercape Inc.",
        url: "https://biz.hypercape.com/",
      },
      {
        "@type": "Organization",
        name: "WeKlem Inc.",
        url: "https://www.weklem.com/",
      },
    ],
    sameAs: [
      "https://www.linkedin.com/in/daniel-choi-a736a322b/",
      "https://www.youtube.com/channel/UCMgGulF7OOaIyFfwh-ekFXA",
      "https://m.blog.naver.com/PostList.naver?blogId=cdw0424&tab=1",
    ],
    image: `${SITE.url}/mandarange.png`,
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    author: { "@type": "Person", name: SITE.title },
    description: SITE.description,
    inLanguage: "en-US",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <JsonLd />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${newsreader.variable} antialiased font-sans bg-offwhite text-charcoal`}
      >
        <Navigation />
        <main className="pt-24 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
