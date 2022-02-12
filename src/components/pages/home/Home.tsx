import * as React from 'react';

import { Footer2 } from '@/components/layout/Footer';
import { Header, PortraitHeader2 } from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import { AboutSection } from './About';
import { IntroSection } from './Intro';
import { PortfolioSection } from './Portfolio';

export const Home = () => {
  return (
    <Layout>
      {/* <PortraitHeader /> */}
      <Seo templateTitle='Home' />
      <main>
        <PortraitHeader2 />
        <Header />
        <IntroSection />
        <PortfolioSection />
        {/* <ServicesSection /> */}
        <AboutSection />
        {/* <ContactSection /> */}
        {/* <Footer /> */}
        <Footer2 />
      </main>
    </Layout>
  );
};
