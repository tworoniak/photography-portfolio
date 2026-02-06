import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className='relative w-full h-screen'>
      {/* Background image */}
      <div
        className='absolute inset-0 bg-cover bg-center hue-rotate-180'
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2')",
        }}
      />

      {/* Dark overlay */}
      <div className='absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent' />

      {/* Content */}
      <div className='relative z-10 h-full flex items-center -mt-16'>
        <div className='max-w-7xl mx-auto px-6 text-white'>
          <h1 className='text-white/80 text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight uppercase mb-6 text-center md:text-left'>
            Concert
            <br />
            Photography
          </h1>

          <p className='max-w-xl text-lg md:text-xl text-gray-200 mb-10 text-center md:text-left'>
            Capturing the raw energy of live performances from the pit.
          </p>

          <div className='flex items-center justify-center md:justify-start gap-4'>
            <Link
              to='/galleries'
              className='border border-muted/80 px-8 py-3 uppercase rounded-md tracking-wide text-sm hover:bg-graphite/50 hover:text-muted transition'
            >
              View Galleries
            </Link>

            {/* <a
              href='/contact'
              className='bg-white text-black px-8 py-3 uppercase tracking-wide text-sm hover:bg-gray-200 transition'
            >
              Contact
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
}
