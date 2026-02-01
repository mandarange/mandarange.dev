"use client";

import type { ReactNode } from "react";

export function DeleteButton({
  action,
  children,
}: {
  action: () => void;
  children: ReactNode;
}) {
  return (
    <form
      action={action}
      onSubmit={(event) => {
        if (!confirm("Delete this article?")) {
          event.preventDefault();
        }
      }}
    >
      <button
        type="submit"
        className="p-2 rounded-lg hover:bg-red-500/10 text-charcoal/40 hover:text-red-500 transition-all"
      >
        {children}
      </button>
    </form>
  );
}
