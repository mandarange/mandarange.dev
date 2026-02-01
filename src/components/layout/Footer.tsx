import Link from "next/link";
import Image from "next/image";
import { SOCIAL_LINKS, COMPANY_LINKS, SITE } from "@/lib/site";

const siteLinks = [
  { name: "Writing", path: "/writing" },
  { name: "Principles", path: "/principles" },
  { name: "Now", path: "/now" },
  { name: "RSS", path: "/rss.xml" },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-white/5 py-12 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2">
            <div className="relative w-6 h-6 rounded-full overflow-hidden">
              <Image
                src="/mandarange.png"
                alt="Mandarange"
                fill
                className="object-cover"
              />
            </div>
            <span className="font-serif italic text-lg text-charcoal">
              Mandarange
            </span>
          </div>
          <p className="text-sm text-charcoal/40">
            &copy; {new Date().getFullYear()} Mandarange. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-6 flex-wrap justify-center">
          {siteLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className="text-sm font-medium text-charcoal/40 hover:text-mandarange transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <span className="w-px h-4 bg-white/10" />
          {[...SOCIAL_LINKS, ...COMPANY_LINKS].map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-charcoal/40 hover:text-mandarange transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
