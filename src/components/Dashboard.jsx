import React from "react";
import { useNavigate } from "react-router-dom";
import CustomerDashboard from "./CustomerDashboard";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const navigate = useNavigate();
  const userData = useSelector((store) => store.userInfo.userData);

  return userData ? (
    <CustomerDashboard />
  ) : (
    <div className="flex flex-col md:flex-row bg-gray-100 min-h-screen p-8 overflow-hidden">
      {/* Left Section - Slides from Right */}
      <div className="w-full md:w-1/2 h-[85vh] flex flex-col justify-center items-center bg-white rounded-lg shadow-lg p-8 m-4 animate-slideLeft">
        <h1 className="text-gray-800 font-bold text-4xl md:text-5xl text-center mb-4">
          Banking at your Fingertip
        </h1>
        <p className="text-gray-600 text-lg text-center">
          Manage your finances seamlessly with our secure and intuitive banking
          platform.
        </p>
        <button
          className="mt-6 bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
          onClick={() => navigate("/login")}
        >
          Get Started
        </button>
      </div>

      {/* Right Section - Slides from Left */}
      <div className="w-full md:w-1/2 h-[85vh] flex flex-col justify-center items-center bg-white rounded-lg shadow-lg p-8 m-4 animate-slideRight">
        <h1 className="text-gray-800 font-bold text-4xl md:text-5xl text-center mb-4">
          Secure & Reliable
        </h1>
        <p className="text-gray-600 text-lg text-center">
          Your security is our top priority. Enjoy peace of mind with our
          advanced encryption technology.
        </p>
        <button
          className="mt-6 bg-green-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-700 transition duration-300"
          onClick={() => navigate("about")}
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
