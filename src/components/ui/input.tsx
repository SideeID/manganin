import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={cn(
          "flex h-10 w-full rounded-lg border bg-white px-3 py-2 text-sm text-dark outline-none transition placeholder:text-gray-500 focus-visible:border-brand focus-visible:ring-[3px] focus-visible:ring-brand/30 dark:border-dark-3 dark:bg-gray-dark dark:text-white dark:placeholder:text-dark-6",
          className,
        )}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";
