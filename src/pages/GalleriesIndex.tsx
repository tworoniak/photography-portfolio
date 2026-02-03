import { Link } from 'react-router-dom';
import { galleries } from '../data/galleries';

export default function GalleriesIndex() {
  return (
    <div className='max-w-7xl mx-auto px-4 py-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
      {Object.entries(galleries).map(([key, gallery]) => (
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
  );
}
