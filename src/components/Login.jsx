import React from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-4">
      {/* Login Card */}
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Log In to Hey Bank
        </h1>

        {/* Email Field */}
        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Password Field */}
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Log In Button */}
        <button className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition duration-300">
          Log In
        </button>

        {/* Sign Up Link */}
        <div className="mt-6 text-center">
          <span className="text-gray-600">Don't have an account? </span>
          <NavLink
            to="/signup"
            className="text-blue-600 font-semibold hover:underline"
          >
            Sign Up
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Login;