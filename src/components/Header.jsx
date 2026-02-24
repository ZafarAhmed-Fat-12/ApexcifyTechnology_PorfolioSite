import React from "react";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          Zafar Ahmed
        </div>
        <ul className="flex space-x-6">
          <li><a href="#home" className="hover:text-blue-300">Home</a></li>
          <li><a href="#about" className="hover:text-blue-300">About</a></li>
          <li><a href="#projects" className="hover:text-blue-300">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-300">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
