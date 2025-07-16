import React from "react";
import Nav from "../components/Nav";
import { HiMenu } from "react-icons/hi";
import Logo from '../assets/img/splash.png'
interface HeaderProps {
  setNavMobile: (value: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ setNavMobile }) => {
  return (
    <header className="py-6">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <a href="#">
            <img
              src={Logo}
              alt="Haptech Logo"
              className="h-20 w-auto object-contain"
            />
          </a>
          <Nav />
          {/* Nav mobile btn */}
          <HiMenu
            onClick={() => setNavMobile(true)}
            className="lg:hidden text-3xl text-white cursor-pointer"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
