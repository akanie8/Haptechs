import React from "react";
import { FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-gray-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-gray-400 flex gap-2 text-sm">
        <p className="cursor-pointer hover:underline">Terms & Conditions</p>
        <span>|</span>
        <p className="cursor-pointer hover:underline">Privacy Policy</p>
      </div>

      <div className="flex gap-5 text-white text-xl">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#b936f5] transition-colors"
        >
          <FaGithub />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#1DA1F2] transition-colors"
        >
          <FaTwitter />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#E1306C] transition-colors"
        >
          <FaInstagram />
        </a>
      </div>

      <p className="text-gray-400 text-sm text-center w-full lg:w-auto">
        © 2025 Shaun Zitha. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
