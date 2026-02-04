export default function Hero() {
  return (
    <section className='relative w-screen h-screen'>
      {/* Background image */}
      <div
        className='absolute inset-0 bg-cover bg-center'
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2')",
        }}
      />

      {/* Dark overlay */}
      <div className='absolute inset-0 bg-black/60' />

      {/* Content */}
      <div className='relative z-10 h-full flex items-center'>
        <div className='max-w-7xl mx-auto px-6 text-white'>
          <h1 className='text-5xl md:text-7xl font-semibold tracking-tight mb-6'>
            Concert
            <br />
            Photography
          </h1>

          <p className='max-w-xl text-lg md:text-xl text-gray-200 mb-10'>
            Capturing the raw energy of live performances from the pit.
          </p>

          <div className='flex gap-4'>
            <a
              href='/galleries'
              className='border border-white px-8 py-3 uppercase tracking-wide text-sm hover:bg-white/50 hover:text-black transition'
            >
              View Galleries
            </a>

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
