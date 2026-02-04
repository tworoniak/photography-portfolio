import { useState } from 'react';
import { GalleryGrid } from '../components/GalleryGrid';
import { LightboxModal } from '../components/LightboxModal';
import { featuredImages } from '../data/featuredImages';

const FeaturedImages = () => {
  const [index, setIndex] = useState<number | null>(null);

  return (
    <div className='max-w-7xl mx-auto px-4 py-12'>
      <h1 className='text-3xl tracking-wide mb-6 text-accent font-bold text-center'>
        Featured Images
      </h1>
      <p className='text-gray-400 text-center mb-10 w-full'>
        A curated selection of concert, portrait, and commissioned photography.
      </p>

      <GalleryGrid photos={featuredImages} onSelect={setIndex} />

      {index !== null && (
        <LightboxModal
          photos={featuredImages}
          index={index}
          onClose={() => setIndex(null)}
        />
      )}
    </div>
  );
};

export default FeaturedImages;
