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
    src: cldImage('13bc2068-aef9-4514-9464-afd5ddf90136_rw_1920_temo46'),
    colSpan: 'col-span-1',
    rowSpan: 'row-span-2',
  },

  {
    src: cldImage('a97459a3-9701-4427-adc1-960bb5a487f2_rw_1920_j3i7vm'),
    colSpan: 'col-span-1',
    rowSpan: 'row-span-1',
  },
  {
    src: cldImage('8fe2a9b3-4734-49b8-a95b-86d755b2ab85_rw_3840_wnrmau'),
    colSpan: 'col-span-3',
    rowSpan: 'row-span-2',
  },

  {
    src: cldImage('a9976f65-5597-4615-85ab-1f43d99c6232_rw_1920_zcsakv'),
    colSpan: 'col-span-1',
    rowSpan: 'row-span-1',
  },
  {
    src: cldImage('bf063654-72bc-4248-a4b1-7d2e3cada001_rw_1920_mohw3l'),
    colSpan: 'col-span-1',
    rowSpan: 'row-span-1',
  },
  {
    src: cldImage('b61cd8dd-1157-4681-bc76-c065a2cf5275_rw_3840_u4dw1o'),
    colSpan: 'col-span-3',
    rowSpan: 'row-span-1',
  },
  {
    src: cldImage('03d6bb04-aca8-4157-8e14-5a1ded28c2f5_rw_1920_s9ei4l'),
    colSpan: 'col-span-1',
    rowSpan: 'row-span-1',
  },
];

const FeaturedGrid = () => {
  return (
    <section className='bg-black py-16'>
      <div className='w-full mx-auto px-4 md:px-8'>
        {/* Section header */}
        <h3 className='text-3xl text-gray-300 text-center mb-4 uppercase font-semibold'>
          Featured Work
        </h3>
        <p className='text-gray-400 text-center mb-10 w-full'>
          A curated selection of concert, portrait, and commissioned
          photography.
        </p>

        {/* Editorial grid */}
        <div className='grid grid-cols-12 auto-rows-[200px] gap-2 relative'>
          {featuredImages.map((img, i) => (
            <div
              key={i}
              className={`${img.colSpan} ${img.rowSpan ?? ''} overflow-hidden`}
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
          <div className='w-64 p-8 bg-gray-900/50 rounded-lg flex items-center justify-center absolute bottom-0 right-0 hover:bg-gray-500/20 cursor-pointer'>
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
