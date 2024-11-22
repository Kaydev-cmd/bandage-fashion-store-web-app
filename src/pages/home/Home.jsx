import React from "react";
import { Hero } from "../../components/Hero";

export const Home = () => {
  return (
    <>
      <Hero />
      <div className="container">
        <div className="content">
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
        </div>
      </div>
    </>
  );
};
