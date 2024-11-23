import React from "react";
import { Hero } from "../../components/Hero";
import { ExploreItemsCards } from "../../components/ExploreItemsCards";
import { FeaturedProductsCards } from "../../components/FeaturedProductsCards";

export const Home = () => {
  return (
    <>
      <Hero />
      <div className="container">
        <div className="content">
          {/* Icons */}
          <div className="flex items-center justify-around mt-20">
            <img
              src="/images/home/col-md-2.png"
              alt="Hooli"
              className="lg:w-[60px] xs:w-[40px]"
            />
            <img
              src="/images/home/col-md-3.png"
              alt="Lyft"
              className="lg:w-[60px] xs:w-[40px]"
            />
            <img
              src="/images/home/Vector.png"
              alt="Leaf"
              className="lg:w-[60px] xs:w-[40px]"
            />
            <img
              src="/images/home/fa-brands-4.png"
              alt="Stripe"
              className="lg:w-[60px] xs:w-[40px]"
            />
            <img
              src="/images/home/fa-brands-6.png"
              alt="Reddit"
              className="lg:w-[60px] xs:w-[40px]"
            />
          </div>

          {/* Explore Items */}
          <ExploreItemsCards />

          {/* Best Sellers */}
          <div className="mt-24">
            <div className="content">
              <div className="text-center">
                <h4 className="text-[#737373]">Featured Products</h4>
                <h3 className="text-[#252B42] uppercase font-bold">
                  Bestseller Products
                </h3>
                <p className="text-[#737373]">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Doloribus, placeat!
                </p>
              </div>
              <FeaturedProductsCards />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
