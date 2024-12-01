import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../../../config/axiosInstance";
import Menus from "../../../components/user/Menus";

const RestDetails = () => {
  const { id } = useParams();
  const [restDetails, setRestDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getRestaurantById = async () => {
    try {
      const response = await axiosInstance({
        method: "GET",
        url: `/rest/restaurants/${id}`,
      });
      setRestDetails(response.data);
    } catch (err) {
      console.error(err);
      setError("Failed to load restaurant details. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getRestaurantById();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-dots loading-md bg-[#cd50f0]"></span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen text-red-500">
        {error}
      </div>
    );
  }

  if (!restDetails) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500">No restaurant details available.</p>
      </div>
    );
  }

  // Check if restaurant is open
  const currentTime = new Date().toLocaleTimeString("en-US", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
  });
  const isOpen =
    currentTime >= restDetails.openingHours?.open &&
    currentTime <= restDetails.openingHours?.close;

  return (
    <main className="flex flex-col justify-center items-center w-full mt-11 px-4 py-8">
      {/* Cover Image with Gradient */}
      <div
        className="relative flex flex-col sm:flex-row justify-between items-center px-10 w-[95%] h-[450px] rounded-lg overflow-hidden shadow-md"
        style={{
          backgroundImage: `url(${restDetails.image || "/fallback-image.jpg"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#000000aa] to-[#0000008d]"></div>
        <div className="relative z-10 flex flex-col sm:flex-row justify-between items-center w-full h-full p-6 text-white">
          <div className="text-center sm:text-left">
            <h1 className="text-3xl font-bold">{restDetails.name}</h1>
            <h2 className="text-lg mt-2">{restDetails.location || "Unknown Location"}</h2>
            <p className="text-sm mt-2">{restDetails.cuisine || "Cuisine not specified"}</p>
            <p
              className={`mt-2 text-sm font-medium ${
                isOpen ? "text-green-400" : "text-red-400"
              }`}
            >
              {isOpen ? "Open Now" : "Closed"}
            </p>
          </div>
          <div className="mt-6 sm:mt-0 sm:ml-8">
            <img
              className="w-60 sm:w-[500px] rounded-xl shadow-lg"
              src={restDetails.image || "/fallback-image.jpg"}
              alt={restDetails.name}
            />
          </div>
        </div>
      </div>

      {/* Menus Section */}
      <div className="w-full mt-10">
        <Menus restaurantId={id} />
      </div>
    </main>
  );
};

export default RestDetails;
