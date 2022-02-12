import clsx from 'clsx';
import * as React from 'react';
import {
  RiCloseFill,
  RiCollageLine,
  RiHome5Line,
  RiMailSendLine,
  RiMenuFill,
  RiUser3Line,
} from 'react-icons/ri';
import { useIntersectionObserver } from 'usehooks-ts';

import clsxm from '@/lib/clsxm';

import Button from '@/components/buttons/Button';
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

function Logo() {
  return (
    <UnstyledLink href='/' className='-z-0 font-medium hover:text-gray-600'>
      <p className='font-medium hover:text-primary-900'>Jeremy</p>
    </UnstyledLink>
  );
}

export function Header() {
  return (
    <header className='mt-8 hidden md:mb-10 md:block'>
      <div className='layout flex h-14 items-center justify-between lg:w-full lg:max-w-none lg:px-16'>
        <h3 className='flex gap-2 text-xl font-semibold text-slate-800'>
          <div className='text-3xl'>
            <span className='block h-7 w-7 rounded-2xl bg-gradient-to-r from-cyan-500 to-yellow-200'></span>
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

export function PortraitHeader() {
  const [visible, setVisible] = React.useState<boolean>(false);

  const toggleMenu = () => {
    setVisible((value) => !value);
  };

  const OpenMenuButton = () => (
    <div id='menuToggle' className='cursor-pointer' onClick={toggleMenu}>
      <Button variant='ghost'>
        <RiMenuFill className='text-lg hover:text-primary-900' />
      </Button>
    </div>
  );

  return (
    <header className='fixed bottom-0 left-0 z-20 w-full bg-white shadow-inner md:hidden'>
      <nav className='layout flex max-w-screen-md items-center justify-between py-2'>
        <Logo />
        <OpenMenuButton />

        {/*Menu Content*/}
        <div
          id='navMenu'
          className={clsx(
            'fixed left-0 z-50 w-full rounded-t-3xl bg-white pt-8 pr-6 pb-16 pl-6 shadow-inner transition-all duration-300 ease-in-out',
            visible ? 'bottom-0' : '-bottom-full '
          )}
        >
          <ul id='navList' className='grid grid-cols-3 gap-8'>
            {links.map((link) => (
              <li key={`${link.id}-key`}>
                <UnstyledLink
                  href={link.href}
                  className='flex flex-col items-center gap-2 hover:text-primary-700'
                  onClick={toggleMenu}
                >
                  <link.Icon className='text-lg hover:text-primary-500' />
                  {link.label}
                </UnstyledLink>
              </li>
            ))}
          </ul>
          <div
            id='navClose'
            className='absolute right-5 bottom-2 cursor-pointer text-2xl text-primary-500 hover:text-primary-800'
            onClick={toggleMenu}
          >
            <RiCloseFill />
          </div>
        </div>
      </nav>
    </header>
  );
}

export const PortraitHeader2 = () => {
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
          <span className='block h-7 w-7 rounded-2xl bg-gradient-to-r from-cyan-500 to-yellow-200'></span>
        </div>
      </div>
    </div>
  );
};
