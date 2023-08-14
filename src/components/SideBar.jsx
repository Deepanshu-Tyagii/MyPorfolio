import React from 'react'
import { FaCubes, FaHome, FaStackExchange } from 'react-icons/fa'
import { BiSolidMessageDetail } from 'react-icons/bi'
import { BsFillPersonFill } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import {motion} from 'framer-motion'

const SideBar = () => {
  return (

    // <div className="absolute rounded-xl top-1/4 right-20 flex flex-col gap-10 text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-4 py-14 z-50">
    <div className='flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen '>  
    <motion.div
    className='flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 bg-white/10 xl:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-4 md:px-40 xl:px-0 h-[70px] xl:h-max py-8 xl:rounded-xl backdrop-blur-sm'>

      <NavLink to='/MyPortfolio'><FaHome className='cursor-pointer text-3xl xl:text-xl xl:hover:scale-150 transition duration-500 ease-in-out' /></NavLink>
      <NavLink to='/about'><BsFillPersonFill className='cursor-pointer text-3xl xl:text-xl xl:hover:scale-150 transition duration-500 ease-in-out' /></NavLink>
      <NavLink to='/testimonials'><FaStackExchange className='cursor-pointer text-3xl xl:text-xl xl:hover:scale-150 transition duration-500 ease-in-out' /></NavLink>
      <NavLink to='/projects'><FaCubes className='cursor-pointer text-3xl xl:text-xl xl:hover:scale-150 transition duration-500 ease-in-out' /></NavLink>
      <NavLink to='/contacts'><BiSolidMessageDetail className='cursor-pointer text-3xl xl:text-xl xl:hover:scale-150 transition duration-500 ease-in-out' /></NavLink>
    </motion.div>
    </div>

  )
}

export default SideBar
