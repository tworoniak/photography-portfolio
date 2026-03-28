import { Link } from 'react-router-dom';
import { galleries } from '../data/galleries';

export function FeaturedGalleries() {
  return (
    <section className='w-full bg-neutral-950 text-white py-24'>
      <div className='max-w-7xl mx-auto px-6'>
        {/* Header */}
        <div className='flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12'>
          <div>
            <h2 className='font-semibold text-4xl mb-3'>Latest Galleries</h2>
            <p className='text-gray-400 max-w-2xl'>
              Recent shoots from the pit — band, venue, and date so you can jump
              straight into the latest work.
            </p>
          </div>

          <Link
            to='/galleries'
            className='inline-flex items-center justify-center text-center rounded-md border border-white/30 px-4 py-2 text-sm uppercase tracking-wide hover:bg-graphite/70 hover:text-muted transition'
          >
            View All
          </Link>
        </div>

        {/* Grid */}
        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
          {Object.entries(galleries).map(([slug, gallery]) => (
            <Link
              key={slug}
              to={`/galleries/${slug}`}
              className='
                group rounded-xl overflow-hidden
                border border-white/10 bg-white/5
                hover:border-white/25 transition cursor-pointer
              '
            >
              {/* Image */}
              <div className='relative h-56 overflow-hidden'>
                <img
                  src={gallery.photos[0].src}
                  alt={`${gallery.title} at ${gallery.venue}`}
                  className='h-full w-full object-cover transition duration-500 group-hover:scale-105'
                  loading='lazy'
                />

                {/* Gradient for readable text */}
                <div className='absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent' />
              </div>

              {/* Meta */}
              <div className='p-5'>
                <p className='font-semibold text-lg leading-snug mb-1'>
                  {gallery.title}
                </p>
                <p className='text-sm text-gray-400 mb-3'>{gallery.venue}</p>

                <p className='text-xs uppercase tracking-widest text-white/70'>
                  {gallery.concertDate}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
