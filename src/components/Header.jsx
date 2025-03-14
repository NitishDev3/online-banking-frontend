import React, { useState } from "react";
import { LOGO_IMG, PROFILE_LOGO } from "../assets/constants";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa"; // Icons for the hamburger menu
import { offLoadUserData } from "../store/userInfoSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector((store) => store.userInfo.userData);

  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false); // State for profile dropdown

  const handleLogInClick = () => {
    if (userData) {
      dispatch(offLoadUserData());
      navigate("/");
    } else {
      navigate("/login");
    }
  };

  const handleSignUpClicked = () => {
    navigate("/signup");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
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
      <div className="w-[75vw] h-28 mx-auto flex justify-between items-center text-gray-700">
        {/* Logo Section */}
        <Link to="/">
          <motion.div className="p-2 flex items-center" variants={slideInLeft}>
            <img src={LOGO_IMG} alt="app-logo" className="w-16 rounded-2xl" />
            <h1 className="-rotate-90 font-bold text-lg">Hey Bank</h1>
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
          className="hidden md:flex space-x-6"
          variants={slideInRight}
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-lg hover:text-[#0d94fb] transition duration-300 ${
                isActive ? "text-[#0d94fb] font-semibold" : ""
              }`
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/transfermoney"
            className={({ isActive }) =>
              `text-lg hover:text-[#0d94fb] transition duration-300 ${
                isActive ? "text-[#0d94fb] font-semibold" : ""
              }`
            }
          >
            Transfer Money
          </NavLink>
          <NavLink
            to="/transactions"
            className={({ isActive }) =>
              `text-lg hover:text-[#0d94fb] transition duration-300 ${
                isActive ? "text-[#0d94fb] font-semibold" : ""
              }`
            }
          >
            Transactions
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-lg hover:text-[#0d94fb] transition duration-300 ${
                isActive ? "text-[#0d94fb] font-semibold" : ""
              }`
            }
          >
            About Us
          </NavLink>
        </motion.nav>

        {/* User Actions */}
        <motion.div
          className="hidden md:flex items-center space-x-6"
          variants={slideInRight}
        >
          {userData && (
            <div className="relative">
              <FaUserCircle
                className="w-9 h-9 text-gray-700 cursor-pointer hover:text-[#0d94fb] transition duration-300"
                onClick={toggleProfileDropdown}
              />
              <AnimatePresence>
                {isProfileDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg"
                  >
                    <ul>
                      <Link to={"/profile"}>
                        <li className="px-4 py-2 hover:bg-gray-100">Profile</li>
                      </Link>
                      <Link to={"/settings"}>
                        <li className="px-4 py-2 hover:bg-gray-100">
                          Settings
                        </li>
                      </Link>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
          <button
            onClick={handleLogInClick}
            className={`px-4 py-2 font-semibold rounded-md transition duration-300 ${
              userData
                ? "bg-red-500 text-white hover:bg-red-600"
                : "bg-[#0d94fb] text-white hover:bg-[#012652]"
            }`}
          >
            {!userData ? "Log In" : "Log Out"}
          </button>
          {!userData && (
            <button
              onClick={handleSignUpClicked}
              className="px-4 py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition duration-300"
            >
              Sign Up ➔
            </button>
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
                  <button
                    onClick={toggleProfileDropdown}
                    className="text-lg hover:text-[#0d94fb]"
                  >
                    Profile
                  </button>
                </li>
              )}
              <li>
                <button
                  onClick={handleLogInClick}
                  className={`w-full text-left text-lg ${
                    userData ? "text-red-500" : "text-[#0d94fb]"
                  } hover:text-[#012652]`}
                >
                  {!userData ? "Log In" : "Log Out"}
                </button>
              </li>
              {!userData && (
                <li>
                  <button
                    onClick={handleSignUpClicked}
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
