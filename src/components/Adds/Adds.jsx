import React, { useState } from "react";
import FilterBar from "../ServiceDetail/FilterBar";

const Adds = () => {
  return (
    <>
      <div>
        {/* Grid Layout Ads */}
        <div className="container mx-auto px-4 ">
          {/* Wide Banner */}
          <div className="lg:col-span-3 relative h-[200px] my-1 overflow-hidden">
            <img
              src="https://www.shutterstock.com/shutterstock/photos/2182703761/display_1500/stock-vector-vector-illustration-of-realistic-silver-color-different-appliance-on-white-background-d-style-2182703761.jpg"
              alt="Special Offer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 p-8 flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">
                  Special Offer
                </h2>
                <p className="text-white">Get 30% off on new arrivals</p>
              </div>
              <button className="bg-white text-black px-6 py-2 rounded-full">
                Shop Now
              </button>
            </div>
          </div>
          <div className="lg:grid-cols-3 gap-6 flex">
            {/* Large Featured Ad */}
            <div className="md:col-span-1 lg:col-span-1  relative h-[280px] w-[700px] my-1 overflow-hidden">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/002/478/302/small_2x/sale-electronics-banner-background-free-vector.jpg"
                alt="Luxury Collection"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 p-8 flex flex-col justify-end">
                <h2 className="text-3xl font-bold text-red-600 mb-2">
                  Product Adds
                </h2>
                <p className="text-white mb-4">
                  Discover our premium selection
                </p>
                <button className="bg-blue-950 text-white w-fit px-6 py-2 rounded-full">
                  Shop Collection
                </button>
              </div>
            </div>

            {/* Small Ad 1 */}
            <div className="relative h-[280px] w-full  my-1 overflow-hidden">
              <img
                src="https://cdn.vectorstock.com/i/1000v/47/26/isometric-page-for-electronics-repair-service-vector-26234726.avif"
                alt="Summer Essentials"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white mb-2">
                  Summer Essentials
                </h3>
                <button className="bg-white text-black w-fit px-4 py-2 rounded-full text-sm">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Adds;
