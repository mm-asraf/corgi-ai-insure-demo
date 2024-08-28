import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import corgi from '../../assets/corgi-log.png';
import {Link as ScrollLink  } from 'react-scroll';
import { useNavigate } from 'react-router-dom';
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navigate = useNavigate();

  const handleNavigation = (path: string, to: string) => {
    navigate(path);  // Update the URL path
    setTimeout(() => {
      document.getElementById(to)?.scrollIntoView({ behavior: 'smooth' });  // Scroll to the section
    }, 100);  // Delay to ensure the page has updated
  };

  return (
    <nav>
      <header className="bg-customWhite text-gray-800 shadow-md">
        <div className="container mx-auto flex items-center justify-between p-4">
          <div className="flex items-center space-x-6">
            <div>
              <img src={corgi} alt="corgi" className="w-140" />
            </div>

            {/* Navigation links - hidden on mobile */}
            <nav className="hidden md:flex space-x-6">
            <ScrollLink className='hover:text-gray-400 cursor-pointer' to="hero" smooth={true} duration={500} onClick={() => handleNavigation('/', 'hero')}>Home</ScrollLink>
            <ScrollLink className='hover:text-gray-400 cursor-pointer' to="products" smooth={true} duration={500} onClick={() => handleNavigation('/products', 'products')}>Products</ScrollLink>
            <ScrollLink className='hover:text-gray-400 cursor-pointer' to="features" smooth={true} duration={500} onClick={() => handleNavigation('/features', 'features')}>Key Features</ScrollLink>
            <ScrollLink className='hover:text-gray-400 cursor-pointer' to="whychooseus" smooth={true} duration={500} onClick={() => handleNavigation('/whychooseus', 'whychooseus')}>Why Choose Us</ScrollLink>
            <ScrollLink className='hover:text-gray-400 cursor-pointer' to="satisfaction" smooth={true} duration={500} onClick={() => handleNavigation('/satisfaction', 'satisfaction')}>Customer Satisfaction</ScrollLink>
            
            </nav>
          </div>

          {/* Login/Signup buttons - hidden on mobile */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#login" className="bg-customWhite border-2 border-customPurple text-customPurple px-4 py-2 rounded-md w-160">Login</a>
            <a href="#signup" className="bg-customPurple border-2 border-customWhite text-customWhite px-4 py-2 rounded-md w-160">Signup</a>
          </div>

          {/* Menu Icon - visible only on mobile */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu - shown when isOpen is true */}
        {isOpen && (
          <div className="md:hidden flex flex-col p-4 space-y-4">
            <div className="flex flex-col space-y-2">
            <ScrollLink className='hover:text-gray-400 cursor-pointer' to="hero"  smooth={true} duration={500} onClick={() => handleNavigation('/', 'hero')} >Home</ScrollLink>
            <ScrollLink className='hover:text-gray-400 cursor-pointer' to="products" smooth={true} duration={500} onClick={() => handleNavigation('/products', 'products')}>Products</ScrollLink>
            <ScrollLink className='hover:text-gray-400 cursor-pointer' to="features" smooth={true} duration={500} onClick={() => handleNavigation('/features', 'features')}>Key Features</ScrollLink>
            <ScrollLink className='hover:text-gray-400 cursor-pointer' to="whychooseus" smooth={true} duration={500} onClick={() => handleNavigation('/whychooseus', 'whychooseus')}>Why Choose Us</ScrollLink>
            <ScrollLink className='hover:text-gray-400 cursor-pointer' to="satisfaction" smooth={true} duration={500} onClick={() => handleNavigation('/satisfaction', 'satisfaction')}>Customer Satisfaction</ScrollLink>
                  
            </div>
            <div className="flex flex-col space-y-2">
              <a href="#login" className="bg-customWhite border-2 border-customPurple text-customPurple px-4 py-2 rounded-md text-center">Login</a>
              <a href="#signup" className="bg-customPurple border-2 border-customWhite text-customWhite px-4 py-2 rounded-md text-center">Signup</a>
            </div>
          </div>
        )}
      </header>
    </nav>
    
  );
};

export default Header;
