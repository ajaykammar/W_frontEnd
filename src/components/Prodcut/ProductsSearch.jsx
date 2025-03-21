import React, { useState, useEffect } from "react";
import Product from "./Product";
import LoadingSpinner from "../Loading/LoadingSpinner";
import { useSelector, useDispatch } from "react-redux";
import { useMutation } from "@tanstack/react-query";
import { GetSearchData } from "../../services/productApi";
import { useParams } from "react-router-dom";

const ProductsSearch = () => {
  const dispatch = useDispatch();
  const { search } = useParams();

  const [query, setQuery] = useState(search || ""); // Initialize from URL
  const [page, setPage] = useState(1);

  const data = useSelector((state) => state.Products); // Redux product state

  // ✅ Mutation function to fetch products
  const { mutate, isLoading, isError, error } = useMutation({
    mutationFn: () => GetSearchData({ query, page }),
    onSuccess: (response) => {
      dispatch({ type: "SET_PRODUCTS", payload: response }); // Store products in Redux
    },
    onError: (err) => {
      console.error("Error fetching products:", err);
    },
  });

  // ✅ Automatically fetch products when page or query changes
  useEffect(() => {
    mutate(); // Call API whenever query or page changes
  }, [query, page]); // Dependencies ensure refetching

  // ✅ Handle search button click
  const handleSearch = () => {
    setPage(1); // Reset page to 1
    mutate(); // Fetch products based on query
  };

  // ✅ Handle pagination
  const handlePrevPage = () => {
    if (page > 1) setPage((prev) => prev - 1);
  };

  const handleNextPage = () => {
    if (page < data.totalPages) setPage((prev) => prev + 1);
  };

  // ✅ Handle Enter key press for search
  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  // ✅ Handle loading and error states
  if (isError) return <div>Error: {error.message}</div>;
  if (isLoading) return <LoadingSpinner />;
  if (!data?.products) return <div>No products found</div>;

  const { products, totalPages } = data;

  return (
    <div>
      {/* ✅ Search Input */}
      {/* <div className="flex justify-center items-center my-6 space-x-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search products..."
          className="w-1/3 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <button
          onClick={handleSearch}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Search
        </button>
      </div> */}

      {/* ✅ Product List */}
      <div className="flex flex-wrap justify-center">
        {products.map((product, index) => (
          <Product key={index} product={product} />
        ))}
      </div>

      {/* ✅ Pagination Controls */}
      <div className="pagination-controls mt-8 flex justify-center items-center space-x-4">
        <button
          onClick={handlePrevPage}
          disabled={page === 1}
          className={`px-6 py-3 text-white rounded-lg ${
            page === 1
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          } transition duration-300`}
        >
          Prev
        </button>

        <span className="text-lg text-gray-700 font-semibold">
          Page {page} of {totalPages}
        </span>

        <button
          onClick={handleNextPage}
          disabled={page === totalPages}
          className={`px-6 py-3 text-white rounded-lg ${
            page === totalPages
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          } transition duration-300`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductsSearch;
