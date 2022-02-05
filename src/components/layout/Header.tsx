import clsx from 'clsx';
import * as React from 'react';
import {
  RiBriefcase2Line,
  RiCloseFill,
  RiCollageLine,
  RiContrastLine,
  RiHome5Line,
  RiMenuFill,
  RiMessage2Line,
  RiUser3Line,
} from 'react-icons/ri';
import { useDarkMode } from 'usehooks-ts';

import Button from '@/components/buttons/Button';
import UnstyledLink from '@/components/links/UnstyledLink';

type Link = {
  href: string;
  label: string;
  Icon: ({ className }: { className: string }) => JSX.Element;
};

export const links: Link[] = [
  { href: '#home', label: 'Home', Icon: RiHome5Line },
  { href: '#about', label: 'About', Icon: RiUser3Line },
  { href: '#services', label: 'Services', Icon: RiBriefcase2Line },
  { href: '#portfolio', label: 'Portfolio', Icon: RiCollageLine },
  { href: '#contact', label: 'Contact', Icon: RiMessage2Line },
];

function Logo() {
  return (
    <UnstyledLink href='/' className='-z-0 font-medium hover:text-gray-600'>
      <p className='font-medium hover:text-primary-900'>Jeremy</p>
    </UnstyledLink>
  );
}

export function Header() {
  const { isDarkMode, toggle } = useDarkMode();

  return (
    <header className='mt-8'>
      <div className='layout flex h-14 items-center justify-between'>
        <Logo />
        <nav>
          <ul className='flex items-center justify-between space-x-4'>
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <UnstyledLink href={href} className='hover:text-gray-600'>
                  {label}
                </UnstyledLink>
              </li>
            ))}

            <Button
              variant={!isDarkMode ? 'dark' : 'ghost'}
              name='theme'
              onClick={toggle}
            >
              <RiContrastLine
                className={!isDarkMode ? 'text-white' : 'text-black'}
              />
            </Button>
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
    <header className='fixed bottom-0 left-0 z-20 w-full bg-white shadow-inner'>
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
              <li key={`${link.label}-key`}>
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
