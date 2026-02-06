import FeaturedGrid from '../components/FeaturedGrid';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import HomeCarousel from '../components/HomeCarousel';
import Services from '../components/Services';
import PublishedIn from '../components/PublishedIn';
import FeaturedGalleries from '../components/FeaturedGalleries';
import TestimonialGrid from '../components/TestimonialGrid';
import VideoPlayer from '../components/VideoPlayer';
import ViewGalleries from '../components/ViewGalleriesCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      {/* Centered content */}
      <ViewGalleries />
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
