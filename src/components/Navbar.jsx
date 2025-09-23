function Navbar() {
  return (
    <nav className="bg-[#124170] text-[#DDF4E7] px-6 py-4 shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-wide">MyPortfolio</h1>
        <ul className="flex space-x-6 text-sm font-medium">
          <li><a href="#about" className="hover:text-[#67C090] transition">About</a></li>
          <li><a href="#education" className="hover:text-[#67C090] transition">Education</a></li>
          <li><a href="#skills" className="hover:text-[#67C090] transition">Skills</a></li>
          <li><a href="#projects" className="hover:text-[#67C090] transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-[#67C090] transition">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
