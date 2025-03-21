import React, { useState, useEffect, useRef } from "react";
import { BiLoader } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { GetSearchData, SerchProduct } from "../../services/productApi";
import toastService from "../../utils/toastService";
import { useDispatch } from "react-redux";
import { SearchProdcuts } from "../../features/slices/ProductSlice";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [data, setdata] = useState();
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const Dispatch = useDispatch();

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedSearch(searchQuery), 200);
    return () => clearTimeout(handler);
  }, [searchQuery]);

  const mutation = useMutation({
    mutationFn: (query) => GetSearchData({ query }), // Pass query as an object
    onSuccess: (data) => {
      Dispatch(SearchProdcuts(data));
    },
    onError: (error) => {
      toastService.error(
        error.response?.data?.error || "Error fetching search results"
      );
    },
  });

  useEffect(() => {
    if (debouncedSearch) {
      mutation.mutate(debouncedSearch);
    }
  }, [debouncedSearch]); // Automatically trigger mutation when debouncedSearch changes

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const getHighLightedText = (text, highlight) => {
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return (
      <span>
        {parts.map((part, index) =>
          part.toLowerCase() === highlight.toLowerCase() ? (
            <b key={index} className="text-blue-900">
              {part}
            </b>
          ) : (
            part
          )
        )}
      </span>
    );
  };

  const handleSuggestionClick = (product) => {
    setSearchQuery(product.Title);
    setIsDropdownOpen(false);
    navigate(`/product/${product._id}`);
  };

  const handleSearch = () => {
    if (searchQuery) {
      navigate(`/search/query=${searchQuery}`);
      setIsDropdownOpen(false);
    }
  };

  return (
    <div
      className="flex flex-col items-center w-1/2 mx-4 relative"
      ref={dropdownRef}
    >
      <div className="flex w-full">
        <input
          type="text"
          className="w-full py-1 px-3 rounded-l-lg outline-none border border-gray-300"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setIsDropdownOpen(true);
          }}
        />
        <button
          className="bg-blue-950 p-2 rounded-r-lg text-white hover:bg-blue-900"
          onClick={handleSearch}
        >
          {mutation.isLoading ? (
            <BiLoader className="animate-spin" />
          ) : (
            <FaSearch />
          )}
        </button>
      </div>
      {isDropdownOpen && mutation.data && debouncedSearch && (
        <ul className="absolute top-full left-0 w-full bg-white border border-gray-200 shadow-lg rounded-lg max-h-40 overflow-y-auto z-10">
          {mutation?.data?.products?.length > 0 ? (
            mutation?.data?.products?.map((product) => (
              <li
                key={product._id}
                className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSuggestionClick(product)}
              >
                {getHighLightedText(product.Title, debouncedSearch)}
              </li>
            ))
          ) : (
            <li className="px-3 py-2 text-gray-500">Product Not Found</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
