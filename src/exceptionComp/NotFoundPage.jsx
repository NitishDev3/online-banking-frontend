import React from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 flex flex-col justify-center items-center p-4">
      {/* 404 Card */}
      <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-8 text-center">
        {/* 404 Icon */}
        <div className="mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-24 w-24 mx-auto text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        {/* 404 Heading */}
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>

        {/* Subheading */}
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-600 mb-8">
          The page you're looking for doesn't exist or the page is under development.
        </p>

        {/* Back to Home Button */}
        <button
          onClick={() => navigate("/")}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition duration-300 shadow-lg"
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;