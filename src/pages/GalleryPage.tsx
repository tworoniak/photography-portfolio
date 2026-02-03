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
    <div className='max-w-7xl mx-auto'>
      <h1 className='text-3xl tracking-wide mb-6 text-accent font-bold'>
        {gallery.title}
      </h1>
      <p>{gallery.description}</p>

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
