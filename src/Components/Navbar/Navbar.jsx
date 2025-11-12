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
                <span className="text-2xl">Tur</span>
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

// import React, { useState } from "react";
// // Note: In a real application, you would use Link from 'react-router-dom'.
// // For this single-file component, we'll use a simple <a> tag placeholder.
// const Link = ({ to, children, className }) => <a href={to} className={className}>{children}</a>;

// // --- Data Definitions ---

// const industryItems = [
//   { name: 'Hospital', link: '/hospital' },
//   { name: 'School', link: '/school' },
//   { name: 'College', link: '/college' },
//   { name: 'Restaurant', link: '/restaurant' },
//   { name: 'Office', link: '/office' },
//   { name: 'Retail Shop', link: '/retail-shop' },
//   { name: 'Construction', link: '/construction' },
//   { name: 'Logistics', link: '/logistics' },
//   { name: 'IT Company', link: '/it-company' },
//   { name: 'E-commerce', link: '/e-commerce' },
//   { name: 'Clinic / Lab', link: '/clinic-lab' },
// ];

// const languageOptions = [
//     { code: 'US', name: 'English', region: 'US' },
//     { code: 'IN', name: 'తెలుగు (Telugu)', region: 'IN' },
//     { code: 'IN', name: 'हिन्दी (Hindi)', region: 'IN' },
//     { code: 'IN', name: 'தமிழ் (Tamil)', region: 'IN' },
//     { code: 'IN', name: 'ಕನ್ನಡ (Kannada)', region: 'IN' },
//     { code: 'IN', name: 'മലയാളം (Malayalam)', region: 'IN' },
// ];

// // --- Dropdown Component (For Desktop Industries Menu) ---

// const IndustriesDropdown = ({ setIsIndustryDropdownVisible }) => {
//   return (
//     <div className="absolute left-0 mt-2 w-48 bg-slate-800 text-white shadow-xl rounded-md z-50 py-1 border-t-2 border-yellow-400">
//       {industryItems.map((item) => (
//         <a
//           key={item.name}
//           href={item.link}
//           className="block px-4 py-2 text-sm hover:bg-slate-700 hover:text-yellow-400 transition duration-150"
//           onClick={() => setIsIndustryDropdownVisible(false)}
//         >
//           {item.name}
//         </a>
//       ))}
//     </div>
//   );
// };

// // --- Language Dropdown Component (For Desktop) ---

// const LanguageDropdown = ({ setIsLangDropdownVisible }) => {
//     return (
//         <div className="absolute right-0 mt-2 w-48 bg-gray-700 text-white shadow-xl rounded-md z-50 py-1 border-t-2 border-yellow-400">
//             {languageOptions.map((lang) => (
//                 <a
//                     key={`${lang.region}-${lang.name}`}
//                     href={`/lang/${lang.code}`}
//                     className={`block px-4 py-2 text-sm transition duration-150  items-center space-x-2
//                        ${lang.name === 'English' ? 'bg-gray-600 text-white' : 'hover:bg-yellow-500 hover:text-gray-900'}`
//                     }
//                     onClick={() => setIsLangDropdownVisible(false)}
//                 >
//                     <span className="font-semibold text-xs text-yellow-400">{lang.region}</span>
//                     <span>{lang.name}</span>
//                 </a>
//             ))}
//         </div>
//     );
// };

// // --- Main App Component ---

// const App = () => {
//   const [isIndustryDropdownVisible, setIsIndustryDropdownVisible] = useState(false);
//   const [isLangDropdownVisible, setIsLangDropdownVisible] = useState(false);
//   // State for Mobile Menu/Sidebar
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   // State for mobile industry submenu
//   const [isMobileIndustryOpen, setIsMobileIndustryOpen] = useState(false);

//   const navLinkClass = "px-3 py-2 rounded-md text-sm font-medium transition-colors text-gray-300 hover:text-yellow-400";
//   const activeLinkClass = "px-3 py-2 rounded-md text-sm font-medium transition-colors text-yellow-400";
//   const mobileLinkClass = "block py-3 px-4 text-white text-lg font-medium hover:bg-gray-700 transition duration-150 rounded-lg";
//   const mobileSubLinkClass = "block py-2 pl-8 text-gray-300 text-base hover:bg-gray-700 transition duration-150 rounded-lg";

//   // Helper function to close all mobile menus
//   const closeMobileMenu = () => {
//     setIsMobileMenuOpen(false);
//     setIsMobileIndustryOpen(false);
//   }

//   // Common Logo/Brand structure
//   const Logo = ({ textColor = 'text-white' }) => (
//     <Link to="/" className="flex items-center space-x-3">
//       <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
//         <span className="text-2xl">Tur</span>
//       </div>
//       <div>
//         <span className={`text-xl font-bold ${textColor}`}>
//           MS Tech Hive
//         </span>
//         <div className="text-xs text-yellow-400">
//           Automate Work. Accelerate Growth.
//         </div>
//       </div>
//     </Link>
//   );

//   return (
//     <div className="min-h-screen bg-gray-800">
//       {/* --- Desktop Navbar --- */}
//       <nav className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">

//             {/* Logo */}
//             <div className="flex items-center">
//               <Logo />
//             </div>

