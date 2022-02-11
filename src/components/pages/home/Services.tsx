import * as React from 'react';
import {
  RiArrowRightLine,
  RiCodeFill,
  RiLayout6Line,
  RiSmartphoneLine,
} from 'react-icons/ri';

import Button from '@/components/buttons/Button';

type Service = {
  title: string;
  Icon: (props: { className: string }) => JSX.Element;
};
const services: Service[] = [
  {
    Icon: (props) => <RiLayout6Line {...props} />,
    title: 'Website design',
  },
  {
    Icon: (props) => <RiCodeFill {...props} />,
    title: 'Website development',
  },
  {
    Icon: (props) => <RiSmartphoneLine {...props} />,
    title: 'App development',
  },
];
export const ServicesSection = () => {
  return (
    <section id='services' className='layout mb-24'>
      <div className='mb-8 text-center'>
        <h2 className=''>Services</h2>
        <span className=''>What I offer</span>
      </div>
      <div className='grid grid-cols-2 gap-4 md:grid-cols-3'>
        {services.map((service) => (
          <div key={`${service.title}-key`} className='flex-col p-8 shadow-md'>
            <service.Icon className='pb-4 text-4xl text-primary-500' />
            <h3 className='pb-4 font-light'>{service.title}</h3>
            <Button variant='ghost' className='gap-2 p-0'>
              View more
              <RiArrowRightLine />
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};
