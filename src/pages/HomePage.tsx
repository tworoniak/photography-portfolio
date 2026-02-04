import { Link } from 'react-router-dom';
import FeaturedGrid from '../components/FeaturedGrid';

export default function HomePage() {
  return (
    <div className='max-w-7xl mx-auto px-4 py-24 text-center'>
      <h1 className='text-5xl font-bold mb-6'>Concert Photography Portfolio</h1>
      <p className='text-lg mb-12'>
        Explore galleries from live performances of your favorite bands.
      </p>
      <Link
        to='/galleries'
        className='bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition'
      >
        View Galleries
      </Link>

      <FeaturedGrid />
    </div>
  );
}
