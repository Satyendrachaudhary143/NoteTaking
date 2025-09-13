import { NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaBookOpen } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-blue-400 font-medium border-b-2 border-blue-400 pb-1"
      : "hover:text-blue-300";

  return (
    <nav className="bg-gray-800 text-white px-4 py-3 shadow-md">
      <div className="flex justify-between items-center">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <FaBookOpen size={24} className="text-blue-400" />
          <span className="text-lg font-semibold">NoteKeeper</span>
        </div>

        {/* Right: Desktop Links */}
        <div className="hidden sm:flex gap-6">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/create-note" className={navLinkClass}>
            Create Note
          </NavLink>
        </div>

        {/* Mobile: Toggle Button */}
        <div className="sm:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="sm:hidden mt-2 flex flex-col gap-2">
          <NavLink to="/" className={navLinkClass} onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
          <NavLink
            to="/create-note"
            className={navLinkClass}
            onClick={() => setMenuOpen(false)}
          >
            Create Note
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;