import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center items-center mt-5 space-x-2 mx-28">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`p-2 rounded ${
          currentPage === 1 && "opacity-70"
        } bg-purple-1 text-white`}
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      {Array.from({ length: Math.min(2, totalPages - currentPage + 1) }).map(
        (_, index) => {
          const pageNumber = currentPage + index;
          return (
            <button
              key={pageNumber}
              //   onClick={() => onPageChange(pageNumber)}
              className={`px-3 py-1 rounded ${
                currentPage === pageNumber
                  ? "bg-purple-1 text-white"
                  : "bg-gray-200"
              }`}
            >
              {pageNumber}
            </button>
          );
        }
      )}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`p-2 ${
          currentPage === totalPages && "opacity-70"
        } rounded bg-purple-1 text-white`}
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
};

export default Pagination;
