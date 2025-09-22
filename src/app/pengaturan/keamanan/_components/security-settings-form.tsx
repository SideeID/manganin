"use client";

import { useState } from "react";
import { Lock, Settings, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export function SecuritySettingsForm() {
  const [pin, setPin] = useState("");
  const [requireLoginEveryShift, setRequireLoginEveryShift] = useState(true);

  const handleSave = () => {
    console.log("Saving security settings:", { pin, requireLoginEveryShift });
  };

  const handleCancel = () => {
    console.log("Cancelling changes");
  };

  return (
    <Card className="w-full">
      <CardHeader className="bg-gray-100 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-gray-300">
              <Lock className="h-4 w-4 text-gray-600" />
            </div>
            <h2 className="text-lg font-medium text-gray-900">Keamanan</h2>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Settings className="h-4 w-4 text-gray-600" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <X className="h-4 w-4 text-gray-600" />
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-6 p-6">
        <div className="space-y-2">
          <Label htmlFor="pin" className="text-sm font-medium text-gray-900">
            PIN Kasir (4 digit)
          </Label>
          <Input
            id="pin"
            type="password"
            placeholder="XXXX"
            value={pin}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPin(e.target.value)
            }
            maxLength={4}
            className="w-full"
          />
        </div>

        <div className="flex items-center space-x-3">
          <Checkbox
            id="require-login"
            checked={requireLoginEveryShift}
            onCheckedChange={(checked) => setRequireLoginEveryShift(!!checked)}
            className="data-[state=checked]:border-orange-500 data-[state=checked]:bg-orange-500"
          />
          <Label
            htmlFor="require-login"
            className="cursor-pointer text-sm font-medium text-gray-900"
          >
            Wajib login setiap shift
          </Label>
        </div>

        <div className="flex justify-end gap-3 pt-4">
          <Button
            variant="outline"
            onClick={handleCancel}
            className="border-red-200 bg-transparent text-red-600 hover:border-red-300 hover:bg-red-50"
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
