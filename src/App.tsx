import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useParams,
} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import HomePage from './pages/HomePage';
import GalleriesIndex from './pages/GalleriesIndex';
import GalleryPage from './pages/GalleryPage';
import FeaturedImages from './pages/FeaturedImages';
import AboutPage from './pages/AboutPage';
import MagazineImages from './pages/MagazineImages';
import { galleries } from './data/galleries';

export default function App() {
  return (
    <Router>
      <Header />
      <main className=''>
        <Routes>
          {/* Home page */}
          <Route path='/' element={<HomePage />} />

          {/* Featured index */}
          <Route path='/featured' element={<FeaturedImages />} />

          {/* Galleries index */}
          <Route path='/galleries' element={<GalleriesIndex />} />

          {/* Dynamic gallery page */}
          <Route path='/galleries/:band' element={<GalleryWrapper />} />

          {/* Magazine/Tear Sheets page */}
          <Route path='/magazines' element={<MagazineImages />} />

          {/* About page */}
          <Route path='/about' element={<AboutPage />} />

          {/* Redirect any unknown route to home */}
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </main>

      <ScrollToTopButton />
      <Footer />
    </Router>
  );
}

// Wrapper to extract band param and pass to GalleryPage
const GalleryWrapper = () => {
  const { band } = useParams<{ band: keyof typeof galleries }>();

  if (!band || !galleries[band])
    return <div className='text-center py-12'>Gallery not found</div>;

  return <GalleryPage band={band} />;
};
