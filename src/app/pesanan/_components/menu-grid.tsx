"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { usePesananStore } from "./store";
import { MENU } from "./data";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

export function MenuGrid() {
  const { openOrderModal } = usePesananStore();
  const [activeTab, setActiveTab] = useState<"all" | "food" | "beverage">(
    "all",
  );

  const tabs = [
    { id: "all", label: "All" },
    { id: "food", label: "Food" },
    { id: "beverage", label: "Beverage" },
  ] as const;

  const items = useMemo(
    () =>
      activeTab === "all" ? MENU : MENU.filter((i) => i.category === activeTab),
    [activeTab],
  );

  const formatCurrency = (amount: number) => `IDR ${amount.toLocaleString()}`;

  return (
    <div className="w-full rounded-[10px] border border-brand/50 bg-white dark:bg-gray-dark">
      <div className="border-b border-stroke px-4 py-3 dark:border-dark-3 sm:px-5 md:px-6 xl:px-7.5">
        <h3 className="text-lg font-semibold text-dark dark:text-white md:text-xl">
          Menu
        </h3>

        <div className="mt-3 flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={
                "inline-flex h-9 items-center justify-center whitespace-nowrap rounded-full border px-4 text-sm font-medium transition-colors " +
                (activeTab === tab.id
                  ? "border-brand bg-brand text-white hover:bg-brand/90"
                  : "border-stroke bg-transparent text-gray-600 hover:bg-gray-100 dark:border-dark-3 dark:text-dark-6 dark:hover:bg-[#FFFFFF0D]")
              }
              aria-pressed={activeTab === tab.id}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="p-4 sm:p-5 md:p-6 xl:p-7.5">
        <ScrollArea className="h-[420px] pr-2 md:h-[520px]">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4 lg:grid-cols-3">
            {items.concat(items).map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                className="overflow-hidden rounded-lg border bg-white dark:border-dark-3 dark:bg-gray-dark"
              >
                <div className="aspect-video w-full bg-gray-100 dark:bg-dark-2">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    width={300}
                    height={200}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-3 md:p-4">
                  <div className="mb-1.5 flex items-center justify-between md:mb-2">
                    <h4 className="font-semibold text-dark dark:text-white md:text-base">
                      {item.name}
                    </h4>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-brand md:text-base">
                      {formatCurrency(item.price)}
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => openOrderModal(item)}
                      className="rounded-full border-brand text-brand hover:bg-brand/10"
                    >
                      Order
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}
