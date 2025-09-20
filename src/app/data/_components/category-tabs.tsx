"use client";

import { Button } from "@/components/ui/button";
import { useDataStore } from "./store";

export function CategoryTabs({
  categories,
}: {
  categories: readonly string[];
}) {
  const { category, setCategory } = useDataStore();
  return (
    <div className="flex gap-2">
      {categories.map((c) => (
        <Button
          key={c}
          variant={category === c ? "default" : "outline"}
          onClick={() => setCategory(c as any)}
          className={
            category === c
              ? "bg-brand text-white hover:bg-brand/90"
              : "bg-white text-gray-600 hover:bg-gray-50 dark:bg-gray-dark dark:text-dark-6 dark:hover:bg-[#FFFFFF0D]"
          }
        >
          {c}
        </Button>
      ))}
    </div>
  );
}
