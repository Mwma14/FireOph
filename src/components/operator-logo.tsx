import { cn } from "@/lib/utils";
import type { Operator } from "@/lib/types";

interface OperatorLogoProps {
  operator: Operator;
  className?: string;
}

const operatorStyles: Record<Operator, string> = {
  MPT: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  OOREDOO: "bg-red-500/20 text-red-300 border-red-500/30",
  ATOM: "bg-green-500/20 text-green-300 border-green-500/30",
  MYTEL: "bg-purple-500/20 text-purple-300 border-purple-500/30",
};

export default function OperatorLogo({ operator, className }: OperatorLogoProps) {
  return (
    <div
      className={cn(
        "px-3 py-1 rounded-md border text-xs font-semibold bg-card/80",
        // operatorStyles[operator],
        className
      )}
    >
      {operator}
    </div>
  );
}
