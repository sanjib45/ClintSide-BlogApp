import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* About Section */}
          <div className="w-full md:w-1/4 mb-6">
            <h4 className="text-lg font-semibold mb-4">About Us</h4>
            <p className="text-gray-400">
              We are dedicated to providing the best service possible. Our team
              is committed to ensuring your satisfaction with every interaction.
            </p>
          </div>

          {/* Links Section */}
          <div className="w-full md:w-1/4 mb-6">
            <h4 className="text-lg font-semibold mb-4">Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-gray-400 transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gray-400 transition duration-300">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gray-400 transition duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gray-400 transition duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="w-full md:w-1/4 mb-6">
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-gray-400">Kolkata, Basdroni 700047</p>
            <p className="text-gray-400">Phone: 7076661578</p>
            <p className="text-gray-400">Email: santrasanjib199@gmail.com</p>
          </div>

          {/* Social Section */}
          <div className="w-full md:w-1/4 mb-6 flex flex-col items-start md:items-end">
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition duration-300"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-sky-400 transition duration-300"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 transition duration-300"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition duration-300"
              >
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center pt-6 border-t border-gray-700">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} All rights reserved by <span className="font-semibold text-white">Sanjib Santra</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
