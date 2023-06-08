/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import cara from '../assets/cara.jpg'
/* importar screenshots de como se ven mis proyectos realizados yo digo que el de netflix y el ecomm */


const Work = () => {
  return (
    <div
      name="work"
      className="bg-[#dbdbdb] w-full md:h-screen text-[#5c5c5c] "
    >
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-[#5c5c5c] border-[#be8a5e]'>Projects</p>
          <p className='py-6'>//Check out some of my work</p>
        </div>

  {/* container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
        
  {/* grid item 1 */}
          <div 
            style={{backgroundImage: `url(${cara})`}}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            
            {/* hover effect */}
            <div className='opacity-0 group-hover:opacity-100 duration-200'>
              <span className='text 2xl font-bold text-white tracking-wider'>
                React JS Application 
              </span>
              <div className='pt-8 text-center'>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#5c5c5c] font-bold text-lg'> Demo </button>
                </a>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#5c5c5c] font-bold text-lg'> Code </button>
                </a>
              </div>
            </div>
          </div>

  {/* grid item 2 */}
          <div 
          style={{backgroundImage: `url(${cara})`}}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            
            {/* hover effect */}
            <div className='opacity-0 group-hover:opacity-100 duration-200'>
              <span className='text 2xl font-bold text-white tracking-wider'>
                React JS Application 
              </span>
              <div className='pt-8 text-center'>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#5c5c5c] font-bold text-lg'> Demo </button>
                </a>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#5c5c5c] font-bold text-lg'> Code </button>
                </a>
              </div>
            </div>
          </div>
{/* grid item 3 */}
          <div 
            style={{backgroundImage: `url(${cara})`}}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            
            {/* hover effect */}
            <div className='opacity-0 group-hover:opacity-100 duration-200'>
              <span className='text 2xl font-bold text-white tracking-wider'>
                React JS Application 
              </span>
              <div className='pt-8 text-center'>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#5c5c5c] font-bold text-lg'> Demo </button>
                </a>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#5c5c5c] font-bold text-lg'> Code </button>
                </a>
              </div>
            </div>
          </div>

{/* grid item 4 */}
          <div 
          style={{backgroundImage: `url(${cara})`}}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            
            {/* hover effect */}
            <div className='opacity-0 group-hover:opacity-100 duration-200'>
              <span className='text 2xl font-bold text-white tracking-wider'>
                React JS Application 
              </span>
              <div className='pt-8 text-center'>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#5c5c5c] font-bold text-lg'> Demo </button>
                </a>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#5c5c5c] font-bold text-lg'> Code </button>
                </a>
              </div>
            </div>
          </div>
{/* grid item 5 */}
          <div 
            style={{backgroundImage: `url(${cara})`}}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            
            {/* hover effect */}
            <div className='opacity-0 group-hover:opacity-100 duration-200'>
              <span className='text 2xl font-bold text-white tracking-wider'>
                React JS Application 
              </span>
              <div className='pt-8 text-center'>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#5c5c5c] font-bold text-lg'> Demo </button>
                </a>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#5c5c5c] font-bold text-lg'> Code </button>
                </a>
              </div>
            </div>
          </div>

  {/* grid item 6 */}
          <div 
          style={{backgroundImage: `url(${cara})`}}
          className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            
            {/* hover effect */}
            <div className='opacity-0 group-hover:opacity-100 duration-200'>
              <span className='text 2xl font-bold text-white tracking-wider'>
                React JS Application 
              </span>
              <div className='pt-8 text-center'>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#5c5c5c] font-bold text-lg'> Demo </button>
                </a>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-[#5c5c5c] font-bold text-lg'> Code </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work