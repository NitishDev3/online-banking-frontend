import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_API_URL } from "../assets/constants";

const TransferMoney = () => {
  const userData = useSelector((store) => store.userInfo.userData);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    recipientAccount: "",
    amount: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Redirect to login if user is not authenticated
  if (!userData) {
    navigate("/login");
    return null;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTransfer = async (e) => {
    e.preventDefault();

    // Validate inputs
    const { recipientAccount, amount, password } = formData;
    if (!recipientAccount || !amount || !password) {
      setMessage("Please fill in all fields.");
      return;
    }

    if (amount <= 0) {
      setMessage("Amount must be greater than 0.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      // Make POST request to transfer API
      const response = await axios.post(
        BASE_API_URL + "/transfer",
        {
          receiverAccountNumber: recipientAccount,
          amount: parseFloat(amount),
          password,
        },
        { withCredentials: true } // Include credentials (cookies)
      );

      // Handle success
      setMessage(
        `Successfully transferred $${amount} to account ${recipientAccount}`
      );
      setFormData({ recipientAccount: "", amount: "", password: "" }); // Clear form
    } catch (error) {
      // Handle errors
      const errorMessage =
        error.response?.data?.message || "An error occurred. Please try again.";
      setMessage(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-r from-blue-50 to-purple-50 flex flex-col justify-center items-center p-4">
      {/* Transfer Money Card */}
      <div className="w-full max-w-md md:max-w-lg bg-white rounded-xl shadow-2xl p-6 md:p-8 transform transition-all hover:scale-105">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 md:mb-8 text-center">
          Transfer Money
        </h1>

        {/* Recipient Account Field */}
        <div className="mb-4 md:mb-6">
          <label
            htmlFor="recipientAccount"
            className="block text-gray-700 font-medium mb-2"
          >
            Recipient Account Number
          </label>
          <input
            type="text"
            id="recipientAccount"
            name="recipientAccount"
            placeholder="Enter recipient's account number"
            value={formData.recipientAccount}
            onChange={handleChange}
            className="w-full px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
          />
        </div>

        {/* Amount Field */}
        <div className="mb-4 md:mb-6">
          <label
            htmlFor="amount"
            className="block text-gray-700 font-medium mb-2"
          >
            Amount
          </label>
          <input
            type="number"
            id="amount"
            name="amount"
            placeholder="Enter amount"
            value={formData.amount}
            onChange={handleChange}
            className="w-full px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
          />
        </div>

        {/* Password Field */}
        <div className="mb-6 md:mb-8">
          <label
            htmlFor="password"
            className="block text-gray-700 font-medium mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
          />
        </div>

        {/* Transfer Button */}
        <button
          onClick={handleTransfer}
          disabled={loading}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-2 md:py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <span className="animate-pulse">Processing...</span>
            </>
          ) : (
            "Transfer"
          )}
        </button>

        {/* Message */}
        {message && (
          <div className="mt-4 md:mt-6 text-center">
            <p
              className={`text-sm font-medium ${
                message.includes("Successfully")
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {message}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TransferMoney;