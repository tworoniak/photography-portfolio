import { useRef, useState } from 'react';

type VideoSource = {
  src: string;
  type?: string; // e.g. "video/mp4"
};

type Props = {
  sources: VideoSource[]; // allow mp4 + webm fallback
  poster?: string;
  title?: string;
  className?: string;

  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
  playsInline?: boolean; // important on iOS
};

export function VideoPlayer({
  sources,
  poster,
  title,
  className = '',
  autoPlay = false,
  loop = false,
  muted = false,
  controls = true,
  playsInline = true,
}: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isReady, setIsReady] = useState(false);

  return (
    <section className={`w-full py-8 bg-background ${className}`}>
      <div className='max-w-4xl mx-auto'>
        <video
          ref={videoRef}
          className='w-full h-auto rounded-lg bg-black'
          poster={poster}
          controls={controls}
          autoPlay={autoPlay}
          loop={loop}
          muted={muted}
          playsInline={playsInline}
          preload='metadata'
          aria-label={title || 'Video'}
          onCanPlay={() => setIsReady(true)}
        >
          {sources.map((s) => (
            <source key={s.src} src={s.src} type={s.type} />
          ))}
          Sorry, your browser doesn’t support embedded videos.
        </video>
        {/* Optional: tiny “loading” hint before metadata loads */}
        {!isReady && (
          <div className='mt-2 text-xs text-muted hidden'>Loading video…</div>
        )}
      </div>
    </section>
  );
}

