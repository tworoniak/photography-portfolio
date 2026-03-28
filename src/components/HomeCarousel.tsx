import { useRef, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { LightboxModal } from '../components/LightboxModal';
import type { Photo } from '../types/photo';
import { carouselSlides } from '../data/carousel';

const carouselPhotos: Photo[] = carouselSlides.map((s) => ({
  src: s.src,
  width: 3,
  height: 2,
  alt: s.alt,
  caption: s.caption,
}));

export function HomeCarousel() {
  const [index, setIndex] = useState<number | null>(null);
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const scrollByOne = (direction: 'prev' | 'next') => {
    const el = scrollerRef.current;
    if (!el) return;

    const amount = Math.round(el.clientWidth * 0.55);
    el.scrollBy({
      left: direction === 'next' ? amount : -amount,
      behavior: 'smooth',
    });
  };

  return (
    <section className='w-full bg-neutral-950 py-16'>
      <div className='mx-auto px-6'>
        {/* Filmstrip */}
        <div
          ref={scrollerRef}
          className='
            flex gap-8 overflow-x-auto pb-6
            snap-x snap-mandatory scroll-smooth
            [-ms-overflow-style:none] [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          '
        >
          {carouselSlides.map((slide, idx) => (
            <article
              key={slide.id}
              onClick={() => setIndex(idx)}
              className='
                snap-center shrink-0
                w-60 sm:w-70 md:w-[320px]
                h-90 sm:h-100 md:h-110
                overflow-hidden bg-neutral-900
                shadow-[0_10px_40px_rgba(0,0,0,0.45)]
                transition duration-300
                lg:brightness-50 lg:hover:brightness-100
                hover:scale-105 cursor-pointer
              '
            >
              <img
                src={slide.src}
                alt={slide.alt}
                className='h-full w-full object-cover'
                loading={idx === 0 ? 'eager' : 'lazy'}
              />
            </article>
          ))}
        </div>

        {/* Controls */}
        <div className='flex items-center justify-center gap-4'>
          <button
            type='button'
            onClick={() => scrollByOne('prev')}
            className='
              h-10 w-10 rounded-full border border-white/25 text-white/80
              hover:text-white hover:border-white/60
              transition flex items-center justify-center cursor-pointer
            '
            aria-label='Previous'
          >
            <ArrowLeft />
          </button>

          <button
            type='button'
            onClick={() => scrollByOne('next')}
            className='
              h-10 w-10 rounded-full border border-white/25 text-white/80
              hover:text-white hover:border-white/60
              transition flex items-center justify-center cursor-pointer
            '
            aria-label='Next'
          >
            <ArrowRight />
          </button>
        </div>

        {/* Lightbox */}
        {index !== null && (
          <LightboxModal
            photos={carouselPhotos}
            index={index}
            onClose={() => setIndex(null)}
          />
        )}
      </div>
    </section>
  );
}
