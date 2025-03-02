import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import TransactionsTable from "./TransactionsTable";

const Transactions = () => {
  // Sample transaction data
  const transactions = [
    {
      id: 1,
      date: "2023-10-01",
      description: "Groceries",
      amount: "-$50.00",
      status: "Completed",
    },
    {
      id: 2,
      date: "2023-10-02",
      description: "Salary",
      amount: "+$2,000.00",
      status: "Completed",
    },
    {
      id: 3,
      date: "2023-10-03",
      description: "Online Shopping",
      amount: "-$120.00",
      status: "Pending",
    },
    {
      id: 4,
      date: "2023-10-04",
      description: "Utility Bill",
      amount: "-$80.00",
      status: "Completed",
    },
  ];

  const userData = useSelector((store) => store.userInfo.userData);
  const navigate = useNavigate()


  useEffect(() => {
      if (userData) {
        return;
      } else navigate("/login");
    }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Transaction History
      </h1>

      {/* Transactions Table */}
      <TransactionsTable transactions={transactions} />
    </div>
  );
};

export default Transactions;
