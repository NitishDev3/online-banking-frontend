import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { BASE_API_URL } from "../assets/constants";
import { fetchProfileData } from "../utils/appLoadFetchFunctions";
import Loading from "../exceptionComp/LoadingPage";
import { loadAccountData, loadUserData } from "../store/userInfoSlice";

const Profile = () => {
  const profileData = useSelector((store) => store.userInfo.userData);
  const accountExists = useSelector((store) => store.userInfo.accountData !== null);
  const dispatch = useDispatch();

  // State to store form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    city: "",
    gender: "",
    profilePhotoUrl: "",
  });

  // Initialize form data when profileData is available
  useEffect(() => {
    if (profileData) {
      setFormData({
        firstName: profileData.firstName || "",
        lastName: profileData.lastName || "",
        age: profileData.age || "",
        city: profileData.city || "",
        gender: profileData.gender || "",
        profilePhotoUrl: profileData.profilePhotoUrl || "",
      });
    }
  }, [profileData]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(
        BASE_API_URL + "/profile/update",
        formData,
        { withCredentials: true }
      );
      dispatch(loadUserData(response.data.data));
      toast.success("Profile updated successfully!", {
        position: "top-center",
        autoClose: 3000,
      });
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Failed to update profile. Please try again.";
      toast.error(errorMessage, {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  // Handle account creation
  const handleCreateAccount = async () => {
    // Check if profile is complete (all fields except profilePhotoUrl are mandatory)
    const { firstName, lastName, age, city, gender } = formData;
    if (!firstName || !lastName || !age || !city || !gender) {
      toast.error("Please complete your profile and create an account. All fields except photo URL are mandatory.", {
        position: "top-center",
        autoClose: 5000,
      });
      return;
    }

    try {
      const response = await axios.post(
        BASE_API_URL + "/account/create",
        {},
        { withCredentials: true }
      );
      dispatch(loadAccountData(response.data.data));
      toast.success("Account created successfully!", {
        position: "top-center",
        autoClose: 3000,
      });
    } catch (error) {
      toast.error("Failed to create account. Please try again.", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  // Fetch profile data if not available
  useEffect(() => {
    const fetchAndLoadProfileData = async () => {
      if (!profileData) {
        const profileDataFetched = await fetchProfileData();
        dispatch(loadUserData(profileDataFetched));
      }
    };
    fetchAndLoadProfileData();
  }, [profileData, dispatch]);

  if (!profileData) {
    return <Loading />;
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-r from-blue-50 to-purple-50 flex flex-col justify-center items-center p-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-white rounded-xl shadow-2xl p-6 md:p-8"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Profile
        </h1>

        <form onSubmit={handleSubmit}>
          {/* First Name */}
          <InputField
            label="First Name"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />

          {/* Last Name */}
          <InputField
            label="Last Name"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />

          {/* Age */}
          <InputField
            label="Age"
            id="age"
            name="age"
            type="number"
            value={formData.age}
            onChange={handleChange}
            required
          />

          {/* City */}
          <InputField
            label="City"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />

          {/* Gender */}
          <div className="mb-4">
            <label
              htmlFor="gender"
              className="block text-gray-700 font-medium mb-2"
            >
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Profile Photo URL */}
          <InputField
            label="Profile Photo URL"
            id="profilePhotoUrl"
            name="profilePhotoUrl"
            type="url"
            value={formData.profilePhotoUrl}
            onChange={handleChange}
            placeholder="Enter photo URL"
          />

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition duration-300 mb-4"
          >
            Save Changes
          </motion.button>
        </form>

        {/* Create Account Button */}
        {!accountExists && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="button"
            onClick={handleCreateAccount}
            className="w-full bg-green-500 text-white font-semibold py-2 rounded-lg hover:bg-green-600 transition duration-300"
          >
            Create Account
          </motion.button>
        )}
      </motion.div>
    </div>
  );
};

// Reusable InputField Component
const InputField = ({ label, id, name, type = "text", value, onChange, placeholder = "", required = false }) => (
  <div className="mb-4">
    <label htmlFor={id} className="block text-gray-700 font-medium mb-2">
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      required={required}
    />
  </div>
);

export default Profile;