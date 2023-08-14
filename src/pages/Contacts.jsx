import React from 'react'
import TopLeftImg from '../components/TopLeftImg'
import Navbar from '../components/Navbar'
import SideBar from '../components/SideBar'
import {BsArrowRight} from 'react-icons/bs'
import { motion } from 'framer-motion'
import { fadeIn } from '../assets/js/variants'

const Contacts = () => {
  return (
    <div className="main bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-screen h-screen overflow-hidden">
        <TopLeftImg />
        <Navbar />
        <SideBar />
        <div className="h-full mt-8 container mx-auto py-8 text-center xl:text-left flex items-center justify-center">
          <motion.div 
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          transition={{delay: 0.4, duration: 1}}
          className='overflow-hidden container flex flex-col w-full max-w-[700px] shadow-2xl rounded-xl'>
            <motion.h2 
            variants={fadeIn('down', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'className='xl:text-[35px] text-2xl font-bold text-center mt-4'>Let,s <span className='text-accent'>Connect!</span></motion.h2>
            <motion.form 
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'className='p-8'>
              <div className="flex gap-x-6 w-full">
                <input type="text" placeholder='Name' className='w-full h-[52px] rounded-lg pl-6 capitalize outline-none bg-transparent shadow-2xl'/>
                <input type="email" placeholder='Email' className='w-full h-[52px] rounded-lg pl-6 capitalize outline-none bg-transparent shadow-2xl'/>
              </div>
              <input type="text" placeholder='subject' className='w-full h-[52px] rounded-lg pl-6 capitalize outline-none bg-transparent shadow-2xl my-4'/>
              <textarea name="text" id="text" placeholder='Message' className='w-full h-[180px] rounded-lg p-6 capitalize resize-none outline-none bg-transparent shadow-2xl'></textarea>
              <button className='rounded-lg border border-white/20 max-w-[170px]
              px-8 transition-all duration-300 flex items-center justify-center overflow-hidden group mt-2 h-[38px]'>
                <span className='group-hover:translate-x-[10%] group-hover:opacity-0 transition-all duration-500'>Let's talk</span>
                <BsArrowRight className='-translate-x-[120%] opacity-0 group-hover:flex group-hover:-translate-x-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px] '/>
              </button>
            </motion.form>
          </motion.div>
        </div>
    </div>
  )
}

export default Contacts