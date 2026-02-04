import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className='p-4 mt-8'>
      <h1 className='text-gray-200 font-bold text-2xl py-2 text-center mb-4'>
        Kansas City Music Photographer || Thomas Woroniak
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto'>
        <img
          src='https://res.cloudinary.com/df6mhecko/image/upload/v1770163286/1a7766f0-6f1c-4bc5-8369-f6c6fce032a2_rw_1920_aaeveq.jpg'
          alt='Thomas Woroniak'
          className='rounded-lg'
        />
        <div>
          <p className='mb-4 text-gray-400'>
            Thomas Woroniak's journey from Rockford, Illinois, to becoming a
            music photographer and the founder of{' '}
            <Link
              to='https://www.antiheromagazine.com'
              target='_blank'
              className='text-red-500 hover:underline'
            >
              Antihero Magazine
            </Link>{' '}
            is impressive. His early passion for music led him to pick up the
            guitar at the age of 10, eventually leading him to study Classical
            Guitar Performance and Music Theory and Composition at the
            University of Illinois at Chicago. Along the way, his interest in
            concert photography blossomed as he discovered the powerful
            combination of live music and visual art.
          </p>
          <p className='mb-4 text-gray-400'>
            As the founder and Editor-in-Chief of Antihero Magazine, Thomas has
            created an online platform dedicated to heavy music. The magazine
            features interviews with current artists, album reviews, concert
            reviews, live event photography, and more, providing a comprehensive
            resource for fans of the genre. Thomas's love for capturing the
            energy and atmosphere of live events is evident in his work, which
            focuses on music photography, live events, festivals, and editorial
            photography.
          </p>
          <p className='mb-4 text-gray-400'>
            Currently based in the greater Kansas City area, Thomas is also a
            member of the Professional Photographers of America, highlighting
            his commitment to professionalism and excellence in his craft. With
            his background, skills, and dedication, Thomas Woroniak Photography
            offers a valuable service to the music industry, providing
            captivating visuals that enhance the experience and documentation of
            live music and events.
          </p>
          <Link
            to='https://linktr.ee/antiherophotos'
            target='_blank'
            className='hover:underline'
          >
            https://linktr.ee/antiherophotos
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
