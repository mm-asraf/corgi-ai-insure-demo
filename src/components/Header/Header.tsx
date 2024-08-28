import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import corgi from '../../assets/corgi-log.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
              <a href="#Products" className="hover:text-gray-400">Products</a>
              <a href="#Features" className="hover:text-gray-400">Features</a>
              <a href="#whychooseus" className="hover:text-gray-400">Why Choose US</a>
              <a href="#Contact Us" className="hover:text-gray-400">Contact Us</a>
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
              <a href="#Products" className="hover:text-gray-400 text-left">Products</a>
              <a href="#features" className="hover:text-gray-400 text-left">Features</a>
              <a href="#whychooseus" className="hover:text-gray-400 text-left">Why Choose Us</a>
              <a href="#Contact Us" className="hover:text-gray-400 text-left">Contact Us</a>
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
