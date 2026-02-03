import { MasonryPhotoAlbum } from 'react-photo-album';
import 'react-photo-album/masonry.css';

import type { Photo } from '../types/photo';

type Props = {
  photos: Photo[];
  onSelect: (index: number) => void;
};

export const GalleryGrid = ({ photos, onSelect }: Props) => {
  // Map photos to add props to disable right-click/drag
  const safePhotos = photos.map((p) => ({
    ...p,
    // custom props that react-photo-album passes to <img>
    alt: p.alt ?? '',
    className: 'rounded-lg cursor-zoom-in select-none',
    draggable: false,
    onContextMenu: (e: React.MouseEvent<HTMLImageElement>) =>
      e.preventDefault(),
  }));
  return (
    <div
      className='mt-8 w-full select-none'
      onContextMenu={(e) => e.preventDefault()} // disable right-click
      style={
        { userSelect: 'none', WebkitUserDrag: 'none' } as React.CSSProperties
      } // type cast
    >
      <MasonryPhotoAlbum
        photos={safePhotos}
        // columns={4}
        columns={(width) => {
          if (width < 640) return 1;
          if (width < 1024) return 2;
          if (width < 1280) return 3;
          return 4;
        }}
        padding={4}
        spacing={4}
        onClick={({ index }) => onSelect(index)}
      />
    </div>
  );
};
