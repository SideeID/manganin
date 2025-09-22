"use client";

import { createContext, useContext, useMemo, useState } from "react";

type TimePeriod = "Hari Ini" | "Satu Minggu" | "Satu Tahun";

type LaporanState = {
  timePeriod: TimePeriod;
  setTimePeriod: (v: TimePeriod) => void;
};

const LaporanContext = createContext<LaporanState | null>(null);

export function LaporanProvider({ children }: { children: React.ReactNode }) {
  const [timePeriod, setTimePeriod] = useState<TimePeriod>("Hari Ini");

  const value = useMemo(() => ({ timePeriod, setTimePeriod }), [timePeriod]);

  return (
    <LaporanContext.Provider value={value}>{children}</LaporanContext.Provider>
  );
}

export function useLaporanStore() {
  const ctx = useContext(LaporanContext);
  if (!ctx)
    throw new Error("useLaporanStore must be used within LaporanProvider");
  return ctx;
}
