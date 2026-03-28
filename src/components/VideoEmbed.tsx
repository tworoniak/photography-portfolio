type Props = {
  url: string; // full embed URL preferred
  title?: string;
  className?: string;
};

export function VideoEmbed({
  url,
  title = 'Video',
  className = '',
}: Props) {
  return (
    <div className={`w-full ${className}`}>
      <div className='relative w-full aspect-video overflow-hidden rounded-lg bg-black'>
        <iframe
          src={url}
          title={title}
          className='absolute inset-0 h-full w-full'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen
        />
      </div>
    </div>
  );
}

