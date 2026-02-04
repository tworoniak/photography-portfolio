import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookSquare, FaLinkedin } from 'react-icons/fa';
import { SiLinktree } from 'react-icons/si';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='bg-gray-900/50 px-8 pt-40 mt-24'>
      <div className='flex flex-col md:flex-row justify-center md:justify-between items-center mt-4 mb-8 py-8'>
        <p className='text-gray-400 text-2xl uppercase font-bold text-center mb-8 md:mb-0'>
          Thomas Woroniak Photography
        </p>
        <div className='flex gap-4'>
          <Link
            to='https://linktr.ee/antiherophotos'
            target='_blank'
            className='hover:text-red-500 transition'
          >
            <SiLinktree />
          </Link>
          <Link
            to='https://www.instagram.com/antiherophotos/'
            target='_blank'
            className='hover:text-red-500 transition'
          >
            <FaInstagram />
          </Link>
          <Link
            to='https://www.facebook.com/AntiHeroPhotos'
            target='_blank'
            className='hover:text-red-500 transition'
          >
            <FaFacebookSquare />
          </Link>
          <Link
            to='https://www.linkedin.com/in/thomasworoniak1/'
            target='_blank'
            className='hover:text-red-500 transition'
          >
            <FaLinkedin />
          </Link>
        </div>
      </div>
      <p className='text-xs md:text-sm text-gray-400 text-center py-4'>
        &copy; {currentYear} Thomas Woroniak Photography. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
