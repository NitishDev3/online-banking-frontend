import React, { useState } from "react";

const TransferMoney = () => {
  const [recipientAccount, setRecipientAccount] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  const handleTransfer = (e) => {
    e.preventDefault();
    // Simulate a transfer (replace with actual API call)
    if (recipientAccount && amount) {
      setMessage(
        `Successfully transferred $${amount} to account ${recipientAccount}`
      );
      setRecipientAccount("");
      setAmount("");
    } else {
      setMessage("Please fill in all fields.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-4">
      {/* Transfer Money Card */}
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Transfer Money
        </h1>

        {/* Recipient Account Field */}
        <div className="mb-6">
          <label
            htmlFor="recipientAccount"
            className="block text-gray-700 font-semibold mb-2"
          >
            Recipient Account Number
          </label>
          <input
            type="text"
            id="recipientAccount"
            placeholder="Enter recipient's account number"
            value={recipientAccount}
            onChange={(e) => setRecipientAccount(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Amount Field */}
        <div className="mb-6">
          <label
            htmlFor="amount"
            className="block text-gray-700 font-semibold mb-2"
          >
            Amount
          </label>
          <input
            type="number"
            id="amount"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Recipient Account Field */}
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-gray-700 font-semibold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            value=""
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Transfer Button */}
        <button
          onClick={handleTransfer}
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Transfer
        </button>

        {/* Message */}
        {message && (
          <div className="mt-6 text-center">
            <p
              className={`text-sm ${
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
