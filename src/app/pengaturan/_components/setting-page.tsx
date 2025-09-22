"use client";

import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Store, CreditCard, Shield, ChevronRight } from "lucide-react";
import { SETTING_ITEMS } from "./mocks";

function SettingIcon({ icon }: { icon: "store" | "payment" | "security" }) {
  if (icon === "store")
    return <Store className="text-muted-foreground h-5 w-5" />;
  if (icon === "payment")
    return <CreditCard className="text-muted-foreground h-5 w-5" />;
  return <Shield className="text-muted-foreground h-5 w-5" />;
}

export function SettingsPage() {
  return (
    <div className="w-full">
      <div className="mb-6">
        <h1 className="text-foreground text-xl font-semibold">Pengaturan</h1>
      </div>

      <div className="grid grid-cols-1 gap-3">
        {SETTING_ITEMS.map((item) => (
          <Link key={item.href} href={item.href} className="block">
            <Card className="hover:bg-accent/50 h-full cursor-pointer transition-colors">
              <div className="flex items-center justify-between px-4 py-4">
                <div className="flex items-center gap-3">
                  <SettingIcon icon={item.icon} />
                  <span className="text-foreground text-base font-medium">
                    {item.title}
                  </span>
                </div>
                <ChevronRight className="text-muted-foreground h-5 w-5" />
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
