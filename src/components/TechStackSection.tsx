import StackIcon from 'tech-stack-icons';

export const TechStackSection = () => {
  return (
    <section className='flex flex-col gap-2 mx-auto max-w-7xl px-6 py-12'>
      <p className='text-xs uppercase tracking-[0.3em] text-zinc-500'>
        Tech Stack
      </p>
      <div className='grid grid-cols-3 md:grid-cols-6 lg:flex gap-8 mt-4 rounded-lg border border-white/10 p-4 bg-black/15'>
        <StackIcon name='adobe' />
        <StackIcon name='photoshop' />
        <StackIcon name='lightroom' />
        <StackIcon name='adobeillustrator' />
        <StackIcon name='ae' />
        <StackIcon name='id' />
        <StackIcon name='premierepro' />
        <StackIcon name='figma' />
      </div>
    </section>
  );
};

