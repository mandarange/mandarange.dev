"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

export function ShellLayout({
  nav,
  footer,
  children,
}: {
  nav: ReactNode;
  footer: ReactNode;
  children: ReactNode;
}) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin") || pathname.startsWith("/auth");

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <>
      {nav}
      <main className="pt-24 min-h-screen">{children}</main>
      {footer}
    </>
  );
}
