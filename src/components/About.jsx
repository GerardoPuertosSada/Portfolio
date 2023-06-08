import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#dbdbdb] text-[#5c5c5c]'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#be8a5e]'> About </p>
          </div>
          <div>
          </div>
        </div>
          <div className='max-w-[1000] w-full grid sm:grid-cols-2 gap-8 px-4 ml-30px'>
              <div className='sm:text-right text-4xl font-bold '>
                <p>
                  Hi! Im Gerardo, nice to meet you. Please take a look around.
                </p>
              </div>
              <div>
                <p>
                  im passionate about web development and i love to learn new things.
                </p>
              </div>
          </div>
      </div>
    </div>
  )
}

export default About