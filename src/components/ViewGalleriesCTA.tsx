import { Link } from 'react-router-dom';

const ViewGalleries = () => {
  return (
    <section className='max-w-7xl mx-auto mt-8 px-4 py-24 text-center rounded-lg bg-surface border border-faint/50'>
      <h2 className='text-muted text-5xl font-bold mb-6'>
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
    </section>
  );
};

export default ViewGalleries;
