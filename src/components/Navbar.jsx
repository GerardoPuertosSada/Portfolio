/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import Logo from '../assets/logoGP.png'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { useState } from 'react'
import { Link } from 'react-scroll'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => {
    setNav(!nav)
  }

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 z-10 bg-[#be8a5e] text-[#333333]'>
      <div>
        <img src={Logo} alt="Logo image" style={{width: '50px'}} />
      </div>

        {/*  menu */}
      
        <ul className='hidden md:flex '>
          <li  className='inline-block mx-4'>
          <Link  to="home"  smooth={true}  duration={500} >
          Home
        </Link>
            </li>
          <li className='inline-block mx-4'>
          <Link  to="about"  smooth={true}  duration={500} >
          About
        </Link>
          </li>
          <li className='inline-block mx-4'>
          <Link  to="skills"  smooth={true}  duration={500} >
          Skills
        </Link>
          </li>
          <li className='inline-block mx-4'>
          <Link  to="work"  smooth={true}  duration={500} >
          Projects
        </Link>
          </li>
          <li className='inline-block mx-4'>
          <Link  to="contact"  smooth={true}  duration={500} >
          Contact
        </Link>
          </li>
        </ul>
      

      {/* 3 bars menu */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#be8a5e] flex flex-col justify-center items-center'}>
          <li className='py-6 text text-4xl' >
          <Link onClick={handleClick} to="home"  smooth={true}  duration={500} >
          Home
        </Link>
          </li>
          <li className='py-6 text text-4xl' >
          <Link onClick={handleClick} to="about"  smooth={true}  duration={500} >
          About
        </Link>
          </li>
          <li className='py-6 text text-4xl' >
          <Link onClick={handleClick} to="skills"  smooth={true}  duration={500} >
          Skills
        </Link>
          </li>
          <li className='py-6 text text-4xl' >
          <Link onClick={handleClick} to="work"  smooth={true}  duration={500} >
          Projects
        </Link>
          </li>
          <li className='py-6 text text-4xl' >
          <Link onClick={handleClick} to="contact"  smooth={true}  duration={500} >
          Contact
        </Link></li>
        </ul>


      {/* socials icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
      <ul>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#5c90cf] '>
          <a className='flex justify-between items-center w-full text-gray-300' href="https://www.linkedin.com/in/gerardo-puertos/">
            LinkedIn <FaLinkedin size={30} />
          </a>
        </li>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] '>
          <a className='flex justify-between items-center w-full text-gray-300' href="https://github.com/GerardoPuertosSada">
            GitHub <FaGithub size={30} />
          </a>
        </li>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#8fa1b7] '>
          <a className='flex justify-between items-center w-full text-gray-300' href="https://drive.google.com/file/d/1CJCu3dysvA-aZAGauB3KQziNQXmYjJao/view?usp=drive_link">
          Resumé <BsFillPersonLinesFill size={30} />
          </a>
        </li>
      </ul>
      
      </div>



    </div>
  )
}

export default Navbar