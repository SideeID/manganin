"use client";

import { ShowcaseSection } from "@/components/Layouts/showcase-section";
import { StoreSettingsForm } from "./_components/store-settings-form";

export default function ProfilTokoPage() {
  return (
    <div className="space-y-6">
      <ShowcaseSection title="Profil Toko">
        <StoreSettingsForm />
      </ShowcaseSection>
    </div>
  );
}
