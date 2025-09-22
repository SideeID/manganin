"use client";

import { ShowcaseSection } from "@/components/Layouts/showcase-section";
import { SettingsPage } from "./_components/setting-page";

export default function PengaturanPage() {
  return (
    <div className="space-y-6">
      <ShowcaseSection>
        <SettingsPage />
      </ShowcaseSection>
    </div>
  );
}
