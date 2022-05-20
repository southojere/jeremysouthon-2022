import React from 'react';
import {
  RiArrowDownLine,
  RiGithubFill,
  RiLinkedinBoxFill,
  RiMouseLine,
} from 'react-icons/ri';
import Typed from 'typed.js';

import UnstyledLink from '@/components/links/UnstyledLink';

export const IntroSection = () => {
  const el = React.useRef(null);
  const typed = React.useRef<Typed>();
  React.useEffect(() => {
    const options = {
      strings: [
        'interactive',
        'tailored',
        'mobile',
        'responsive',
        'web',
        'user-friendly',
        // 'your'
      ],
      loop: false,
      typeSpeed: 50,
      backSpeed: 60,
    };

    typed.current = new Typed(el?.current || '', options);

    return () => {
      if (typed && typed.current) {
        typed.current.destroy();
      }
    };
  }, []);
  return (
    <section id='home' className='layout pt-4 pb-8 md:pb-16'>
      <div>
        <p className='mb-4 text-xl font-light text-gray-600 md:mb-2 md:text-2xl lg:text-3xl'>
          Software developer
          <span className='block'>
            Building <span ref={el}></span>applications.
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
            href='https://github.com/southojere/'
            openNewTab
            className='text-stone-700 hover:text-primary-800'
          >
            <RiGithubFill />
          </UnstyledLink>
          <UnstyledLink
            href='https://www.linkedin.com/in/jeremy-s-559a93176/'
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
