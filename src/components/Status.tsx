import { clsx } from "clsx";
import { ReactNode } from "react";

interface StatusProps {
  children: ReactNode;
  statusColor: keyof typeof STATUS_COLORS;
}

enum STATUS_COLORS {
  yellow = "before:bg-yellow-500",
  green = "before:bg-green-500",
  red = "before:bg-red-500",
}

export function Status({ children, statusColor }: StatusProps) {
  return (
    <span
      className={clsx(
        "flex items-center gap-2 before:w-2 before:h-2 before:rounded-full",
        {
          [STATUS_COLORS[statusColor]]: statusColor,
        }
      )}
    >
      {children}
    </span>
  );
}
