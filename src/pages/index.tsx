import * as React from 'react';
import { useDarkMode } from 'usehooks-ts';

import { PortraitHeader } from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import UnderlineLink from '@/components/links/UnderlineLink';
import Seo from '@/components/Seo';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

export default function HomePage() {
  const { isDarkMode } = useDarkMode();
  return (
    <Layout>
      {/*<Header/>*/}
      <PortraitHeader />
      <Seo templateTitle='Home' />
      <Seo />

      <main className={isDarkMode ? 'tw-dark' : ''}>
        <section className='layout mt-11'>
          <h2 className='max-w-lg font-medium leading-relaxed'>
            Software developer based in Sydney & Wellington. Building fun and
            user-friendly applications.
          </h2>
          <p className='mt-8  text-xl'>
            Available for freelancing opportunities. Find me on{' '}
            <UnderlineLink href='google.com'> LinkedIn</UnderlineLink>,{' '}
            <UnderlineLink href='google.com'> GitHub</UnderlineLink>, or just
            send me an{' '}
            <UnderlineLink href='southon55@gmail.com' type='mail'>
              email
            </UnderlineLink>
          </p>
        </section>
      </main>
    </Layout>
  );
}
