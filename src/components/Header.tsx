import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IconMenu2 } from '@tabler/icons-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 right-0 w-full">
      <div className="flex justify-end items-center p-4">
        {/* Hamburger Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          <IconMenu2 size={24} strokeWidth={2} />
        </button>

        {/* Navigation Links */}
        <ul
          className={`absolute top-full right-0 bg-white shadow-lg md:static md:flex md:bg-transparent ${
            isMenuOpen ? 'block' : 'hidden'
          }`}
        >
          <li className="p-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'font-bold text-blue-500' : 'text-gray-700'
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
          </li>
          <li className="p-2">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? 'font-bold text-blue-500' : 'text-gray-700'
              }
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </NavLink>
          </li>
          <li className="p-2">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? 'font-bold text-blue-500' : 'text-gray-700'
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
