import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../config/axiosInstance";
import { SearchIcon } from "lucide-react";
import toast from "react-hot-toast";

const Menus = ({ restaurantId }) => {
  const [menus, setMenu] = useState([]);
  console.log(menus);

  const getMenuForRestaurant = async () => {
    try {
      const response = await axiosInstance({
        method: "GET",
        url: `/menu/menu/${restaurantId}`,
      });
      setMenu(response.data.menus);
    } catch (error) {
      console.error("Error fetching menus", error);
    }
  };

  const handleAddToCart = async (menuItem) => {
    try {
      const response = await axiosInstance({
        method: "POST",
        url: "/cart/addCart",
        data: {
          items: [
            {
              menuItem: menuItem,
              quantity: 1,
            },
          ],
        },
      });
      const successMessage = response.data.message;
      toast.success(successMessage);
    } catch (error) {
      let erorrMessage = error.response.data.message;
      toast.error(erorrMessage);
    }
  };

  useEffect(() => {
    getMenuForRestaurant();
  }, []);

  return (
    <section className="py-16 w-[100%]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Explore Our Delicious Menus
        </h2>
        <div className="flex justify-between items-center mb-8">
          <div className="dropdown dropdown-hover">
            <div
              tabIndex={0}
              role="button"
              className="btn m-1 bg-purple-600 text-white hover:bg-purple-700"
            >
              Hover
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow-xl"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Search your favorite..."
              className="pl-10 pr-4 py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <SearchIcon className="absolute left-3 top-2.5 text-gray-500" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {menus.map((menu) => (
            <div
              key={menu._id}
              className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition duration-300"
            >
              {menu.image && (
                <img
                  src={menu.image}
                  alt={menu.name}
                  className="w-full h-56 object-cover rounded-lg mb-6"
                />
              )}
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {menu.name}
                </h3>
                <p className="text-gray-700 text-sm mb-4">{menu.description}</p>
                <p className="text-xl font-bold text-purple-600 mb-4">{`$${menu.price.toFixed(
                  2
                )}`}</p>
                <button
                  onClick={() => handleAddToCart(menu._id)}
                  className="w-full py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menus;
