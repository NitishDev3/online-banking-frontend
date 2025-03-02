import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa"; // Social media icons
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">About Hey Bank</h3>
            <p className="text-gray-400">
              Hey Bank is your trusted partner in financial services, offering
              seamless and secure banking solutions tailored to your needs.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="text-gray-400">
              <li className="mb-2">
                <Link to="/" className="hover:text-blue-500 transition duration-300">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="hover:text-blue-500 transition duration-300">
                  About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/contact" className="hover:text-blue-500 transition duration-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information Section */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="text-gray-400">
              <li className="mb-2">Email: support@heybank.com</li>
              <li className="mb-2">Phone: +1 (123) 456-7890</li>
              <li className="mb-2">Address: 123 Bank Street, Financial City</li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition duration-300"
              >
                <FaFacebook className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition duration-300"
              >
                <FaTwitter className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition duration-300"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition duration-300"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="border-t border-gray-700 pt-8 mt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Hey Bank. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;