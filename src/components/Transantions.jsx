import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import TransactionsTable from "./TransactionsTable";

const Transactions = () => {
  const userData = useSelector((store) => store.userInfo.userData);
  const navigate = useNavigate();
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch transactions from the API
  useEffect(() => {
    if (!userData) {
      navigate("/login");
      return;
    }

    const fetchTransactions = async () => {
      try {
        const response = await axios.get(BASE_API_URL + "/transactions", {
          withCredentials: true, // Include credentials (cookies)
        });
        setTransactions(response.data.data);
      } catch (error) {
        console.error("Error fetching transactions:", error);
        setError("Failed to fetch transactions. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, [userData, navigate]);

  if (!userData) {
    return null; // Redirect to login if user is not authenticated
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6">
        Transaction History
      </h1>

      {/* Loading State */}
      {loading && (
        <div className="text-center text-gray-600">Loading transactions...</div>
      )}

      {/* Error Message */}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      {/* Transactions Table */}
      {!loading && !error && (
        <div className="bg-white rounded-lg shadow-lg overflow-x-auto">
          <TransactionsTable transactions={transactions} />
        </div>
      )}
    </div>
  );
};

export default Transactions;
