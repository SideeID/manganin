"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import manganinIconWhite from "@/assets/logos/manganin-icon-white.svg";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const MOCK_USER = {
  username: "kasir001",
  password: "test1234",
  name: "Gilang Febrian",
};

export function ManganinLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState(MOCK_USER.username);
  const [password, setPassword] = useState(MOCK_USER.password);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === MOCK_USER.username && password === MOCK_USER.password) {
      sessionStorage.setItem(
        "manganin.auth",
        JSON.stringify({ username, name: MOCK_USER.name, ts: Date.now() }),
      );
      router.replace("/auth/select-outlet");
      return;
    }
    setError("Kesalahan password atau username, tolong masukkan dengan benar");
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
              Selamat Datang Kembali, Yuk Layani Pelanggan dengan Seru.
            </h2>
            <p className="text-gray-600 dark:text-dark-6">
              Tolong gunakan akun kamu sendiri
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="kasir001"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="passwordkasir1000"
                  className="pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <EyeOff className="size-5" />
                  ) : (
                    <Eye className="size-5" />
                  )}
                </button>
              </div>
              <div className="text-right">
                <button
                  type="button"
                  className="text-sm font-medium text-brand hover:text-brand/90"
                >
                  Lupa Password?
                </button>
              </div>
            </div>

            <Button
              type="submit"
              className="h-11 w-full rounded-lg bg-brand text-white hover:bg-brand/90"
            >
              Lanjut
            </Button>
          </form>

          {error && (
            <Alert className="mt-6 bg-red-700 dark:bg-red-500/10">
              <AlertDescription className="text-sm text-white dark:text-red-300">
                {error}
                <button
                  onClick={() => setError(null)}
                  className="ml-2 text-white hover:text-white dark:text-white"
                >
                  &times;
                </button>
              </AlertDescription>
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
}

export default ManganinLogin;
