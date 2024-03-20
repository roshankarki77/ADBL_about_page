"use client";
import { useState,useEffect } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/app/components/ui/pagination";

const Pagination2 = ({
  table,
  data,
  detectSelectChange,
  detectFilteringChange,
  handleSetFirstPage,
  handleSetNextPage,
  handleCanSetNextPage,
  handleSetPreviousPage,
  handleCanSetPreviousPage,
  handleGetCurrentPage,
  handleSetCurrentPage,
  handleGetTotalPages,
}: {
  table: any;
  data:any;
  detectSelectChange: boolean;
  detectFilteringChange: boolean;
  handleSetFirstPage: () => void;
  handleSetNextPage: () => void;
  handleCanSetNextPage: () => boolean;
  handleSetPreviousPage: () => void;
  handleCanSetPreviousPage: () => boolean;
  handleGetCurrentPage: () => number;
  handleSetCurrentPage: (e: any) => void;
  handleGetTotalPages: () => number;
}) => {
  const [visiblePages, setVisiblePages] = useState(5); // Number of visible page numbers
  const halfVisiblePages = Math.floor(visiblePages / 2);
  const [currentPage, setCurrentPage] = useState(handleGetCurrentPage());
  const [totalPages, setTotalPages] = useState(handleGetTotalPages());

//   const handleCurrentPageChange = () => {
//     setCurrentPage(handleGetCurrentPage());
//   }

  useEffect(() => {
    setCurrentPage(handleGetCurrentPage());
    setTotalPages(handleGetTotalPages());
  }, [data,detectSelectChange,detectFilteringChange]);

  const renderPages = () => {
    const pages = [];
    let startPage = Math.max(1, currentPage - halfVisiblePages);
    let endPage = Math.min(totalPages, startPage + visiblePages - 1);

    if (endPage - startPage + 1 < visiblePages) {
      startPage = Math.max(1, endPage - visiblePages + 1);
    }

    if (startPage > 1) {
      pages.push(
        <PaginationItem 
          key={1} 
          onClick={() => {handleSetFirstPage;setCurrentPage(1)}}
          className="hover:cursor-pointer"
        >
          <PaginationLink isActive={currentPage === 1}>1</PaginationLink>
        </PaginationItem>,
      );
      if (startPage > 2) {
        pages.push(
          <PaginationItem
            key="startEllipsis"
            className="hover:cursor-pointer"
            onClick={() => {handleSetCurrentPage(startPage - 1);;setCurrentPage(startPage-1)}}
          >
            <PaginationLink className="text-base font-bold">...</PaginationLink>
          </PaginationItem>,
        );
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <PaginationItem 
          key={i} 
          onClick={() => {handleSetCurrentPage(i);;setCurrentPage(i)}}
          className="hover:cursor-pointer"
        >
          <PaginationLink isActive={currentPage === i}>{i}</PaginationLink>
        </PaginationItem>,
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push(
          <PaginationItem
            key="endEllipsis"
            className="hover:cursor-pointer"
            onClick={() => {handleSetCurrentPage(endPage + 1);;setCurrentPage(endPage+1)}}
          >
            <PaginationLink className="text-base font-bold">...</PaginationLink>
          </PaginationItem>,
        );
      }
      pages.push(
        <PaginationItem
          key={totalPages}
          onClick={() => {handleSetCurrentPage(totalPages);setCurrentPage(totalPages)}}
          className="hover:cursor-pointer "
        >
          <PaginationLink isActive={currentPage === totalPages}>
            {totalPages}
          </PaginationLink>
        </PaginationItem>,
      );
    }

    return pages;
  };


  return (
    <div className="mt-4">
      <Pagination className="mx-2 flex  list-none flex-wrap [&>*]:m-1">
        <PaginationItem  className="hover:cursor-pointer">
          {!handleCanSetPreviousPage()? (
            <PaginationPrevious disabled />
          ) : (
            <PaginationPrevious onClick={()=>{handleSetPreviousPage();setCurrentPage(handleGetCurrentPage()-1);}}/>
          )}
        </PaginationItem>
        {renderPages()}
        <PaginationItem  className="hover:cursor-pointer">
          {!handleCanSetNextPage() ? (
            <PaginationNext disabled />
          ) : (
            <PaginationNext onClick={()=>{handleSetNextPage();setCurrentPage(handleGetCurrentPage()+1);}}/>
          )}
        </PaginationItem>
      </Pagination>
    </div>
  );
};

export default Pagination2;
