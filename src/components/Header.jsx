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

  return (
    <div className="bg-white shadow-sm sticky top-0 z-50">
      <div className="w-[75vw] h-28 mx-auto flex justify-between items-center text-gray-700">
        {/* Logo Section */}
        <Link to="/">
          <div className="p-2 flex items-center">
            <img src={LOGO_IMG} alt="app-logo" className="w-16 rounded-2xl" />
            <h1 className="-rotate-90 font-bold text-lg">Hey Bank</h1>
          </div>
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
        <nav className="hidden md:flex space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-lg hover:text-blue-600 transition duration-300 ${
                isActive ? "text-blue-600 font-semibold" : ""
              }`
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/transfermoney"
            className={({ isActive }) =>
              `text-lg hover:text-blue-600 transition duration-300 ${
                isActive ? "text-blue-600 font-semibold" : ""
              }`
            }
          >
            Transfer Money
          </NavLink>
          <NavLink
            to="/transactions"
            className={({ isActive }) =>
              `text-lg hover:text-blue-600 transition duration-300 ${
                isActive ? "text-blue-600 font-semibold" : ""
              }`
            }
          >
            Transactions
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-lg hover:text-blue-600 transition duration-300 ${
                isActive ? "text-blue-600 font-semibold" : ""
              }`
            }
          >
            About Us
          </NavLink>
        </nav>

        {/* User Actions */}
        <div className="hidden md:flex items-center space-x-6">
          {userData && (
            <div className="relative">
              <FaUserCircle
                className="w-9 h-9 text-gray-700 cursor-pointer hover:text-blue-600 transition duration-300"
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
                      <li className="px-4 py-2 hover:bg-gray-100">Profile</li>
                      <li className="px-4 py-2 hover:bg-gray-100">Settings</li>
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
                : "bg-blue-500 text-white hover:bg-blue-600"
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
        </div>
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
                  className="text-lg hover:text-blue-600"
                  onClick={toggleMenu}
                >
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/transfermoney"
                  className="text-lg hover:text-blue-600"
                  onClick={toggleMenu}
                >
                  Transfer Money
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/transactions"
                  className="text-lg hover:text-blue-600"
                  onClick={toggleMenu}
                >
                  Transactions
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="text-lg hover:text-blue-600"
                  onClick={toggleMenu}
                >
                  About Us
                </NavLink>
              </li>
              {isLoggedIn && (
                <li>
                  <button
                    onClick={toggleProfileDropdown}
                    className="text-lg hover:text-blue-600"
                  >
                    Profile
                  </button>
                </li>
              )}
              <li>
                <button
                  onClick={handleLogInClick}
                  className={`w-full text-left text-lg ${
                    userData ? "text-red-500" : "text-blue-500"
                  } hover:text-blue-600`}
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
    </div>
  );
};

export default Header;
