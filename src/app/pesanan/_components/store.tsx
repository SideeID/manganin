"use client";

import { createContext, useContext, useMemo, useState } from "react";

export type MenuItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: "food" | "beverage";
};

export type OrderItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

export type PendingOrder = {
  item: MenuItem;
  qty: number;
};

type PesananStore = {
  orderItems: OrderItem[];
  addToOrder: (item: MenuItem, qty?: number) => void;
  // Modal state for ordering
  modalOpen: boolean;
  selectedItem: MenuItem | null;
  openOrderModal: (item: MenuItem) => void;
  closeOrderModal: () => void;
  // Confirm modal state
  confirmOpen: boolean;
  pendingOrder: PendingOrder | null;
  openConfirmModal: (payload: PendingOrder) => void;
  closeConfirmModal: () => void;
};

const Ctx = createContext<PesananStore | null>(null);

export function PesananProvider({ children }: { children: React.ReactNode }) {
  const [orderItems, setOrderItems] = useState<OrderItem[]>([
    { id: "1", name: "Aglio Olio", price: 75000, quantity: 1 },
  ]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [pendingOrder, setPendingOrder] = useState<PendingOrder | null>(null);

  const addToOrder = (item: MenuItem, qty: number = 1) => {
    setOrderItems((prev) => {
      const existing = prev.find((p) => p.id === item.id);
      if (existing) {
        return prev.map((p) =>
          p.id === item.id ? { ...p, quantity: p.quantity + qty } : p,
        );
      }
      return [
        ...prev,
        { id: item.id, name: item.name, price: item.price, quantity: qty },
      ];
    });
  };

  const openOrderModal = (item: MenuItem) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const closeOrderModal = () => {
    setModalOpen(false);
  };

  const openConfirmModal = (payload: PendingOrder) => {
    setPendingOrder(payload);
    setConfirmOpen(true);
  };

  const closeConfirmModal = () => {
    setConfirmOpen(false);
  };

  const value = useMemo(
    () => ({
      orderItems,
      addToOrder,
      modalOpen,
      selectedItem,
      openOrderModal,
      closeOrderModal,
      confirmOpen,
      pendingOrder,
      openConfirmModal,
      closeConfirmModal,
    }),
    [orderItems, modalOpen, selectedItem, confirmOpen, pendingOrder],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function usePesananStore() {
  const ctx = useContext(Ctx);
  if (!ctx)
    throw new Error("usePesananStore must be used within PesananProvider");
  return ctx;
}
