import axios from "axios";
import React, { useRef } from "react";
import { data, NavLink } from "react-router-dom";

const Signup = () => {
  const signUpEmail = useRef("");
  const signUpName = useRef("");
  const signUpPassword = useRef("");

  const registerUser = async (inputData) => {
    try {
      await axios.post("https://online-banking-backend.vercel.app/api/auth/register", inputData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignUpClick = () => {
    const inputData = {
      name: signUpName.current.value,
      email: signUpEmail.current.value,
      password: signUpPassword.current.value,
    };

    registerUser(inputData);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-4">
      {/* Signup Card */}
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Create Your Account
        </h1>

        {/* Name Field */}
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block text-gray-700 font-semibold mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            ref={signUpName}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Email Field */}
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-gray-700 font-semibold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            ref={signUpEmail}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Password Field */}
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-gray-700 font-semibold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            ref={signUpPassword}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Sign Up Button */}
        <button
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          onClick={handleSignUpClick}
        >
          Sign Up
        </button>

        {/* Log In Link */}
        <div className="mt-6 text-center">
          <span className="text-gray-600">Already have an account? </span>
          <NavLink
            to="/login"
            className="text-blue-600 font-semibold hover:underline"
          >
            Log In
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Signup;
