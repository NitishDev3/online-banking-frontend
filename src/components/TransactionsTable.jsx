import React from "react";

const TransactionsTable = ({ transactions }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
              Account Holder
            </th>
            <th className="px-4 py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
              Amount
            </th>
            <th className="px-4 py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
              Type
            </th>
            <th className="px-4 py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-4 py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
              Date & Time
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {transactions.map((transaction) => (
            <tr
              key={transaction._id}
              className="hover:bg-gray-50 transition-colors"
            >
              {/* Account Holder */}
              <td className="px-4 py-3 text-xs sm:text-sm text-gray-700 whitespace-nowrap">
                {transaction.type === "credit"
                  ? transaction.fromAccountName
                  : transaction.toAccountName}
              </td>

              {/* Amount */}
              <td
                className={`px-4 py-3 text-xs sm:text-sm font-medium ${
                  transaction.type === "debit"
                    ? "text-red-600"
                    : "text-green-600"
                }`}
              >
                {transaction.type === "debit" ? "-" : "+"}${transaction.amount}
              </td>

              {/* Type */}
              <td className="px-4 py-3 text-xs sm:text-sm text-gray-700 capitalize whitespace-nowrap">
                {transaction.type}
              </td>

              {/* Status */}
              <td
                className={`px-4 py-3 text-xs sm:text-sm font-medium ${
                  transaction.status === "success"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {transaction.status || "Completed"}
              </td>

              {/* Date & Time */}
              <td className="px-4 py-3 text-xs sm:text-sm text-gray-700 whitespace-nowrap">
                {new Date(transaction.createdAt).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsTable;