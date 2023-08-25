import React from 'react'
import Navbar from './components/Navbar'
import TopLeftImg from './components/TopLeftImg'
import SideBar from './components/SideBar'
import { TypeAnimation } from 'react-type-animation';
import actor from './assets/images/actor.png'
import curved from './assets/images/curved.png'
import shade from './assets/images/shade.png'
import arrow from './assets/images/arrow.png'
// import { Link } from 'react-router-dom';
import ParticalsContainer from './components/particalsContainer';
import {motion} from 'framer-motion'
import {fadeIn} from './assets/js/variants'
import resume from './assets/images/Deepanshu_Resume2.pdf';



const Main = () => {

  return (
    <div className="main bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900 w-screen h-screen overflow-hidden dark:bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] dark:from-sky-400 dark:to-indigo-900">

      <TopLeftImg />
      <Navbar />
      <SideBar />
      <div className='h-full'>
        <div className='w-full h-full'>
        <ParticalsContainer />
          <div className='container text-center xl:pl-32 flex flex-col justify-center xl:pt-28 xl:text-left h-full mx-auto dark:text-gray-100 transition duration-500 ease-in-out '>
            <motion.h1 
            variants={fadeIn('down', 0.1)}
            initial='hidden'
            exit='hidden'
            animate='show'
            className='text-[55px] font-bold z-20'>Hello,</motion.h1>
            <div className='text-[22px] lg:text-[40px] font-semibold font-secondary uppercase'>
              <motion.div
              variants={fadeIn('down', 0.2)}
              initial='hidden'
              exit='hidden'
              animate='show'
              >
              <span >I am a </span>
              <TypeAnimation 
              sequence={[
                'Developer',
                2000,
                'Designer',
                2000,
                'Youtuber',
                2000,

              ]}
                wrapper="span"
                speed={50}
                className='text-accent'
                repeat={Infinity} />
                </motion.div>
              <motion.p 
              variants={fadeIn('down', 0.3)}
              initial='hidden'
              exit='hidden'
              animate='show'
              className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 text-sm xl:w-4/12 px-8 xl:px-0 pt-4 text-slate-500 dark:text-slate-300'> I've dedicated my career to building the digital dreams of clients and users alike. As a full stack developer, I combine my love for elegant front-end interfaces with my knack for constructing sturdy back-end foundations, resulting in harmonious applications that captivate and perform.</motion.p>
            </div>
           
            <motion.div 
            variants={fadeIn('down', 0.4)}
            initial='hidden'
            exit='hidden'
            animate='show'
            className='relative xl:mt-0 mt-4 xl:mx-0 mx-auto'>
              <a href={resume} download="Deepanshu_tyagi_resume.pdf" ><img className='w-24 animate-spin-slow' src={curved} alt="curved" /></a>
              <a href={resume} download="Deepanshu_tyagi_resume.pdf"><img className='absolute w-8 top-8 left-8' src={arrow} alt="arrow" /></a>
            </motion.div>
            
          </div>
          <motion.div 
          variants={fadeIn('up', 0.5)}
          initial='hidden'
          exit='hidden'
          animate='show'
          className='flex-1 items-center'>

            <img className='z-10 absolute bottom-0 right-40 w-4/12 xl:block hidden' src={shade} alt="shade" />
          </motion.div>
          <motion.img 
          variants={fadeIn('up', 0.5)}
          initial='hidden'
          exit='hidden'
          animate='show'
          className='rounded-full shadow-2xl absolute z-20 bottom-20 right-80 xl:block hidden w-4/12' src={actor} alt="actor" ></motion.img>
        </div>
      </div>
    </div>
  )
}

export default Main