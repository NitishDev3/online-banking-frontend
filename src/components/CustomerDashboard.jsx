import React from "react";
import { useSelector } from "react-redux";

const CustomerDashboard = () => {
  const userData = useSelector((store)=> store.userInfo.userData);

  return (
    <div className="p-8 min-h-[calc(100vh-4rem)]">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Welcome {userData.name}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Example Cards */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800">
            Account Balance
          </h2>
          <p className="text-gray-600 mt-2">$5,000.00</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800">
            Recent Transactions
          </h2>
          <p className="text-gray-600 mt-2">View your recent transactions</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800">
            Transfer Money
          </h2>
          <p className="text-gray-600 mt-2">Send money to another account</p>
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;
