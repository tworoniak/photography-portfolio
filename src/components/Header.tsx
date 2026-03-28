import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // mobile menu

  return (
    <header className='bg-background/60 text-white shadow-lg sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto p-4 flex items-center justify-between'>
        {/* Logo */}
        <Link to='/' className='text-muted text-sm md:text-2xl font-bold'>
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

          <Link
            to='/galleries'
            className='hover:text-accent transition uppercase hover:underline'
          >
            Galleries
          </Link>

          <Link
            to='/about'
            className='hover:text-accent transition hover:underline'
          >
            About
          </Link>

          <Link
            to='/contact'
            className='hover:text-accent transition hover:underline'
          >
            Contact
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
        <nav className='md:hidden bg-surface shadow-md'>
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

            <Link
              to='/galleries'
              className='hover:text-accent transition'
              onClick={() => setIsOpen(false)}
            >
              Galleries
            </Link>

            <Link
              to='/about'
              className='hover:text-accent transition'
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>

            <Link
              to='/contact'
              className='hover:text-accent transition'
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};
