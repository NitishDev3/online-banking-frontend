import React from "react";

const TransactionsTable = ({ transactions }) => {
  return (
    <table className="w-full">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 uppercase">
            Account Holder
          </th>
          <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 uppercase">
            Amount
          </th>
          <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 uppercase">
            Type
          </th>
          <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 uppercase">
            Status
          </th>
          <th className="px-4 py-2 text-left text-sm font-medium text-gray-500 uppercase">
            Date & Time
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {transactions.map((transaction) => (
          <tr key={transaction._id} className="hover:bg-gray-50 transition-colors">
            <td className="px-4 py-3 text-sm text-gray-700">
              {transaction.type === "credit"
                ? transaction.fromAccountName
                : transaction.toAccountName}
            </td>
            <td
              className={`px-4 py-3 text-sm font-medium ${
                transaction.type === "debit" ? "text-red-600" : "text-green-600"
              }`}
            >
              {transaction.type === "debit" ? "-" : "+"}${transaction.amount}
            </td>
            <td className="px-4 py-3 text-sm text-gray-700 capitalize">
              {transaction.type}
            </td>
            <td
              className={`px-4 py-3 text-sm font-medium ${
                transaction.status === "success"
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {transaction.status || "Completed"}
            </td>
            <td className="px-4 py-3 text-sm text-gray-700">
              {new Date(transaction.createdAt).toLocaleString()}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionsTable;