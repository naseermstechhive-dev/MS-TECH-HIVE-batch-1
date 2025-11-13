import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import { Menu, X, Globe } from "lucide-react";

const Navbar = () => {
  const [isIndustryDropdownVisible, setIsIndustryDropdownVisible] =
    useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const hideTimeoutRef = useRef(null);

  const languages = [
    { region: "US", label: "English" },
    { region: "IN", label: "తెలుగు" },
    { region: "IN", label: "हिन्दी" },
    { region: "IN", label: "தமிழ்" },
    { region: "IN", label: "ಕನ್ನಡ" },
    { region: "IN", label: "മലയാളം" },
  ];

  // Handle delayed closing of Industries dropdown
  const handleMouseEnter = () => {
    clearTimeout(hideTimeoutRef.current);
    setIsIndustryDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    hideTimeoutRef.current = setTimeout(() => {
      setIsIndustryDropdownVisible(false);
    }, 200); // 200ms delay prevents flickering
  };

  return (
    <nav className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-2xl">🐢</span>
              </div>
              <div>
                <span className="text-xl font-bold text-white">
                  MS Tech Hive
                </span>
                <div className="text-xs text-yellow-400">
                  Automate Work. Accelerate Growth.
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="px-3 py-2 rounded-md text-sm font-medium transition-colors text-yellow-400"
            >
              Home
            </Link>

            {/* Industries Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <span className="cursor-pointer hover:text-yellow-400 transition duration-300">
                Industries
              </span>
              {isIndustryDropdownVisible && (
                <Dropdown
                  setIsIndustryDropdownVisible={setIsIndustryDropdownVisible}
                />
              )}
            </div>

            <Link
              to="/services"
              className="px-3 py-2 rounded-md text-sm font-medium transition-colors text-gray-300 hover:text-yellow-400"
            >
              Services
            </Link>

            <Link
              to="/about"
              className="px-3 py-2 rounded-md text-sm font-medium transition-colors text-gray-300 hover:text-yellow-400"
            >
              About
            </Link>

            <Link
              to="/contact"
              className="px-3 py-2 rounded-md text-sm font-medium transition-colors text-gray-300 hover:text-yellow-400"
            >
              Contact
            </Link>

            {/* Language Dropdown */}
            <div className="relative group">
              <button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="flex items-center space-x-2 text-gray-300 group-hover:text-yellow-400 transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm">us</span>
              </button>

              {isLangDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-2 z-50">
                  {languages.map((lang, index) => (
                    <div
                      key={index}
                      onClick={() => setIsLangDropdownOpen(false)}
                      className="px-4 py-2 text-sm text-gray-200 hover:bg-gray-700 hover:text-yellow-400 flex justify-start items-center space-x-2 cursor-pointer"
                    >
                      <span className="text-yellow-400">{lang.region}</span>
                      <span>{lang.label}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-yellow-400 p-2 focus:outline-none transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ---------------- MOBILE MENU ---------------- */}
      {isMobileMenuOpen && (
        <div className="fixed right-4 top-16 bg-gray-900 border border-gray-800 rounded-lg px-4 py-3 space-y-2 shadow-lg w-44 z-50">
          <Link
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-sm font-medium text-yellow-400 hover:text-yellow-300 transition-colors"
          >
            Home
          </Link>

          {/* Mobile Industries Dropdown */}
          <div>
            <div
              className="cursor-pointer text-sm font-medium text-gray-300 hover:text-yellow-400 flex justify-between items-center"
              onClick={() =>
                setIsIndustryDropdownVisible(!isIndustryDropdownVisible)
              }
            >
              <span>Industries</span>
              <span>{isIndustryDropdownVisible ? "▲" : "▼"}</span>
            </div>

            {isIndustryDropdownVisible && (
              <div className="pl-2">
                <Dropdown
                  setIsIndustryDropdownVisible={setIsIndustryDropdownVisible}
                />
              </div>
            )}
          </div>

          <Link
            to="/services"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-sm font-medium text-gray-300 hover:text-yellow-400 transition-colors"
          >
            Services
          </Link>

          <Link
            to="/about"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-sm font-medium text-gray-300 hover:text-yellow-400 transition-colors"
          >
            About
          </Link>

          <Link
            to="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-sm font-medium text-gray-300 hover:text-yellow-400 transition-colors"
          >
            Contact
          </Link>

          {/* Mobile Language Dropdown */}
          <div className="relative group">
            <button
              onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
              className="flex items-center space-x-2 text-gray-300 group-hover:text-yellow-400 transition-colors"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm">us</span>
            </button>

            {isLangDropdownOpen && (
              <div className="absolute right-0 mt-2 w-44 bg-gray-800 rounded-md shadow-lg py-2 z-50">
                {languages.map((lang, index) => (
                  <div
                    key={index}
                    onClick={() => setIsLangDropdownOpen(false)}
                    className="px-4 py-2 text-sm text-gray-200 hover:bg-gray-700 hover:text-yellow-400 flex justify-start items-center space-x-2 cursor-pointer"
                  >
                    <span className="text-yellow-400">{lang.region}</span>
                    <span>{lang.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
