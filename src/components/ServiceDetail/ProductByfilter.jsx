import React, { useState } from "react";
import FilterBar from "./FilterBar";
import Products from "../Prodcut/Products";
import { useQuery } from "@tanstack/react-query";
import {
  getLaptopParts,
  SerchProduct,
  SerchProductByFilter,
} from "../../services/productApi";
import { useParams } from "react-router-dom";
const ProductByfilter = () => {
  const { ServiceType } = useParams();
  console.log(ServiceType);

  const [FilterData, setFilterData] = useState({
    category: "",
    brand: "",
    module: "",
    rating: "",
    search: "",
    page: 1, // Reset to first page when filters change
    limit: 20, // Default limit
  });

  const { data, isLoading, isError, error, isSuccess } = useQuery({
    queryFn: () => SerchProductByFilter(FilterData),
    queryKey: ["Filter", FilterData],
    enabled: !!FilterData,
    staleTime: 5 * 60 * 1000,
  });

  const {
    data: laptopdata,
    isError: LisError,
    error: Lerror,
    isLoading: LisLoading,
  } = useQuery({
    queryFn: () => getLaptopParts(),
    queryKey: ["Laptop", FilterData],

    staleTime: 5 * 60 * 1000,
  });
  return (
    <div className="flex w-full m-6">
      {/* {console.log("SeFilter :", FilterData)} */}
      {console.log(laptopdata)}
      {console.log(data)}
      {/* <div className="hidden  sm:flex w-1/3 h-[80vh]"> */}
      {/* <FilterBar setFilterData={setFilterData} /> */}
      {/* </div> */}
      <div className=" w-auto flex justify-center">
        {ServiceType == "laptop-serivice" ? (
          <Products
            data={laptopdata}
            isError={LisError}
            isLoading={LisLoading}
            error={Lerror}
            ServiceType={ServiceType}
          />
        ) : (
          <Products
            data={data}
            isError={isError}
            isLoading={isLoading}
            error={error}
          />
        )}
      </div>
    </div>
  );
};

export default ProductByfilter;
