import { Link } from 'react-router-dom';
import { useMemo, useState } from 'react';
import { galleries } from '../data/galleries';
import FilterInput from '../components/FilterInput';

export default function GalleriesIndex() {
  const [filter, setFilter] = useState('');

  const filteredGalleries = useMemo(() => {
    const query = filter.trim().toLowerCase();

    if (!query) return Object.entries(galleries);

    return Object.entries(galleries).filter((entry) =>
      entry[1].title.toLowerCase().includes(query),
    );
  }, [filter]);

  return (
    <>
      {/* Filter Bar */}
      <div className='max-w-7xl mx-auto px-4 pt-12'>
        <div className='flex flex-col md:flex-row md:items-end md:justify-between gap-6'>
          <div>
            <h1 className='text-4xl font-semibold mb-2 text-white'>
              Galleries
            </h1>
            <p className='text-white/60'>Filter galleries by band name.</p>
          </div>

          <FilterInput value={filter} onChange={setFilter} />
        </div>

        <p className='text-sm text-white/50 mt-4'>
          Showing {filteredGalleries.length} of {Object.keys(galleries).length}
          {filter.trim() ? ` for “${filter.trim()}”` : ''}
        </p>
      </div>

      {/* Grid */}
      <div className='max-w-7xl mx-auto px-4 py-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {filteredGalleries.map(([key, gallery]) => (
          <Link key={key} to={`/galleries/${key}`} className='group'>
            <div className='relative overflow-hidden rounded-lg'>
              <img
                src={gallery.photos[0].src}
                alt={gallery.title}
                className='w-full h-48 object-cover transition-transform group-hover:scale-105'
              />

              <div className='absolute bottom-0 left-0 right-0 bg-black/50 p-2 text-white text-lg'>
                {gallery.title}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Empty State */}
      {filteredGalleries.length === 0 && (
        <div className='max-w-7xl mx-auto px-4 pb-12 text-white/60 text-center'>
          No galleries found for “{filter.trim()}”.
        </div>
      )}
    </>
  );
}
