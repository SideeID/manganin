"use client";

import * as React from "react";
import {
  DataGridPro,
  gridClasses,
  type GridColDef,
} from "@mui/x-data-grid-pro";
import Image from "next/image";
import type { BestRow } from "./data";

export function BestSellingTable({ rows }: { rows: BestRow[] }) {
  const [paginationModel, setPaginationModel] = React.useState({
    page: 0,
    pageSize: 5,
  });
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const t = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(t);
  }, []);

  const columns = React.useMemo<GridColDef[]>(
    () => [
      {
        field: "no",
        headerName: "No.",
        width: 80,
        sortable: false,
        filterable: false,
        renderCell: (params: any) => {
          // Display 1-based row index based on current page
          const index = params.api.getRowIndexRelativeToVisibleRows(params.id);
          return (
            <span className="text-sm text-gray-700">
              {index + 1 + paginationModel.page * paginationModel.pageSize}
            </span>
          );
        },
      },
      {
        field: "name",
        headerName: "Menu",
        flex: 1,
        minWidth: 220,
        renderCell: (params: any) => {
          const row = params.row as BestRow;
          return (
            <div className="flex items-center gap-3">
              <div className="size-10 overflow-hidden rounded-full bg-gray-100">
                <Image
                  src={row.image}
                  alt={row.name}
                  width={40}
                  height={40}
                  className="size-full object-cover"
                />
              </div>
              <span className="text-sm font-medium text-dark dark:text-white">
                {row.name}
              </span>
            </div>
          );
        },
      },
      {
        field: "category",
        headerName: "Tipe Menu",
        width: 160,
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
  );
}
