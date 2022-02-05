import { RiSendPlane2Line } from 'react-icons/ri';

import Button from '@/components/buttons/Button';
import Input from '@/components/inputs/Input';
import Textarea from '@/components/inputs/Textarea';

export const ContactSection = () => {
  return (
    <section id='contact' className='layout pb-32'>
      <div className='mb-8 text-center'>
        <h2 className=''>Contacts</h2>
        <span className=''>Lets chat!</span>
      </div>
      <Input placeholder='Name' />
      <Input placeholder='Email' />
      <Textarea placeholder='Message' />
      <Button className='mt-4 gap-2'>
        Send Message <RiSendPlane2Line className='text-lg' />
      </Button>
    </section>
  );
};
