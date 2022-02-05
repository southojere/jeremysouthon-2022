import * as React from 'react';

import clsxm from '@/lib/clsxm';

type Textarea = {
  isDarkBg?: boolean;
} & React.ComponentPropsWithRef<'textarea'>;

const Textarea = ({ className, ...rest }: Textarea) => {
  return (
    <div className='relative mb-3 flex w-full flex-wrap items-stretch'>
      <textarea
        className={clsxm(
          'placeholder-blueGray-300 text-blueGray-600 relative w-full rounded border-0 bg-white bg-white px-3 py-3 pr-10 text-sm shadow outline-none focus:outline-none focus:ring',
          className
        )}
        {...rest}
      />
      <span className='text-blueGray-300 absolute absolute right-0 z-10 h-full w-8 items-center justify-center rounded bg-transparent py-3 pr-3 text-center text-base font-normal leading-snug'>
        <i className='fas fa-user'></i>
      </span>
    </div>
  );
};

export default Textarea;
