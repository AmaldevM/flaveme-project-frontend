import React from "react";
import { axiosInstance } from "@/config/axiosInstance";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BasicCard from "@/components/user/Card";
import { RestCarousel } from "@/components/user/RestCarousel";

export const RestaurantPage = () => {
  const [restData, setRestData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const getAllRest = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance({
        method: "GET",
        url: "/rest/restaurants",
      });
      setRestData(response.data.restaurants || []);
      setError(null);
    } catch (err) {
      console.error(err);
      setError("Failed to load restaurants. Please try again later.");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getAllRest();
  }, []);

  return (
    <>
      <main className=" sm:py-4 md:py- lg:py-2 xl:py-2 ">
        <h2 className="text-lg font-bold text-center leading-tight text-white sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl">
          Top <span className="text-amber-400">Resturants </span>
        </h2>
      <RestCarousel />
      </main>
    </>
  );
};
