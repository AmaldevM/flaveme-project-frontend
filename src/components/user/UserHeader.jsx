import React from "react";
import { cn } from "../../lib/utils.js";
import { useMediaQuery } from "../../lib/use-media-query.js";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle, FaShoppingCart, FaHeart } from "react-icons/fa";
import logo from "../../assets/logo.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const UserHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/0 font-montserrat  font-bold text-orange-600 backdrop-blur-sm shadow-md  top-1 z-60 py-3 rounded-3xl">
      <div className="container mx-auto px-4 flex items-center justify-between h-16  ">
        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className=" py-3 sm:py-4 w-[82px] md:w-[100px] transition-transform duration-200 ease-in-out hover:scale-[1.15] "
          />
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/">
            <button className="text-white relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-white  after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100 transition-transform duration-200 ease-in-out hover:scale-[1.15]">
              Home
            </button>
          </Link>
          <Link to="/restaurant">
            <button className="text-white relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-white  after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100 transition-transform duration-200 ease-in-out hover:scale-[1.15]">
              Restaurant
            </button>
          </Link>
          <Link to="/contact-us">
            <button className="text-white relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-white  after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100 transition-transform duration-200 ease-in-out hover:scale-[1.15]">
              Contact Us
            </button>
          </Link>
        </nav>
        {/* Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            to="/wishlist"
            className="text-white hover:text-red-500 transition-transform duration-200 ease-in-out hover:scale-[1.15]"
          >
            <FaHeart className="text-xl" />
          </Link>
          <Link
            to="/cart"
            className="text-white hover:text-blue-400 transition-transform duration-200 ease-in-out hover:scale-[1.15]"
          >
            <FaShoppingCart className="text-xl" />
          </Link>
          <Link to="/profile">
            <Avatar>
              <AvatarImage
                src="https://github.com/shadcn.png"
                alt="@shadcn"
                className="transition-transform duration-200 ease-in-out hover:scale-[1.05]"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white/0 backdrop-blur-sm border-t ">
          <Link
            to="/"
            className="block py-2 px-4 text-stone-700 hover:text-white relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-white  after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100 transition-transform duration-200 ease-in-out hover:scale-[1.03]"
          >
            Home
          </Link>
          <Link
            to="/restaurant"
            className="block py-2 px-4 text-stone-700 hover:text-white relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-white  after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100 transition-transform duration-200 ease-in-out hover:scale-[1.03]"
          >
            Restaurant
          </Link>
          <Link
            to="/contactus"
            className="block py-2 px-4 text-stone-700 hover:text-white relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-white  after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100 transition-transform duration-200 ease-in-out hover:scale-[1.03]"
          >
            Contact Us
          </Link>
          <Link
            to="/wishlist"
            className="block py-2 px-4 text-stone-700 hover:text-white relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-white  after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100 transition-transform duration-200 ease-in-out hover:scale-[1.03]"
          >
            Wishlist
          </Link>
          <Link
            to="/cart"
            className="block py-2 px-4 text-stone-700 hover:text-white relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-white  after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100 transition-transform duration-200 ease-in-out hover:scale-[1.03]"
          >
            Cart
          </Link>
          <Link
            to="/profile"
            className="block py-2 px-4 text-stone-700 hover:text-white relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 dark:after:bg-white  after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100 transition-transform duration-200 ease-in-out hover:scale-[1.03]"
          >
            Profile
          </Link>
        </nav>
      )}
    </header>
  );
};
