// import { Link } from 'react-router-dom';
import { cldImage } from '../utils/cloudinary';

// Swap this public ID for whichever shot works best as the hero background
const heroBg = cldImage('e7421ec4-de22-4e62-b5c1-0db5e0557c3d_rw_1920_opydqg', {
  width: 2000,
});

export function Hero() {
  return (
    <section className='relative w-full h-[60vh] md:h-screen'>
      {/* Background image */}
      <div
        className='absolute inset-0 bg-cover bg-center '
        style={{ backgroundImage: `url('${heroBg}')` }}
      />

      {/* Dark overlay */}
      <div className='absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent' />

      {/* Content */}
      <div className='relative z-10 h-full flex items-center -mt-16'>
        <div className='max-w-7xl mx-auto px-6 text-white flex flex-col justify-center items-center'>
          <img
            src='images/Thomas-Woroniak-white-high-res.png'
            alt='Thomas Woroniak Photography logo'
            className='w-48 sm:w-64 md:w-auto'
          />
          <h1 className='text-white/80 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight uppercase mb-2 md:-mt-24 text-center md:text-left'>
            Concert Photography
          </h1>

          <p className='max-w-xl text-lg md:text-xl text-gray-200 mb-10 text-center '>
            Capturing the raw energy of live performances from the pit.
          </p>
        </div>
      </div>
    </section>
  );
}
