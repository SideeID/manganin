export type LaporanMetric = {
  id: string;
  title: string;
  value: string;
  icon: "money";
  period: "Hari Ini" | "Satu Minggu" | "Satu Tahun";
};

export const MOCK_LAPORAN_METRICS: LaporanMetric[] = [
  {
    id: "total-transaksi-hari-ini",
    title: "Total Transaksi Hari Ini",
    value: "IDR 440.000",
    icon: "money",
    period: "Hari Ini",
  },
  {
    id: "total-transaksi-bulan-ini",
    title: "Total Transaksi Bulan Ini",
    value: "IDR 4.400.000",
    icon: "money",
    period: "Satu Minggu",
  },
  {
    id: "total-transaksi-tahun-ini",
    title: "Total Transaksi Tahun Ini",
    value: "IDR 4.400.000",
    icon: "money",
    period: "Satu Tahun",
  },
];
