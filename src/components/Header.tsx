import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import { galleries } from '../data/galleries';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // mobile menu
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // mobile dropdown
  const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState(false); // desktop dropdown

  return (
    <header className='bg-[#0a0a0a]/80 text-white shadow-md sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto py-4 flex items-center justify-between'>
        {/* Logo */}
        <Link to='/' className='text-2xl font-bold'>
          Thomas Woroniak Photography
        </Link>

        {/* Desktop Navigation */}
        <nav className='hidden md:flex items-center space-x-8 uppercase text-sm underline-offset-2'>
          <Link to='/' className='hover:text-accent transition hover:underline'>
            Home
          </Link>

          <Link
            to='/featured'
            className='hover:text-accent transition hover:underline'
          >
            Featured
          </Link>

          {/* Desktop Galleries dropdown */}
          <div className='relative'>
            <button
              className='hover:text-accent transition'
              onMouseEnter={() => setIsDesktopDropdownOpen(true)}
              onMouseLeave={() => setIsDesktopDropdownOpen(false)}
            >
              <Link
                to='/galleries'
                className='hover:text-accent transition uppercase hover:underline'
              >
                Galleries
              </Link>
            </button>

            {/* Dropdown */}
            {isDesktopDropdownOpen && (
              <div
                className='absolute top-3 left-0 mt-2 w-48 bg-gray-800 rounded-md shadow-md z-50'
                onMouseEnter={() => setIsDesktopDropdownOpen(true)}
                onMouseLeave={() => setIsDesktopDropdownOpen(false)}
              >
                {Object.entries(galleries).map(([key, gallery]) => (
                  <Link
                    key={key}
                    to={`/galleries/${key}`}
                    className='block px-4 py-2 hover:bg-gray-700 transition normal-case'
                  >
                    {gallery.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link
            to='/about'
            className='hover:text-accent transition hover:underline'
          >
            About
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className='md:hidden text-2xl focus:outline-none'
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className='md:hidden bg-gray-900 shadow-md'>
          <div className='flex flex-col px-4 py-2 space-y-2'>
            <Link
              to='/'
              className='hover:text-accent transition'
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>

            <Link
              to='/featured'
              className='hover:text-accent transition'
              onClick={() => setIsOpen(false)}
            >
              Featured
            </Link>

            {/* Mobile Galleries collapsible */}
            <button
              className='text-left hover:text-accent transition'
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              Galleries
            </button>

            {isDropdownOpen && (
              <div className='pl-4 flex flex-col space-y-1'>
                {Object.entries(galleries).map(([key, gallery]) => (
                  <Link
                    key={key}
                    to={`/galleries/${key}`}
                    className='hover:text-accent transition'
                    onClick={() => setIsOpen(false)}
                  >
                    {gallery.title}
                  </Link>
                ))}
              </div>
            )}

            <Link
              to='/about'
              className='hover:text-accent transition'
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
