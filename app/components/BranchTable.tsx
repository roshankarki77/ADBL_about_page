"use client";
import React, { useState } from "react";
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  PaginationState,
  getPaginationRowModel,
} from "@tanstack/react-table";
import Pagination2 from "../components/Pagination2";

function BranchTable({
  data,
  handleSetItemsPerPage,
}: {
  data: any[];
  handleSetItemsPerPage: (value: string) => void;
}) {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });
  const [filtering, setFiltering] = useState("");

//   console.log("data", data);
  const columns = [
    {
      header: "SN",
      accessorKey: "",
      cell: (row: any) => {
        return <div>{parseInt(row.row.id) + 1}</div>;
      },
      disableSortBy: true,
      disableFilters: true,
    },
    {
      header: "Branch",
      accessorKey: "branch_title",
    },
    {
      header: "Province",
      accessorKey: "province.title",
      enableColumnFilter: true,
      enableGlobalFilter: true,
    },
    {
      header: "District",
      accessorKey: "district.dist_title",
    },
    {
      header: "Contact Details",
    //   accessorKey: "address",
    accessorFn: (row) => `${row.address} ${row.email} ${row.phone} ${row.fullname}`,
      cell: ({ row }: { row: any }) => {
        return (
          <div className="contact-details">
            <ul>
              {row.original.fullname == null ? null : (
                <li className="align-center flex text-stone-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-person mr-2 mt-[3px]"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                  </svg>
                  {row.original.fullname}
                </li>
              )}
              {row.original.address == null ? null : (
                <li className="align-center flex text-stone-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-geo-alt mr-2 mt-[3px]"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                  </svg>
                  <span>
                    {row.original.address}
                    <a
                      target="_blank"
                      className="inline hover:text-custom-green"
                      href={`${row.original.map_url == null ? null : row.original.map_url}`}
                    >
                      (View in Map)
                    </a>
                  </span>
                </li>
              )}
              {row.original.phone == null ? null : (
                <li className="align-center flex text-stone-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-telephone mr-2 mt-[3px]"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                  </svg>
                  {row.original.phone}
                </li>
              )}
              {row.original.email == null ? null : (
                <li className="align-center flex text-stone-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-envelope mr-2 mt-[3px]"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                  </svg>
                  {row.original.email}
                </li>
              )}
            </ul>
          </div>
        );
      },
    },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    state: {
      globalFilter: filtering,
      pagination,
    },
    onGlobalFilterChange: setFiltering,
  });
  // console.log(table.getRowModel().rows)
  //   console.log(table.getRowModel().flatRows);
  console.log("globalFilter", table);

  const handleSetFirstPage = () => {
    table.firstPage();
  };
  const handleSetNextPage = () => {
    table.nextPage();
  };
  const handleCanSetNextPage = () => table.getCanNextPage();

  const handleSetPreviousPage = () => {
    table.previousPage();
  };
  const handleCanSetPreviousPage = () => table.getCanPreviousPage();

  const handleGetCurrentPage = () => table.getState().pagination.pageIndex + 1;

  const handleSetCurrentPage = (e: any) => {
    const page = e ? e - 1 : 0;
    table.setPageIndex(page);
  };

  const handleGetTotalPages = () => table.getPageCount();
  const [detectSelectChange, setDetectSelectChange] = useState(false);
  const [detectFilteringChange, setDetectFilteringChange] = useState(false);
  return (
    <div className="overflow-x-auto">
      <div className="mb-4 flex flex-col justify-between sm:flex-row">
        <div className="mb-4">
          <label>
            Show
            <div className="mx-2 inline-block border-2 border-custom-green">
              <select
                value={table.getState().pagination.pageSize}
                onChange={(e) => {
                  table.setPageSize(Number(e.target.value));
                  setDetectSelectChange(!detectSelectChange);
                }}
              >
                {[10, 20, 30].map((pageSize) => (
                  <option key={pageSize} value={pageSize}>
                    {pageSize}
                  </option>
                ))}
              </select>
            </div>
            entries
          </label>
        </div>
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
      <Pagination2
        table={table}
        data={data}
        detectSelectChange={detectSelectChange}
        detectFilteringChange={detectFilteringChange}
        handleSetFirstPage={handleSetFirstPage}
        handleSetNextPage={handleSetNextPage}
        handleCanSetNextPage={handleCanSetNextPage}
        handleSetPreviousPage={handleSetPreviousPage}
        handleCanSetPreviousPage={handleCanSetPreviousPage}
        handleGetCurrentPage={handleGetCurrentPage}
        handleSetCurrentPage={handleSetCurrentPage}
        handleGetTotalPages={handleGetTotalPages}
      />
    </div>
  );
}

export default BranchTable;
