import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/images/logo.jpeg";
import NavLink from "./NavLink";


const nav = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#resume", label: "Resume" },
  { href: "#projects", label: "Projects" },

  { href: "#contact", label: "Contact" },
];
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white shadow-lg z-50 border-b border-teal-500/20">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">

        <div className="flex items-center gap-3">
          <a href="#home" className="hover:scale-110 transition-transform duration-300">
            <img
              src={logo}
              alt="Zafar's Logo"
              className="w-12 h-12 rounded-full border-2 border-teal-400 shadow-lg hover:shadow-teal-400/50 transition-shadow"
            />
          </a>
          <span className="text-xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
            Zafar
          </span>
        </div>


        <ul className="hidden md:flex space-x-8">
          {nav.map((link) => (
            <NavLink key={link.label} href={link.href} label={link.label} setState={setIsMenuOpen} />
          ))}

        </ul>


        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
            className="p-2 rounded-lg hover:bg-gray-700 transition-colors duration-300"
          >
            {isMenuOpen ? (
              <FaTimes className="w-6 h-6 text-teal-400" />
            ) : (
              <FaBars className="w-6 h-6 text-teal-400" />
            )}
          </button>
        </div>
      </nav>


      <div
        className={`
          md:hidden bg-gradient-to-b from-gray-800 to-gray-900 absolute w-full
          transition-all duration-500 ease-in-out overflow-hidden
          ${isMenuOpen ? "top-full opacity-100 max-h-96" : "-top-96 opacity-0 max-h-0"}
        `}
      >
        <ul className="px-6 py-6 flex flex-col space-y-4 border-t border-teal-500/20">
          {[
            { href: "#home", label: "Home" },
            { href: "#about", label: "About" },
            { href: "#skills", label: "Skills" },
            { href: "#resume", label: "Resume" },
            { href: "#projects", label: "Projects" },
            { href: "#contact", label: "Contact" },
          ].map((link) => (
            <li key={link.label} className="relative group">
              <a
                href={link.href}
                className="block py-2 text-white font-medium hover:text-teal-400 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-blue-500 group-hover:w-full transition-all duration-500 ease-out"></span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
