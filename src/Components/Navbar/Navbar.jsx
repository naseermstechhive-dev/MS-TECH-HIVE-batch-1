import React, { useState, useRef, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import Dropdown from "./Dropdown";
import { Menu, X, Globe } from "lucide-react";
import { GlobalContext } from "../../context/Context";
import { Moon } from 'lucide-react';
import { Sun } from 'lucide-react';

const Navbar = () => {
  const [isIndustryDropdownVisible, setIsIndustryDropdownVisible] =
    useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isToggling, setIsToggling] = useState(false);
  const hideTimeoutRef = useRef(null);
  const {mode, setMode} = useContext(GlobalContext);

  const handleClick = () =>{
      setIsToggling(true);
      setTimeout(() => setIsToggling(false), 500);
      setMode(!mode);
  }

  const languages = [
    { region: "US", label: "English" },
    { region: "IN", label: "తెలుగు" },
    { region: "IN", label: "हिन्दी" },
    { region: "IN", label: "தமிழ்" },
    { region: "IN", label: "ಕನ್ನಡ" },
    { region: "IN", label: "മലയാളം" },
  ];

  const industryItems = [
    { name: "Hospital", link: "/hospital" },
    { name: "School", link: "/school" },
    { name: "College", link: "/college" },
    { name: "Restaurant", link: "/restaurant" },
    { name: "Office", link: "/office" },
    { name: "Retail Shop", link: "/retail-shop" },
    { name: "Construction", link: "/construction" },
    { name: "Logistics", link: "/logistics" },
    { name: "IT Company", link: "/it-company" },
    { name: "E-commerce", link: "/e-commerce" },
    { name: "Clinic / Lab", link: "/clinic-lab" },
  ];

  const navInactiveText = mode ? "text-gray-700" : "text-gray-300";
  const navActiveText = "text-yellow-400";
  const mobileInactiveText = mode ? "text-gray-700" : "text-gray-300";
  const mobileActiveText = "text-yellow-400";
  const dropdownBg = mode ? "bg-white border border-gray-200" : "bg-gray-800";
  const dropdownText = mode ? "text-gray-900" : "text-gray-200";
  const dropdownHoverBg = mode ? "hover:bg-gray-100" : "hover:bg-gray-700";
  const mobileMenuBg = mode ? "bg-white border border-gray-200" : "bg-gray-900 border border-gray-800";
  const mobileDropdownBg = mode ? "bg-white" : "bg-gray-900";
  const mobileDropdownText = mode ? "text-gray-900" : "text-gray-200";
  const mobileDropdownHoverBg = mode ? "hover:bg-gray-100" : "hover:bg-gray-800";
  const langButtonText = mode ? "text-gray-700" : "text-gray-300";
  const hamburgerText = mode ? "text-gray-700" : "text-gray-300";

  const handleMouseEnter = () => {
    clearTimeout(hideTimeoutRef.current);
    setIsIndustryDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    hideTimeoutRef.current = setTimeout(() => {
      setIsIndustryDropdownVisible(false);
    }, 200);
  };

  const iconClass = `transition-all duration-300 ${isToggling ? "animate-spin" : ""} group-hover:rotate-180`;
  const iconColor = `${mode ? "text-gray-700" : "text-gray-300"} group-hover:text-yellow-400`;

  return (
    <nav className={`${mode ? "bg-white border-b border-gray-200" : "bg-gray-900 border-b border-gray-800"} sticky top-0 z-50`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">🐢</span>
              </div>
              <div className="flex flex-col min-w-0">
                <span className={`font-bold ${mode ? "text-gray-900" : "text-white"} text-lg md:text-xl lg:text-2xl whitespace-nowrap`}>MS Tech Hive</span>
                <div className={`text-xs ${mode ? "text-yellow-500" : "text-yellow-400"}`}>
                  Automate Work. Accelerate Growth.
                </div>
              </div>
            </Link>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Desktop Navigation including Language */}
            <div className="hidden md:flex items-center space-x-6">
              {/* Home Active */}
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "px-3 py-2 rounded-md text-base font-semibold text-yellow-400"
                    : `px-3 py-2 rounded-md text-base font-semibold ${navInactiveText} hover:text-yellow-400`
                }
              >
                Home
              </NavLink>

              {/* Industries (hover only) */}
              <div
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <span className={`cursor-pointer text-base font-semibold ${navInactiveText} hover:text-yellow-400 transition duration-300`}>
                  Industries
                </span>
                {isIndustryDropdownVisible && (
                  <Dropdown
                    setIsIndustryDropdownVisible={setIsIndustryDropdownVisible}
                  />
                )}
              </div>

              {/* Services */}
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive
                    ? "px-3 py-2 rounded-md text-base font-semibold text-yellow-400"
                    : `px-3 py-2 rounded-md text-base font-semibold ${navInactiveText} hover:text-yellow-400`
                }
              >
                Services
              </NavLink>

              {/* About */}
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "px-3 py-2 rounded-md text-base font-semibold text-yellow-400"
                    : `px-3 py-2 rounded-md text-base font-semibold ${navInactiveText} hover:text-yellow-400`
                }
              >
                About
              </NavLink>

              {/* Contact */}
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "px-3 py-2 rounded-md text-base font-semibold text-yellow-400"
                    : `px-3 py-2 rounded-md text-base font-semibold ${navInactiveText} hover:text-yellow-400`
                }
              >
                Contact
              </NavLink>

              {/* Language */}
              <div className="relative group">
                <button
                  onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                  className={`flex items-center space-x-2 ${langButtonText} group-hover:text-yellow-400 transition-colors`}
                >
                  <Globe className="w-4 h-4" />
                  <span className="text-sm md:text-base">us</span>
                </button>

                {isLangDropdownOpen && (
                  <div className={`absolute right-0 mt-2 w-48 ${dropdownBg} rounded-md shadow-lg py-2 z-50`}>
                    {languages.map((lang, index) => (
                      <div
                        key={index}
                        onClick={() => setIsLangDropdownOpen(false)}
                        className={`px-4 py-2 text-sm md:text-base ${dropdownText} ${dropdownHoverBg} hover:text-yellow-400 flex justify-start items-center space-x-2 cursor-pointer`}
                      >
                        <span className="text-yellow-400">{lang.region}</span>
                        <span>{lang.label}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Toggle Button */}
            <div 
              className={`h-10 w-10 flex items-center justify-center cursor-pointer rounded-full ${mode ? "bg-gray-100 hover:bg-gray-200" : "bg-gray-800 hover:bg-gray-700"} transition-all duration-300 relative group`} 
              onClick={handleClick}
              title="Toggle Dark/Light Mode"
            >
              {mode ? <Sun size={20} className={`${iconClass} ${iconColor}`} /> : <Moon size={20} className={`${iconClass} ${iconColor}`} />}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`${hamburgerText} hover:text-yellow-400 p-2 focus:outline-none transition-colors`}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className={`${mobileMenuBg} absolute right-4 top-16 rounded-lg px-4 py-3 space-y-2 shadow-lg w-44 z-50 overflow-hidden`}>

          {/* Mobile Home */}
          <NavLink
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? `block text-base font-semibold ${mobileActiveText}`
                : `block text-base font-semibold ${mobileInactiveText} hover:text-yellow-400`
            }
          >
            Home
          </NavLink>

          {/* Industries Dropdown Mobile */}
          <div>
            <div
              className={`cursor-pointer text-base font-semibold ${mobileInactiveText} hover:text-yellow-400 flex justify-between items-center`}
              onClick={() =>
                setIsIndustryDropdownVisible(!isIndustryDropdownVisible)
              }
            >
              <span>Industries</span>
              <span>{isIndustryDropdownVisible ? "▲" : "▼"}</span>
            </div>

            {isIndustryDropdownVisible && (
              <div className={`space-y-1 ${mobileDropdownBg} rounded-md overflow-hidden`}>
                {industryItems.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.link}
                    onClick={() => {
                      setIsIndustryDropdownVisible(false);
                      setIsMobileMenuOpen(false);
                    }}
                    className={({ isActive }) =>
                      isActive
                        ? "block pl-4 pr-4 py-2 text-base font-semibold text-yellow-400 rounded"
                        : `block pl-4 pr-4 py-2 text-base ${mobileDropdownText} ${mobileDropdownHoverBg} hover:text-yellow-400 rounded`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          <NavLink
            to="/services"
            onClick={() => setIsMobileMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? `block text-base font-semibold ${mobileActiveText}`
                : `block text-base font-semibold ${mobileInactiveText} hover:text-yellow-400`
            }
          >
            Services
          </NavLink>

          <NavLink
            to="/about"
            onClick={() => setIsMobileMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? `block text-base font-semibold ${mobileActiveText}`
                : `block text-base font-semibold ${mobileInactiveText} hover:text-yellow-400`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? `block text-base font-semibold ${mobileActiveText}`
                : `block text-base font-semibold ${mobileInactiveText} hover:text-yellow-400`
            }
          >
            Contact
          </NavLink>

          {/* Language Dropdown Mobile */}
          <div>
            <div
              className={`cursor-pointer text-base font-semibold ${mobileInactiveText} hover:text-yellow-400 flex justify-between items-center`}
              onClick={() =>
                setIsLangDropdownOpen(!isLangDropdownOpen)
              }
            >
              <span className="flex items-center space-x-2">
                <Globe className="w-4 h-4" />
                <span>us</span>
              </span>
              <span>{isLangDropdownOpen ? "▲" : "▼"}</span>
            </div>

            {isLangDropdownOpen && (
              <div className={`space-y-1 ${mobileDropdownBg} rounded-md overflow-hidden`}>
                {languages.map((lang, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setIsLangDropdownOpen(false);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`pl-4 pr-4 py-2 text-base ${mobileDropdownText} ${mobileDropdownHoverBg} hover:text-yellow-400 flex justify-start items-center space-x-2 cursor-pointer rounded`}
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