import React from 'react';
import { Link } from 'react-router-dom';

const Dropdown = () => {
  // Define the industries links
  const industryItems = [
    { name: 'Hospital', link: '/hospital' },
    { name: 'School', link: '/school' },
    { name: 'College', link: '/college' },
    { name: 'Restaurant', link: '/restaurant' },
    { name: 'Office', link: '/office' },
    { name: 'Retail Shop', link: '/retail-shop' },
    { name: 'Construction', link: '/construction' },
    { name: 'Logistics', link: '/logistics' },
    { name: 'IT Company', link: '/it-company' },
    { name: 'E-commerce', link: '/e-commerce' },
    { name: 'Clinic / Lab', link: '/clinic-lab' },
  ];

  return (
    // Styling to position the dropdown below the "Industries" link
    <div className="absolute left-0 right-0 mt-2 w-48 bg-slate-800 text-white shadow-xl rounded-md z-50 py-1">
      {industryItems.map((item) => (
        <Link
          key={item.name}
          href={item.link}
          // The hover styling recreates the effect shown in the image (yellow highlight)
          className="block px-4 py-2 text-sm hover:bg-slate-700 hover:text-yellow-400 transition duration-150"
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default Dropdown;