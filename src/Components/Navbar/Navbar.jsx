import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "../Dropdown";

const Navbar = () => {
  const [isIndustryDropdownVisible, setIsIndustryDropdownVisible] =
    useState(false);
  return (
    <nav className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-2xl">🐢</span>
              </div>
              <div className="">
                <span className="text-xl font-bold text-white">
                  MS Tech Hive
                </span>
                <div className="text-xs text-yellow-400">
                  Automate Work. Accelerate Growth.
                </div>
              </div>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                to="/"
                className="px-3 py-2 rounded-md text-sm font-medium transition-colors text-yellow-400"
              >
                Home
              </Link>
              <div
                className="relative"
                onMouseEnter={() => setIsIndustryDropdownVisible(true)}
                onMouseLeave={() => setIsIndustryDropdownVisible(false)}
              >
                {/* <select name="" id="">
                  <option value="industries">industries</option>
                </select> */}
                <span className="cursor-pointer hover:text-yellow-400 transition duration-300">
                  {" "}
                  Industries
                </span>
                {isIndustryDropdownVisible && (
                  <Dropdown
                    setIsIndustryDropdownVisible={setIsIndustryDropdownVisible}
                  />
                )}
              </div>
              <Link
                to="/Services"
                className="px-3 py-2 rounded-md text-sm font-medium transition-colors text-gray-300 hover:text-yellow-400"
              >
                Services
              </Link>
              <Link
                to="/About"
                className="px-3 py-2 rounded-md text-sm font-medium transition-colors text-gray-300 hover:text-yellow-400"
              >
                About
              </Link>
              <Link
                to="/Contact"
                className="px-3 py-2 rounded-md text-sm font-medium transition-colors text-gray-300 hover:text-yellow-400"
              >
                Contact
              </Link>
              <select className="relative group">
                <option value="English">En</option>
              </select>
            </div>
          </div>
          <div className="md:hidden">
            <div className="relative group">
              <select className="flex items-center space-x-2 px-3 py-2 text-gray-300 hover:text-yellow-400 transition-colors">
                <option value="English">En</option>
              </select>
            </div>
            <div className="text-gray-300 hover:text-yellow-400 p-2">X</div>
             
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


