import React from "react";
import { IoClose } from "react-icons/io5";
const NavMobile = ({ setNavMobile }) => {
  //Mobile's side bar
  return (
    <nav className="lg:hidden bg-[#251f3f] w-full h-full">
      <IoClose
        onClick={() => setNavMobile(false)}
        className="text-3xl absolute left-4 top-6 cursor-pointer"
      />
      <ul className="flex flex-col items-center justify-center space-y-8 h-full font-secondary">
        <li className="text-lg">
          <a href="#Hero">Home</a>
        </li>
        <li className="text-lg">
          <a href="#About">About</a>
        </li>
        <li className="text-lg">
          <a href="#Feature">Features</a>
        </li>
        <li className="btn">
          <a href="#Contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavMobile;
