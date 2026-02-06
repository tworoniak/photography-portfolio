import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import type { Photo } from '../types/photo';

type Props = {
  photos: Photo[];
  index: number;
  onClose: () => void;
};

type CustomSlide = {
  src: string;
  alt?: string;
  caption?: string;
  description?: string;
};

export const LightboxModal = ({ photos, index, onClose }: Props) => {
  return (
    <Lightbox
      open
      close={onClose}
      index={index}
      slides={photos.map((p) => ({
        src: p.src,
        alt: p.alt,
        caption: p.caption,
        description: p.description,
      }))}
      render={{
        slide: ({ slide }) => {
          const s = slide as CustomSlide;

          return (
            <div className='flex flex-col items-center'>
              <img
                src={s.src}
                alt={s.alt || s.caption || ''}
                className='max-w-full max-h-[80vh] select-none rounded-lg'
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
              />

              {s.caption && (
                <div>
                  <p className='mt-4 text-center text-xs uppercase tracking-widest text-muted'>
                    {s.caption}
                  </p>
                  <p className='mt-1 text-center text-xs uppercase tracking-widest text-subtle'>
                    {s.description}
                  </p>
                </div>
              )}
            </div>
          );
        },
      }}
    />
  );
};
