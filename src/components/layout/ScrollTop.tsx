import * as React from 'react';
import { RiArrowUpLine } from 'react-icons/ri';

import clsxm from '@/lib/clsxm';

import UnstyledLink from '../links/UnstyledLink';

// @deprecated no longer needed as we don't have enough content to justify the use of this.
export const ScrollTop = () => {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 560) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });
  }, []);

  const handleScrollTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <UnstyledLink
      href='#'
      onClick={handleScrollTop}
      id='scrollUp'
      className={clsxm(
        'fixed right-7 z-10 rounded-md  bg-primary-500 p-1 opacity-80 transition-all duration-700 ease-in hover:bg-primary-300',
        visible ? 'bottom-16' : '-bottom-1/4'
      )}
    >
      <RiArrowUpLine className='text-xl text-white' />
    </UnstyledLink>
  );
};
