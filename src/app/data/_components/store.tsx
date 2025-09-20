"use client";

import { createContext, useContext, useMemo, useState } from "react";

type TimePeriod = "Hari Ini" | "Satu Minggu" | "Satu Tahun";
type Category = "All" | "Makanan" | "Minuman";

type DataState = {
  timePeriod: TimePeriod;
  setTimePeriod: (v: TimePeriod) => void;
  category: Category;
  setCategory: (v: Category) => void;
};

const DataContext = createContext<DataState | null>(null);

export function DataProvider({ children }: { children: React.ReactNode }) {
  const [timePeriod, setTimePeriod] = useState<TimePeriod>("Satu Minggu");
  const [category, setCategory] = useState<Category>("Minuman");

  const value = useMemo(
    () => ({ timePeriod, setTimePeriod, category, setCategory }),
    [timePeriod, category],
  );

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}

export function useDataStore() {
  const ctx = useContext(DataContext);
  if (!ctx) throw new Error("useDataStore must be used within DataProvider");
  return ctx;
}
