import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";

const LoginPopup = ({ setShowLogin }) => {
  const { url, setToken } = useContext(StoreContext);

  const [currState, setCurrState] = useState("Login");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onLogin = async (event) => {
    event.preventDefault();
    let newUrl = url;
    if (currState === "Login") {
      newUrl += "/user/login";
    } else {
      newUrl += "/user/signup";
    }

    const response = await axios.post(newUrl, data);

    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      setShowLogin(false);
    } else {
      alert(response.data.message);
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-60 z-50">
      <form
        onSubmit={onLogin}
        className="w-full max-w-sm bg-white p-6 rounded-lg shadow-lg text-sm space-y-6"
      >
        {/* Title Section */}
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt="Close"
            className="w-5 h-5 cursor-pointer"
          />
        </div>

        {/* Input Fields */}
        <div className="space-y-4">
          {currState !== "Login" && (
            <input
              name="name"
              onChange={onChangeHandler}
              value={data.name}
              type="text"
              placeholder="Your name"
              required
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          )}
          <input
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            type="email"
            placeholder="Your email"
            required
            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            name="password"
            onChange={onChangeHandler}
            value={data.password}
            type="password"
            placeholder="Password"
            required
            className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 rounded-md bg-red-500 text-white text-base hover:bg-red-600"
        >
          {currState === "Sign Up" ? "Create account" : "Login"}
        </button>

        {/* Terms and Conditions */}
        <div className="flex items-start space-x-2 mt-[-10px]">
          <input type="checkbox" required className="mt-1" />
          <p className="text-gray-600">
            By continuing, I agree to the{" "}
            <span className="text-red-500 underline">terms of use</span> &{" "}
            <span className="text-red-500 underline">privacy policy</span>.
          </p>
        </div>

        {/* Switch Between Login/Sign Up */}
        {currState === "Login" ? (
          <p className="text-sm text-gray-600">
            Create a new account?{" "}
            <span
              onClick={() => setCurrState("Sign Up")}
              className="text-red-500 font-medium cursor-pointer"
            >
              Click here
            </span>
          </p>
        ) : (
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <span
              onClick={() => setCurrState("Login")}
              className="text-red-500 font-medium cursor-pointer"
            >
              Login here
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
