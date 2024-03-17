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

const Pagination1 = ({ currentPage, totalPages, onPageChange }) => {
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
        // <button key={1} onClick={() => onPageChange(1)} >1</button>
        <PaginationItem key={1} onClick={() => onPageChange(1)} >
          <PaginationLink href="#" isActive={currentPage === 1}>1</PaginationLink>
        </PaginationItem>,
      );
      if (startPage > 2) {
        pages.push(
          // <span key="startEllipsis">...</span>
          <PaginationItem key="startEllipsis" className="hover:cursor-pointer " onClick={() => onPageChange(startPage - 1)}>
            <PaginationLink className="font-bold text-base">...</PaginationLink>
          </PaginationItem>,
        );
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        // <button key={i} onClick={() => onPageChange(i)} className={currentPage === i ? 'active' : ''}>{i}</button>
        <PaginationItem
          key={i}
          onClick={() => onPageChange(i)}
          
        >
          <PaginationLink href="#" isActive={currentPage === i}>{i}</PaginationLink>
        </PaginationItem>,
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push(
          // <span  key="endEllipsis">...</span>
          <PaginationItem key="endEllipsis" className="hover:cursor-pointer" onClick={() => onPageChange(endPage + 1)}>
            {/* <PaginationEllipsis  className="hover:bg-slate-200 rounded-md"/> */}
            <PaginationLink className="font-bold text-base">...</PaginationLink>
          </PaginationItem>,
        );
      }
      pages.push(
        // <button key={totalPages} onClick={() => onPageChange(totalPages)}>{totalPages}</button>
        <PaginationItem
          key={totalPages}
          onClick={() => onPageChange(totalPages)}
        >
          <PaginationLink href="#" isActive={currentPage === totalPages}>{totalPages}</PaginationLink>
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
      {/* <button onClick={handlePrev} disabled={currentPage === 1}>Prev</button> */}

      <Pagination className="list-none [&>*]:m-1  flex flex-wrap mx-2">
        <PaginationItem onClick={handlePrev} >
          {currentPage === 1 ? (
            <PaginationPrevious href="#" disabled />
          ) : (
            <PaginationPrevious href="#" />
          )}
        </PaginationItem>
        {renderPages()}
        <PaginationItem onClick={handleNext}>
          {currentPage === totalPages ? (
            <PaginationNext href="#" disabled />
          ) : (
            <PaginationNext href="#" />
          )}
        </PaginationItem>
      </Pagination>

      {/* <button onClick={handleNext} disabled={currentPage === totalPages}>Next</button> */}
    </div>
  );
};

export default Pagination1;
