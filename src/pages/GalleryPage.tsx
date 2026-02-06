import { useState } from 'react';
import { GalleryGrid } from '../components/GalleryGrid';
import { LightboxModal } from '../components/LightboxModal';
import { galleries } from '../data/galleries';

type Props = {
  band: keyof typeof galleries;
};

const GalleryPage = ({ band }: Props) => {
  const gallery = galleries[band];
  const [index, setIndex] = useState<number | null>(null);

  return (
    <div className='max-w-7xl mx-auto px-4 py-12'>
      <h1 className='text-3xl tracking-wide mb-6 text-text font-bold text-center'>
        {gallery.title}
      </h1>
      <p className='text-center'>{gallery.description}</p>
      <p className='text-center text-xs'>{gallery.concertDate}</p>

      <GalleryGrid photos={gallery.photos} onSelect={setIndex} />

      {index !== null && (
        <LightboxModal
          photos={gallery.photos}
          index={index}
          onClose={() => setIndex(null)}
        />
      )}
    </div>
  );
};

export default GalleryPage;
