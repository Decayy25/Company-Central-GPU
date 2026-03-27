import { useState } from "react";

import logo from "../../assets/material/Logo-Header.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-slate-600 text-[#bdfffd] top-0 z-40 fixed">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4">
        
        {/* Logo */}
        <div className="text-3xl font-bold tracking-wide flex items-center">
          <img src={logo} className="max-w-100" />
        </div>

        {/* Menu Desktop */}
        <nav className="hidden md:flex gap-8 text-2xl">
          <a href="#" className="hover:text-[#589c00] transition">About</a>
          <a href="#" className="hover:text-[#589c00] transition">Work</a>
          <a href="#" className="hover:text-[#589c00] transition">Tech</a>
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
          <a href="#" className="block hover:text-teal-300">About</a>
          <a href="#" className="block hover:text-teal-300">Work</a>
          <a href="#" className="block hover:text-teal-300">Tech</a>
        </div>
      )}
    </header>
  );
}