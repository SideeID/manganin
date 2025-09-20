"use client";

import { OrderLine } from "./_components/order-line";
import { MenuGrid } from "./_components/menu-grid";
import { OrderSummary } from "./_components/order-summary";
import { PesananProvider, usePesananStore } from "./_components/store";
import { OrderModal } from "./_components/order-modal";
import { ConfirmOrderModal } from "./_components/confirm-order-modal";

function Content() {
  const { orderItems } = usePesananStore();
  return (
    <div className="flex min-h-[calc(100vh-140px)] items-start bg-white dark:bg-[#020d1a]">
      <div className="flex-1 space-y-6 p-4 pt-0 sm:p-6 sm:pt-0 xl:p-7.5 xl:pt-0">
        <OrderLine />
        <MenuGrid />
      </div>
      <OrderSummary
        customerName="Gilang Febrian"
        orderCode="DON935"
        items={orderItems}
      />
    </div>
  );
}

export default function PesananPage() {
  return (
    <PesananProvider>
      <Content />
      <OrderModal />
      <ConfirmOrderModal />
    </PesananProvider>
  );
}
