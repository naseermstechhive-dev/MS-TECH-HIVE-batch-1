import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from './../../context/Context';

const Footer = () => {
  const {mode} = useContext(GlobalContext);
  
  const footerBg = mode ? 'bg-white border-t border-gray-200' : 'bg-gray-900 border-t border-gray-800';
  const headingText = mode ? 'text-gray-900' : 'text-white';
  const textColor = mode ? 'text-gray-600 font-medium' : 'text-gray-400';
  const linkText = mode ? 'text-gray-600 font-medium hover:text-yellow-400' : 'text-gray-400 hover:text-yellow-400';
  const logoText = mode ? 'text-gray-900' : 'text-white';
  const subText = mode ? 'text-yellow-500' : 'text-yellow-400';
  const iconColor = 'text-yellow-400';
  const borderColor = mode ? 'border-gray-200' : 'border-gray-800';
  const copyrightText = mode ? 'text-gray-600 font-medium' : 'text-gray-400';

  return (
    <footer className={footerBg}>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
        <div className='col-span-1 md:col-span-2'>
          <div className='flex items-center space-x-3 mb-4'>
            <div className='w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center'>
              <span className='text-2xl'>🐢</span>
            </div>
            <div className=''>
              <span className={`text-xl font-bold ${logoText}`}>MS Tech Hive</span>
              <div className={`text-sm ${subText}`}>Automate Work. Accelerate Growth.</div>
            </div>
          </div>
          <p className={`${textColor} mb-4 max-w-md`}>We help businesses across industries automate their workflows and accelerate growth through cutting-edge technology solutions.</p>
          <div className='flex space-x-4'>
          <a href="https://www.facebook.com/people/M-Techhive/pfbid02aehgvVvXUYcTmT4HUYZfLGzSNjJSTJkQ6FCG7sAuj6SRPR4u8wjif1RN24pBhof6l/" target='_blank'>
          <Facebook className={`${iconColor} hover:text-yellow-400`}/>
          </a>
            <a href="https://x.com/MSTECHHIVE" target='_blank'>
          <Twitter className={`${iconColor} hover:text-yellow-400`}/>
            </a>
            <a href="https://www.linkedin.com/in/ms-tech-hive-08aa7a378/" target='_blank'>
            <Linkedin className={`${iconColor} hover:text-yellow-400`}/>
            </a>
            <a href="https://www.instagram.com/mstechhive/" target='_blank'>
          <Instagram className={`${iconColor} hover:text-yellow-400`}/>
            </a>
          </div>
        </div>

        <div className=''>
          <h3 className={`text-lg font-semibold ${headingText} mb-4`}>Quick Links</h3>
          <ul className='space-y-2 '>
            <li>
            <Link className={`${linkText} transition-colors`} to="/">Home</Link>
            </li>
            <li>
            <Link className={`${linkText} transition-colors`} to="/About">About</Link>
            </li>
            <li>
            <Link className={`${linkText} transition-colors`} to="/Services">Services</Link>
            </li>
            <li>
            <Link className={`${linkText} transition-colors`} to="/industries">Industries</Link>
            </li>
            <li>
            <Link className={`${linkText} transition-colors`} to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className=''>
          <h3 className={`text-lg font-semibold ${headingText} mb-4`}>Contact Info</h3>
          <div className='space-y-3'>
            <div className='flex items-center space-x-3'>
              <Mail className={iconColor}/>
              <span className={textColor}>info@mstechhive.com</span>
            </div>
            <div className='flex items-center space-x-3'>
            <Phone className={iconColor}/>
              <span className={textColor}>+91 9032223352</span>
            </div>
            <div className='flex items-center space-x-3'>
            <MapPin className={iconColor}/>
              <a href="https://maps.app.goo.gl/xuJKp9urXsuoBeab9" target='_blank' className={`${linkText} transition-colors`}>View Location</a>
            </div>
          </div>
        </div>
      </div>
      <div className={`border-t ${borderColor} mt-8 pt-8 text-center`}>
        <p className={copyrightText}>© 2025 MS Tech Hive. All rights reserved.</p>
      </div>
      </div>
    </footer>
  )
}

export default Footer