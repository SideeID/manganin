import * as Icons from "../icons";
import type { ComponentType } from "react";

export type NavItem = {
  title: string;
  url: string;
  icon: ComponentType<any>;
  items: [];
};

export type NavSection = {
  label: string;
  items: NavItem[];
};

export const NAV_DATA: NavSection[] = [
  {
    label: "MENU",
    items: [
      {
        title: "Pesanan",
        url: "/pesanan",
        icon: Icons.HomeIcon,
        items: [],
      },
      {
        title: "Data",
        url: "/data",
        icon: Icons.Table,
        items: [],
      },
      {
        title: "Laporan",
        url: "/laporan",
        icon: Icons.PieChart,
        items: [],
      },
      {
        title: "Transaksi",
        url: "/transaksi",
        icon: Icons.FourCircle,
        items: [],
      },
    ],
  },
  {
    label: "MENU LAINNYA",
    items: [
      {
        title: "Pengaturan",
        url: "/pengaturan",
        icon: Icons.GearIcon,
        items: [],
      },
      {
        title: "Info",
        url: "/info",
        icon: Icons.InfoIcon,
        items: [],
      },
      {
        title: "Logout",
        url: "/logout",
        icon: Icons.LogoutIcon,
        items: [],
      },
    ],
  },
];
