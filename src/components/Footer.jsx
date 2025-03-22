import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center px-4">
        <div className="flex flex-col md:flex-row">
          <a
            href="#"
            className="mr-4 mb-2 md:mb-0 duration-300 hover:text-red-400 hover:scale-110"
          >
            Home
          </a>
          <a
            href="#"
            className="mr-4 mb-2 md:mb-0 duration-300 hover:text-red-400 hover:scale-110"
          >
            About
          </a>
          <a
            href="#"
            className="mr-4 mb-2   md:mb-0 duration-300 hover:text-red-400 hover:scale-110"
          >
            Blog
          </a>
          <a
            href="#"
            className="mr-4 mb-2 md:mb-0 duration-300 hover:text-red-400 hover:scale-110"
          >
            Event
          </a>
          <a
            href="#"
            className="mr-4 mb-2 md:mb-0 duration-300 hover:text-red-400 hover:scale-110"
          >
            Research
          </a>
          <a
            href="#"
            className="mr-4 mb-2 md:mb-0 duration-300 hover:text-red-400 hover:scale-110"
          >
            Contact
          </a>
        </div>
        <div>
          <p className="mb-2">Follow us on:</p>
          <div className="flex">
            <a
              id="insta"
              href="https://www.instagram.com/dice_cuiet/"
              target="_blank"
              className="mr-4"
            >
              <FaInstagram className="text-white text-3xl duration-300 hover:text-pink-500 hover:scale-125" />
            </a>
            <a
              id="linkedin"
              target="_blank"
              href="https://www.linkedin.com/in/dice-chitkara-university-12481b266/"
            >
              <FaLinkedin className="text-white text-3xl duration-300 hover:text-blue-400 hover:scale-125" />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-4">
        <p className="text-sm">&copy; 2024 DICE CUIET. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
