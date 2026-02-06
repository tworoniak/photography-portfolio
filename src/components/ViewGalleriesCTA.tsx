import { Link } from 'react-router-dom';

const ViewGalleries = () => {
  return (
    <section className='flex flex-col justify-center items-center mx-8 xl:mx-auto md:max-w-7xl mt-8 px-8 py-24 text-center rounded-lg bg-surface border border-faint/50'>
      <div className=''>
        <h2 className='text-muted text-3xl md:text-5xl font-bold mb-6'>
          Music Photography Portfolio
        </h2>

        <p className='text-lg mb-12 text-subtle'>
          Explore galleries from live performances of your favorite bands.
        </p>

        <Link
          to='/galleries'
          className='bg-graphite border border-faint text-white px-6 py-3 rounded-lg hover:bg-graphite2 transition'
        >
          View Galleries
        </Link>
      </div>
    </section>
  );
};

export default ViewGalleries;
