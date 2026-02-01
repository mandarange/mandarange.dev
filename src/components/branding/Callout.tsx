import { AlertCircle, CheckCircle2, Lightbulb, RotateCcw } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type CalloutType = "principle" | "pitfall" | "checklist" | "reflection";

interface CalloutProps {
  type: CalloutType;
  children: React.ReactNode;
}

const config = {
  principle: {
    icon: Lightbulb,
    styles: "bg-blue-950/20 border-blue-900/30 text-blue-100",
    iconStyles: "text-blue-400",
    label: "Principle",
  },
  pitfall: {
    icon: AlertCircle,
    styles: "bg-red-950/20 border-red-900/30 text-red-100",
    iconStyles: "text-red-400",
    label: "Pitfall",
  },
  checklist: {
    icon: CheckCircle2,
    styles: "bg-green-950/20 border-green-900/30 text-green-100",
    iconStyles: "text-green-400",
    label: "Checklist",
  },
  reflection: {
    icon: RotateCcw,
    styles: "bg-amber-950/20 border-amber-900/30 text-amber-100",
    iconStyles: "text-amber-400",
    label: "Reflection",
  },
};

export function Callout({ type, children }: CalloutProps) {
  const { icon: Icon, styles, iconStyles, label } = config[type];

  return (
    <div className={cn("my-8 p-6 rounded-xl border-l-4 flex gap-4 shadow-sm", styles)}>
      <div className={cn("shrink-0 mt-1", iconStyles)}>
        <Icon size={20} />
      </div>
      <div className="flex flex-col gap-1">
        <span className="text-xs font-mono font-bold uppercase tracking-wider opacity-60">
          {label}
        </span>
        <div className="text-sm leading-relaxed prose-sm">{children}</div>
      </div>
    </div>
  );
}
