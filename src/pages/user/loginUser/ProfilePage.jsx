import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../../config/axiosInstance";
import toast from "react-hot-toast";

const ProfilePage = () => {
  // State for edit profile visibility
  const [showEdit, setShowEdite] = useState(false);

  // State for user profile management
  const [isUser, setIsuser] = useState({});

  // Navigate function for routing
  const navigate = useNavigate();

  // Fetch user profile data
  const fetchUserProfile = async () => {
    try {
      const response = await axiosInstance({
        method: "GET",
        url: "/user/profile",
      });
      setIsuser(response.data);
    } catch (error) {
      toast.error("Failed to fetch user profile");
    }
  };

  // User logout function
  const handleLogout = async () => {
    try {
      const response = await axiosInstance({
        method: "POST",
        url: "/user/logout",
      });
      console.log(response);
      toast.success("User logged out successfully");

      // Clear user session data (if applicable)
      localStorage.removeItem("authToken"); // Adjust if using a different key
      sessionStorage.clear();

      // Redirect to login page
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
      toast.error("Failed to log out. Please try again.");
    }
  };

  const handleEdite = () => {
    setShowEdite(true);
  };

  // Fetch user profile on component mount
  useEffect(() => {
    fetchUserProfile();
  }, []);

  return (
    <>
      <div className="relative flex justify-center">
        <div className="flex justify-center items-center w-full h-[91vh]">
          <div className="container py-7 flex flex-col items-center mt-5 w-[90%] shadow-lg rounded-lg">
            <div>
              <img
                src={isUser.image}
                alt="User profile"
                className="rounded-full w-[180px]"
              />
            </div>
            <div className="text-center">
              <h1 className="text-[28px] font-semibold">{isUser.name}</h1>
              <span className="font-medium">{isUser.email}</span>
              <h4>{isUser.phone}</h4>
            </div>
            <div className="flex justify-between w-[90%]">
              <button
                onClick={handleLogout}
                className="bg-orange-400 mt-5 rounded-md font-semibold py-1 px-4"
              >
                Logout
              </button>
              <button
                className="border border-orange-400 mt-5 py-1 px-4 font-semibold rounded-md"
                onClick={handleEdite}
              >
                Edit user
              </button>
            </div>
          </div>
        </div>
        {/* Profile editing section */}
        {showEdit && (
          <div className="absolute top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-5 rounded-lg">
              <h2>Edit Profile</h2>
              {/* Add your edit profile form here */}
              <button
                onClick={() => setShowEdite(false)}
                className="mt-4 bg-red-500 text-white py-1 px-3 rounded"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProfilePage;
