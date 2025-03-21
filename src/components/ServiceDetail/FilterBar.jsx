import React, { useState, useEffect } from "react";
import { Checkbox, Rate } from "antd";
import { useQuery } from "@tanstack/react-query";
import { GetFilterData } from "../../services/Filter";

const FilterBar = ({ setFilterData }) => {
  const [brand, setBrand] = useState([]);
  const [module, setModule] = useState([]);
  const [rating, setRating] = useState(0);
  const [search, setSearch] = useState("");

  const { data: filterData } = useQuery({
    queryKey: ["FilterData"],
    queryFn: () => GetFilterData(),
  });

  // Update filters whenever any selection changes
  useEffect(() => {
    console.log(brand);
    setFilterData({
      brand,
      module,
      rating,
      search,
      page: 1, // Reset to first page when filters change
      limit: 20, // Default limit
    });
  }, [brand, module, rating, search]);

  const handleBrandChange = (checkedValues) => {
    setBrand(checkedValues);
    setModule([]); // Reset modules when brand changes
  };

  const handleModuleChange = (checkedValues) => {
    setModule(checkedValues);
  };

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="p-4 w-[260px] bg-white border rounded">
      <h3 className="text-lg font-bold mb-2">Filter Products</h3>

      {/* Search Input */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={handleSearchChange}
          className="w-full px-3 py-2 border rounded"
        />
      </div>

      {/* Brand Filter */}
      <div className="mb-4">
        <label className="block text-gray-700">Brand:</label>
        <Checkbox.Group
          options={filterData?.brands?.map((brand) => brand.name)}
          value={brand}
          onChange={handleBrandChange}
        />
      </div>

      {/* Module Filter */}
      {brand.length > 0 && (
        <div className="mb-4">
          <label className="block text-gray-700">Module:</label>
          <Checkbox.Group
            options={filterData?.models
              .filter((model) => brand.includes(model.brand.name))
              .map((item) => item.name)}
            value={module}
            onChange={handleModuleChange}
          />
        </div>
      )}

      {/* Rating Filter */}
      <div className="mb-4">
        <label className="block text-gray-700">Rating:</label>
        <Rate value={rating} onChange={handleRatingChange} />
      </div>
    </div>
  );
};

export default FilterBar;
