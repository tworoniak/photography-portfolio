export default function PublishedIn() {
  const publications = [
    'Antihero Magazine',
    'Guitar World',
    'Kerrang!',
    'RockRevolt Magazine',
    'In The Now Magazine',
  ];

  return (
    <section className='w-full bg-surface text-text py-24'>
      <div className='max-w-7xl mx-auto px-6'>
        {/* Heading */}
        <div className='mb-14 text-center'>
          <h2 className='font-semibold text-4xl mb-4'>Published In</h2>
          <p className='text-subtle max-w-xl mx-auto'>
            My work has been featured by music publications and media outlets
            covering live performances and artist stories worldwide.
          </p>
        </div>

        {/* Publications */}
        <div className='flex flex-wrap justify-center gap-x-12 gap-y-6'>
          {publications.map((name) => (
            <span
              key={name}
              className='
                text-sm md:text-base uppercase tracking-widest
                text-subtle hover:text-white
                transition cursor-pointer
              '
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
