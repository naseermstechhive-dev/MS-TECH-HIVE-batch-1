import React, { useState } from 'react';
import {  X, ChevronDown, Menu } from 'lucide-react'; 
import Dropdown from '../Dropdown';

// Placeholder for react-router-dom Link to make file runnable in a single component
const Link = ({ to, children, className, onClick }) => <a href={to} className={className} onClick={onClick}>{children}</a>; 

// Array of navigation items with nested structure for Industries
const navItems = [
  { name: 'Home', Link: '/Home' },
  { name: 'Services', Link: '/services' },
  { 
    name: 'Industries', 
    Link: '/Industries',
    Items:[
      { name:'Hospital', Link :'/Hospital'},
      { name:'School', Link :'/School'},
      { name:'College', Link :'/College'},
      { name:'Restaurant', Link :'/Restaurant'},
      { name:'Office', Link :'/Office'},
      { name:'Retail Shop', Link :'/RetailShop'},
      { name:'Construction', Link :'/Construction'},
      { name:'Logistics', Link :'/Logistics'},
      { name:'IT Company', Link :'/ITCompany'},
      { name:'E-commerce', Link :'/E-commerce'},
      { name:'Clinic/Lab', Link :'/ClinicLab'},
    ] 
  },
  { name: 'About', Link: '/about' },
  { name: 'Contact', Link: '/contact' },
];

// Shared Tailwind class definitions
const mobileLinkClass = "block py-3 px-4 text-white text-lg font-medium hover:bg-gray-700 transition duration-150 rounded-lg";
const mobileSubLinkClass = "block py-2 pl-8 text-gray-300 text-base hover:bg-gray-600 transition duration-150 rounded-lg";



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu open/close
  const [isMobileIndustryOpen, setIsMobileIndustryOpen] = useState(true); // Mobile submenu open/close
  const [isIndustryDropdownVisible, setIsIndustryDropdownVisible] = useState(false); // Desktop dropdown visibility

  // Function to toggle the main mobile menu state
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Ensure submenu is closed when main menu closes
    if (isOpen) {
        setIsMobileIndustryOpen(false);
    }
  };

  // Helper to close all mobile menus on link click
  const closeAllMobileMenus = () => {
      setIsOpen(false);
      setIsMobileIndustryOpen(false);
  }


  return (
    <div className="sticky top-0 z-10">
      {/* Navbar Container */}
      <nav className="bg-gray-900 shadow-lg sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo/Brand Name */}
            <div className="shrink-0">
              <Link to="/" className="flex items-center space-x-3" onClick={closeAllMobileMenus}>
                <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🐢</span>
                </div>
                <div className="">
                  <span className="text-xl font-bold text-white">MS Tech Hive</span>
                  <div className="text-xs text-yellow-400">Automate Work. Accelerate Growth.</div>
                </div>
              </Link>
            </div>

            {/* Desktop Menu (hidden on mobile) */}
            <div className="hidden md:block">
              {/*  */}
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

            {/* Mobile Menu Button (hidden on desktop) */}
            <div className="md:hidden">
                  <div className=' flex flex-col'>
                  <select className="relative group">
                <option value="English">En</option>
              </select>
              <button
                onClick={toggleMenu}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 active:text-yellow-400  transition duration-300"
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu />}
              </button>
                  </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Content (Appears below the main navbar row) */}
        {isOpen && (
            <div className="md:hidden bg-gray-800 border-t border-gray-700 transition-all duration-300 ease-in-out">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {navItems.map((item) => (
                        item.Items ? (
                            // Mobile Collapsible Submenu for Industries
                            <div key={item.name} className="group">
                                <button 
                                    onClick={() => setIsMobileIndustryOpen(!isMobileIndustryOpen)}
                                    className={`flex justify-between items-center w-full ${mobileLinkClass}`}
                                >
                                    {item.name}
                                    <ChevronDown 
                                        className={`w-5 h-5 transition-transform duration-200 ${isMobileIndustryOpen ? 'rotate-180' : ''}`} 
                                    />
                                </button>
                                
                                {/* Nested Industry Links */}
                                {isMobileIndustryOpen && (
                                    <div className="mt-1 space-y-1 bg-gray-700/50 p-2 rounded-lg">
                                        {item.Items.map((subItem) => (
                                            <Link 
                                                key={subItem.name} 
                                                to={subItem.Link} 
                                                className={mobileSubLinkClass}
                                                onClick={closeAllMobileMenus}
                                            >
                                                {subItem.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ) : (
                            // Standard Mobile Link
                            <Link
                                key={item.name}
                                to={item.Link}
                                onClick={closeAllMobileMenus} 
                                className={mobileLinkClass}
                            >
                                {item.name}
                            </Link>
                        )
                    ))}
                </div>
            </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;