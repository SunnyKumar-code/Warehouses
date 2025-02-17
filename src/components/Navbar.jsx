import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 p-2 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center p-2">
          <h1 className="text-2xl font-bold text-white bg-blue-600 px-6 py-3 rounded-lg shadow-md">
            Warehouse
          </h1>
        </div>
        <div className="hidden md:flex space-x-8">
          <p className="text-white hover:text-blue-400 transition-colors duration-300">Home</p>
          <p className="text-white hover:text-blue-400 transition-colors duration-300">About</p>
          <p className="text-white hover:text-blue-400 transition-colors duration-300">Services</p>
          <p className="text-white hover:text-blue-400 transition-colors duration-300">Contact</p>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-800 shadow-lg mt-2 rounded-lg">
          <a href="#home" className="block text-white py-3 px-6 hover:bg-blue-700 transition-all duration-300">Home</a>
          <a href="#about" className="block text-white py-3 px-6 hover:bg-blue-700 transition-all duration-300">About</a>
          <a href="#services" className="block text-white py-3 px-6 hover:bg-blue-700 transition-all duration-300">Services</a>
          <a href="#contact" className="block text-white py-3 px-6 hover:bg-blue-700 transition-all duration-300">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
