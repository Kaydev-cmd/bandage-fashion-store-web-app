import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Required Modules
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export const Hero = () => {
  return (
    <>
      <div className="bg-[#01b7dc] p-2">
        <div className="container">
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 12000,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
            className="hero-swiper"
          >
            <SwiperSlide>
              <div className="flex items-center justify-around sm:justify-center sm:h-[320px]">
                <div className="text-white sm:text-center">
                  <p className="mb-2 uppercase md:text-[14px]">Summer 2020</p>
                  <h2 className="text-[48px] mb-2 font-bold lg:text-[26px] md:text-[22px]">
                    New Collection
                  </h2>
                  <p className="mb-8 lg:text-[14px]">
                    We know how large objects will act,
                    <br />
                    but things on a small scale
                  </p>
                  <button className="text-white bg-[#2DC071] py-4 px-8 uppercase font-bold hover:opacity-[.9]">
                    Shop Now
                  </button>
                </div>
                <div className="banner">
                  <img
                    src="/images/home/hero-cover-1.png"
                    alt="Hero banner"
                    className="xl:w-[500px] sm:hidden"
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex items-center justify-around sm:justify-center sm:h-[320px]">
                <div className="text-white sm:text-center">
                  <p className="mb-2 uppercase md:text-[14px]">Summer 2020</p>
                  <h2 className="text-[48px] mb-2 font-bold lg:text-[26px] md:text-[22px]">
                    New Collection
                  </h2>
                  <p className="mb-8 lg:text-[14px]">
                    We know how large objects will act,
                    <br />
                    but things on a small scale
                  </p>
                  <button className="text-white bg-[#2DC071] py-4 px-8 uppercase font-bold hover:opacity-[.9]">
                    Shop Now
                  </button>
                </div>
                <div className="banner">
                  <img
                    src="/images/home/hero-cover-1.png"
                    alt="Hero banner"
                    className="xl:w-[500px] sm:hidden"
                  />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex items-center justify-around sm:justify-center sm:h-[320px]">
                <div className="text-white sm:text-center">
                  <p className="mb-2 uppercase md:text-[14px]">Summer 2020</p>
                  <h2 className="text-[48px] mb-2 font-bold lg:text-[26px] md:text-[22px]">
                    New Collection
                  </h2>
                  <p className="mb-8 lg:text-[14px]">
                    We know how large objects will act,
                    <br />
                    but things on a small scale
                  </p>
                  <button className="text-white bg-[#2DC071] py-4 px-8 uppercase font-bold hover:opacity-[.9]">
                    Shop Now
                  </button>
                </div>
                <div className="banner">
                  <img
                    src="/images/home/hero-cover-1.png"
                    alt="Hero banner"
                    className="xl:w-[500px] sm:hidden"
                  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};
