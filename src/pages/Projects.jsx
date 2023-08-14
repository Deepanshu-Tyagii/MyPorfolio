import React from 'react'
import TopLeftImg from '../components/TopLeftImg'
import Navbar from '../components/Navbar'
import SideBar from '../components/SideBar'
import { Pagination } from 'swiper/modules';
import {BsArrowRight } from 'react-icons/bs'

import { Swiper, SwiperSlide } from 'swiper/react';
import {motion} from 'framer-motion'
import { fadeIn } from '../assets/js/variants';


import 'swiper/css';
import 'swiper/css/pagination';

export const projectData = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: './images/thumb1.jpg',
        },
        {
          title: 'title',
          path: './images/thumb2.jpg',
        },
        {
          title: 'title',
          path: './images/thumb3.jpg',
        },
        {
          title: 'title',
          path: './images/thumb4.jpg',
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: './images/thumb4.jpg',
        },
        {
          title: 'title',
          path: './images/thumb1.jpg',
        },
        {
          title: 'title',
          path: './images/thumb2.jpg',
        },
        {
          title: 'title',
          path: './images/thumb3.jpg',
        },
      ],
    },
  ],
};

const Projects = () => {
  return (
    <div className="main bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-screen h-screen overflow-hidden">
      <TopLeftImg />
      <Navbar />
      <SideBar />
      <div className='container mx-auto'>
        <div className='mt-44 xl:mt-52 xl:mx-44 flex flex-col xl:flex-row gap-x-8'>
          <div className='text-center flex flex-col xl:w-[30vw] lg:text-left mb-4 xl:mb-0'>
            <motion.h2 
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='xl:text-[35px] text-2xl font-bold text-center xl:text-left xl:my-8 '>My <span className='text-accent'> Work.</span></motion.h2>
            <motion.p 
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='mt-2 mb-4 max-w-[400px] mx-auto lg:mx-0'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</motion.p>
            </div>
            <motion.div 
            variants={fadeIn('down', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='w-full xl:max-w-[65%]'>
              <Swiper
                // spaceBetween={10}
                pagination={{
                  clickable: true,
                }}
                modules={[ Pagination ]}
                className='h-[380px] sm:h-[480px]'
              >
                {projectData.slides.map((slide, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <div className='mx-4 grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
                        {slide.images.map((image, index) => {
                          return (
                            <div className='relative rounded-lg overflow-hidden flex items-center justify-center group' key={index}>
                              <div className='flex items-center justify-center relative overflow-hidden'>
                              <img src={image.path} alt={image.title} />

                              <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                              <div className='absolute bottom-0 translate-y-full  group-hover:-translate-y-10 group-hover:xl:-translate-y-20
                              transition-all duration-300'>
                                <div className='text-slate-100 flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                                  <div className='delay-100'>Tittle</div>
                                  <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>Project</div>
                                  <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'><BsArrowRight /></div>
                                </div>
                              </div>
                              </div>

                            </div>
                          )
                        })}
                      </div>
                    </SwiperSlide>
                  )
                })}
              </Swiper>
            </motion.div>
          </div>
          </div>
        </div>

        )
}

        export default Projects
