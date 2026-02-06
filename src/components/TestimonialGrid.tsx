import { FaQuoteLeft } from 'react-icons/fa';

const TestimonialGrid = () => {
  return (
    <section className='w-full p-6 md:px-6 md:py-10 bg-card'>
      {/* Global Container */}
      <div className='mx-auto  max-w-7xl p-2'>
        {/* Heading Container */}
        <div className='relative z-10 mb-16 text-center'>
          <h2 className='text-text font-semibold text-4xl mb-4'>
            Testimonials
          </h2>
          <p className='text-subtle max-w-2xl mx-auto leading-relaxed'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab,
            consequatur ipsa similique quaerat ipsam amet itaque tempora dicta
            veritatis corrupti nihil sed, quisquam sequi ipsum.
          </p>
        </div>
        {/* Grid Container */}
        <div className='grid gap-6 grid-cols-1 text-white lg:grid-cols-2 xl:grid-cols-4 md:grid-rows-2'>
          {/* Box 1 */}
          <div className='relative p-10 rounded-xl bg-graphite lg:col-span-1 xl:col-span-2 shadow-lg'>
            {/* Quotes Image */}
            <FaQuoteLeft className='absolute top-3 right-5 scale-125 md:top-7 md:right-24 md:scale-125 text-gray-400/50 w-25 h-25' />

            {/* Box Header */}
            <div className='flex z-10 space-x-4'>
              <img
                src='images/image-daniel.jpg'
                alt=''
                className='w-10 h-10 rounded-full ring-2 ring-subtle'
              />
              <div className='text-sm'>
                <h4 className='opacity-90'>Daniel Clifford</h4>
                <p className='opacity-50'>Publicist</p>
              </div>
            </div>

            {/* Large Text */}
            <p className='relative z-10 mt-6 text-xl'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              cupiditate suscipit veniam alias itaque, vel in tempora animi illo
              similique quaerat mollitia dolores repellendus tenetur?
            </p>

            {/* Small Text */}
            <p className='mt-6 opacity-50 line-clamp-6'>
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              expedita eos rem. Consectetur laboriosam fugit minima officiis est
              natus, sunt, quibusdam libero quas numquam, debitis laudantium
              doloribus voluptate dolorum magnam unde aliquid! Iste alias id
              inventore eos? Quisquam, voluptatem iste ut sint quod quos dicta
              sit molestias ullam harum pariatur!"
            </p>
          </div>

          {/* Box 2 */}
          <div className='p-10 rounded-xl bg-carbonBlack lg:col-span-1 xl:col-span-1 shadow-lg'>
            {/* Box Header */}
            <div className='flex space-x-4'>
              <img
                src='images/image-jonathan.jpg'
                alt=''
                className='w-10 h-10 rounded-full ring-2 ring-faint'
              />
              <div className='text-sm'>
                <h4 className='opacity-90'>Jonathan Walters</h4>
                <p className='opacity-50'>Musician</p>
              </div>
            </div>

            {/* Large Text */}
            <p className='relative z-10 mt-6 text-xl'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              cupiditate suscipit veniam alias itaque, vel in tempora animi illo
              similique quaerat mollitia dolores repellendus tenetur?
            </p>

            {/* Small Text */}
            <p className='mt-6 opacity-50 line-clamp-6'>
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              expedita eos rem. Consectetur laboriosam fugit minima officiis est
              natus, sunt, quibusdam libero quas numquam, debitis laudantium
              doloribus voluptate dolorum magnam unde aliquid! Iste alias id
              inventore eos? Quisquam, voluptatem iste ut sint quod quos dicta
              sit molestias ullam harum pariatur!"
            </p>
          </div>

          {/* Box 3 */}
          <div className='hidden p-10 rounded-xl text-gray-900 bg-lavender md:block lg:col-span-2 xl:col-span-1 xl:row-span-2 shadow-lg'>
            {/* Box Header */}
            <div className='flex space-x-4'>
              <img
                src='images/image-kira.jpg'
                alt=''
                className='w-10 h-10 rounded-full ring-2 ring-subtle'
              />
              <div className='text-sm'>
                <h4 className='opacity-90'>Kira Whittle</h4>
                <p className='opacity-50'>Publicist</p>
              </div>
            </div>

            {/* Large Text */}
            <p className='relative z-10 mt-6 text-xl'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              cupiditate suscipit veniam alias itaque, vel in tempora animi illo
              similique quaerat mollitia dolores repellendus tenetur?
            </p>

            {/* Small Text */}
            <p className='mt-6 opacity-50'>
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              expedita eos rem. Consectetur laboriosam fugit minima officiis est
              natus, sunt, quibusdam libero quas numquam, debitis laudantium
              doloribus voluptate dolorum magnam unde aliquid! Iste alias id
              inventore eos? Quisquam, voluptatem iste ut sint quod quos dicta
              sit molestias ullam harum pariatur!"
            </p>
          </div>

          {/* Box 4 */}
          <div className='p-10 rounded-xl text-gray-900 bg-silver shadow-lg'>
            {/* Box Header */}
            <div className='flex space-x-4'>
              <img
                src='images/image-jeanette.jpg'
                alt=''
                className='w-10 h-10 rounded-full ring-2 ring-subtle'
              />
              <div className='text-sm'>
                <h4 className='opacity-90'>Jeanette Harmon</h4>
                <p className='opacity-50'>Publicist</p>
              </div>
            </div>

            {/* Large Text */}
            <p className='relative z-10 mt-6 text-xl'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              cupiditate suscipit veniam alias itaque, vel in tempora animi illo
              similique quaerat mollitia dolores repellendus tenetur?
            </p>

            {/* Small Text */}
            <p className='mt-6 opacity-50 line-clamp-6'>
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              expedita eos rem. Consectetur laboriosam fugit minima officiis est
              natus, sunt, quibusdam libero quas numquam, debitis laudantium
              doloribus voluptate dolorum magnam unde aliquid! Iste alias id
              inventore eos? Quisquam, voluptatem iste ut sint quod quos dicta
              sit molestias ullam harum pariatur!"
            </p>
          </div>

          {/* Box 5 */}
          <div className='p-10 rounded-xl bg-graphite2 lg:col-span-1 xl:col-span-2 shadow-lg'>
            {/* Box Header */}
            <div className='flex space-x-4'>
              <img
                src='images/image-patrick.jpg'
                alt=''
                className='w-10 h-10 rounded-full ring-2 ring-subtle'
              />
              <div className='text-sm'>
                <h4 className='opacity-90'>Patrick Abrams</h4>
                <p className='opacity-50'>Venue Owner</p>
              </div>
            </div>

            {/* Large Text */}
            <p className='relative z-10 mt-6 text-xl'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              cupiditate suscipit veniam alias itaque, vel in tempora animi illo
              similique quaerat mollitia dolores repellendus tenetur?
            </p>

            {/* Small Text */}
            <p className='mt-6 opacity-50 line-clamp-6'>
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              expedita eos rem. Consectetur laboriosam fugit minima officiis est
              natus, sunt, quibusdam libero quas numquam, debitis laudantium
              doloribus voluptate dolorum magnam unde aliquid! Iste alias id
              inventore eos? Quisquam, voluptatem iste ut sint quod quos dicta
              sit molestias ullam harum pariatur!"
            </p>
          </div>

          {/* Box 6 */}
          <div className='p-10 rounded-xl text-gray-900 bg-white md:hidden shadow-lg'>
            {/* Box Header */}
            <div className='flex space-x-4'>
              <img
                src='images/image-kira.jpg'
                alt=''
                className='w-10 h-10 rounded-full ring-2 ring-faint'
              />
              <div className='text-sm'>
                <h4 className='opacity-90'>Kira Whittle</h4>
                <p className='opacity-50'>Publicist</p>
              </div>
            </div>

            {/* Large Text */}
            <p className='relative z-10 mt-6 text-xl'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              cupiditate suscipit veniam alias itaque, vel in tempora animi illo
              similique quaerat mollitia dolores repellendus tenetur?
            </p>

            {/* Small Text */}
            <p className='mt-6 opacity-50 line-clamp-6'>
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              expedita eos rem. Consectetur laboriosam fugit minima officiis est
              natus, sunt, quibusdam libero quas numquam, debitis laudantium
              doloribus voluptate dolorum magnam unde aliquid! Iste alias id
              inventore eos? Quisquam, voluptatem iste ut sint quod quos dicta
              sit molestias ullam harum pariatur!"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialGrid;
