export type LaporanMetric = {
  id: string;
  title: string;
  value: string;
  icon: "user" | "money";
  bgClass: string;
};

export const MOCK_LAPORAN_METRICS: LaporanMetric[] = [
  {
    id: "kasir",
    title: "Nama Kasir",
    value: "Ahmad Rizki",
    icon: "user",
    bgClass: "bg-brand",
  },
  {
    id: "total-transaksi",
    title: "Total Transaksi Tahun Ini",
    value: "IDR 44.000.000",
    icon: "money",
    bgClass: "bg-green",
  },
];
