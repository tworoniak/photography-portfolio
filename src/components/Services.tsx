// import { Link } from 'react-router-dom';
import { Camera, Music, Image, Users } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Live Concert Photography',
      description:
        'High-energy stage and crowd shots captured with crisp detail in low-light venues.',
      icon: <Music className='w-6 h-6' />,
    },
    {
      title: 'Band Promo Shoots',
      description:
        'Studio or on-location promo sessions designed for press kits, album releases, and social media.',
      icon: <Users className='w-6 h-6' />,
    },
    {
      title: 'Tour Coverage',
      description:
        'Full tour photo coverage including behind-the-scenes moments, live sets, and travel documentation.',
      icon: <Camera className='w-6 h-6' />,
    },
    {
      title: 'Editorial / Publication Work',
      description:
        'Photography tailored for magazines, blogs, and music publications with consistent delivery and style.',
      icon: <Image className='w-6 h-6' />,
    },
  ];

  return (
    <section className='w-screen bg-neutral-950 text-white py-28'>
      <div className='max-w-7xl mx-auto px-6'>
        {/* Heading */}
        <div className='mb-16 text-center'>
          <h2 className='font-semibold text-4xl mb-4'>Services</h2>
          <p className='text-gray-400 max-w-2xl mx-auto leading-relaxed'>
            Professional concert photography services for bands, venues,
            promoters, and publications. Built for high-impact visuals and fast
            turnaround.
          </p>
        </div>

        {/* Service cards */}
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
          {services.map((service) => (
            <div
              key={service.title}
              className='
                border border-white/10 bg-white/5
                p-8 rounded-xl
                hover:border-white/30 hover:bg-white/10
                transition cursor-pointer
              '
            >
              <div className='mb-6 text-white/80'>{service.icon}</div>

              <h3 className='text-lg font-semibold mb-3'>{service.title}</h3>

              <p className='text-sm text-gray-400 leading-relaxed'>
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        {/* <div className='mt-16 text-center'>
          <Link
            to='/contact'
            className='
              inline-block border border-white px-10 py-3
              uppercase tracking-wide text-sm
              hover:bg-white hover:text-black
              transition
            '
          >
            Book a Session
          </Link>
        </div> */}
      </div>
    </section>
  );
}
