import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import navLogo from "../assets/examMentorLogo-removebg-preview.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isMobileCategoriesOpen, setIsMobileCategoriesOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => {
    setMenuOpen(false);
    setIsMobileCategoriesOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`bg-[#121212] bg-opacity-90
 sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "shadow-xl" : "shadow-md"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                src={navLogo}
                alt="Logo"
                className="h-16 w-16 transform transition duration-300 hover:scale-110 cursor-pointer rounded-full"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className="text-white hover:text-[#269ee4] transition-colors text-lg font-medium relative group"
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-[#fd671c] transition-all group-hover:w-full"></span>
              </Link>

              {/* About Section */}
              <Link
                to="/about"
                className="text-white hover:text-[#269ee4] transition-colors text-lg font-medium relative group"
              >
                About
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-[#fd671c] transition-all group-hover:w-full"></span>
              </Link>

              {/* Categories Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsCategoriesOpen(true)}
                onMouseLeave={() => setIsCategoriesOpen(false)}
              >
                <button className="text-white hover:text-[#269ee4] transition-colors text-lg font-medium relative group">
                  Courses
                  <span className="absolute -bottom-1 left-0 w-0 h-1 bg-[#fd671c] transition-all group-hover:w-full"></span>
                </button>
                {isCategoriesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2">
                    <Link
                      to="/exam/ssc"
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
                    >
                      SSC
                    </Link>
                    <Link
                      to="/exam/upsc"
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
                    >
                      UPSC
                    </Link>
                    <Link
                      to="/exam/gate"
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
                    >
                      GATE
                    </Link>
                    <Link
                      to="/exam/iit-jee"
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
                    >
                      IIT-JEE
                    </Link>
                    <Link
                      to="/exam/neet"
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
                    >
                      NEET
                    </Link>
                    <Link
                      to="/exam/banking"
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
                    >
                      Banking
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/features"
                className="text-white hover:text-[#269ee4] transition-colors text-lg font-medium relative group"
              >
                Features
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-[#fd671c] transition-all group-hover:w-full"></span>
              </Link>
              <Link
                to="/pricing"
                className="text-white hover:text-[#269ee4] transition-colors text-lg font-medium relative group"
              >
                Pricing
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-[#fd671c] transition-all group-hover:w-full"></span>
              </Link>
              <Link
                to="/contact"
                className="text-white hover:text-[#269ee4] transition-colors text-lg font-medium relative group"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-[#fd671c] transition-all group-hover:w-full"></span>
              </Link>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex space-x-6">
              <Link
                to="/signup"
                className="px-5 py-2 rounded-lg border-2 border-[#fd671c] text-[#fd671c] 
               hover:bg-[#fd671c] hover:text-white transition duration-300"
              >
                Sign Up
              </Link>

              <Link
                to="/login"
                className="px-5 py-2 rounded-lg border-2 border-[#269ee4] text-[#269ee4] 
               hover:bg-[#269ee4] hover:text-white transition duration-300"
              >
                Login
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`md:hidden fixed inset-0 z-40 bg-black/50 transition-opacity ${
            menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={closeMenu}
        ></div>

        {/* Mobile Menu Content */}
        <div
          className={`md:hidden fixed top-0 right-0 z-50 w-80 h-screen bg-white shadow-2xl transform transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full p-6">
            {/* Close Button */}
            <div className="flex justify-end">
              <button
                onClick={closeMenu}
                className="p-2 rounded-full hover:bg-gray-100 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Mobile Navigation */}
            <nav className="flex flex-col space-y-6 mt-8">
              <Link
                to="/"
                onClick={closeMenu}
                className="text-2xl font-medium text-gray-700 hover:text-[#269ee4] transition-colors px-4 py-2 rounded-lg hover:bg-blue-50"
              >
                Home
              </Link>

              <Link
                to="/about"
                onClick={closeMenu}
                className="text-2xl font-medium text-gray-700 hover:text-[#269ee4] transition-colors px-4 py-2 rounded-lg hover:bg-blue-50"
              >
                About
              </Link>

              {/* Mobile Categories Dropdown */}
              <div className="flex flex-col">
                <button
                  onClick={() =>
                    setIsMobileCategoriesOpen(!isMobileCategoriesOpen)
                  }
                  className="text-2xl font-medium text-gray-700 hover:text-[#269ee4] transition-colors px-4 py-2 rounded-lg hover:bg-blue-50 flex justify-between items-center"
                >
                  Categories
                  <svg
                    className={`w-6 h-6 transform transition-transform ${
                      isMobileCategoriesOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isMobileCategoriesOpen ? "max-h-40" : "max-h-0"
                  }`}
                >
                  <Link
                    to="/exam/ssc"
                    onClick={closeMenu}
                    className="block px-6 py-2 text-xl text-gray-700 hover:text-[#269ee4] hover:bg-blue-50"
                  >
                    SSC
                  </Link>
                  <Link
                    to="/exam/upsc"
                    onClick={closeMenu}
                    className="block px-6 py-2 text-xl text-gray-700 hover:text-[#269ee4] hover:bg-blue-50"
                  >
                    UPSC
                  </Link>
                  <Link
                    to="/exam/gate"
                    onClick={closeMenu}
                    className="block px-6 py-2 text-xl text-gray-700 hover:text-[#269ee4] hover:bg-blue-50"
                  >
                    GATE
                  </Link>
                  <Link
                    to="/exam/iit-jee"
                    onClick={closeMenu}
                    className="block px-6 py-2 text-xl text-gray-700 hover:text-[#269ee4] hover:bg-blue-50"
                  >
                    IIt-JEE
                  </Link>
                  <Link
                    to="/exam/neet"
                    onClick={closeMenu}
                    className="block px-6 py-2 text-xl text-gray-700 hover:text-[#269ee4] hover:bg-blue-50"
                  >
                    NEET
                  </Link>
                  <Link
                    to="/exam/banking"
                    onClick={closeMenu}
                    className="block px-6 py-2 text-xl text-gray-700 hover:text-[#269ee4] hover:bg-blue-50"
                  >
                    Banking
                  </Link>
                </div>
              </div>

              <Link
                to="/genres"
                onClick={closeMenu}
                className="text-2xl font-medium text-gray-700 hover:text-[#269ee4] transition-colors px-4 py-2 rounded-lg hover:bg-blue-50"
              >
                Genres
              </Link>
              <Link
                to="/contact"
                onClick={closeMenu}
                className="text-2xl font-medium text-gray-700 hover:text-[#269ee4] transition-colors px-4 py-2 rounded-lg hover:bg-blue-50"
              >
                Contact
              </Link>
            </nav>

            {/* Mobile CTA Button */}
            <div className="mt-auto pt-8">
              <Link
                to="/subscribe"
                onClick={closeMenu}
                className="block w-full text-center px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:from-blue-700 hover:to-blue-600"
              >
                Subscribe Now
              </Link>
            </div>
          </div>
        </div>
      </header>

      <hr className=" text-white" />
    </>
  );
};

export default Header;
