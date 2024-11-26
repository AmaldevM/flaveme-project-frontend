import React from "react";
import logo from "../../assets/AI images/2.jpg"
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const Process = () => {
  return (
    <section className="text-white body-font mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-5 py-24">
        {/* Image centered with adjusted size */}
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full flex justify-center mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded-lg shadow-lg h-100 w-100 md:h-200 md:w-100"
            alt="hero"
            src={logo}
          />
        </div>
        {/* Titles and logos on the right */}
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="title-font sm:text-5xl text-4xl mb-6 font-bold text-white">
            A Very Simple Process
            <br className="hidden lg:inline-block" /> To Order Your
            <br className="hidden lg:inline-block" /> Favorite Foods
          </h1>
          <p className="mb-8 leading-relaxed text-white">
            Enjoy a hassle-free experience with our simple steps to order food.
          </p>
          {/* Steps with icons - line by line design */}
          <div className="flex flex-col items-start space-y-8">
            {" "}
            {/* Parent flex container */}
            <div className="flex items-center space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-8 w-8 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
              <p className="text-white text-base font-semibold">
                Set your location first
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-8 w-8 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
              <p className="text-white text-base font-semibold">
                Choose the food you want to order
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-8 w-8 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
              <p className="text-white text-base font-semibold">
                Confirm your order with payment method
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-8 w-8 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
              <p className="text-white text-base font-semibold">
                Within 30 minutes, you will get your food
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-12">
          <Link to="/signin">
            <div className=" font-lato group relative cursor-pointer p-2 w-40 border bg-white rounded-full overflow-hidden text-black text-center font-semibold">
              <span className="translate-x-1 group-hover:translate-x-12 group-hover:opacity-0 transition-all duration-300 inline-block">
                Order Now
              </span>
              <div className="flex gap-2 text-white z-10 items-center absolute top-0 h-full w-full justify-center translate-x-12 opacity-0 group-hover:-translate-x-1 group-hover:opacity-100 transition-all duration-300">
                <span>Get Start</span>
                <ArrowRight />
              </div>
              <div className="absolute top-[40%] left-[20%] h-2 w-2 group-hover:h-full group-hover:w-full rounded-lg bg-amber-600 scale-[1] dark:group-hover:bg-[#e7cb6e] group-hover:bg-amber-600 group-hover:scale-[1.8] transition-all duration-300 group-hover:top-[0%] group-hover:left-[0%] "></div>
            </div>
          </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
