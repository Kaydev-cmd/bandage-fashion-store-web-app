import React from "react";
import { IconContext } from "react-icons";
import {
  FaRegUser,
  FaSearch,
  FaRegHeart,
  FaRegEnvelope,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaShoppingCart,
} from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { MdOutlineLocalPhone } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

export const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="bg-[#252B42] lg:hidden">
          <div className="container">
            <div className="flex justify-between p-4  text-white">
              <div className="flex gap-6">
                <div className="flex items-center gap-1">
                  <MdOutlineLocalPhone />
                  <p className="lg:text-[14px]">(225) 555-0118</p>
                </div>
                <div className="flex items-center gap-1">
                  <FaRegEnvelope />
                  <p>
                    <a href="#" className="hover:underline">
                      bandage123@example.com
                    </a>
                  </p>
                </div>
              </div>
              <p>Follow Us and get a chance to win 80% off</p>
              <div className="right-wrapper">
                <p className="flex items-center gap-2">
                  Follow Us:
                  <div className="flex gap-2">
                    <a href="#">
                      <FaInstagram />
                    </a>
                    <a href="#">
                      <FaYoutube />
                    </a>
                    <a href="#">
                      <FaFacebook />
                    </a>
                    <a href="#">
                      <FaTwitter />
                    </a>
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white">
          <div className="container">
            <div className="flex justify-between items-center p-4">
              <div className="flex gap-16 items-center lg:gap-11">
                <a href="/">
                  <h1 className="text-[22px] normal-case font-extrabold text-[#252B42] lg:text-[18px]">
                    Bandage
                  </h1>
                </a>
                <ul className="flex gap-6 text-[#737373] lg:gap-4 lg:mr-4 lg:text-[14px] md:hidden">
                  <li>
                    <a href="/" className="hover:text-[#252B42]">
                      Home
                    </a>
                  </li>
                  <li className="flex items-center gap-1">
                    <a href="#shop" className="hover:text-[#252B42]">
                      Shop
                    </a>
                    <IoIosArrowDown />
                  </li>
                  <li>
                    <a href="#about" className="hover:text-[#252B42]">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#blog" className="hover:text-[#252B42]">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="hover:text-[#252B42]">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a href="#pages" className="hover:text-[#252B42]">
                      Pages
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex items-center gap-28 lg:gap-4">
                <div className="flex gap-2 md:hidden">
                  <p className="flex items-center gap-1 lg:text-[14px]">
                    <FaRegUser color="#23A6F0" size={14} />
                    <a href="#" className="text-[#23A6F0] hover:underline">
                      Login
                    </a>
                  </p>
                  <span className="text-[#23A6F0] lg:text-[14px]">/</span>
                  <p className="lg:text-[14px]">
                    <a href="#" className="text-[#23A6F0] hover:underline">
                      Register
                    </a>
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <IconContext.Provider
                    value={{ color: "#23A6F0", className: "searchIcon" }}
                  >
                    <FaSearch size={20} className="cursor-pointer lg:size-4" />
                  </IconContext.Provider>
                  <IconContext.Provider
                    value={{ color: "#23A6F0", className: "cartIcon" }}
                  >
                    <FaShoppingCart
                      size={20}
                      className="cursor-pointer lg:size-4"
                    />
                  </IconContext.Provider>
                  <IconContext.Provider
                    value={{ color: "#23A6F0", className: "heartIcon" }}
                  >
                    <FaRegHeart
                      size={20}
                      className="cursor-pointer lg:size-4 md:hidden"
                    />
                  </IconContext.Provider>
                </div>
                <HiOutlineMenuAlt3
                  className="hidden md:flex"
                  size={20}
                  color="#23A6F0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
