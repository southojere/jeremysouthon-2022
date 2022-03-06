import UnderlineLink from '@/components/links/UnderlineLink';

export const AboutSection = () => {
  return (
    <section id='about' className='layout flex flex-col pb-32'>
      <div className='max-w-xl'>
        <h2 className='mb-8 text-2xl text-slate-800'>About Me</h2>
        <p className='text-xl font-light text-gray-600 md:text-2xl lg:text-3xl'>
          I&apos;m Jeremy, a developer based in Sydney and occasionally New
          Zealand. Building for web full-stack. Currently working at{' '}
          <UnderlineLink
            href='https://www.canva.com/about/'
            className='font-normal'
          >
            {' '}
            Canva.
          </UnderlineLink>
        </p>
        <br />
        <h4 className='pb-2 font-thin'>Freelance</h4>
        <p className='text-lg font-light text-gray-400'>
          Professional engineer in tech companies and studios · over 3 years
          experience working from prototype to production · developing products,
          services and experiences ·{' '}
          <UnderlineLink
            href='mailto:southon55@gmail.com'
            className='font-normal'
          >
            available for hire
          </UnderlineLink>
        </p>
      </div>
    </section>
  );
};
