import { Link } from 'react-router-dom';
import { cldImage } from '../utils/cloudinary';

type FeaturedImage = {
  src: string;
  alt?: string;
  colSpan: string;
  rowSpan?: string;
  link?: string;
};

const featuredImages: FeaturedImage[] = [
  {
    src: cldImage('e7421ec4-de22-4e62-b5c1-0db5e0557c3d_rw_1920_opydqg'),
    colSpan: 'col-span-4',
    rowSpan: 'row-span-2',
  },
  {
    src: cldImage('85e598e6-4220-4195-976c-fde92dc5f140_rw_1920_dwtunj'),
    colSpan: 'col-span-2',
  },
  {
    src: cldImage('cb5e8ec1-0319-4d76-b8df-ae604a09820d_rw_3840_t9zuno'),
    colSpan: 'col-span-2',
  },
  {
    src: cldImage('a0f78ed3-644b-4c1e-aec2-4a3044e3a917_rw_1920_aa4fsf'),
    colSpan: 'col-span-3',
    rowSpan: 'row-span-3',
  },
  {
    src: cldImage('8fe2a9b3-4734-49b8-a95b-86d755b2ab85_rw_3840_wnrmau'),
    colSpan: 'col-span-3',
    rowSpan: 'row-span-2',
  },
];

const FeaturedGrid = () => {
  return (
    <section className='bg-black py-16'>
      <div className='max-w-7xl mx-auto px-4'>
        {/* Section header */}
        <h2 className='text-3xl text-white mb-4'>Featured Work</h2>
        <p className='text-gray-400 mb-10 max-w-xl'>
          A curated selection of concert, portrait, and commissioned
          photography.
        </p>

        {/* Editorial grid */}
        <div className='grid grid-cols-12 auto-rows-[200px] gap-4'>
          {featuredImages.map((img, i) => (
            <div
              key={i}
              className={`${img.colSpan} ${img.rowSpan ?? ''} overflow-hidden rounded-lg`}
            >
              <img
                src={img.src}
                alt={img.alt ?? ''}
                className='w-full h-full object-cover transition-transform duration-500 hover:scale-105'
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>
          ))}

          {/* See more tile */}
          <div className='col-span-3 row-span-1 bg-gray-900 rounded-lg flex items-center justify-center'>
            <Link
              to='/featured'
              className='text-white text-lg tracking-wide hover:text-accent transition'
            >
              See More →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedGrid;
