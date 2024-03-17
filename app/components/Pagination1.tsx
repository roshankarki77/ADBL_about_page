"use client";
import { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/app/components/ui/pagination";

const Pagination1 = ({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) => {
  const [visiblePages, setVisiblePages] = useState(5); // Number of visible page numbers
  const halfVisiblePages = Math.floor(visiblePages / 2);

  const renderPages = () => {
    const pages = [];
    let startPage = Math.max(1, currentPage - halfVisiblePages);
    let endPage = Math.min(totalPages, startPage + visiblePages - 1);

    if (endPage - startPage + 1 < visiblePages) {
      startPage = Math.max(1, endPage - visiblePages + 1);
    }

    if (startPage > 1) {
      pages.push(
        <PaginationItem key={1} onClick={() => onPageChange(1)}>
          <PaginationLink isActive={currentPage === 1}>1</PaginationLink>
        </PaginationItem>,
      );
      if (startPage > 2) {
        pages.push(
          <PaginationItem
            key="startEllipsis"
            className="hover:cursor-pointer "
            onClick={() => onPageChange(startPage - 1)}
          >
            <PaginationLink className="text-base font-bold">...</PaginationLink>
          </PaginationItem>,
        );
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <PaginationItem key={i} onClick={() => onPageChange(i)}>
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
            onClick={() => onPageChange(endPage + 1)}
          >
            <PaginationLink className="text-base font-bold">...</PaginationLink>
          </PaginationItem>,
        );
      }
      pages.push(
        <PaginationItem
          key={totalPages}
          onClick={() => onPageChange(totalPages)}
        >
          <PaginationLink isActive={currentPage === totalPages}>
            {totalPages}
          </PaginationLink>
        </PaginationItem>,
      );
    }

    return pages;
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="mt-4">
      <Pagination className="mx-2 flex  list-none flex-wrap [&>*]:m-1">
        <PaginationItem onClick={handlePrev} className="hover:cursor-pointer">
          {currentPage === 1 ? (
            <PaginationPrevious disabled />
          ) : (
            <PaginationPrevious />
          )}
        </PaginationItem>
        {renderPages()}
        <PaginationItem onClick={handleNext} className="hover:cursor-pointer">
          {currentPage === totalPages ? (
            <PaginationNext disabled />
          ) : (
            <PaginationNext />
          )}
        </PaginationItem>
      </Pagination>
    </div>
  );
};

export default Pagination1;
