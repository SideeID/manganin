"use client";

import { Button } from "@/components/ui/button";
import { useDataStore } from "./store";

export function TimePeriodTabs({ periods }: { periods: readonly string[] }) {
  const { timePeriod, setTimePeriod } = useDataStore();
  return (
    <div className="flex gap-2">
      {periods.map((period) => (
        <Button
          key={period}
          variant={timePeriod === period ? "default" : "outline"}
          onClick={() => setTimePeriod(period as any)}
          className={
            timePeriod === period
              ? "bg-brand text-white hover:bg-brand/90"
              : "bg-white text-gray-600 hover:bg-gray-50 dark:bg-gray-dark dark:text-dark-6 dark:hover:bg-[#FFFFFF0D]"
          }
        >
          {period}
        </Button>
      ))}
    </div>
  );
}
