"use client";

import { useState } from "react";
import { InfoIcon, ChevronLeftIcon, ChevronRightIcon } from "./icons";

type OrderTab = { id: string; label: string };

export function OrderLine() {
  const [activeOrderTab, setActiveOrderTab] = useState("all");

  const orderTabs: OrderTab[] = [
    { id: "all", label: "All" },
    { id: "dine-in", label: "Dine In" },
    { id: "take-away", label: "Take Away" },
    { id: "waitlist", label: "Waitlist" },
    { id: "served", label: "Served" },
  ];

  return (
    <div className="w-full rounded-[10px] border border-brand/50 bg-white dark:bg-gray-dark">
      <div className="border-b border-stroke px-4 py-4 dark:border-dark-3 sm:px-6 xl:px-7.5">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-dark dark:text-white">
            Order Line
          </h3>

          <div className="flex items-center gap-2">
            <button className="flex size-8 items-center justify-center rounded-full text-gray-600 hover:bg-gray-100 dark:text-dark-6 hover:dark:bg-[#FFFFFF1A]">
              <ChevronLeftIcon className="size-5" />
            </button>
            <button className="flex size-8 items-center justify-center rounded-full bg-brand text-white hover:bg-brand/90">
              <ChevronRightIcon className="size-5" />
            </button>
          </div>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {orderTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveOrderTab(tab.id)}
              className={
                "inline-flex h-9 items-center justify-center whitespace-nowrap rounded-full border px-4 text-sm font-medium transition-colors " +
                (activeOrderTab === tab.id
                  ? "border-brand bg-brand text-white hover:bg-brand/90"
                  : "border-stroke bg-transparent text-gray-600 hover:bg-gray-100 dark:border-dark-3 dark:text-dark-6 dark:hover:bg-[#FFFFFF0D]")
              }
              aria-pressed={activeOrderTab === tab.id}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="p-4 sm:p-6 xl:p-7.5">
        {activeOrderTab === "waitlist" && (
          <div className="flex items-center gap-4 rounded-lg border bg-white p-4 dark:border-dark-3 dark:bg-gray-dark">
            <div className="h-20 w-20 overflow-hidden rounded-lg bg-gray-100 dark:bg-dark-2" />
            <div className="flex-1">
              <h4 className="font-semibold text-dark dark:text-white">
                Aglio Olio
              </h4>
              <p className="text-sm text-gray-600 dark:text-dark-6">
                Gilang Febrian
              </p>
            </div>
            <span className="rounded-full border border-yellow-200 bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-800">
              Waitlist
            </span>
          </div>
        )}

        {activeOrderTab !== "waitlist" && (
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-dark-6">
            <InfoIcon className="size-4" />
            Select a tab to view orders.
          </div>
        )}
      </div>
    </div>
  );
}
