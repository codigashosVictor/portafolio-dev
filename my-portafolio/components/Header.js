"use client"; // Add this at the top of the file

import { useState, useEffect } from "react";

const StickyHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/60 backdrop-blur-md shadow-lg transition ease-in-out delay-150"
          : "invisible "
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-lg font-bold text-gray-800">My Logo</div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a
                  href="#home"
                  className="text-gray-800 hover:text-gray-600 transition"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-800 hover:text-gray-600 transition"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-800 hover:text-gray-600 transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default StickyHeader;
