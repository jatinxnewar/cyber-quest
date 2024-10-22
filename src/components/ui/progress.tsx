import * as React from "react";
import { cn } from "@/lib/utils";

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  max?: number;
  indicatorColor?: string;
  backgroundColor?: string;
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  (
    { className, value, max = 100, indicatorColor, backgroundColor, ...props },
    ref
  ) => {
    const percentage = (value / max) * 100;

    return (
      <div
        ref={ref}
        className={cn(
          "w-full overflow-hidden rounded-full",
          backgroundColor || "bg-gray-700",
          className
        )}
        {...props}
      >
        <div
          className={cn(
            "h-2 transition-all duration-500 ease-in-out",
            indicatorColor || "bg-blue-500"
          )}
          style={{ width: `${percentage}%` }}
        />
      </div>
    );
  }
);
Progress.displayName = "Progress";

export { Progress };