//             {/* Desktop Links (md:block) */}
//             <div className="hidden md:block">
//               <div className="ml-10 flex items-center space-x-8">

//                 {/* Home */}
//                 <Link to="/" className={activeLinkClass}>Home</Link>

//                 {/* Industries Dropdown */}
//                 <div
//                   className="relative"
//                   onMouseEnter={() => setIsIndustryDropdownVisible(true)}
//                   onMouseLeave={() => setIsIndustryDropdownVisible(false)}
//                 >
//                   <span className={navLinkClass.replace('px-3 py-2 rounded-md', '') + " cursor-pointer"}>
//                     Industries
//                   </span>
//                   {isIndustryDropdownVisible && <IndustriesDropdown setIsIndustryDropdownVisible={setIsIndustryDropdownVisible} />}
//                 </div>

//                 {/* Services, About, Contact */}
//                 <Link to="/Services" className={navLinkClass}>Services</Link>
//                 <Link to="/About" className={navLinkClass}>About</Link>
//                 <Link to="/Contact" className={navLinkClass}>Contact</Link>

//                 {/* Language Dropdown */}
//                 <div
//                     className="relative ml-4"
//                     onMouseEnter={() => setIsLangDropdownVisible(true)}
//                     onMouseLeave={() => setIsLangDropdownVisible(false)}
//                 >
//                     <span className="cursor-pointer flex items-center space-x-1 text-gray-300 hover:text-yellow-400 transition duration-300">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                             <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l3 3a1 1 0 001.414-1.414L11 9.586V6z" clipRule="evenodd" />
//                         </svg>
//                         <span className="text-sm font-medium">US</span>
//                     </span>
//                     {isLangDropdownVisible && <LanguageDropdown setIsLangDropdownVisible={setIsLangDropdownVisible} />}
//                 </div>
//               </div>
//             </div>

//             {/* Mobile Menu Button (md:hidden) */}
//             <div className="md:hidden">
//               <button
//                 onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//                 className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
//                 aria-controls="mobile-menu"
//                 aria-expanded="false"
//               >
//                 <span className="sr-only">Open main menu</span>
//                 <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* --- Mobile Sidebar Menu (Appears on small screens) --- */}
//       {isMobileMenuOpen && (
//         <div
//           className="fixed inset-0 bg-gray-900 bg-opacity-95 z-40 md:hidden transition-opacity duration-300"
//           onClick={closeMobileMenu} // Click outside closes menu
//         >
//           <div
//             className="fixed top-10 w-100 right-0 h-full bg-gray-800 shadow-2xl p-4 overflow-y-auto"
//             onClick={(e) => e.stopPropagation()} // Prevent click inside from closing menu
//           >
//             {/* Header: Logo and Close Button */}
//             <div className="flex justify-between items-start mb-6">
//               {/* <Logo /> */}
//               {/* Language Selector (Mobile Top Right) */}
//               <div className="flex items-center space-x-2 text-white">
//                  <span className="text-sm font-medium flex items-center">US</span>
//                  <button
//                     onClick={closeMobileMenu}
//                     className="p-1 text-gray-400 hover:text-white transition duration-150"
//                  >
//                     <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//                     </svg>
//                  </button>
//               </div>
//             </div>

//             {/* Mobile Navigation Links */}
//             <div className="space-y-1">
//               <Link to="/" className={mobileLinkClass} onClick={closeMobileMenu}>Home</Link>
//               <Link to="/Services" className={mobileLinkClass} onClick={closeMobileMenu}>Services</Link>

//               {/* Industries (Toggleable Submenu) */}
//               <div className="group">
//                 <button
//                   onClick={() => setIsMobileIndustryOpen(!isMobileIndustryOpen)}
//                   className={`flex justify-between items-center w-full ${mobileLinkClass}`}
//                 >
//                   Industries
//                   <svg
//                     className={`w-5 h-5 transition-transform duration-200 ${isMobileIndustryOpen ? 'rotate-180' : ''}`}
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
//                   </svg>
//                 </button>

//                 {/* Nested Industry Links */}
//                 {isMobileIndustryOpen && (
//                   <div className="mt-1 space-y-1 bg-gray-700/50 p-2 rounded-lg">
//                     {industryItems.map((item) => (
//                       <Link
//                         key={item.name}
//                         to={item.link}
//                         className={mobileSubLinkClass}
//                         onClick={closeMobileMenu}
//                       >
//                         {item.name}
//                       </Link>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               <Link to="/About" className={mobileLinkClass} onClick={closeMobileMenu}>About</Link>
//               <Link to="/Contact" className={mobileLinkClass} onClick={closeMobileMenu}>Contact</Link>

//               {/* Mobile Language Selector (Simple list for mobile) */}
//               <div className="pt-4 border-t border-gray-700 mt-4">
//                   <h3 className="text-xs font-semibold text-gray-400 mb-2 px-4 uppercase">Language</h3>
//                   {languageOptions.map((lang) => (
//                       <Link
//                           key={`mobile-${lang.name}`}
//                           to={`/lang/${lang.code}`}
//                           className={mobileSubLinkClass}
//                           onClick={closeMobileMenu}
//                       >
//                            <span className="font-semibold text-xs text-yellow-400 pr-2">{lang.region}</span>
//                            {lang.name}
//                       </Link>
//                   ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;
