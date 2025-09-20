"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { usePesananStore } from "./store";

// Light inline radio controls without adding new ui deps
function RadioRow({
  name,
  label,
  options,
  value,
  onChange,
}: {
  name: string;
  label: string;
  options: { id: string; label: string }[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <h3 className="mb-3 text-lg font-medium text-dark dark:text-white">
        {label}
      </h3>
      <div className="flex flex-wrap gap-6">
        {options.map((opt) => (
          <label
            key={opt.id}
            className="flex cursor-pointer items-center gap-2"
          >
            <input
              type="radio"
              name={name}
              value={opt.id}
              checked={value === opt.id}
              onChange={() => onChange(opt.id)}
              className="h-4 w-4 accent-brand"
            />
            <span className="text-sm text-dark dark:text-white">
              {opt.label}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}

export function OrderModal() {
  const {
    modalOpen: open,
    selectedItem: item,
    closeOrderModal,
    openConfirmModal,
  } = usePesananStore();
  const [spice, setSpice] = useState("biasa");
  const [flavor, setFlavor] = useState("italian-magnol");
  const [dine, setDine] = useState("dine-in");
  const [qty, setQty] = useState(1);

  const price = item?.price ?? 0;
  const subtotal = useMemo(() => price * qty, [price, qty]);
  const tax = useMemo(() => Math.round(subtotal * 0.05), [subtotal]);
  const total = subtotal + tax;
  const format = (n: number) => `IDR ${n.toLocaleString()}`;

  const disabled = !item;

  return (
    <Dialog open={open} onOpenChange={closeOrderModal}>
      <DialogContent className="overflow-hidden rounded-2xl border border-brand/50 bg-white p-0 dark:bg-gray-dark sm:max-w-md">
        <DialogHeader className="px-6 pb-4 pt-6">
          <div className="flex items-start justify-between">
            <DialogTitle className="text-2xl font-bold text-dark dark:text-white">
              {item?.name ?? ""}
            </DialogTitle>
            <div className="size-16 shrink-0 overflow-hidden rounded-lg bg-gray-100 dark:bg-dark-2">
              {item && (
                <Image
                  src={item.image}
                  alt={item.name}
                  width={64}
                  height={64}
                  className="size-full object-cover"
                />
              )}
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6 px-6">
          <RadioRow
            name="opsi"
            label="Opsi"
            value={spice}
            onChange={setSpice}
            options={[
              { id: "biasa", label: "Biasa" },
              { id: "sedang", label: "Sedang" },
              { id: "pedas", label: "Pedas" },
            ]}
          />

          <RadioRow
            name="rasa"
            label="Rasa"
            value={flavor}
            onChange={setFlavor}
            options={[
              { id: "frenchie-tiet", label: "Frenchie tiet" },
              { id: "italian-magnol", label: "Italian Magnol" },
            ]}
          />

          <RadioRow
            name="makan"
            label="Makan"
            value={dine}
            onChange={setDine}
            options={[
              { id: "dine-in", label: "Dine In" },
              { id: "take-away", label: "Take Away" },
            ]}
          />

          <div className="space-y-2 border-t border-stroke pt-4 dark:border-dark-3">
            <div className="flex justify-between text-dark dark:text-white">
              <span>Subtotal</span>
              <span>{format(subtotal)}</span>
            </div>
            <div className="flex justify-between text-dark dark:text-white">
              <span>Pajak</span>
              <span>{format(tax)}</span>
            </div>
            <div className="flex justify-between border-t border-stroke pt-2 text-lg font-semibold text-dark dark:border-dark-3 dark:text-white">
              <span>Total</span>
              <span>{format(total)}</span>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between bg-gray-1 p-6 dark:bg-dark-2">
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="icon"
              className="size-10 rounded-full border-brand"
              onClick={() => setQty((q) => Math.max(1, q - 1))}
              disabled={qty <= 1 || disabled}
            >
              −
            </Button>
            <span className="w-8 text-center text-lg font-medium text-dark dark:text-white">
              {qty}
            </span>
            <Button
              variant="outline"
              size="icon"
              className="size-10 rounded-full border-brand bg-brand text-white hover:bg-brand/90"
              onClick={() => setQty((q) => q + 1)}
              disabled={disabled}
            >
              +
            </Button>
          </div>
          <Button
            className="rounded-lg bg-brand px-8 py-3 font-medium text-white hover:bg-brand/90"
            onClick={() => {
              if (!item) return;
              openConfirmModal({ item, qty });
              closeOrderModal();
            }}
            disabled={disabled}
          >
            Order
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
