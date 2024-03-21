"use client";
import React, { useState } from "react";
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";

function ForexTable({ data }: { data: any[] }) {
  const [filtering, setFiltering] = useState("");

  console.log("data", data);
  const columns = [
    {
      header: "Atm",
      accessorKey: "currency_name",
    },
    {
      header: "Unit",
      accessorKey: "fxd_currency_units",
    },
    {
      header: "Buying(Note of Deno 50)",
      accessorKey: "buy_rate",
    },
    {
      header: "Buying(Note of Deno 50 and above)",
      accessorKey: "buy_rate_above",
    },
    {
      header: "Selling/Rs.",
      accessorKey: "sell_rate",
    },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      globalFilter: filtering,
    },
    onGlobalFilterChange: setFiltering,
  });

  const [detectFilteringChange, setDetectFilteringChange] = useState(false);
  return (
    <div className="overflow-x-auto">
      <div className="mb-4 flex flex-col justify-between sm:flex-row">
        <div>
          <span className="mr-3">Search:</span>
          <input
            type="text"
            value={filtering}
            onChange={(e) => {
              setFiltering(e.target.value);
              setDetectFilteringChange(!detectFilteringChange);
            }}
            className="w-36 border-2 border-custom-green"
          />
        </div>
      </div>
      <table className="w-full table-auto border-collapse">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="bg-custom-green ">
              {headerGroup.headers.map((header) => {
                console.log("headers", header);
                return (
                  <th
                    key={header.id}
                    className="px-4 py-2 text-left font-thin text-white"
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {(table.getRowModel().rows || []).map((row, index) => {
            // console.log("row", row);
            return (
              <tr
                key={row.id}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-4 py-2">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ForexTable;
