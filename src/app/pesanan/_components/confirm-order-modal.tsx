"use client";

import { useMemo, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { usePesananStore } from "./store";

export function ConfirmOrderModal() {
  const { confirmOpen, closeConfirmModal, pendingOrder, addToOrder } =
    usePesananStore();

  const [customer, setCustomer] = useState("");

  const orderNo = useMemo(() => {
    // Simple demo order code: ITEMID-QTY
    if (!pendingOrder) return "";
    return `${pendingOrder.item.id}-${pendingOrder.qty}`;
  }, [pendingOrder]);

  const subtotal = pendingOrder
    ? pendingOrder.item.price * pendingOrder.qty
    : 0;
  const tax = Math.round(subtotal * 0.05);
  const total = subtotal + tax;
  const totalItems = pendingOrder ? pendingOrder.qty : 0;
  const format = (n: number) => `IDR ${n.toLocaleString()}`;

  return (
    <Dialog open={confirmOpen} onOpenChange={closeConfirmModal}>
      <DialogContent className="overflow-hidden rounded-2xl border border-brand/50 bg-white p-0 dark:bg-gray-dark sm:max-w-md">
        <DialogHeader className="px-6 pb-4 pt-6">
          <DialogTitle className="text-2xl font-bold text-dark dark:text-white">
            PESANAN #{orderNo}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4 px-6">
          <div className="rounded-lg border border-brand/30 p-4">
            <div className="flex justify-between text-sm text-dark dark:text-white">
              <span>Jumlah Pesanan</span>
              <span>{totalItems} item</span>
            </div>
            <div className="mt-2 flex justify-between text-sm text-dark dark:text-white">
              <span>Total Harga</span>
              <span>{format(total)}</span>
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="customerName"
              className="text-sm font-medium text-dark dark:text-white"
            >
              Atas Nama Pemesan
            </label>
            <input
              id="customerName"
              type="text"
              value={customer}
              onChange={(e) => setCustomer(e.target.value)}
              placeholder="Masukkan nama pemesan"
              className="w-full rounded-md border border-brand/40 bg-white px-3 py-2 text-sm text-dark outline-none transition-shadow focus:ring-[3px] focus:ring-brand/30 dark:border-dark-3 dark:bg-gray-dark dark:text-white"
            />
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-3 p-6 pt-4">
          <Button
            variant="outline"
            className="border-brand text-brand hover:bg-brand/10"
            onClick={() => closeConfirmModal()}
          >
            Periksa Ulang
          </Button>
          <Button
            className="bg-brand text-white hover:bg-brand/90"
            onClick={() => {
              if (!pendingOrder) return;
              addToOrder(pendingOrder.item, pendingOrder.qty);
              closeConfirmModal();
            }}
            disabled={!pendingOrder || !customer.trim()}
          >
            Ya
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
