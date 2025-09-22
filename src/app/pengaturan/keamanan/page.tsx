"use client";

import { ShowcaseSection } from "@/components/Layouts/showcase-section";
import { SecuritySettingsForm } from "./_components/security-settings-form";

export default function KeamananPage() {
  return (
    <div className="space-y-6">
      <ShowcaseSection title="Keamanan">
        <SecuritySettingsForm />
      </ShowcaseSection>
    </div>
  );
}
