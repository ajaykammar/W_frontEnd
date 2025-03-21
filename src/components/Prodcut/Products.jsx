import React, { useState } from "react";
import Product from "./Product";
import { useQuery } from "@tanstack/react-query";
import { AllProdcuts } from "../../services/productApi";
import LoadingSpinner from "../Loading/LoadingSpinner";

// const Products = ({ data, isError, isLoading, error, ServiceType }) => {
const Products = ({ data }) => {
  const [page, setPage] = useState(1); // Initialize the page state

  // Fetch data based on the current page
  // const { data, isError, isSuccess, error, isLoading } = useQuery({
  //   queryKey: ["Products", page], // Ensure the query is refetched when page changes
  //   queryFn: () => AllProdcuts(page),
  // });

  // Handle errors and loading states
  // if (isError) return <div>Error: {error.message}</div>;
  // if (isLoading) return <LoadingSpinner />;
  if (!data) return <div>No data available</div>;

  const { products, currentPage, totalPages, totalProducts } = data;

  // Function to handle the previous page click
  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1); // Decrease page number
    }
  };

  // Function to handle the next page click
  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1); // Increase page number
    }
  };

  return (
    <div>
      <div className="flex flex-wrap justify-center">
        {products &&
          products.map((product, index) => (
            <Product key={index} product={product} />
          ))}
      </div>

      <div className="pagination-controls mt-8 flex justify-center items-center space-x-4">
        {/* Prev Page Button */}
        <button
          onClick={handlePrevPage}
          disabled={page === 1} // Disable if on the first page
          className={`px-6 py-3 text-white rounded-lg 
      ${
        page === 1
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-blue-600 hover:bg-blue-700"
      } 
      transition duration-300 ease-in-out transform hover:scale-105`}
        >
          Prev
        </button>

        {/* Page Number Display */}
        <span className="text-lg text-gray-700 font-semibold">
          Page {page} of {totalPages}
        </span>

        {/* Next Page Button */}
        <button
          onClick={handleNextPage}
          disabled={page === totalPages} // Disable if on the last page
          className={`px-6 py-3 text-white rounded-lg 
      ${
        page === totalPages
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-blue-600 hover:bg-blue-700"
      } 
      transition duration-300 ease-in-out transform hover:scale-105`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Products;
