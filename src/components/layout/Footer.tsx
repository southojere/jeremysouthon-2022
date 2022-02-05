import { RiGithubFill, RiLinkedinFill } from 'react-icons/ri';

import { links } from './Header';
import UnderlineLink from '../links/UnderlineLink';
import UnstyledLink from '../links/UnstyledLink';
export const Footer = () => {
  return (
    <footer className='bg-primary-600 pt-4 pb-24 text-white'>
      <div className='layout'>
        <div className='grid gap-y-12'>
          <div className='mt-4'>
            <h1 className='mb-2 text-4xl font-medium'>Jeremy</h1>
            <span className=''>Frontend Developer</span>
          </div>

          <ul className='flex flex-col gap-y-6'>
            {links.map((link) => (
              <li
                className='hover:text-primary-300'
                key={`${link.label.toLocaleLowerCase()}-key`}
              >
                <UnderlineLink className='font-light' href={link.href}>
                  {link.label}
                </UnderlineLink>
              </li>
            ))}
          </ul>

          <div id='socialFooter' className='flex gap-2 text-2xl'>
            <UnstyledLink href='http://google.com' openNewTab>
              <RiGithubFill className='hover:text-primary-300' />
            </UnstyledLink>
            <UnstyledLink href='http://google.com' openNewTab>
              <RiLinkedinFill className='hover:text-primary-300' />
            </UnstyledLink>
          </div>

          <p className='mt-4 text-center text-xs text-primary-400'>
            &#169; Jeremy Southon. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};
