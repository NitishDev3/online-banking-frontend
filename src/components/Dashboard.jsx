import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { FaArrowRight, FaShieldAlt, FaChartLine } from "react-icons/fa";
import CustomerDashboard from "./CustomerDashboard";
import { loadAccountData, loadUserData } from "../store/userInfoSlice";
import axios from "axios";
import { BASE_API_URL } from "../assets/constants";
import { toast } from "react-toastify";
import { fetchAccountData, fetchProfileData } from "../utils/appLoadFetchFunctions";

const Dashboard = () => {
  const navigate = useNavigate();
  const userData = useSelector((store) => store.userInfo.userData);
  const accountData = useSelector((store) => store.userInfo.accountData);

  const dispatch = useDispatch();

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const slideInLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  const slideInRight = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const profileDataFetched = await fetchProfileData();
        if (profileDataFetched) {
          dispatch(loadUserData(profileDataFetched));
        } else {
          navigate("/");
          return;
        }

        const accountDataFetched = await fetchAccountData();
        if (accountDataFetched) {
          dispatch(loadAccountData(accountDataFetched));
        } else {
          navigate("/profile");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        toast.error("Failed to load data. Please try again.");
      }
    };

    fetchData();
  }, []);

  if (accountData) {
    return <CustomerDashboard />;
  }

  return (
    <div className="flex flex-col md:flex-row bg-white min-h-[calc(100vh-4rem)] p-8 overflow-hidden">
      {/* Left Section */}
      <motion.div
        className="w-full md:w-1/2 h-[85vh] flex flex-col justify-center items-center bg-gradient-to-r from-[#0d94fb] to-[#012652] rounded-lg shadow-2xl p-8 m-4"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <motion.img
          src="https://media.istockphoto.com/id/1401461124/photo/hand-of-businessman-using-smart-phone-with-coin-icon.jpg?s=612x612&w=0&k=20&c=937FY4moyMx2nplMSkHMSWMT4YpcHi1u7hykfYckwv0="
          alt="Banking Illustration"
          className="w-[60%] h-64 mb-6 rounded-sm"
          variants={slideInLeft}
        />
        <motion.h1
          className="text-white font-bold text-4xl md:text-5xl text-center mb-4"
          variants={slideInRight}
        >
          Banking at Your Fingertip
        </motion.h1>
        <motion.p
          className="text-gray-200 text-lg text-center mb-6"
          variants={slideInLeft}
        >
          Manage your finances seamlessly with our secure and intuitive banking
          platform.
        </motion.p>
        <motion.button
          className="mt-6 bg-white text-[#012652] font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition duration-300 flex items-center"
          onClick={() => navigate("/login")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started <FaArrowRight className="ml-2" />
        </motion.button>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="w-full md:w-1/2 h-[85vh] flex flex-col justify-center items-center bg-white rounded-lg shadow-2xl p-8 m-4"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        <motion.img
          src="https://www.axisbank.com/images/default-source/progress-with-us_new/what-is-digital-banking-security-top-11-security-measures.jpg?sfvrsn=98ae1456_2"
          alt="Security Illustration"
          className="w-[60%] h-64 mb-6"
          variants={slideInRight}
        />
        <motion.h1
          className="text-[#012652] font-bold text-4xl md:text-5xl text-center mb-4"
          variants={slideInLeft}
        >
          Secure & Reliable
        </motion.h1>
        <motion.p
          className="text-gray-600 text-lg text-center mb-6"
          variants={slideInRight}
        >
          Your security is our top priority. Enjoy peace of mind with our
          advanced encryption technology.
        </motion.p>
        <motion.button
          className="mt-6 bg-[#4CAF50] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#45a049] transition duration-300 flex items-center"
          onClick={() => navigate("/about")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Learn More <FaShieldAlt className="ml-2" />
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Dashboard;
