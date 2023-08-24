import React from 'react'
import TopLeftImg from '../components/TopLeftImg'
import Navbar from '../components/Navbar'
import SideBar from '../components/SideBar'
import { Pagination } from 'swiper/modules';
import { FaQuoteLeft } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
import { fadeIn } from '../assets/js/variants';



import 'swiper/css';
import 'swiper/css/pagination';

export const testimonialSlider = [
    {
      image: require('../assets/images/t-avt-2.png'),
      name: 'Anne Smith',
      position: 'Customer',
      message:
        'Deepanshu was very helpful and fast to respond to my inquiry to help with website issues, Very helpful when building my website',
    },
    {
      image: require('../assets/images/t-avt-3.png'),
      name: 'Jane Doe',
      position: 'Customer',
      message:
        'From the start of the project, through to completion, Deepanshu supported us and exceeded our expectations in every way.',
    },
    {
      image: require('../assets/images/t-avt-1.png'),
      name: 'Jhon Doe',
      position: 'Customer',
      message:
        'Deepanshu is a great help managing a very out of date website. Everything we ask him to do is done quickly, we would be lost without him.',
    },
  ];


const Testimonials = () => {
  return (
    <div className="main bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900 w-screen h-screen overflow-hidden dark:bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] dark:from-sky-400 dark:to-indigo-900">
        <TopLeftImg />
        <Navbar />
        <SideBar />
        <div className='container mx-auto h-full mt-12 flex flex-col justify-center '>
            <motion.h2 
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='xl:text-[35px] text-2xl font-bold text-center xl:mb-8 dark:text-gray-100 '>What clients <span className='text-accent'> Say.</span></motion.h2>
            <motion.div
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'>
            <Swiper 
            
            pagination={{
            clickable: true,
        }}
        modules={[Pagination]}
        className='xl:h-[380px] h-[420px] xl:w-[1180px] '
        >
            {testimonialSlider.map((person, index) =>{
                return (
                    <SwiperSlide className='xl:mt-16' key={index}>
                        <div className='xl:mt-8 mt-8 flex flex-col justify-center items-center md:flex-row gap-x-8 '> 
                            <div className='w-full max-w-[300px] flex flex-col items-center xl:justify-center relative mx-auto xl:mx-0'>
                                <div className='flex flex-col justify-center text-center'>
                                    <div className='mb-2 mx-auto'>
                                        <img src={person.image} width={100} height={100} alt="" />
                                    </div>
                                    <div className='text-lg dark:text-gray-100'>{person.name}</div>
                                    <div className='text-[12px] uppercase font-extralight tracking-wide dark:text-gray-100'>{person.position}</div>
                                </div>
                            </div>
                            {/* message */}
                            <div className='flex-1 flex flex-col justify-center  before:w-[2px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20 max-w-[600px]'>
                                <div className='mt-4 mb-4'>
                                    <FaQuoteLeft className='text-4xl xl:text-6xl text-slate-400 dark:text-white/30 mx-auto md:mx-0'/>
                                </div>
                                <div className='px-12 xl:px-0 xl:text-lg text-center md:text-left dark:text-gray-100'>{person.message}</div>
                            </div>
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>

            </motion.div>
        </div>
        
    </div>
  )
}

export default Testimonials
