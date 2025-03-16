import React from "react";

const About = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-100 flex flex-col items-center py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      {/* Main Content Container */}
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6 sm:p-8">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 sm:mb-6 text-center">
          About Hey Bank
        </h1>

        {/* Introduction */}
        <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">
          Welcome to <strong className="text-blue-600">Hey Bank</strong>, your
          trusted partner in financial services. At Hey Bank, we are committed to
          providing you with a seamless and secure banking experience that fits
          your lifestyle. Whether you're managing your daily expenses, saving for
          the future, or planning for big life events, we've got you covered.
        </p>

        {/* Our Services */}
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mt-6 sm:mt-8 mb-3 sm:mb-4">
          Our Services
        </h2>
        <ul className="list-disc list-inside text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">
          <li className="mb-2">
            <strong className="text-blue-600">Personal Banking:</strong> Manage
            your accounts, transfer funds, and pay bills with ease.
          </li>
          <li className="mb-2">
            <strong className="text-blue-600">Savings & Investments:</strong> Grow
            your wealth with our range of savings accounts and investment
            options.
          </li>
          <li className="mb-2">
            <strong className="text-blue-600">Loans & Mortgages:</strong> Get
            competitive rates on personal loans, home loans, and more.
          </li>
          <li className="mb-2">
            <strong className="text-blue-600">Credit Cards:</strong> Enjoy
            exclusive rewards and benefits with our credit card offerings.
          </li>
          <li className="mb-2">
            <strong className="text-blue-600">Mobile & Online Banking:</strong>{" "}
            Access your accounts anytime, anywhere with our user-friendly mobile
            app and online platform.
          </li>
        </ul>

        {/* Why Choose Hey Bank? */}
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mt-6 sm:mt-8 mb-3 sm:mb-4">
          Why Choose Hey Bank?
        </h2>
        <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">
          At Hey Bank, we believe that banking should be simple, transparent, and
          accessible to everyone. Our easy-to-use platforms, combined with
          top-notch customer service, ensure that you have everything you need to
          manage your finances effectively. We are constantly innovating to bring
          you the latest in banking technology, making your financial journey
          smoother than ever.
        </p>

        {/* Our Mission */}
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mt-6 sm:mt-8 mb-3 sm:mb-4">
          Our Mission
        </h2>
        <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">
          Our mission is to empower our customers by providing them with the
          tools and resources they need to achieve their financial goals. We
          strive to build long-lasting relationships based on trust, integrity,
          and exceptional service.
        </p>

        {/* Closing Message */}
        <p className="text-base sm:text-lg text-gray-700">
          Thank you for choosing Hey Bank. We look forward to serving you and
          helping you achieve your financial dreams.
        </p>
      </div>
    </div>
  );
};

export default About;