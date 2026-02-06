import { Link } from 'react-router-dom';
import FeaturedGrid from '../components/FeaturedGrid';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import HomeCarousel from '../components/HomeCarousel';
import Services from '../components/Services';
import PublishedIn from '../components/PublishedIn';
import FeaturedGalleries from '../components/FeaturedGalleries';
import TestimonialGrid from '../components/TestimonialGrid';
import VideoPlayer from '../components/VideoPlayer';

export default function HomePage() {
  return (
    <>
      <Hero />
      {/* Centered content */}
      <div className='max-w-7xl mx-auto px-4 py-24 text-center'>
        <h2 className='text-5xl font-bold mb-6'>Music Photography Portfolio</h2>

        <p className='text-lg mb-12'>
          Explore galleries from live performances of your favorite bands.
        </p>

        <Link
          to='/galleries'
          className='bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition'
        >
          View Galleries
        </Link>
      </div>
      <HomeCarousel />
      <AboutUs />
      <FeaturedGrid />
      <PublishedIn />
      <Services />
      <FeaturedGalleries />
      <TestimonialGrid />
      <VideoPlayer
        title='Showreel'
        poster='videos/heilung-poster.png'
        sources={[
          { src: 'videos/heilung.mp4', type: 'video/mp4' },
          // { src: 'https://your-cdn.com/showreel.webm', type: 'video/webm' },
        ]}
        controls
      />
    </>
  );
}
