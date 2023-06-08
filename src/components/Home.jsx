import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#dbdbdb]'>

      {/* container */}
      <div className='max-w-[1000px] mx-auto px-8 h-full flex flex-col justify-center'>
        <p className='text-[#5c5c5c]'>Hi my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#be8a5e]'>Gerardo Puertos</h1>
          <h2 className='text-4xl sm:text-7xl font-bold text-[#5c5c5c]'>I'm a Full stack Developer </h2>
          <p className='text-[#5c5c5c] py-4 max-w-[700px]'> A fresh-faced Full Stack Web Developer who just wrapped up a master's degree in coding from Dev.F Academy. I've spent the last year diving headfirst into the world of code, crunching [mention your key skills] to turn my ideas into projects that I can't wait to share. While I may be new to the professional scene, I'm armed with the latest industry knowledge and a hunger to apply it. Feel free to check out my work, and if you're interested in chatting about all things web development, I'm all ears!</p>
          <div>
            <button className='text-[#5c5c5c] group border-2 px-6 py-3 my-2 bg-[#dbdbdb] flex items-center hover:bg-[#be8a5e] hover:border-[#be8a5e]'>
            <Link  to="about"  smooth={true}  duration={500} >
          View Work
           </Link>
            <span className='group-hover:rotate-90 duration-300'>
            <HiArrowNarrowRight className='ml-4 hover:' /> 
            </span>
            </button>
          </div>
      </div>

    </div>
  )
}

export default Home