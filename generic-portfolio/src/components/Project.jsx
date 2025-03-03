import React from 'react'
import Frontend from '../assets/img/frontend.png'
import Frontend_1 from '../assets/img/frontend_1.png'
import Frontend_2 from '../assets/img/frontend_2.png'
import ProjectCard from './ProjectCard';

export default function Project() {
  const projects = [
    { title: 'Portfolio', image: Frontend },
    { title: 'Site web ecommerce', image: Frontend_1 },
    { title: 'Site web ecommerce', image: Frontend_2 },
  ];
  return (
    <section id='projects' className='text-gray-400 bg-blue-950 body-font'>
      <div className='container px-3 py-11 mx-auto'>
        <div data-aos='fade-up' data-aos-delay='300' className='flex flex-col'>
          <div className='flex flex-wrap sm:flex-row flex-col py-6 mb-12'>
            <h1 className='sm:w-1/5 text-white font-medium title-font text-3xl mb-2 sm:mb-0'>
              My projects
            </h1>

            <p className='sm:w-4/5 leading-relaxed text-base pl-0 text-white'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem tempore aperiam atque inventore qui et eius quis ratione accusantium. Maxime unde dolores quasi dicta quibusdam ipsam optio vero accusantium nobis.
            </p>

            <button
              type='button'
              data-aos='fade-up'
              data-aos-delay='300'
              className='text-gray-900 bg-white hover:bg-blue-300 focus:outline-none focus:ring-4 focus:ring-blue-300 font-semibold rounded-full text-xs sm:text-sm px-4 py-2 text-center cursor-pointer'>
              View all
            </button>
          </div>
        </div>

        <div
          data-aos='fade-up'
          data-aos-delay='400'
          className='flex flex-wrap sm:m-4 -mx-4 -mb-10 -mt-4'>
          {
            projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))
          }
        </div>
      </div>
    </section>
  )
}