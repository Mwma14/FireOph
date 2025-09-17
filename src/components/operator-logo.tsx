import { cn } from "@/lib/utils";
import type { Operator } from "@/lib/types";

interface OperatorLogoProps {
  operator: Operator;
  className?: string;
}

const operatorStyles: Record<Operator, string> = {
  MPT: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  OOREDOO: "bg-red-500/20 text-red-400 border-red-500/30",
  ATOM: "bg-green-500/20 text-green-400 border-green-500/30",
  MYTEL: "bg-purple-500/20 text-purple-400 border-purple-500/30",
};

export default function OperatorLogo({ operator, className }: OperatorLogoProps) {
  return (
    <div
      className={cn(
        "px-2.5 py-1 rounded-full border text-xs font-semibold",
        operatorStyles[operator],
        className
      )}
    >
      {operator}
    </div>
  );
}
