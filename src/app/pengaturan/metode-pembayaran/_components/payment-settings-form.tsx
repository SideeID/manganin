"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Settings, X, CreditCard, Upload } from "lucide-react";

export function PaymentSettingsForm() {
  const [merchantName, setMerchantName] = useState("PT. Bahagia Sama Dia");
  const [selectedBank, setSelectedBank] = useState("Bank Syariah Indonesia");
  const [merchantId, setMerchantId] = useState("092109285083");
  const [uploadedFile, setUploadedFile] = useState("QR - BSD.png");
  const [cashMethodEnabled, setCashMethodEnabled] = useState(true);
  const [qrisEnabled, setQrisEnabled] = useState(true);
  const [cardEnabled, setCardEnabled] = useState(true);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFile(file.name);
    }
  };

  const handleSave = () => {
    console.log("Saving payment settings...");
  };

  const handleCancel = () => {
    console.log("Cancelling changes...");
  };

  return (
    <div className="w-full">
      <Card className="mb-6">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <div className="flex items-center gap-3">
            <CreditCard className="h-5 w-5 text-gray-500" />
            <h2 className="text-lg font-medium">Metode Pembayaran</h2>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Settings className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          <div>
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-base font-medium">Metode Uang Tunai</h3>
              <Checkbox
                checked={cashMethodEnabled}
                onCheckedChange={(checked) => setCashMethodEnabled(checked === true)}
                className="data-[state=checked]:border-orange-500 data-[state=checked]:bg-orange-500"
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label className="text-sm font-medium text-gray-700">
                  QRIS/e-Wallet
                </Label>
                <Checkbox
                  checked={qrisEnabled}
                  onCheckedChange={(checked) => setQrisEnabled(checked === true)}
                  className="data-[state=checked]:border-orange-500 data-[state=checked]:bg-orange-500"
                />
              </div>

              <div>
                <Label
                  htmlFor="merchant-name"
                  className="text-sm font-medium text-gray-700"
                >
                  Nama Merchant
                </Label>
                <Input
                  id="merchant-name"
                  value={merchantName}
                  onChange={(e) => setMerchantName(e.target.value)}
                  className="mt-1"
                />
              </div>

              <div>
                <Label className="text-sm font-medium text-gray-700">
                  Upload QR Code
                </Label>
                <div className="mt-1 flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="relative overflow-hidden bg-transparent"
                    asChild
                  >
                    <label htmlFor="qr-upload" className="cursor-pointer">
                      <Upload className="mr-2 h-4 w-4" />
                      Choose File
                      <input
                        id="qr-upload"
                        type="file"
                        accept="image/*"
                        onChange={handleFileUpload}
                        className="absolute inset-0 cursor-pointer opacity-0"
                      />
                    </label>
                  </Button>
                  <span className="text-sm text-gray-600">{uploadedFile}</span>
                </div>
              </div>
            </div>
          </div>

          <Separator />

          <div>
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-base font-medium">Kartu Debit/Kredit</h3>
              <Checkbox
                checked={cardEnabled}
                onCheckedChange={(checked) => setCardEnabled(checked === true)}
                className="data-[state=checked]:border-orange-500 data-[state=checked]:bg-orange-500"
              />
            </div>

            <div className="space-y-4">
              <div>
                <Label
                  htmlFor="bank-name"
                  className="text-sm font-medium text-gray-700"
                >
                  Nama Bank
                </Label>
                <Select value={selectedBank} onValueChange={setSelectedBank}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder={selectedBank} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Bank Syariah Indonesia">
                      Bank Syariah Indonesia
                    </SelectItem>
                    <SelectItem value="Bank Mandiri">Bank Mandiri</SelectItem>
                    <SelectItem value="Bank BCA">Bank BCA</SelectItem>
                    <SelectItem value="Bank BRI">Bank BRI</SelectItem>
                    <SelectItem value="Bank BNI">Bank BNI</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label
                  htmlFor="merchant-id"
                  className="text-sm font-medium text-gray-700"
                >
                  Merchant ID
                </Label>
                <Input
                  id="merchant-id"
                  value={merchantId}
                  onChange={(e) => setMerchantId(e.target.value)}
                  className="mt-1"
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end gap-3">
        <Button
          variant="outline"
          onClick={handleCancel}
          className="border-red-200 bg-transparent text-red-600 hover:bg-red-50"
        >
          Batalkan
        </Button>
        <Button
          onClick={handleSave}
          className="bg-orange-500 text-white hover:bg-orange-600"
        >
          Simpan Perubahan
        </Button>
      </div>
    </div>
  );
}
