import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/Context";
import { useTranslation } from "react-i18next";
import { industries } from "../../data/industries";

const Dropdown = ({ setIsIndustryDropdownVisible }) => {
  const { t } = useTranslation();
  const { mode } = useContext(GlobalContext);

  const dropdownBg = mode ? "bg-white border border-gray-200" : "bg-gray-800";
  const dropdownText = mode ? "text-gray-900" : "text-gray-200";
  const dropdownHoverBg = mode ? "hover:bg-gray-100" : "hover:bg-gray-700";

  return (
    <div className={`absolute left-0 mt-2 w-48 ${dropdownBg} ${dropdownText} shadow-xl rounded-md z-50 py-1`}>
      {industries.map(item => (
        <Link
          key={item.key}
          to={item.link}
          onClick={() => setIsIndustryDropdownVisible(false)}
          className={`block px-4 py-2 text-sm ${dropdownHoverBg} hover:text-yellow-400 transition duration-150 ${dropdownText}`}
        >
          {t(`industries.${item.key}`)}
        </Link>
      ))}
    </div>
  );
};

export default Dropdown;