import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { motion } from "framer-motion";
import { BASE_API_URL } from "../assets/constants";

const CustomerDashboard = () => {
  const userData = useSelector((store) => store.userInfo.userData);
  const accountDataFromStore = useSelector((store) => store.userInfo.accountData);
  const [accountData, setAccountData] = useState(accountDataFromStore || { accountBalance: 0, accountNumber: '', accountId: {} });

  const [depositAmount, setDepositAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!accountDataFromStore) {
      fetchAccountData();
    }
  }, [accountDataFromStore]);

  const fetchAccountData = async () => {
    try {
      const response = await axios.get(BASE_API_URL + "/account", {
        withCredentials: true,
      });
      setAccountData(response.data);
    } catch (err) {
      console.error("Error fetching account data:", err);
      setError("Failed to load account data.");
      setAccountData({ accountBalance: 0, accountNumber: '', accountId: {} });
    }
  };

  const handleDeposit = async () => {
    const amount = parseFloat(depositAmount);
    if (!amount || amount <= 0 || amount > 1000000) {
      setError("Please enter a valid amount between $0 and $1,000,000.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        BASE_API_URL + "/deposit",
        { amount },
        { withCredentials: true }
      );

      setAccountData((prevData) => ({
        ...prevData,
        accountBalance: prevData.accountBalance + amount,
      }));

      setDepositAmount("");
      alert("Deposit successful!");
    } catch (error) {
      console.error("Error depositing money:", error);
      setError(
        error.response?.data?.message || "Failed to deposit money. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const { accountBalance, accountNumber, accountId } = accountData;

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
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h2 className="text-xl font-semibold text-gray-800">Account Balance</h2>
            <p className="text-gray-600 mt-2">${accountBalance.toFixed(2)}</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h2 className="text-xl font-semibold text-gray-800">Account Number</h2>
            <p className="text-gray-600 mt-2">{accountNumber}</p>
            <p>{accountId.firstName || 'N/A'}</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white p-6 rounded-lg shadow-lg"
          >
            <h2 className="text-xl font-semibold text-gray-800">Deposit Money</h2>
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
          {loading ? "Loading account data..." : "No account data available."}
        </motion.div>
      )}
    </div>
  );
};

export default CustomerDashboard;