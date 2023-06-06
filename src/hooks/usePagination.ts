import { useState } from 'react';

export const usePagination = (items: Array<Record<string, unknown>>, itemsPerPage = 8) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(items.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedItems = items.slice(startIndex, startIndex + itemsPerPage);

  const goToPage = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return {
    selectedItems,
    goToPage,
    currentPage,
    totalPages,
  };
};
