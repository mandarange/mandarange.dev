import Link from "next/link";

const footerLinks = [
  { name: "Tags", path: "/tags" },
  { name: "RSS", path: "/rss.xml" },
  { name: "Search", path: "/search" },
  { name: "Privacy", path: "/privacy" },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-white/5 py-12 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-mandarange flex items-center justify-center text-offwhite font-serif italic font-bold text-sm">
              M
            </div>
            <span className="font-serif italic text-lg text-charcoal">Mandarange</span>
          </div>
          <p className="text-sm text-charcoal/40">
            © {new Date().getFullYear()} Mandarange. All rights reserved.
          </p>
        </div>

        <div className="flex gap-8">
          {footerLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className="text-sm font-medium text-charcoal/40 hover:text-mandarange transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
