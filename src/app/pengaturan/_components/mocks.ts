export type SettingItem = {
  title: string;
  href: string;
  icon: "store" | "payment" | "security";
};

export const SETTING_ITEMS: SettingItem[] = [
  { title: "Profil Toko", href: "/pengaturan/profil-toko", icon: "store" },
  {
    title: "Metode Pembayaran",
    href: "/pengaturan/metode-pembayaran",
    icon: "payment",
  },
  { title: "Keamanan", href: "/pengaturan/keamanan", icon: "security" },
];

export type StoreProfile = {
  storeName: string;
  address: string;
  phone: string;
  email: string;
  logoUrl?: string | null;
};

export const MOCK_STORE_PROFILE: StoreProfile = {
  storeName: "PT. Bahagia Sama Dia",
  address:
    "Jl. Melati Raya No. 27, RT 02 / RW 05,\nKelurahan Sukamaju, Kecamatan Tanah Abang,\nKota Jakarta Pusat, Provinsi DKI Jakarta,\nKode Pos 10230",
  phone: "XXXX-XXXX-XXXX",
  email: "bahagiasamadia@gmail.com",
  logoUrl: null,
};
