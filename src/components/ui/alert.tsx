import * as React from "react";
import { cn } from "@/lib/utils";

export function Alert({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      role="alert"
      className={cn(
        "w-full rounded-lg border px-4 py-3 text-sm text-dark dark:border-dark-3 dark:text-white",
        className,
      )}
      {...props}
    />
  );
}

export function AlertDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("leading-6", className)} {...props} />;
}
