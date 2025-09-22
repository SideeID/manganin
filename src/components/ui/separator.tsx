import * as React from "react";
import { cn } from "@/lib/utils";

export function Separator({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      role="separator"
      className={cn("my-6 h-px w-full bg-stroke dark:bg-dark-3", className)}
      {...props}
    />
  );
}
