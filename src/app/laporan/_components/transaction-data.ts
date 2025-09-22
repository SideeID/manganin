export type TransactionRow = {
  id: number;
  menuName: string;
  menuImage: string;
  price: number;
  date: string; 
  time: string; 
  datetime: Date; 
};

export const MOCK_TRANSACTIONS: TransactionRow[] = [
  {
    id: 1,
    menuName: "Americano",
    menuImage: "/images/product.jpg",
    price: 25000,
    date: "2025-09-22",
    time: "08:30",
    datetime: new Date("2025-09-22T08:30:00"),
  },
  {
    id: 2,
    menuName: "Caffe Latte",
    menuImage: "/images/product.jpg",
    price: 32000,
    date: "2025-09-22",
    time: "09:15",
    datetime: new Date("2025-09-22T09:15:00"),
  },
  {
    id: 3,
    menuName: "Aglio Olio",
    menuImage: "/images/product.jpg",
    price: 45000,
    date: "2025-09-22",
    time: "12:00",
    datetime: new Date("2025-09-22T12:00:00"),
  },
  {
    id: 4,
    menuName: "Pizza",
    menuImage: "/images/product.jpg",
    price: 65000,
    date: "2025-09-22",
    time: "13:45",
    datetime: new Date("2025-09-22T13:45:00"),
  },

  {
    id: 5,
    menuName: "Cappuccino",
    menuImage: "/images/product.jpg",
    price: 28000,
    date: "2025-09-21",
    time: "07:45",
    datetime: new Date("2025-09-21T07:45:00"),
  },
  {
    id: 6,
    menuName: "Burger",
    menuImage: "/images/product.jpg",
    price: 55000,
    date: "2025-09-21",
    time: "11:30",
    datetime: new Date("2025-09-21T11:30:00"),
  },
  {
    id: 7,
    menuName: "Water Plain",
    menuImage: "/images/product.jpg",
    price: 8000,
    date: "2025-09-21",
    time: "14:20",
    datetime: new Date("2025-09-21T14:20:00"),
  },

  {
    id: 8,
    menuName: "Butterscotch",
    menuImage: "/images/product.jpg",
    price: 35000,
    date: "2025-09-16",
    time: "10:15",
    datetime: new Date("2025-09-16T10:15:00"),
  },
  {
    id: 9,
    menuName: "Pasta Bolognese",
    menuImage: "/images/product.jpg",
    price: 48000,
    date: "2025-09-16",
    time: "19:00",
    datetime: new Date("2025-09-16T19:00:00"),
  },

  {
    id: 10,
    menuName: "French Fries",
    menuImage: "/images/product.jpg",
    price: 25000,
    date: "2025-08-15",
    time: "16:30",
    datetime: new Date("2025-08-15T16:30:00"),
  },
  {
    id: 11,
    menuName: "Americano",
    menuImage: "/images/product.jpg",
    price: 25000,
    date: "2025-08-20",
    time: "08:45",
    datetime: new Date("2025-08-20T08:45:00"),
  },
  {
    id: 12,
    menuName: "Pizza",
    menuImage: "/images/product.jpg",
    price: 65000,
    date: "2025-08-25",
    time: "20:15",
    datetime: new Date("2025-08-25T20:15:00"),
  },
];
