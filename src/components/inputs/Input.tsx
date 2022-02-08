import * as React from 'react';

import clsxm from '@/lib/clsxm';

type InputProps = {
  isDarkBg?: boolean;
  Icon?: () => JSX.Element;
} & React.ComponentPropsWithRef<'input'>;

const Input = ({ Icon, className, ...rest }: InputProps) => {
  return (
    <div className='relative mb-3 flex w-full flex-wrap items-stretch'>
      <input
        className={clsxm(
          'relative w-full rounded border-0 bg-white px-3 py-3 pr-10 text-sm shadow outline-none focus:outline-none focus:ring',
          className
        )}
        {...rest}
      />
      {Icon && (
        <span className='absolute right-0 z-10 h-full w-8 items-center justify-center rounded bg-transparent py-3 pr-3 text-center text-base font-normal leading-snug'>
          <Icon />
        </span>
      )}
    </div>
  );
};

export default Input;
