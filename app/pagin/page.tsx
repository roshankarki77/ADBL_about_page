'use client'

import React, { useState } from 'react';
import Pagination1 from '../components/Pagination1';

const YourPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 24; // Replace this with your total number of pages
  
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Implement your logic to fetch data for the new page
  };
  
  return (
    <div>
      {/* Your content here */}
      <Pagination1 currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
};

export default YourPage;
