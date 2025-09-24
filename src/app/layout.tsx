import "@/css/satoshi.css";
import "@/css/style.css";

import { AppShell } from "@/components/Layouts/app-shell";

import "flatpickr/dist/flatpickr.min.css";
import "jsvectormap/dist/jsvectormap.css";

import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
import type { PropsWithChildren } from "react";
import { Providers } from "./providers";
import MuiXLicense from "@/components/MuiXLicense";

export const metadata: Metadata = {
  title: {
    template: "%s | Manganin - Dashbaord",
    default: "Manganin - Dashboard",
  },
  description:
    "Manganin dashboard restaurant admin panel to manage orders, menu, and customers.",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <NextTopLoader color="#5750F1" showSpinner={false} />
          <MuiXLicense />
          <AppShell>{children}</AppShell>
        </Providers>
      </body>
    </html>
  );
}
