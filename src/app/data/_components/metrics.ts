export type Metric = {
  name: "Makanan" | "Minuman";
  value: number;
  bgClass: string; 
};

export const MOCK_METRICS: Metric[] = [
  { name: "Makanan", value: 56, bgClass: "bg-brand" },
  { name: "Minuman", value: 54, bgClass: "bg-blue-500" },
];
