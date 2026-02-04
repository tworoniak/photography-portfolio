import { useMemo, useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { cldImage } from '../utils/cloudinary';

type Slide = {
  id: string;
  src: string;
  alt: string;
};

export default function HomeCarousel() {
  // Replace with your own images (local imports or URLs)
  const slides: Slide[] = useMemo(
    () => [
      {
        id: '1',
        src: cldImage('e7421ec4-de22-4e62-b5c1-0db5e0557c3d_rw_1920_opydqg'),
        alt: 'Slide 1',
      },
      {
        id: '2',
        src: cldImage('85e598e6-4220-4195-976c-fde92dc5f140_rw_1920_dwtunj'),
        alt: 'Slide 2',
      },
      {
        id: '3',
        src: cldImage('a0f78ed3-644b-4c1e-aec2-4a3044e3a917_rw_1920_aa4fsf'),
        alt: 'Slide 3',
      },
      {
        id: '4',
        src: cldImage('13bc2068-aef9-4514-9464-afd5ddf90136_rw_1920_temo46'),
        alt: 'Slide 4',
      },
      {
        id: '5',
        src: cldImage('a97459a3-9701-4427-adc1-960bb5a487f2_rw_1920_j3i7vm'),
        alt: 'Slide 5',
      },
      {
        id: '6',
        src: cldImage('8fe2a9b3-4734-49b8-a95b-86d755b2ab85_rw_3840_wnrmau'),
        alt: 'Slide 1',
      },
      {
        id: '7',
        src: cldImage('a9976f65-5597-4615-85ab-1f43d99c6232_rw_1920_zcsakv'),
        alt: 'Slide 2',
      },
      {
        id: '8',
        src: cldImage('bf063654-72bc-4248-a4b1-7d2e3cada001_rw_1920_mohw3l'),
        alt: 'Slide 3',
      },
      {
        id: '9',
        src: cldImage('b61cd8dd-1157-4681-bc76-c065a2cf5275_rw_3840_u4dw1o'),
        alt: 'Slide 4',
      },
      {
        id: '10',
        src: cldImage('03d6bb04-aca8-4157-8e14-5a1ded28c2f5_rw_1920_s9ei4l'),
        alt: 'Slide 5',
      },
    ],
    [],
  );

  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const scrollByOne = (direction: 'prev' | 'next') => {
    const el = scrollerRef.current;
    if (!el) return;

    // Scroll by ~one "card" width (tweak this to taste)
    const amount = Math.round(el.clientWidth * 0.55);
    el.scrollBy({
      left: direction === 'next' ? amount : -amount,
      behavior: 'smooth',
    });
  };

  return (
    <section className='w-full bg-neutral-950 py-16'>
      <div className=' mx-auto px-6'>
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
          {slides.map((slide, idx) => (
            <article
              key={slide.id}
              className='
                snap-center shrink-0
                w-60 sm:w-70 md:w-[320px]
                h-90 sm:h-100 md:h-110
                overflow-hidden bg-neutral-900
                shadow-[0_10px_40px_rgba(0,0,0,0.45)] transition duration-300 brightness-50 hover:brightness-100
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

        {/* Controls (bottom center like your screenshot) */}
        <div className='flex items-center justify-center gap-4'>
          <button
            type='button'
            onClick={() => scrollByOne('prev')}
            className='
              h-10 w-10 rounded-full border border-white/25 text-white/80
              hover:text-white hover:border-white/60
              transition flex items-center justify-center  cursor-pointer
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
      </div>
    </section>
  );
}
