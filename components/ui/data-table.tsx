"use client";

import * as React from "react";

type RowContext<T> = {
  row: {
    getValue: (key: string) => any;
    original: T;
  };
};

type ColumnDef<T> = {
  accessorKey?: keyof T | string;
  header?: React.ReactNode;
  cell?: (ctx: RowContext<T>) => React.ReactNode;
  id?: string;
};

export interface DataTableProps<T> {
  columns: ColumnDef<T>[];
  data: T[];
  searchKey?: keyof T | string;
  placeholder?: string;
}

export function DataTable<T extends Record<string, any>>({ columns, data, searchKey, placeholder }: DataTableProps<T>) {
  const [query, setQuery] = React.useState("");

  const filtered = React.useMemo(() => {
    if (!query || !searchKey) return data;
    const key = String(searchKey);
    return data.filter((row) => String(row[key] ?? "").toLowerCase().includes(query.toLowerCase()));
  }, [data, query, searchKey]);

  return (
    <div className="w-full">
      {searchKey && (
        <div className="mb-4">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={placeholder || "Search..."}
            className="w-full h-10 rounded-md border border-gray-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>
      )}

      <div className="overflow-x-auto border rounded-md">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              {columns.map((col, i) => (
                <th key={col.id ?? i} className="text-left px-3 py-2 font-medium text-gray-700">
                  {typeof col.header === "function" ? (col.header as any)() : col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((row, ri) => (
              <tr key={ri} className="border-t">
                {columns.map((col, ci) => {
                  const getValue = (key: string) => row[key];
                  return (
                    <td key={(col.id ?? String(col.accessorKey)) + ci} className="px-3 py-2 align-middle">
                      {col.cell
                        ? col.cell({ row: { getValue, original: row } })
                        : col.accessorKey
                        ? String(row[col.accessorKey as keyof T] ?? "")
                        : null}
                    </td>
                  );
                })}
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td className="px-3 py-6 text-center text-gray-500" colSpan={columns.length}>
                  No results
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DataTable;
