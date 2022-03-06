import {
  RiArrowDownLine,
  RiGithubFill,
  RiLinkedinBoxFill,
  RiMouseLine,
} from 'react-icons/ri';

import UnstyledLink from '@/components/links/UnstyledLink';

export const IntroSection = () => {
  return (
    <section id='home' className='layout pt-4 pb-8 md:pb-16'>
      <div>
        <p className='mb-4 text-xl font-light text-gray-600 md:mb-2 md:text-2xl lg:text-3xl'>
          Software developer
          <span className='block'>
            Building fun, interactive, and user-friendly applications.
          </span>
          <span className='block'>
            Available for freelancing opportunities.
          </span>
        </p>
        <div
          id='socialContainer'
          className='mb-8 flex gap-2 text-2xl md:text-3xl'
        >
          <UnstyledLink
            href='https://github.com'
            openNewTab
            className='text-stone-700 hover:text-primary-800'
          >
            <RiGithubFill />
          </UnstyledLink>
          <UnstyledLink
            href='https://linkedin.com'
            openNewTab
            className='text-stone-700 hover:text-primary-800'
          >
            <RiLinkedinBoxFill />
          </UnstyledLink>
        </div>
      </div>
      <div id='homeScroll' className='hidden'>
        <UnstyledLink
          href='#about'
          className='mt-4 inline-flex items-center gap-2 transition-all duration-300 hover:translate-y-1'
        >
          <RiMouseLine className='text-lg' />
          <span>Scroll down</span>
          <RiArrowDownLine className='text-base' />
        </UnstyledLink>
      </div>
    </section>
  );
};
