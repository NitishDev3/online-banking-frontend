import React from "react";
import TransactionData from "./TransactionData";

const TransactionsTable = ({transactions}) => {
  return (
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
            <TransactionData transaction={transaction} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsTable;
