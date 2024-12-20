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
          <section className="flex items-center justify-around mt-20">
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
          </section>

          {/* Explore Items */}
          <ExploreItemsCards />

          {/* Best Sellers */}
          <section className="mt-24">
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
              <div className="flex justify-center mt-16">
                <button className="py-3 px-6 border border-[#23A6F0] rounded-[8px] text-[#23A6F0] hover:bg-[#23A6F0] hover:text-[#fff]">
                  Load More Products
                </button>
              </div>
            </div>
          </section>

          {/* What we do */}
          <section className="mt-24">
            <div className="flex items-center justify-around xl:gap-16 sm:flex-col-reverse">
              <img
                src="/images/home/hero-cover-212a.png"
                alt="Banner"
                className="lg:w-[360px] md:w-[300px] sm:w-[100%]"
              />
              <div className="flex flex-col gap-2 sm:text-center">
                <h4 className="text-[16px] text-[#23A6F0]">
                  Featured Products
                </h4>
                <h3 className="text-[#252B42] text-[38px] font-bold lg:text-[28px] sm:text-[38px] xs:text-[28px]">
                  We love what we do
                </h3>
                <p className="text-[#737373] mb-2 xl:text-[14px]">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  <br />
                  Nulla commodi, accusantium fuga suscipit eaque fugiat incidunt
                  <br />
                  ab qui, ad, nemo aperiam sint. Ipsam maxime eaque, assumenda
                  et
                  <br />
                </p>
                <p className="text-[#737373] xl:text-[14px]">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  <br />
                  Nulla commodi, accusantium fuga suscipit eaque fugiat incidunt
                  <br />
                  ab qui, ad, nemo aperiam sint. Ipsam maxime eaque, assumenda
                  et
                  <br />
                </p>
              </div>
            </div>
          </section>

          {/* Services */}
          <section className="mt-24">
            <div className="content">
              <div className="text-center">
                <h4 className="text-[#737373]">Featured Products</h4>
                <h3 className="text-[#252B42] uppercase font-bold">
                  The best services
                </h3>
                <p className="text-[#737373]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati, placeat!
                </p>
              </div>
              <div className="flex justify-around mt-24 lg:gap-12 md:gap-14 sm:flex-col sm:items-center">
                <div className="text-center w-[260px] flex flex-col items-center gap-2">
                  <img
                    src="/images/home/bx_bxs-book-reader.png"
                    alt="Reading"
                  />
                  <h5 className="font-bold text-[22px]">Easy Wins</h5>
                  <p className="text-[#737373] lg:text-[14px]">
                    Get your best looking smile
                    <br />
                    now!
                  </p>
                </div>
                <div className="text-center w-[260px] flex flex-col items-center gap-2">
                  <img src="/images/home/carbon_book.png" alt="Reading" />
                  <h5 className="font-bold text-[22px]">Concrete</h5>
                  <p className="text-[#737373] lg:text-[14px]">
                    Defalcate is most focused in
                    <br />
                    helping you discover your most
                    <br />
                    beautiful smile
                  </p>
                </div>
                <div className="text-center w-[260px] flex flex-col items-center gap-2">
                  <img src="/images/home/uil_arrow-growth.png" alt="Reading" />
                  <h5 className="font-bold text-[22px]">Hack Growth</h5>
                  <p className="text-[#737373] lg:text-[14px]">
                    Overcame any hurdle or any
                    <br />
                    other problem.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
