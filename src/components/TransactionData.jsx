import React from "react";

const TransactionData = ({ transaction }) => {
  return (
    <>
      <tr
        key={transaction.id}
        className="hover:bg-gray-50 transition duration-200"
      >
        <td className="px-6 py-4 text-sm text-gray-700">{transaction.date}</td>
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
    </>
  );
};

export default TransactionData;
