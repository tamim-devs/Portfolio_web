import React from 'react'
import logo from '../../assets/images/logo.png'
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa6";
import {FaInstagram} from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
<div className='overflow-x-hidden text-neutral-300 antialiased slec bg-cyan-300 selection:bg-text-cyan-900'>
  <div className="absolute container mx-auto  inset-0 -z-10 h-full w-full items-center px-5">
    <div className='fliexd top-0 z-10 h-full w-full'> 

        <nav className='mb-20 flex-items-center justify-between py-6 '>
          <div className='px-8 flex justify-between flex-shrink-0 items-center'>
          <img className='bg-no-repeat mx-2 w-10 h-14' src={logo} alt="img" />
          <div>
            <ul className='flex items-center gap-14'>
              <NavLink><p className=' bg-white  hover:bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-lg font-bold tracking-tighter text-transparent'>Home</p></NavLink>
              <NavLink><p className=' bg-white  hover:bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-lg font-bold tracking-tighter text-transparent'>About me</p></NavLink>
              <NavLink><p className=' bg-white  hover:bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-lg font-bold tracking-tighter text-transparent'>Portfolio</p></NavLink>             
              <NavLink><p className=' bg-white  hover:bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-lg font-bold tracking-tighter text-transparent'>Contact me</p></NavLink>             
            </ul>
          </div>
          <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
              <FaLinkedin/>
              <FaGithub/>
              <FaInstagram/>
              <FaWhatsapp />
          </div>
          </div>
          </nav>
    </div>
  </div>
</div>
    </>
  )
}

export default Navbar