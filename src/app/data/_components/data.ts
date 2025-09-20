export type BestRow = {
  id: number;
  name: string;
  category: "Makanan" | "Minuman";
  image: string;
};

export const MOCK_ROWS: BestRow[] = [
  {
    id: 1,
    name: "Americano",
    category: "Minuman",
    image: "/images/product.jpg",
  },
  {
    id: 2,
    name: "Caffe Latte",
    category: "Minuman",
    image: "/images/product.jpg",
  },
  {
    id: 3,
    name: "Butterscotch",
    category: "Minuman",
    image: "/images/product.jpg",
  },
  {
    id: 4,
    name: "Cappuccino",
    category: "Minuman",
    image: "/images/product.jpg",
  },
  {
    id: 5,
    name: "Water Plain",
    category: "Minuman",
    image: "/images/product.jpg",
  },
  {
    id: 6,
    name: "Aglio Olio",
    category: "Makanan",
    image: "/images/product.jpg",
  },
  { id: 7, name: "Burger", category: "Makanan", image: "/images/product.jpg" },
  { id: 8, name: "Pizza", category: "Makanan", image: "/images/product.jpg" },
  {
    id: 9,
    name: "Pasta Bolognese",
    category: "Makanan",
    image: "/images/product.jpg",
  },
  {
    id: 10,
    name: "French Fries",
    category: "Makanan",
    image: "/images/product.jpg",
  },
];
