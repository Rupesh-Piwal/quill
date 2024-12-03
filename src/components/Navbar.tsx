"use client";

import React, { useState, useContext } from "react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative">
      <div className="h-[60px] mx-[40px] md:mx-[100px] py-2 flex items-center justify-between">
        <h2 className="text-[#6941C6] text-[30px] font-semibold">Quill</h2>

        {/* Desktop Menu */}
        <ul className="hidden md:flex flex-row gap-3 items-center">
          <li className="cursor-pointer hover:text-[#6941C6]">Home</li>
          <li className="cursor-pointer hover:text-[#6941C6]">About</li>
          <li className="cursor-pointer hover:text-[#6941C6]">Contact</li>
          <ThemeToggle />
        </ul>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          <div
            className={`w-6 h-1 bg-black mb-1 transition-all ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></div>
          <div
            className={`w-6 h-1 bg-black mb-1 transition-all ${
              isOpen ? "opacity-0" : ""
            }`}
          ></div>
          <div
            className={`w-6 h-1 bg-black transition-all ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-md">
          <ul className="flex flex-col items-center py-4">
            <li className="cursor-pointer hover:text-[#6941C6] py-2">Home</li>
            <li className="cursor-pointer hover:text-[#6941C6] py-2">About</li>
            <li className="cursor-pointer hover:text-[#6941C6] py-2">
              Contact
            </li>
            <ThemeToggle />
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
