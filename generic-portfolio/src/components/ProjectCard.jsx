import React from 'react'

const ProjectCard = ({ image, title }) => {
  return (
    <div className='p-4 md:w-1/3 mb-6'>
      <div className='rounded-lg h-52 overflow-hidden'>
        <img src={image} alt="content" className='object-cover object-center h-full w-full' />
      </div>

      <h2 className='text-xl font-medium title-font text-white mt-5'>{title}</h2>

      <div className='flex align-center justify-start'>
        <a className='text-blue-300 hover:text-blue-100 inline-flex items-center cursor-pointer'>
          Fullscreen
        </a>
        <svg
          fill='none'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          className='w-4 h-4 my-2 ml-2'
          viewBox='0 0 24 24'>
          <path d='M5 12h14M12 5l7 7-7 7'></path>
        </svg>
      </div>
    </div>
  )
}

export default ProjectCard
