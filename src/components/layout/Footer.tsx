import { RiMailSendFill } from 'react-icons/ri';

import UnstyledLink from '../links/UnstyledLink';

/**
 * TODO:
 * - add some playful/simple animation to respond to user feedback (hover/click)...
 */
export const Footer = () => {
  return (
    <footer className='bg-primary-600 p-8 text-white'>
      <UnstyledLink href='mailto:southon55@gmail.com'>
        <div className='flex items-center justify-center gap-4'>
          <h1 className='text-lg font-medium'>Lets Chat!</h1>
          <RiMailSendFill className='text-xl' />
        </div>
      </UnstyledLink>
    </footer>
  );
};
