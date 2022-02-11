import { RiArrowRightUpLine } from 'react-icons/ri';

import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import NextImage from '@/components/NextImage';

type Project = {
  name: string;
  description: string;
  thumbnail: string;
  url: string;
};

const projects: Project[] = [
  {
    name: 'BYB Assist',
    description:
      'Connect property buyers to property reports. Business CRM dashboard.',
    thumbnail: '/images/bybassist_thumbnail.png',
    url: 'https://www.bybassist.com.au/',
  },
  {
    name: 'Erin',
    description:
      'Building management tool that helps you run your building seamlessly and efficiently.',
    thumbnail: '/images/erinliving-thumbnail.png',
    url: 'https://www.erinliving.com/',
  },
];

export const PortfolioSection = () => {
  return (
    <section id='portfolio' className='layout mb-24'>
      <h2 className='text-3xl text-slate-800 underline'>Selected Works</h2>
      <div>
        {projects.map((project) => (
          <div
            className='my-8 md:flex md:items-center md:justify-center'
            key={`${project.name}-key`}
          >
            <NextImage
              src={project.thumbnail}
              alt={project.name}
              width={350}
              height={200}
              useSkeleton
              imgClassName='-z-10'
              className='w-full pb-5 md:w-1/2'
            />
            <div className='md:w-1/2 md:px-9 lg:pl-16'>
              <UnderlineLink href={project.url}>
                <h2 className='text-2xl font-medium'>{project.name}</h2>
              </UnderlineLink>
              <p className='mt-5 text-lg font-light text-gray-600'>
                {project.description}
              </p>
              <ButtonLink
                variant='light'
                href={project.url}
                className='mt-4 gap-2'
              >
                Visit Website <RiArrowRightUpLine className='text-lg' />
              </ButtonLink>
            </div>
          </div>
        ))}
      </div>
      <hr />
    </section>
  );
};
