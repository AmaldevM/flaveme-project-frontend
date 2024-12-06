import React, { useState } from "react";
import logo from "../../assets/hero/5.png";
import { HowDoesitWork } from "@/components/user/HowDoesitWork";
import { Process } from "@/components/user/Process";
import { Whychooseus } from "@/components/user/Whychooseus";
import { RestaurantPage } from "./RestaurantPage";
import Stats from "../../components/ui/Stats";
import review from "../../assets/icons/review.png";
import food from "../../assets/icons/food2.png";
import rest from "../../assets/icons/rest 2.png";

export const Home = () => {
  const [user, setUser] = useState("");
  const handleSearch = (event) => {
    event.preventDefault();
    console.log("Search Query:", user);
  };

  return (
    <div>
      {/* Hero Section */}
      <main className="home  py-6 sm:py-10 md:py-14 lg:py-10 xl:py-6 custom-rounded min-h-screen">
        <div className="px-4 mx-auto max-w-xs sm:max-w-md md:max-w-lg lg:max-w-4xl xl:max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 lg:gap-x-10 lg:items-center ">
            {/* Text Section */}
            <div className="text-center lg:text-left">
              <h1 className="text-2xl leading-normal font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                Fastest Online{" "}
                <span className="text-amber-400">Food Delivery Service.</span>
              </h1>
              {/* Search Form */}
              <form className="mt-6 sm:mt-8" onSubmit={handleSearch}>
                <div className="relative flex items-center p-2 sm:border sm:rounded-xl group sm:focus-within:ring-1 sm:focus-within:ring-black">
                  <input
                    type="text"
                    placeholder="Search Food or Restaurants"
                    className="w-full px-4 py-3 text-gray-900 bg-transparent border border-black rounded-xl sm:border-none placeholder-black"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="ml-3 px-6 py-3 text-base rounded-xl bg-amber-500 font-medium text-white shadow-lg transition-transform duration-200 ease-in-out hover:scale-[1.08]"
                  >
                    <h3>Search</h3>
                  </button>
                </div>
              </form>
              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4 mt-5">
                <Stats img={review} value="4.8/5" label="Customer Reviews" />
                <Stats img={food} value="10K+" label="Delicious Foods Served" />
                <Stats img={rest} value="500+" label="Partner Restaurants" />
              </div>
            </div>
            {/* Image Section */}
            <div>
              <img
                className="object-cover object-center rounded-lg  h-100 w-100 md:h-200 md:w-100"
                alt="hero"
                src={logo}
              />
            </div>
          </div>
        </div>
      </main>
      <main className="  py-6 sm:py-2 md:py-2 lg:py-12 xl:py-0  min-h-screen">
        <div className="px-4 mx-auto max-w-xs sm:max-w-md md:max-w-lg lg:max-w-4xl xl:max-w-6xl">
          <div className="text-center lg:text-left ">
            <div className="lg:grid-cols-2 gap-y-8 lg:gap-x-10 lg:items-center ">
         
              <RestaurantPage />
         
              <HowDoesitWork />
         
              <Process />
         
            </div>
          </div>
        </div>
            <Whychooseus />
      </main>
    </div>
  );
};
