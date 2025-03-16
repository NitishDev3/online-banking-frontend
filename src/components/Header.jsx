import React, { useState } from "react";
import { BASE_API_URL, LOGO_IMG } from "../assets/constants";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa"; // Icons for the hamburger menu
import axios from "axios";
import { offLoadAccountData, offLoadUserData } from "../store/userInfoSlice";

const Header = () => {
  const navigate = useNavigate();
  const userData = useSelector((store) => store.userInfo.userData);
  const dispatch = useDispatch();

  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

  const handleLogOut = async () => {
    try {
      await axios.post(BASE_API_URL + "/logout", {}, { withCredentials: true });
      dispatch(offLoadUserData());
      dispatch(offLoadAccountData());
      navigate("/");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const slideInLeft = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  const slideInRight = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      className="bg-white shadow-sm sticky top-0 z-50"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
        {/* Logo Section */}
        <Link to="/">
          <motion.div className="flex items-center" variants={slideInLeft}>
            <img src={LOGO_IMG} alt="app-logo" className="w-12 sm:w-16 rounded-2xl" />
            <h1 className="-rotate-90 font-bold text-sm sm:text-lg ml-2">Hey Bank</h1>
          </motion.div>
        </Link>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none"
          >
            {isMenuOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Navigation Links (Desktop) */}
        <motion.nav
          className="hidden md:flex space-x-4 lg:space-x-6"
          variants={slideInRight}
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-sm lg:text-lg hover:text-[#0d94fb] transition duration-300 ${
                isActive ? "text-[#0d94fb] font-semibold" : ""
              }`
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/transfermoney"
            className={({ isActive }) =>
              `text-sm lg:text-lg hover:text-[#0d94fb] transition duration-300 ${
                isActive ? "text-[#0d94fb] font-semibold" : ""
              }`
            }
          >
            Transfer Money
          </NavLink>
          <NavLink
            to="/transactions"
            className={({ isActive }) =>
              `text-sm lg:text-lg hover:text-[#0d94fb] transition duration-300 ${
                isActive ? "text-[#0d94fb] font-semibold" : ""
              }`
            }
          >
            Transactions
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-sm lg:text-lg hover:text-[#0d94fb] transition duration-300 ${
                isActive ? "text-[#0d94fb] font-semibold" : ""
              }`
            }
          >
            About Us
          </NavLink>
        </motion.nav>

        {/* User Actions */}
        <motion.div
          className="hidden md:flex items-center space-x-4 lg:space-x-6"
          variants={slideInRight}
        >
          {userData && (
            <Link to="/profile">
              <FaUserCircle className="w-7 h-7 sm:w-9 sm:h-9 text-gray-700 cursor-pointer hover:text-[#0d94fb] transition duration-300" />
            </Link>
          )}

          {userData ? (
            <button
              onClick={handleLogOut}
              className="px-3 py-1.5 sm:px-4 sm:py-2 bg-red-500 text-white text-sm sm:text-base font-semibold rounded-md hover:bg-red-600 transition duration-300"
            >
              Log Out
            </button>
          ) : (
            <>
              <button
                onClick={() => navigate("/login")}
                className="px-3 py-1.5 sm:px-4 sm:py-2 bg-[#0d94fb] text-white text-sm sm:text-base font-semibold rounded-md hover:bg-[#012652] transition duration-300"
              >
                Log In
              </button>
              <button
                onClick={() => navigate("/signup")}
                className="px-3 py-1.5 sm:px-4 sm:py-2 bg-green-500 text-white text-sm sm:text-base font-semibold rounded-md hover:bg-green-600 transition duration-300"
              >
                Sign Up ➔
              </button>
            </>
          )}
        </motion.div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white shadow-lg"
          >
            <ul className="flex flex-col space-y-4 p-4">
              <li>
                <NavLink
                  to="/"
                  className="text-lg hover:text-[#0d94fb]"
                  onClick={toggleMenu}
                >
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/transfermoney"
                  className="text-lg hover:text-[#0d94fb]"
                  onClick={toggleMenu}
                >
                  Transfer Money
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/transactions"
                  className="text-lg hover:text-[#0d94fb]"
                  onClick={toggleMenu}
                >
                  Transactions
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="text-lg hover:text-[#0d94fb]"
                  onClick={toggleMenu}
                >
                  About Us
                </NavLink>
              </li>
              {userData && (
                <li>
                  <Link
                    to="/profile"
                    className="text-lg hover:text-[#0d94fb]"
                    onClick={toggleMenu}
                  >
                    Profile
                  </Link>
                </li>
              )}
              <li>
                <button
                  onClick={userData ? handleLogOut : () => navigate("/login")}
                  className={`w-full text-left text-lg ${
                    userData ? "text-red-500" : "text-[#0d94fb]"
                  } hover:text-[#012652]`}
                >
                  {userData ? "Log Out" : "Log In"}
                </button>
              </li>
              {!userData && (
                <li>
                  <button
                    onClick={() => navigate("/signup")}
                    className="w-full text-left text-lg text-green-500 hover:text-green-600"
                  >
                    Sign Up ➔
                  </button>
                </li>
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Header;