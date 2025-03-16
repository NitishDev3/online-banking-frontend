import axios from "axios";
import React, { useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { BASE_API_URL } from "../assets/constants";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

const Signup = () => {
  const signUpFirstName = useRef("");
  const signUpLastName = useRef("");
  const signUpEmail = useRef("");
  const signUpPassword = useRef("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const registerUser = async (inputData) => {
    try {
      setLoading(true);
      await axios.post(BASE_API_URL + "/signup", inputData);
      toast.success("Sign Up Successful!", {
        position: "top-center",
        autoClose: 3000,
      });
      setTimeout(() => {
        signUpFirstName.current.value = "";
        signUpLastName.current.value = "";
        signUpEmail.current.value = "";
        signUpPassword.current.value = "";
        navigate("/login");
      }, 3000);
    } catch (error) {
      let errorMessage = "Sign Up Failed. Please try again.";
      if (error.response) {
        if (error.response.status === 400) {
          errorMessage = error.response.data.message || "Invalid input data.";
        } else if (error.response.status === 409) {
          errorMessage = "Email already exists. Please use a different email.";
        }
      } else if (error.request) {
        errorMessage = "Network error. Please check your internet connection.";
      }
      toast.error(errorMessage, {
        position: "top-center",
        autoClose: 3000,
      });
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSignUpClick = () => {
    const firstName = signUpFirstName.current.value.trim();
    const lastName = signUpLastName.current.value.trim();
    const email = signUpEmail.current.value.trim();
    const password = signUpPassword.current.value.trim();

    if (!firstName || !lastName || !email || !password) {
      toast.error("Please fill in all fields.", {
        position: "top-center",
        autoClose: 3000,
      });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email address.", {
        position: "top-center",
        autoClose: 3000,
      });
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long.", {
        position: "top-center",
        autoClose: 3000,
      });
      return;
    }

    const inputData = { firstName, lastName, emailId: email, password };
    registerUser(inputData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 flex flex-col justify-center items-center p-4">
      {/* Toast Container */}
      <ToastContainer />

      {/* Signup Card */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-white rounded-xl shadow-2xl p-6 md:p-8 transform transition-all hover:scale-105"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Create Your Account
        </h1>

        {/* First Name Field */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-6"
        >
          <label
            htmlFor="firstName"
            className="block text-gray-700 font-medium mb-2"
          >
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            aria-label="First Name"
            placeholder="Enter your first name"
            ref={signUpFirstName}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          />
        </motion.div>

        {/* Last Name Field */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-6"
        >
          <label
            htmlFor="lastName"
            className="block text-gray-700 font-medium mb-2"
          >
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            aria-label="Last Name"
            placeholder="Enter your last name"
            ref={signUpLastName}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          />
        </motion.div>

        {/* Email Field */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
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
            aria-label="Email"
            placeholder="Enter your email"
            ref={signUpEmail}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          />
        </motion.div>

        {/* Password Field */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
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
            aria-label="Password"
            placeholder="Enter your password"
            ref={signUpPassword}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          />
        </motion.div>

        {/* Sign Up Button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <button
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition duration-300 disabled:opacity-50 flex items-center justify-center"
            onClick={handleSignUpClick}
            disabled={loading}
          >
            {loading ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 mr-3 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Signing Up...
              </>
            ) : (
              "Sign Up"
            )}
          </button>
        </motion.div>

        {/* Log In Link */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="mt-6 text-center"
        >
          <span className="text-gray-600">Already have an account? </span>
          <NavLink
            to="/login"
            className="text-blue-600 font-semibold hover:underline"
          >
            Log In
          </NavLink>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Signup;