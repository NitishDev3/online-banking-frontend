import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-4rem)] bg-gray-100">
      {/* Spinning Circle */}
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default Loading;