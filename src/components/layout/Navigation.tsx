"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navItems = [
  { name: "Home", path: "/" },
  { name: "Writing", path: "/writing" },
  { name: "Projects", path: "/projects" },
  { name: "Principles", path: "/principles" },
  { name: "Now", path: "/now" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-offwhite/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="group flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-mandarange flex items-center justify-center text-offwhite font-serif italic font-bold text-xl">
            M
          </div>
          <span className="font-serif italic text-xl tracking-tight text-charcoal group-hover:text-mandarange transition-colors">
            Mandarange
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = pathname === item.path || (item.path !== "/" && pathname.startsWith(item.path));
            return (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "relative text-sm font-medium transition-colors hover:text-mandarange",
                  isActive ? "text-mandarange" : "text-charcoal/60"
                )}
              >
                {item.name}
                {isActive && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-mandarange"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Mobile menu could go here, but sticking to minimalist for now */}
      </div>
    </nav>
  );
}
