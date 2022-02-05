import * as React from 'react';

import { PortraitHeader } from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import { AboutSection } from './About';
import { IntroSection } from './Intro';
import { PortfolioSection } from './Portfolio';
import { ServicesSection } from './Services';

export const Home = () => {
  return (
    <Layout>
      <PortraitHeader />
      <Seo templateTitle='Home' />
      <main>
        <IntroSection />
        <PortfolioSection />
        <ServicesSection />
        <AboutSection />
      </main>
    </Layout>
  );
};
