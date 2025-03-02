import React from "react";

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

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Transaction History
      </h1>

      {/* Transactions Table */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                Description
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {transactions.map((transaction) => (
              <tr
                key={transaction.id}
                className="hover:bg-gray-50 transition duration-200"
              >
                <td className="px-6 py-4 text-sm text-gray-700">
                  {transaction.date}
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  {transaction.description}
                </td>
                <td
                  className={`px-6 py-4 text-sm font-semibold ${
                    transaction.amount.startsWith("+")
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {transaction.amount}
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      transaction.status === "Completed"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {transaction.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transactions;
