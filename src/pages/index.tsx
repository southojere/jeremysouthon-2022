import * as React from 'react';
import {
  RiArrowDownLine,
  RiGithubFill,
  RiLinkedinBoxFill,
  RiMouseLine,
  RiSendPlaneFill,
} from 'react-icons/all';

import { PortraitHeader } from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <Layout>
      <PortraitHeader />
      <Seo templateTitle='Home' />
      <main>
        <section id='home' className='layout pt-8 pb-16'>
          <div>
            <h1 className='mb-3 text-4xl font-semibold'>Hi, I&apos;m Jeremy</h1>
            <h3 className='mb-3 text-xl font-semibold text-gray-600'>
              Full-stack developer
            </h3>
            <p className='mb-4 text-xl font-light text-gray-600'>
              Available for freelancing opportunities. Developing fun and
              user-friendly applications.
            </p>
            <div id='socialContainer' className='mb-8 flex gap-2 text-2xl'>
              <UnstyledLink
                href='https://github.com'
                openNewTab
                className='text-primary-500 hover:text-primary-800'
              >
                <RiGithubFill />
              </UnstyledLink>
              <UnstyledLink
                href='https://linkedin.com'
                openNewTab
                className='text-primary-500 hover:text-primary-800'
              >
                <RiLinkedinBoxFill />
              </UnstyledLink>
            </div>
            <ButtonLink className='gap-2' variant='primary' href='#contact'>
              Contact
              <RiSendPlaneFill />
            </ButtonLink>
          </div>
          <div id='homeScroll' className='hidden'>
            <UnstyledLink
              href='#about'
              className='mt-4 inline-flex items-center gap-2 transition-all duration-300 hover:translate-y-1'
            >
              <RiMouseLine className='text-lg ' />
              <span>Scroll down</span>
              <RiArrowDownLine className='text-base' />
            </UnstyledLink>
          </div>
        </section>
      </main>
    </Layout>
  );
}
