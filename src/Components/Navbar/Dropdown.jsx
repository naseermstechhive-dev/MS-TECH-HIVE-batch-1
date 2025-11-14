import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from './../../context/Context';

const Dropdown = ({ setIsIndustryDropdownVisible }) => {
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

  const {mode} = useContext(GlobalContext); 

  const dropdownBg = mode ? "bg-white border border-gray-200" : "bg-gray-800";
  const dropdownText = mode ? "text-gray-900" : "text-gray-200";
  const dropdownHoverBg = mode ? "hover:bg-gray-100" : "hover:bg-gray-700";

  return (
    <div className={`absolute left-0 mt-2 w-48 ${dropdownBg} ${dropdownText} shadow-xl rounded-md z-50 py-1`}>
      {industryItems.map((item) => (
        <Link
          key={item.name}
          to={item.link}
          onClick={() => setIsIndustryDropdownVisible(false)}
          className={`block px-4 py-2 text-sm ${dropdownHoverBg} hover:text-yellow-400 transition duration-150 ${dropdownText}`}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default Dropdown;