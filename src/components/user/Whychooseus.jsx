import React from "react"; 
import logo from "../../assets/hero/1.png";
import rest from "../../assets/icons/rset3.png";
import shipping from "../../assets/icons/drone2.png";
import support from "../../assets/icons/support.png";

export const Whychooseus = () => {
  return (
    <div className="m-10"> 
    <section className="font-montserrat py-10 sm:py-14 lg:py-10  rounded-3xl  text-white max-w-screen-xl mx-auto">
      <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12 px-6 lg:px-12">
        {/* Left Image Section */}
        <div className="flex-1 flex justify-center">
          <img
            src={logo}
            alt="Why Choose Us"
            className="w-full max-w-sm md:max-w-md lg:max-w-lg rounded-xl  object-contain"
          />
        </div>

        {/* Right Text Section */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <h2 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold">
            Why <span className="text-amber-500">Choose Us?</span>
          </h2>
          <ul className="space-y-6 text-lg sm:text-xl">
            <li className="flex items-center justify-center md:justify-start space-x-6">
              <span className="bg-amber-500 rounded-full p-1 flex items-center justify-center w-20 h-20">
                <img src={rest} alt="High-Quality Food Icon" className="w-18 h-18" />
              </span>
              <span className="font-extrabold text-2xl">High-Quality Food</span>
            </li>
            <li className="flex items-center justify-center md:justify-start space-x-6">
              <span className="bg-amber-500 rounded-full p-1 flex items-center justify-center w-20 h-20">
                <img src={shipping} alt="Fast Delivery Icon" className="w-18 h-18" />
              </span>
              <span className="font-extrabold text-2xl">Fast Delivery</span>
            </li>
            <li className="flex items-center justify-center md:justify-start space-x-6">
              <span className="bg-amber-500 rounded-full p-1 flex items-center justify-center w-20 h-20">
                <img src={support} alt="24/7 Customer Support Icon" className="w-18 h-18" />
              </span>
              <span className="font-extrabold text-2xl">24/7 Customer Support</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
      {/* Testimonial Section */}
      <div className="mt-3 bg-white/10 rounded-3xl p-6 lg:p-8 shadow-xl text-center text-gray-200">
        <blockquote className="text-lg sm:text-xl italic font-light">
          "Foody is the best. Besides the many delicious meals, the service is
          also very good, especially the delivery. Highly recommend Foody to
          you."
        </blockquote>
        <cite className="block mt-4 text-sm sm:text-base font-semibold">
          - Guy Hawkins
        </cite>
      </div>
      </div>
  );
};
