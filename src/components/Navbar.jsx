import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ onShopClick }) => {
  const location = useLocation();

  const handleShopClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      onShopClick();
    } else {
      // If not on the home page, navigate to home and then scroll
      // This will be handled by the Link component itself in this case
      // as it will navigate to "/"
    }
  };

  return (
    <nav className="bg-gradient-to-r from-pink-500 to-rose-500 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-3xl font-bold tracking-wide hover:text-gold-200 transition duration-300 ease-in-out transform hover:scale-105">
          Rosevene's Store
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link to="/about" className="text-white text-lg font-medium hover:text-amber-200 transition duration-300 ease-in-out transform hover:scale-105">
              About
            </Link>
          </li>
          <li>
            <Link to="/" onClick={handleShopClick} className="text-white text-lg font-medium hover:text-amber-200 transition duration-300 ease-in-out transform hover:scale-105">
              Shop
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-white text-lg font-medium hover:text-amber-200 transition duration-300 ease-in-out transform hover:scale-105">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
