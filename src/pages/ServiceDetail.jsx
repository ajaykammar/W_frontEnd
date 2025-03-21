import React from "react";
import { useParams } from "react-router-dom";
import BannerSlider from "../components/Sliders/BannerSlider";
import BrandSlider from "../components/Sliders/BrandSlider";

import LogoSlider from "../components/Sliders/LogoSlider";
import ProductByfilter from "../components/ServiceDetail/ProductByfilter";
import CustomerReview from "../components/CustomerReview ";
import SubscriptionModule from "../components/SubscriptionModule";
import Adds from "../components/Adds/Adds";
import FilterBar from "../components/ServiceDetail/FilterBar";
import ProductScrollDisplay from "../components/Prodcut/ProductScrollDisplay ";
import { useState } from "react";
const ServiceDetail = () => {
  const [FilterData, setFilterData] = useState({
    category: "",
    brand: "",
    module: "",
    rating: "",
    search: "",
    page: 1, // Reset to first page when filters change
    limit: 20, // Default limit
  });
  useState;
  return (
    <div>
      <BannerSlider />
      <ProductScrollDisplay />
      <div className="flex">
        <FilterBar setFilterData={setFilterData} />

        <Adds />
      </div>
      <ProductByfilter />
      <BrandSlider />
      <CustomerReview />
      <SubscriptionModule />
      <LogoSlider />
    </div>
  );
};

export default ServiceDetail;
