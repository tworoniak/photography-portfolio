import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AboutUs() {
  return (
    <section className='relative w-full bg-gray-900/50 text-white py-32'>
      {/* Subtle gradient / texture */}
      <div className='absolute inset-0 ' />

      {/* Content */}
      <div className='relative z-10 max-w-7xl mx-auto px-8'>
        {/* Top row */}
        <div className='grid md:grid-cols-2 gap-16 items-start'>
          {/* Left */}
          <div>
            <h2 className='font-semibold text-5xl mb-6'>About Me</h2>

            {/* Arrow */}
            <div className='mt-8'>
              <span className='block w-px h-12 bg-gray-600 mb-3' />
              {/* <span className='text-gray-500'>↓</span> */}
            </div>
          </div>

          {/* Right */}
          <p className='text-gray-400 leading-relaxed max-w-lg'>
            Thomas Woroniak is a music photographer and founder of{' '}
            <Link
              to='https://www.antiheromagazine.com'
              target='_blank'
              className='text-red-500 hover:underline md:underline-offset-2'
            >
              Antihero Magazine
            </Link>
            , whose passion for music began at age 10 with the guitar and led
            him to study Classical Guitar Performance and Music Theory at the
            University of Illinois at Chicago. His love for live music inspired
            a career in concert photography, capturing the energy and atmosphere
            of performances, festivals, and editorial shoots. As Editor-in-Chief
            of Antihero Magazine, he provides a comprehensive platform for heavy
            music, featuring artist interviews, album and concert reviews, and
            live event photography. Based in the greater Kansas City area and a
            member of the Professional Photographers of America, Thomas combines
            his skills, dedication, and professional expertise to deliver
            compelling visuals that enhance the music experience and its
            documentation. <br />
            <Link
              to='/about'
              className='inline-block px-4 py-2 mt-4 rounded-md border border-gray-700 bg-gray-900/50 hover:bg-gray-700 cursor-pointer hover:text-white group'
            >
              Read more
              <ArrowRight className='inline ml-2' />
            </Link>
          </p>
        </div>

        {/* Stats */}
        <div className='mt-24 flex flex-col md:flex-row justify-between items-center gap-8 w-full max-w-3xl mx-auto text-center'>
          <Stat value='+15' label='Years Experience' />
          <Divider />
          <Stat value='+500' label='Live Shows Shot' />
          <Divider />
          <Stat value='+150' label='Bands Photographed' />
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className='font-serif text-4xl mb-2'>{value}</p>
      <p className='text-gray-400 text-sm uppercase tracking-wide'>{label}</p>
    </div>
  );
}

function Divider() {
  return (
    <div className='hidden md:flex items-center justify-center'>
      <span className='w-px h-16 bg-gray-700' />
    </div>
  );
}
