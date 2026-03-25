import { useState } from "react";

import logo from "../assets/Logo-Header.png";
import "../App.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-slate-600 text-[#bdfffd]">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <div className="text-3xl font-bold tracking-wide flex items-center">
          <img src={logo} className="w-64" />
        </div>

        {/* Menu Desktop */}
        <nav className="hidden md:flex gap-8 text-lg">
          <a href="#" className="hover:text-[#589c00] transition">About Us</a>
          <a href="#" className="hover:text-[#589c00] transition">Portfolio</a>
          <a href="#" className="hover:text-[#589c00] transition">Visi Misi</a>
          <a href="#" className="hover:text-[#589c00] transition">Contact</a>
        </nav>

        {/* Hamburger Button */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="text-[#bdfffd] hover:text-[#e9001d] rounded text-lg">
            <i className="fi fi-br-menu-burger text-lx5"></i>
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-700 px-6 py-4 space-y-3 text-lg">
          <a href="#" className="block hover:text-teal-300">About Us</a>
          <a href="#" className="block hover:text-teal-300">Portfolio</a>
          <a href="#" className="block hover:text-teal-300">Visi Misi</a>
          <a href="#" className="block hover:text-teal-300">Contact</a>
        </div>
      )}
    </header>
  );
}