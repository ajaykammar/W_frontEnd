import React from "react";
import BannerSlider from "../components/Sliders/BAnnerSlider";
import CategoryDisplay from "../components/Catagry/CategoryDisplay";
import ProductScrollDisplay from "../components/Prodcut/ProductScrollDisplay ";
import ServiceList from "../components/ServiceList";
import SubscriptionModule from "../components/SubscriptionModule";
import Product from "../components/Prodcut/Product";
import LogoSlider from "../components/Sliders/LogoSlider";
import Products from "../components/Prodcut/Products";
import Adds from "../components/Adds/Adds";

const Home = () => {
  return (
    <>
      <CategoryDisplay />
      <BannerSlider />
      <ProductScrollDisplay />
      <Adds />
      <ServiceList />
      <div className="mx-10">
        <Products />
      </div>
      {/* <SubscriptionModule /> */}
      <LogoSlider />
    </>
  );
};

export default Home;
