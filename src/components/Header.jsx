import React from "react";
import { LOGO_IMG, PROFILE_LOGO } from "../assets/constants";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLogInTrue } from "../store/userInfoSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((store) => store.userInfo.isLoggedIn);

  const handleLogInClick = () => {
    dispatch(setLogInTrue(!isLoggedIn));
    !isLoggedIn ? navigate("/login") : navigate("/");
  };

  return (
    <div className="bg-white shadow-sm">
      <div className="w-[75vw] h-28 mx-auto flex justify-between items-center text-gray-700 sha">
        <div className="p-2 flex">
          <img src={LOGO_IMG} alt="app-logo" className="w-16 rounded-2xl" />
          <h1 className="-rotate-90 font-bold text-lg">Hey Bank</h1>
        </div>
        <div>
          <ul className="flex">
            <li className="text-lg mx-4">
              <NavLink to={"/"}>Dashboard</NavLink>
            </li>
            <li className="text-lg mx-4">
              <NavLink to={"/transfermoney"}>Transfer Money</NavLink>
            </li>
            <li className="text-lg mx-4">
              <NavLink to={"/transactions"}>Transantions</NavLink>
            </li>
            <li className="text-lg mx-4">
              <NavLink to={"/about"}>About Us</NavLink>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex items-center">
            {!isLoggedIn && (
              <li className="mx-4">
                <img src={PROFILE_LOGO} alt="profile-logo" className="w-9" />
              </li>
            )}
            <li className="">
              <button
                className={` px-2 py-1 ${
                  !isLoggedIn ? "" : "bg-red-400"
                } border-2 border-blue-500 rounded-md text-blue-600 font-semibold`}
                onClick={handleLogInClick}
              >
                {isLoggedIn ? "Log Out" : "Log In"}
              </button>
            </li>
            {!isLoggedIn && (
              <li className="mx-4">
                <button className="bg-blue-600 text-white font-semibold px-2 py-1 rounded-md border-2 border-blue-600">
                  Sign Up ➔
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
