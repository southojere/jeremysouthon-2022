import * as React from 'react';
import {
  RiCollageLine,
  RiHome5Line,
  RiMailSendLine,
  RiUser3Line,
} from 'react-icons/ri';
import { useIntersectionObserver } from 'usehooks-ts';

import clsxm from '@/lib/clsxm';

import UnstyledLink from '@/components/links/UnstyledLink';

import ButtonLink from '../links/ButtonLink';

type Link = {
  href: string;
  label: string;
  Icon: ({ className }: { className: string }) => JSX.Element;
  // should match the section id's
  id: 'home' | 'about' | 'services' | 'portfolio' | 'contact';
};

export const links: Link[] = [
  { id: 'home', href: '#home', label: 'Home', Icon: RiHome5Line },
  {
    id: 'portfolio',
    href: '#portfolio',
    label: 'Portfolio',
    Icon: RiCollageLine,
  },
  { id: 'about', href: '#about', label: 'About', Icon: RiUser3Line },
];

const Logo = () => (
  <span className='block h-7 w-7 rounded-2xl bg-gradient-to-r from-cyan-500 to-yellow-200'></span>
);

export function Header() {
  return (
    <header className='mt-8 hidden md:mb-10 md:block'>
      <div className='layout flex h-14 items-center justify-between lg:w-full lg:max-w-none lg:px-16'>
        <h3 className='flex gap-2 text-xl font-semibold text-slate-800'>
          <div className='text-3xl'>
            <Logo />
          </div>
          Jeremy Southon
        </h3>
        <nav>
          <ul className='flex items-center justify-between space-x-4 text-slate-700'>
            {links
              .filter((link) => link.id !== 'contact')
              .map(({ href, label }) => (
                <li key={`${href}${label}`}>
                  <UnstyledLink
                    href={href}
                    className='animated-underline hover:text-gray-600 '
                  >
                    {label}
                  </UnstyledLink>
                </li>
              ))}
            <li className='flex items-center justify-between space-x-4 text-slate-700'>
              <ButtonLink
                href='mailto:southon55@gmail.com'
                className='rounded-3xl border-0 bg-slate-600'
              >
                <RiMailSendLine />
              </ButtonLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export const PortraitHeader = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const observer = useIntersectionObserver(ref, { threshold: 1 });

  const isPinned =
    observer?.intersectionRatio && observer?.intersectionRatio < 1;

  return (
    <div className=' sticky -top-1 md:hidden' ref={ref}>
      <div
        className={clsxm(
          'flex items-center justify-between p-4 pt-5 transition-all duration-300',
          isPinned ? 'bg-white' : ''
        )}
      >
        <h3 className='text-xl font-semibold text-gray-800 md:hidden'>
          Jeremy Southon
        </h3>
        <div className='text-3xl'>
          <Logo />
        </div>
      </div>
    </div>
  );
};
