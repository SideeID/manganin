"use client";

import { useMemo } from "react";
import { ShowcaseSection } from "@/components/Layouts/showcase-section";
import { TimePeriodTabs } from "./_components/time-period-tabs";
import { CategoryTabs } from "./_components/category-tabs";
import { MetricCards } from "./_components/metric-cards";
import { BestSellingTable } from "./_components/best-selling-table";
import { MOCK_ROWS, type BestRow } from "@/app/data/_components/data";
import { DataProvider, useDataStore } from "./_components/store";

const timePeriods = ["Hari Ini", "Satu Minggu", "Satu Tahun"] as const;
const categories = ["All", "Makanan", "Minuman"] as const;

function Content() {
  const { category } = useDataStore();
  const rows: BestRow[] = useMemo(() => {
    if (category === "All") return MOCK_ROWS;
    return MOCK_ROWS.filter((r: BestRow) => r.category === category);
  }, [category]);

  return (
    <div className="space-y-6">
      <ShowcaseSection >
        <div className="space-y-6">
          <TimePeriodTabs periods={timePeriods} />
          <MetricCards />

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-dark dark:text-white">
                Hidangan Terlaris
              </h2>
            </div>

            <CategoryTabs categories={categories} />

            <p className="text-gray-600 dark:text-dark-6">
              Senin, 21 Juni 2024
            </p>

            <BestSellingTable rows={rows} />
          </div>
        </div>
      </ShowcaseSection>
    </div>
  );
}

export default function DataPage() {
  return (
    <DataProvider>
      <Content />
    </DataProvider>
  );
}
