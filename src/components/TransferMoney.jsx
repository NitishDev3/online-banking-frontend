import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const TransferMoney = () => {
  const userData = useSelector((store) => store.userInfo.userData);

  const [recipientAccount, setRecipientAccount] = useState("");
  const [amount, setAmount] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleTransfer = (e) => {
    e.preventDefault();
    // Simulate a transfer (replace with actual API call)
    if (recipientAccount && amount && password) {
      setMessage(
        `Successfully transferred $${amount} to account ${recipientAccount}`
      );
      setRecipientAccount("");
      setAmount("");
      setPassword("");
    } else {
      setMessage("Please fill in all fields.");
    }
  };

  useEffect(() => {
    if (!userData) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-r from-blue-50 to-purple-50 flex flex-col justify-center items-center p-4">
      {/* Transfer Money Card */}
      <div className="w-full max-w-lg bg-white rounded-xl shadow-2xl p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Transfer Money
        </h1>

        {/* Recipient Account Field */}
        <div className="mb-6">
          <label
            htmlFor="recipientAccount"
            className="block text-gray-700 font-medium mb-2"
          >
            Recipient Account Number
          </label>
          <input
            type="text"
            id="recipientAccount"
            placeholder="Enter recipient's account number"
            value={recipientAccount}
            onChange={(e) => setRecipientAccount(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
          />
        </div>

        {/* Amount Field */}
        <div className="mb-6">
          <label
            htmlFor="amount"
            className="block text-gray-700 font-medium mb-2"
          >
            Amount
          </label>
          <input
            type="number"
            id="amount"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
          />
        </div>

        {/* Password Field */}
        <div className="mb-8">
          <label
            htmlFor="password"
            className="block text-gray-700 font-medium mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300"
          />
        </div>

        {/* Transfer Button */}
        <button
          onClick={handleTransfer}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition duration-300 shadow-lg"
        >
          Transfer
        </button>

        {/* Message */}
        {message && (
          <div className="mt-6 text-center">
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