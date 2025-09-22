"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Settings, X, Store, Upload, Trash2 } from "lucide-react";
import { MOCK_STORE_PROFILE } from "../../_components/mocks";

export function StoreSettingsForm() {
  const [formData, setFormData] = useState({
    storeName: MOCK_STORE_PROFILE.storeName,
    address: MOCK_STORE_PROFILE.address,
    phone: MOCK_STORE_PROFILE.phone,
    email: MOCK_STORE_PROFILE.email,
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSave = () => {
    console.log("Saving store settings:", formData);
  };

  const handleCancel = () => {
    console.log("Cancelling changes");
  };

  const handleUploadPicture = () => {
    console.log("Upload new picture");
  };

  const handleDeletePicture = () => {
    console.log("Delete picture");
  };

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="flex items-center gap-2 text-lg font-medium">
          <Store className="h-5 w-5 text-gray-600" />
          Pengaturan Toko
        </CardTitle>
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
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16">
            <AvatarImage
              src={MOCK_STORE_PROFILE.logoUrl ?? undefined}
              alt="Store logo"
            />
            <AvatarFallback className="bg-gray-200">
              <Store className="h-8 w-8 text-gray-400" />
            </AvatarFallback>
          </Avatar>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleUploadPicture}
              className="flex items-center gap-2 bg-transparent"
            >
              <Upload className="h-4 w-4" />
              Upload new picture
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleDeletePicture}
              className="bg-transparent text-red-600 hover:bg-red-50 hover:text-red-700"
            >
              <Trash2 className="h-4 w-4" />
              Delete
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <Label
            htmlFor="storeName"
            className="text-sm font-medium text-gray-700"
          >
            Nama Toko
          </Label>
          <Input
            id="storeName"
            value={formData.storeName}
            onChange={(e) => handleInputChange("storeName", e.target.value)}
            className="w-full"
          />
        </div>

        <div className="space-y-2">
          <Label
            htmlFor="address"
            className="text-sm font-medium text-gray-700"
          >
            Alamat Lengkap
          </Label>
          <Textarea
            id="address"
            value={formData.address}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              handleInputChange("address", e.target.value)
            }
            className="min-h-[100px] resize-none"
            rows={4}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
            Nomor Telepon
          </Label>
          <Input
            id="phone"
            value={formData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            placeholder="XXXX-XXXX-XXXX"
            className="w-full"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email Toko
          </Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            className="w-full"
          />
        </div>

        <div className="flex justify-end gap-3 pt-4">
          <Button
            variant="outline"
            onClick={handleCancel}
            className="border-red-200 bg-transparent text-red-600 hover:bg-red-50 hover:text-red-700"
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
      </CardContent>
    </Card>
  );
}
