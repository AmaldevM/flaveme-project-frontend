import React from "react";
import logo from "../../assets/AI images/12.png";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import one from "../../assets/AI images/process/1.png";

export const Process = () => {
  return (
    <div className="m-10">
      <section
        className="bg-cover bg-center bg-no-repeat body-font max-w-screen-lg mx-auto  rounded-xl shadow-lg "
        style={{ backgroundImage: `url(${one})` }}
      >
        <div className="container flex flex-col md:flex-row items-center px-5 py-12 md:py-6">
          {/* Left Image Section */}
          <div className="md:w-1/2 w-full flex justify-center mb-10 md:mb-0 relative"></div>

          {/* Right Text Section */}
          <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white">
              Way to Your <br />
              <span className=" text-amber-500">Favorite Foods </span>
            </h1>
            <p className="leading-relaxed text-white text-base md:text-lg">
              Follow these simple steps to enjoy your meal quickly and
              hassle-free.
            </p>

            {/* Steps */}
            <div className="flex flex-col space-y-2">
              {[
                "Set your location first",
                "Choose the food you want to order",
                "Confirm your order with payment method",
                "Within 30 minutes, you will get your food",
              ].map((step, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 bg-gray-100/20 p-3 rounded-lg shadow duration-200 ease-in-out hover:scale-[1.05]"
                >
                  <div className="bg-amber-500 text-white rounded-full p-1 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="h-6 w-6"
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
                  </div>
                  <p className="text-gray-200 text-sm sm:text-base md:text-lg font-medium">
                    {step}
                  </p>
                </div>
              ))}
            </div>

            {/* Button */}
            <div className="mt-8 md:mt-12">
              <Link to="/signin">
                <button className="relative group p-3 px-6 bg-amber-500 text-white   duration-200 ease-in-out hover:scale-[1.05] rounded-full text-base sm:text-lg font-semibold hover:bg-amber-600 transition-all">
                  <span className="inline-block group-hover:opacity-0 transition-all">
                    Order Food Now
                  </span>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all">
                    <span className="mr-2">Get Started</span>
                    <ArrowRight />
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
