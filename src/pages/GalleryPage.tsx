import { useState } from 'react';
import { Link } from 'react-router-dom';
import { GalleryGrid } from '../components/GalleryGrid';
import { LightboxModal } from '../components/LightboxModal';
import { galleries } from '../data/galleries';
import { usePageTitle } from '../hooks/usePageTitle';

type Props = {
  band: keyof typeof galleries;
};

const GalleryPage = ({ band }: Props) => {
  const gallery = galleries[band];
  usePageTitle(gallery.title);
  const [index, setIndex] = useState<number | null>(null);

  return (
    <div className='max-w-7xl mx-auto px-4 py-12'>
      <Link
        to='/galleries'
        className='inline-flex items-center gap-1 text-sm text-white/50 hover:text-white transition mb-8'
      >
        ← All Galleries
      </Link>

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
