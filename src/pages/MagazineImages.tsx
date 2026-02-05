import { useState } from 'react';
import { GalleryGrid } from '../components/GalleryGrid';
import { LightboxModal } from '../components/LightboxModal';
import { magazineImages } from '../data/magazines';

const MagazineImages = () => {
  const [index, setIndex] = useState<number | null>(null);

  return (
    <div className='max-w-7xl mx-auto px-4 py-12'>
      <h1 className='text-3xl tracking-wide mb-6 text-accent font-bold text-center'>
        Magazine Features / Tear Sheets
      </h1>
      <p className='text-gray-400 text-center mb-10 w-full'>
        A selection of print magazine features.
      </p>

      <GalleryGrid photos={magazineImages} onSelect={setIndex} />

      {index !== null && (
        <LightboxModal
          photos={magazineImages}
          index={index}
          onClose={() => setIndex(null)}
        />
      )}
    </div>
  );
};

export default MagazineImages;
