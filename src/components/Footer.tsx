import { FaInstagram, FaFacebookSquare, FaLinkedin } from 'react-icons/fa';
import { SiLinktree } from 'react-icons/si';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className='bg-card/50 px-8 pt-40 mt-4'>
      <div className='flex flex-col md:flex-row justify-center md:justify-between items-center mt-4 mb-8 py-8'>
        <p className='text-subtle text-2xl uppercase font-bold text-center mb-8 md:mb-0'>
          Thomas Woroniak Photography
        </p>
        <div className='flex gap-4'>
          <a
            href='https://linktr.ee/antiherophotos'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-accent transition'
          >
            <SiLinktree />
          </a>
          <a
            href='https://www.instagram.com/antiherophotos/'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-accent transition'
          >
            <FaInstagram />
          </a>
          <a
            href='https://www.facebook.com/AntiHeroPhotos'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-accent transition'
          >
            <FaFacebookSquare />
          </a>
          <a
            href='https://www.linkedin.com/in/thomasworoniak1/'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-accent transition'
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
      <p className='text-xs md:text-sm text-gray-400 text-center py-4'>
        &copy; {currentYear} Thomas Woroniak Photography. All rights reserved.
      </p>
    </footer>
  );
};

