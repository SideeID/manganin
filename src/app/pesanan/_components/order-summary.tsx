"use client";

import { ShoppingCartIcon, ReceiptIcon } from "./icons";
import { ScrollArea } from "@/components/ui/scroll-area";

export type OrderItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

export function OrderSummary({
  customerName,
  orderCode,
  items,
}: {
  customerName: string;
  orderCode: string;
  items: OrderItem[];
}) {
  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const tax = subtotal * 0.05;
  const total = subtotal + tax;
  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
  const formatCurrency = (amount: number) => `IDR ${amount.toLocaleString()}`;

  return (
    <aside className="flex h-[calc(100vh-140px)] w-80 flex-col border-l bg-white p-6 dark:border-dark-3 dark:bg-gray-dark">
      <ScrollArea className="flex-1 pr-2">
        <div className="space-y-6 pb-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-dark dark:text-white">
                {customerName}
              </h2>
              <p className="text-sm text-gray-600 dark:text-dark-6">
                Order #{orderCode}
              </p>
            </div>
            <ShoppingCartIcon className="size-5 text-gray-500 dark:text-dark-6" />
          </div>

          <div>
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-semibold text-dark dark:text-white">
                Ordered Items
              </h3>
              <span className="inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-gray-900 px-1.5 text-[10px] font-semibold text-white dark:bg-dark-3">
                {totalItems}
              </span>
            </div>

            <div className="space-y-3">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600 dark:text-dark-6">
                      {item.quantity}x
                    </span>
                    <span className="text-sm text-dark dark:text-white">
                      {item.name}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-dark dark:text-white">
                    {formatCurrency(item.price * item.quantity)}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-dark dark:text-white">
              Payment Summary
            </h3>

            <div className="mb-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600 dark:text-dark-6">Subtotal</span>
                <span className="text-dark dark:text-white">
                  {formatCurrency(subtotal)}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600 dark:text-dark-6">Tax</span>
                <span className="text-dark dark:text-white">
                  {formatCurrency(tax)}
                </span>
              </div>
            </div> 

            <div className="rounded-lg border border-brand/50 p-3">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-dark dark:text-white">
                  Total
                </span>
                <span className="text-lg font-bold text-dark dark:text-white">
                  {formatCurrency(total)}
                </span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-2 font-semibold text-dark dark:text-white">
              Additional Notes
            </h3>
            <ul className="list-disc space-y-1 pl-5 text-sm text-gray-600 dark:text-dark-6">
              {Array.from({ length: 20 }).map((_, i) => (
                <li key={i}>
                  Note #{i + 1}: Please verify order details and preferences.
                </li>
              ))}
            </ul>
          </div>
        </div>
      </ScrollArea>

      <div className="mt-4 space-y-3">
        <button className="flex w-full items-center justify-center rounded-lg border border-gray-300 bg-transparent px-4 py-2 text-gray-700 hover:bg-gray-50 dark:border-dark-3 dark:text-dark-6 dark:hover:bg-[#FFFFFF0D]">
          <ReceiptIcon className="mr-2 size-4" />
          Print Receipt
        </button>

        <button className="w-full rounded-lg bg-brand px-4 py-2 font-medium text-white hover:bg-brand/90">
          Order
        </button>
      </div>
    </aside>
  );
}
