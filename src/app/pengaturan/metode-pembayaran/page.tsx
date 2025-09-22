"use client";

import { ShowcaseSection } from "@/components/Layouts/showcase-section";
import { PaymentSettingsForm } from "./_components/payment-settings-form";

export default function MetodePembayaranPage() {
  return (
    <div className="space-y-6">
      <ShowcaseSection title="Metode Pembayaran">
        <PaymentSettingsForm />
      </ShowcaseSection>
    </div>
  );
}
