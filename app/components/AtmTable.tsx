'use client'
import React, { useState } from 'react';
import { useReactTable, flexRender,getCoreRowModel, } from '@tanstack/react-table';

function AtmTable({ data ,handleSetItemsPerPage}: { data: any[]; handleSetItemsPerPage: (value: string) => void }) {
    const startingNumber = 100;

    // Initialize a counter to keep track of the SN
    const [counter, setCounter] = useState(startingNumber);

    const columns = [
        {
            header: "SN",
            accessorKey: "",
            Cell: () => {
                // Get the current value of counter for SN
                const sn = counter + 1;
                // Increment the counter for the next row
                setCounter(prevCounter => prevCounter + 1);
                return <div>{sn}</div>;
            },
            disableSortBy: true,
            disableFilters: true,
        },
        {
            header: "Atm",
            accessorKey: "atm_title",
        },
        {
            header: "Province",
            accessorKey: "province.title",
        },
        {
            header: "District",
            accessorKey: "district.dist_title",
        },
        {
            header: "Contact Details",
            accessorKey: "address",
            Cell: ({ row }: { row: any }) => {
                return (
                    <div className="contact-details">
                        <ul>
                            {row.original.address == null ? null : (
                                <li>
                                    <i className="bi bi-geo-alt"></i> {row.original.address}
                                </li>
                            )}
                        </ul>
                    </div>
                );
            },
        },
    ];
    
    const table = useReactTable({ data, columns,getCoreRowModel: getCoreRowModel(), });
    // console.log(table.getRowModel().rows)
    console.log(table.getRowModel().flatRows)

    return (
        <div className="overflow-x-auto">
            <div className='mb-4'>
                <label>
                    Show
                    <div className='border-2 border-custom-green mx-2 inline-block'>
                    <select
                        onChange={(event) => handleSetItemsPerPage(event.target.value)}
                        
                    >
                        <option value="1">10</option>
                        <option value="2">20</option>
                        <option value="3">30</option>
                    </select>
                    </div>
                    entries
                </label>
            </div>
            <table className="w-full border-collapse table-auto">
                <thead>
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id} className="bg-custom-green ">
                            {headerGroup.headers.map(header => (
                                <th key={header.id} className="px-4 py-2 text-left font-thin text-white">
                                    {flexRender(
                                        header.column.columnDef.header,
                                        header.getContext()
                                    )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                {
    (table.getRowModel().rows || []).map((row, index) => {
        console.log("row",row)
        return (
            <tr key={row.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}>
                {row.getVisibleCells().map(cell => (
                    <td key={cell.id} className="px-4 py-2">
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                ))}
            </tr>
        );
    })
}

                </tbody>
            </table>
        </div>
    )
}

export default AtmTable;
