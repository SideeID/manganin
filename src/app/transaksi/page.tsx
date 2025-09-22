"use client";

import { useMemo } from "react";
import { ShowcaseSection } from "@/components/Layouts/showcase-section";
import { TimePeriodTabs } from "./_components/time-period-tabs";
import { TransactionTable } from "./_components/transaction-table";
import { LaporanMetricCards } from "./_components/laporan-metric-cards";
import {
  MOCK_TRANSACTIONS,
  type TransactionRow,
} from "./_components/transaction-data";
import { LaporanProvider, useLaporanStore } from "./_components/store";

const timePeriods = ["Hari Ini", "Satu Minggu", "Satu Tahun"] as const;

function Content() {
  const { timePeriod } = useLaporanStore();

  const processedData = useMemo(() => {
    const today = new Date("2025-09-22");
    const oneWeekAgo = new Date(today);
    oneWeekAgo.setDate(today.getDate() - 7);
    const oneYearAgo = new Date(today);
    oneYearAgo.setFullYear(today.getFullYear() - 1);

    if (timePeriod === "Hari Ini") {
      const todayTransactions = MOCK_TRANSACTIONS.filter(
        (t) => t.date === "2025-09-22",
      );
      return { type: "single", data: todayTransactions };
    }

    if (timePeriod === "Satu Minggu") {
      const weekTransactions = MOCK_TRANSACTIONS.filter(
        (t) => new Date(t.date) >= oneWeekAgo && new Date(t.date) <= today,
      );

      const groupedByDay = weekTransactions.reduce(
        (acc, transaction) => {
          const date = transaction.date;
          if (!acc[date]) {
            acc[date] = [];
          }
          acc[date].push(transaction);
          return acc;
        },
        {} as Record<string, TransactionRow[]>,
      );

      return { type: "byDay", data: groupedByDay };
    }

    if (timePeriod === "Satu Tahun") {
      const yearTransactions = MOCK_TRANSACTIONS.filter(
        (t) => new Date(t.date) >= oneYearAgo && new Date(t.date) <= today,
      );

      const groupedByMonth = yearTransactions.reduce(
        (acc, transaction) => {
          const date = new Date(transaction.date);
          const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
          if (!acc[monthKey]) {
            acc[monthKey] = [];
          }
          acc[monthKey].push(transaction);
          return acc;
        },
        {} as Record<string, TransactionRow[]>,
      );

      return { type: "byMonth", data: groupedByMonth };
    }

    return { type: "single", data: [] };
  }, [timePeriod]);

  const formatDateTitle = (dateStr: string) => {
    const date = new Date(dateStr);
    const days = [
      "Minggu",
      "Senin",
      "Selasa",
      "Rabu",
      "Kamis",
      "Jumat",
      "Sabtu",
    ];
    const months = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];

    const dayName = days[date.getDay()];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${dayName}, ${day} ${month} ${year}`;
  };

  const formatMonthTitle = (monthKey: string) => {
    const [year, month] = monthKey.split("-");
    const months = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];
    return `${months[parseInt(month) - 1]} ${year}`;
  };

  const renderTables = () => {
    if (processedData.type === "single") {
      return <TransactionTable rows={processedData.data as TransactionRow[]} />;
    }

    if (processedData.type === "byDay") {
      const dayData = processedData.data as Record<string, TransactionRow[]>;
      const sortedDays = Object.keys(dayData).sort(
        (a, b) => new Date(b).getTime() - new Date(a).getTime(),
      );

      return (
        <div className="space-y-6">
          {sortedDays.map((date) => (
            <TransactionTable
              key={date}
              rows={dayData[date]}
              title={formatDateTitle(date)}
            />
          ))}
        </div>
      );
    }

    if (processedData.type === "byMonth") {
      const monthData = processedData.data as Record<string, TransactionRow[]>;
      const sortedMonths = Object.keys(monthData).sort((a, b) =>
        b.localeCompare(a),
      );

      return (
        <div className="space-y-6">
          {sortedMonths.map((monthKey) => (
            <TransactionTable
              key={monthKey}
              rows={monthData[monthKey]}
              title={formatMonthTitle(monthKey)}
            />
          ))}
        </div>
      );
    }

    return null;
  };

  return (
    <div className="space-y-6">
      <ShowcaseSection title="Laporan Transaksi">
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-dark dark:text-white">
            Total
          </h2>
          <LaporanMetricCards />
          <h2 className="text-xl font-semibold text-dark dark:text-white">
            Transaksi dengan pelanggan
          </h2>
          <TimePeriodTabs periods={timePeriods} />
          <div className="space-y-4">{renderTables()}</div>
        </div>
      </ShowcaseSection>
    </div>
  );
}

export default function LaporanPage() {
  return (
    <LaporanProvider>
      <Content />
    </LaporanProvider>
  );
}
