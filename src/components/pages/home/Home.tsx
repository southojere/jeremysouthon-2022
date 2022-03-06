import * as React from 'react';

import { Footer } from '@/components/layout/Footer';
import { Header, PortraitHeader } from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import { AboutSection } from './About';
import { IntroSection } from './Intro';
import { PortfolioSection } from './Portfolio';

export const Home = () => {
  return (
    <Layout>
      <Seo templateTitle='Home' />
      <main>
        {/* TODO: move headers into one orchestrator component */}
        <PortraitHeader />
        <Header />
        <IntroSection />
        <PortfolioSection />
        <AboutSection />
        <Footer />
      </main>
    </Layout>
  );
};
