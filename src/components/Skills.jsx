/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/javascript.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import postgreSQL from '../assets/postgreSQL.png'


const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen  bg-[#dbdbdb] text-[#5c5c5c] '>
      {/* container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-[#be8a5e] '>
            Skills
          </p>
          <p className='py-4'>
            //These are the technologies I've worked with    
          </p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={html} alt="html icon" />
            <p className='my-4'>HTML</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={css} alt="html icon" />
            <p className='my-4'>CSS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={js} alt="html icon" />
            <p className='my-4'>JavaScript</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={react} alt="html icon" />
            <p className='my-4'>React</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={tailwind} alt="html icon" />
            <p className='my-4'>Tailwind</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={postgreSQL} alt="html icon" />
            <p className='my-4'>Postgre SQL</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills