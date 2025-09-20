"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import manganinIconWhite from "@/assets/logos/manganin-icon-white.svg";
import { OUTLETS } from "./_data";

export default function SelectOutletPage() {
  const [outlet, setOutlet] = useState<string>("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!outlet) return;
    sessionStorage.setItem(
      "manganin.outlet",
      JSON.stringify({ code: outlet, ts: Date.now() }),
    );
    router.replace("/pesanan");
  };

  return (
    <div className="grid min-h-screen grid-cols-1 bg-white dark:bg-[#020d1a] lg:grid-cols-2">
      <div className="hidden min-h-screen p-6 sm:p-8 lg:flex lg:p-10">
        <div className="h-full w-full">
          <div className="h-full rounded-[10px] bg-brand p-6 sm:p-8 lg:p-10">
            <div className="mb-8">
              <Image
                src={manganinIconWhite}
                alt="Manganin"
                width={100}
                height={100}
                className="h-10 w-30"
                priority
              />
            </div>
            <h2 className="mb-0 text-4xl font-bold leading-tight text-white">
              Satu Platform untuk Semua Solusi Kebutuhan Pelayanan.
            </h2>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center bg-gray-1 p-6 dark:bg-[#020d1a] sm:p-10">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <h2 className="mb-2 text-2xl font-bold text-dark dark:text-white">
              Masukkan Kode Outlet
            </h2>
            <p className="text-gray-600 dark:text-dark-6">
              Tolong gunakan akun kasir kamu sendiri
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="outlet">Kode Outlet</Label>
              <select
                id="outlet"
                value={outlet}
                onChange={(e) => setOutlet(e.target.value)}
                className="h-10 w-full rounded-lg border bg-white px-3 py-2 text-sm text-dark outline-none transition focus-visible:border-brand focus-visible:ring-[3px] focus-visible:ring-brand/30 dark:border-dark-3 dark:bg-gray-dark dark:text-white"
              >
                <option value="" disabled>
                  Pilih outlet
                </option>
                {OUTLETS.map((o) => (
                  <option
                    key={o.code}
                    value={o.code}
                  >{`${o.code} - ${o.name}`}</option>
                ))}
              </select>
            </div>

            <Button
              type="submit"
              disabled={!outlet}
              className="h-11 w-full rounded-lg bg-brand text-white hover:bg-brand/90 disabled:opacity-50"
            >
              Lanjut
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
