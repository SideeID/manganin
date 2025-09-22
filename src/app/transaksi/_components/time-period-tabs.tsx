"use client";

import { Button } from "@/components/ui/button";
import { useLaporanStore } from "./store";

export function TimePeriodTabs({ periods }: { periods: readonly string[] }) {
  const { timePeriod, setTimePeriod } = useLaporanStore();
  return (
    <div className="flex flex-wrap gap-2">
      {periods.map((period) => (
        <Button
          key={period}
          variant={timePeriod === period ? "default" : "outline"}
          onClick={() => setTimePeriod(period as any)}
          className={
            timePeriod === period
              ? "inline-flex h-9 items-center justify-center whitespace-nowrap rounded-full border border-brand  bg-brand px-4 text-sm font-medium text-white transition-colors hover:bg-brand/90"
              : "inline-flex h-9 items-center justify-center whitespace-nowrap rounded-full border border-stroke bg-transparent px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 dark:border-dark-3 dark:text-dark-6 dark:hover:bg-[#FFFFFF0D]"
          }
          aria-pressed={timePeriod === period}
        >
          {period}
        </Button>
      ))}
    </div>
  );
}
