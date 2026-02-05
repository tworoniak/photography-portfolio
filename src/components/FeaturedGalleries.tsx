import { Link } from 'react-router-dom';
import { cldImage } from '../utils/cloudinary';

type Gallery = {
  id: string;
  image: string;
  band: string;
  venue: string;
  date: string; // "Feb 3, 2026" or ISO
};

export default function FeaturedGalleries() {
  // Replace with your real galleries (or load from API)
  const galleries: Gallery[] = [
    {
      id: 'heilung',
      image: cldImage('_TPW5805-DxO_DeepPRIME_XD2s_swr4ok'),
      band: 'Heilung',
      venue: 'Red Rocks — Morrison, CO',
      date: 'April 23, 2024',
    },
    {
      id: 'jinjer',
      image: cldImage('_TPW3192_hcrohr'),
      band: 'Jinjer',
      venue: 'Uptown Theater — Kansas City, MO',
      date: 'December 10, 2025',
    },
    {
      id: 'suicidaltendencies',
      image: cldImage('TPW05906_vezoal'),
      band: 'Suicidal Tendencies',
      venue: 'HersheyStadium — Hershey, PA',
      date: 'September 20, 2025',
    },
    {
      id: '4',
      image:
        'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1600&q=80',
      band: 'Baroness',
      venue: 'The Granada — Lawrence, KS',
      date: 'Oct 21, 2025',
    },

    // Add up to 8 for a fuller grid
  ];

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
            className='inline-flex items-center justify-center text-center rounded-md border border-white/30 px-4 py-2 text-sm uppercase tracking-wide hover:bg-white/50 hover:text-black transition'
          >
            View All
          </Link>
        </div>

        {/* Grid */}
        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
          {galleries.map((g) => (
            <Link
              key={g.id}
              to={`/galleries/${g.id}`}
              className='
                group rounded-xl overflow-hidden
                border border-white/10 bg-white/5
                hover:border-white/25 transition cursor-pointer
              '
            >
              {/* Image */}
              <div className='relative h-56 overflow-hidden'>
                <img
                  src={g.image}
                  alt={`${g.band} at ${g.venue}`}
                  className='h-full w-full object-cover transition duration-500 group-hover:scale-105'
                  loading='lazy'
                />

                {/* Gradient for readable text */}
                <div className='absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent' />
              </div>

              {/* Meta */}
              <div className='p-5'>
                <p className='font-semibold text-lg leading-snug mb-1'>
                  {g.band}
                </p>
                <p className='text-sm text-gray-400 mb-3'>{g.venue}</p>

                <p className='text-xs uppercase tracking-widest text-white/70'>
                  {g.date}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
