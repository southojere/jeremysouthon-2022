import clsx from 'clsx';
import * as React from 'react';
import {
  RiApps2Line,
  RiBriefcase2Line,
  RiCloseFill,
  RiCollageLine,
  RiContrastLine,
  RiHome5Line,
  RiMessage2Line,
  RiUser3Line,
} from 'react-icons/ri';
import { useDarkMode } from 'usehooks-ts';

import Button from '@/components/buttons/Button';
import UnstyledLink from '@/components/links/UnstyledLink';

const links = [
  { href: '/', label: 'Home', Icon: RiHome5Line },
  { href: '/', label: 'About', Icon: RiUser3Line },
  { href: '/', label: 'Services', Icon: RiBriefcase2Line },
  { href: '/', label: 'Portfolio', Icon: RiCollageLine },
  { href: '/', label: 'Contact', Icon: RiMessage2Line },
];

export function Header() {
  const { isDarkMode, toggle } = useDarkMode();

  return (
    <header className='mt-8'>
      <div className='layout flex h-14 items-center justify-between'>
        <UnstyledLink href='/' className='font-bold hover:text-gray-600'>
          <p className='font-medium'>Jeremy</p>
        </UnstyledLink>
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

  return (
    <header className='fixed bottom-0 left-0 w-full bg-white'>
      <nav className='layout flex max-w-screen-md items-center justify-between pb-2'>
        <UnstyledLink href='/' className='font-medium hover:text-gray-600'>
          <p className='font-medium text-primary-500 hover:text-primary-900'>
            Jeremy
          </p>
        </UnstyledLink>

        {/* nav action buttons*/}
        <div id='menuToggle' className='cursor-pointer' onClick={toggleMenu}>
          <RiApps2Line className='text-base text-primary-500 hover:text-primary-900' />
        </div>

        {/*nav menu*/}
        <div
          id='navMenu'
          className={clsx(
            'fixed left-0 w-full rounded-t-3xl bg-white pt-8 pr-6 pb-16 pl-6 shadow-inner transition-all duration-300 ease-in-out',
            visible ? 'bottom-0' : '-bottom-full '
          )}
        >
          <ul id='navList' className='grid grid-cols-3 gap-8'>
            {links.map((link) => (
              <li key={`${link.label}-key`}>
                <UnstyledLink
                  href='#'
                  className='flex flex-col items-center gap-2 hover:text-primary-700'
                >
                  <link.Icon className='text-lg text-primary-500' />
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
