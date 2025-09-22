"use client";

import * as React from "react";
import {
  DataGridPro,
  gridClasses,
  type GridColDef,
} from "@mui/x-data-grid-pro";
import Image from "next/image";
import type { TransactionRow } from "./transaction-data";

export function TransactionTable({
  rows,
  title,
}: {
  rows: TransactionRow[];
  title?: string;
}) {
  const [paginationModel, setPaginationModel] = React.useState({
    page: 0,
    pageSize: 5,
  });
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const t = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(t);
  }, []);

  const formatCurrency = (amount: number) => `IDR ${amount.toLocaleString()}`;

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    const days = [
      "Minggu",
      "Senin",
      "Selasa",
      "Rabu",
      "Kamis",
      "Jumat",
      "Sabtu",
    ];
    const months = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];

    const dayName = days[date.getDay()];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    return `${dayName}, ${day} ${month} ${year}`;
  };

  const formatTime = (timeStr: string) => `${timeStr} WIB`;

  const columns = React.useMemo<GridColDef[]>(
    () => [
      {
        field: "no",
        headerName: "No.",
        width: 80,
        sortable: false,
        filterable: false,
        renderCell: (params: any) => {
          const index = params.api.getRowIndexRelativeToVisibleRows(params.id);
          return (
            <span className="text-sm text-gray-700">
              {index + 1 + paginationModel.page * paginationModel.pageSize}
            </span>
          );
        },
      },
      {
        field: "menuName",
        headerName: "Menu",
        flex: 1,
        minWidth: 220,
        renderCell: (params: any) => {
          const row = params.row as TransactionRow;
          return (
            <div className="flex items-center gap-3">
              <div className="size-10 overflow-hidden rounded-full bg-gray-100">
                <Image
                  src={row.menuImage}
                  alt={row.menuName}
                  width={40}
                  height={40}
                  className="size-full object-cover"
                />
              </div>
              <span className="text-sm font-medium text-dark dark:text-white">
                {row.menuName}
              </span>
            </div>
          );
        },
      },
      {
        field: "price",
        headerName: "Harga",
        width: 160,
        renderCell: (params: any) => {
          const row = params.row as TransactionRow;
          return (
            <span className="text-sm font-semibold text-black">
              {formatCurrency(row.price)}
            </span>
          );
        },
      },
      {
        field: "date",
        headerName: "Tanggal",
        width: 200,
        renderCell: (params: any) => {
          const row = params.row as TransactionRow;
          return (
            <span className="text-sm text-gray-600 dark:text-dark-6">
              {formatDate(row.date)}
            </span>
          );
        },
      },
      {
        field: "time",
        headerName: "Jam",
        width: 120,
        renderCell: (params: any) => {
          const row = params.row as TransactionRow;
          return (
            <span className="text-sm text-gray-600 dark:text-dark-6">
              {formatTime(row.time)}
            </span>
          );
        },
      },
    ],
    [paginationModel.page, paginationModel.pageSize],
  );

  const LoadingOverlay = React.useCallback(
    () => (
      <div className="p-4">
        <div className="space-y-2">
          {Array.from({ length: paginationModel.pageSize }).map((_, i) => (
            <div
              key={i}
              className="h-10 w-full animate-pulse rounded-md bg-gray-100 dark:bg-dark-2"
            />
          ))}
        </div>
      </div>
    ),
    [paginationModel.pageSize],
  );

  return (
    <div className="space-y-4">
      {title && (
        <h3 className="text-lg font-semibold text-dark dark:text-white">
          {title}
        </h3>
      )}
      <div className="rounded-[10px] border border-brand/50 bg-white p-0 dark:border-dark-3 dark:bg-gray-dark">
        <div style={{ width: "100%" }}>
          <DataGridPro
            autoHeight
            rows={rows}
            columns={columns}
            pagination
            paginationModel={paginationModel}
            onPaginationModelChange={setPaginationModel}
            pageSizeOptions={[5, 10, 20]}
            loading={loading}
            slots={{ loadingOverlay: LoadingOverlay as any }}
            disableColumnMenu
            hideFooterSelectedRowCount
            sx={{
              [`& .${gridClasses.columnHeaders}`]: {
                backgroundColor: "#F9FAFB",
              },
              [`& .${gridClasses.cell}`]: {
                outline: "none",
              },
              border: 0,
              color: "inherit",
              "& .MuiDataGrid-footerContainer": {
                borderTop: "1px solid rgba(0,0,0,0.06)",
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
