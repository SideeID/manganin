"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export type SelectProps = {
  value?: string;
  onValueChange?: (v: string) => void;
  children: React.ReactNode;
};

export function Select({ value, onValueChange, children }: SelectProps) {
  return (
    <div data-slot="select" data-value={value}>
      {children}
    </div>
  );
}

export function SelectTrigger({
  className,
  children,
}: React.ComponentProps<"button">) {
  return (
    <button
      className={cn(
        "flex h-10 w-full items-center justify-between rounded-lg border bg-white px-3 text-sm text-dark outline-none transition focus-visible:border-brand focus-visible:ring-[3px] focus-visible:ring-brand/30 dark:border-dark-3 dark:bg-gray-dark dark:text-white",
        className,
      )}
      type="button"
    >
      {children}
    </button>
  );
}

export function SelectValue({ placeholder }: { placeholder?: string }) {
  return <span className="text-gray-500">{placeholder ?? "Pilih"}</span>;
}

export function SelectContent({
  children,
  className,
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "mt-2 rounded-lg border bg-white p-1 shadow-sm dark:border-dark-3 dark:bg-gray-dark",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function SelectItem({
  value,
  children,
  onClick,
}: {
  value: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <div
      role="option"
      onClick={onClick}
      className="cursor-pointer rounded-md px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-[#FFFFFF1A]"
      data-value={value}
    >
      {children}
    </div>
  );
}
