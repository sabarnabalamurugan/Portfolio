import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#124170] text-[#DDF4E7] px-6 py-4 shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-wide">MyPortfolio</h1>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-[#DDF4E7] focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          <li><a href="#about" className="hover:text-[#67C090] transition">About</a></li>
          <li><a href="#education" className="hover:text-[#67C090] transition">Education</a></li>
          <li><a href="#skills" className="hover:text-[#67C090] transition">Skills</a></li>
          <li><a href="#projects" className="hover:text-[#67C090] transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-[#67C090] transition">Contact</a></li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden mt-4 space-y-2 text-sm font-medium">
          <li><a href="#about" className="block px-4 py-2 hover:bg-[#26667F] rounded">About</a></li>
          <li><a href="#education" className="block px-4 py-2 hover:bg-[#26667F] rounded">Education</a></li>
          <li><a href="#skills" className="block px-4 py-2 hover:bg-[#26667F] rounded">Skills</a></li>
          <li><a href="#projects" className="block px-4 py-2 hover:bg-[#26667F] rounded">Projects</a></li>
          <li><a href="#contact" className="block px-4 py-2 hover:bg-[#26667F] rounded">Contact</a></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
