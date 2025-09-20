"use client";

import type { MenuItem } from "./store";

// Centralized mock menu data to ease future backend integration
export const MENU: MenuItem[] = [
  {
    id: "1",
    name: "Aglio Olio",
    price: 75000,
    image: "/images/product.jpg",
    category: "food",
  },
  {
    id: "2",
    name: "Pizza",
    price: 120000,
    image: "/images/product.jpg",
    category: "food",
  },
  {
    id: "3",
    name: "Burger",
    price: 85000,
    image: "/images/product.jpg",
    category: "food",
  },
  {
    id: "4",
    name: "Coffee",
    price: 25000,
    image: "/images/product.jpg",
    category: "beverage",
  },
  {
    id: "5",
    name: "Fresh Juice",
    price: 30000,
    image: "/images/product.jpg",
    category: "beverage",
  },
  {
    id: "6",
    name: "Tea",
    price: 20000,
    image: "/images/product.jpg",
    category: "beverage",
  },
  {
    id: "7",
    name: "Pasta",
    price: 70000,
    image: "/images/product.jpg",
    category: "food",
  },
  {
    id: "8",
    name: "Pasta Bolognese",
    price: 80000,
    image: "/images/product.jpg",
    category: "food",
  },
];
