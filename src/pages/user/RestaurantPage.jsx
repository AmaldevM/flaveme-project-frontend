import { axiosInstance } from "@/config/axiosInstance";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
    {restData.map((restaurant) => (
      <div
        key={restaurant._id}
        className="py-5 px-5 mx-auto shadow-xl rounded-md"
      >
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-[300px] rounded-md "
        />
        <h2>{restaurant.name}</h2>
        <h3>{restaurant.address}</h3>
        <div>
          <button
            onClick={() => {
              navigate(`/user/res-details/${restaurant._id}`);
            }}
            className="py-1 px-4 bg-orange-400 font-semibold text-white rounded-md mt-4 hover:bg-orange-500 transition duration-300 ease-in-out"
          >
            Explore
          </button>
        </div>
      </div>
    ))}
  </div>
  );
};
