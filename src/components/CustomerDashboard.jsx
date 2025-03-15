import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { motion } from "framer-motion";
import { BASE_API_URL } from "../assets/constants";

const CustomerDashboard = () => {
  const userData = useSelector((store) => store.userInfo.userData);
  const [accountData, setAccountData] = useState(null);
  const [depositAmount, setDepositAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch account data on component mount
  useEffect(() => {
    const fetchAccountData = async () => {
      try {
        const response = await axios.get(BASE_API_URL + "/account", {
          withCredentials: true,
        });
        setAccountData(response.data.data);
      } catch (error) {
        console.error("Error fetching account data:", error);
        setError("Failed to fetch account data.");
      }
    };

    fetchAccountData();
  }, []);

  // Handle deposit
  const handleDeposit = async () => {
    if (!depositAmount || isNaN(depositAmount) || depositAmount <= 0) {
      setError("Please enter a valid amount.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        BASE_API_URL + "/deposit",
        {
          amount: parseFloat(depositAmount),
        },
        { withCredentials: true }
      );

      // Update account balance in the UI
      setAccountData((prevData) => ({
        ...prevData,
        accountBalance: prevData.accountBalance + parseFloat(depositAmount),
      }));

      setDepositAmount("");
      alert("Deposit successful!");
    } catch (error) {
      console.error("Error depositing money:", error);
      setError("Failed to deposit money.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 min-h-[calc(100vh-4rem)] bg-gray-100">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-gray-800 mb-6"
      >
        Welcome, {userData.name}
      </motion.h1>

      {error && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6"
        >
          {error}
        </motion.div>
      )}

      {accountData ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {/* Account Balance Card */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h2 className="text-xl font-semibold text-gray-800">
              Account Balance
            </h2>
            <p className="text-gray-600 mt-2">
              ${accountData.accountBalance.toFixed(2)}
            </p>
          </motion.div>

          {/* Account Number Card */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h2 className="text-xl font-semibold text-gray-800">
              Account Number
            </h2>
            <p className="text-gray-600 mt-2">{accountData.accountNumber}</p>
            <p>{accountData.accountId.firstName}</p>
          </motion.div>

          {/* Deposit Money Card */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h2 className="text-xl font-semibold text-gray-800">
              Deposit Money
            </h2>
            <div className="mt-4">
              <input
                type="number"
                value={depositAmount}
                onChange={(e) => setDepositAmount(e.target.value)}
                placeholder="Enter amount"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleDeposit}
                disabled={loading}
                className="w-full mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
              >
                {loading ? "Processing..." : "Deposit"}
              </button>
            </div>
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-gray-600"
        >
          Loading account data...
        </motion.div>
      )}
    </div>
  );
};

export default CustomerDashboard;
