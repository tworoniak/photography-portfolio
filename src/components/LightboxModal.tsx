import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import type { Photo } from '../types/photo';

type Props = {
  photos: Photo[];
  index: number;
  onClose: () => void;
};

export const LightboxModal = ({ photos, index, onClose }: Props) => {
  return (
    <Lightbox
      open
      close={onClose}
      index={index}
      slides={photos.map((p) => ({ src: p.src }))}
      // Disable right-click and drag
      render={{
        slide: ({ slide }) => (
          <img
            src={slide.src}
            alt=''
            className='max-w-full max-h-[80vh] select-none rounded-lg'
            draggable={false} // prevent dragging
            onContextMenu={(e) => e.preventDefault()} // prevent right-click
          />
        ),
      }}
    />
  );
};
