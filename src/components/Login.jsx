import axios from "axios";
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { updateButton } from "../store/configSlice";
import { loadUserData } from "../store/userInfoSlice";
import { BASE_API_URL } from "../assets/constants";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const singInEmail = useRef("");
  const signInPassword = useRef("");
  const [isLoading, setIsLoading] = useState(false); // State to track loading

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signInUser = async (inputData) => {
    try {
      setIsLoading(true); // Start loading
      const response = await axios.post(BASE_API_URL + "/login", inputData, {
        withCredentials: true,
      });

      // Dispatch user data to Redux store
      dispatch(loadUserData(response.data.data));
      dispatch(updateButton("Log Out"));

      toast.success("Login Successful!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      setTimeout(() => {
        navigate("/")
      }, 500);
    } catch (error) {
      toast.error("Login Failed. Please try again.", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  const handleSignInClick = () => {
    const inputData = {
      emailId: singInEmail.current.value,
      password: signInPassword.current.value,
    };

    signInUser(inputData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 flex flex-col justify-center items-center p-4">
      {/* Toast Container */}
      <ToastContainer />

      {/* Login Card */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-white rounded-xl shadow-2xl p-6 md:p-8 transform transition-all hover:scale-105"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Log In to Hey Bank
        </h1>

        {/* Email Field */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-6"
        >
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            ref={singInEmail}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          />
        </motion.div>

        {/* Password Field */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-6"
        >
          <label
            htmlFor="password"
            className="block text-gray-700 font-medium mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            ref={signInPassword}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          />
        </motion.div>

        {/* Log In Button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <button
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition duration-300 disabled:opacity-50"
            onClick={handleSignInClick}
            disabled={isLoading} // Disable button while loading
          >
            {isLoading ? "Logging In..." : "Log In"}
          </button>
        </motion.div>

        {/* Sign Up Link */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-6 text-center"
        >
          <span className="text-gray-600">Don't have an account? </span>
          <NavLink
            to="/signup"
            className="text-blue-600 font-semibold hover:underline"
          >
            Sign Up
          </NavLink>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Login;
