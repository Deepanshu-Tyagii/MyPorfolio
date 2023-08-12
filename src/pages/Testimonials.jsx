import React from 'react'
import TopLeftImg from '../components/TopLeftImg'
import Navbar from '../components/Navbar'
import SideBar from '../components/SideBar'
import { Pagination,     Navigation } from 'swiper/modules';


import { FaQuoteLeft } from 'react-icons/fa';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const testimonialSlider = [
    {
      image: 'images/t-avt-1.png',
      name: 'Anne Smith',
      position: 'Customer',
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
    },
    {
      image: 'images/t-avt-2.png',
      name: 'Jane Doe',
      position: 'Customer',
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
    },
    {
      image: 'images/t-avt-3.png',
      name: 'Jhon Doe',
      position: 'Customer',
      message:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
    },
  ];


const Testimonials = () => {
  return (
    <div className="main bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-screen h-screen overflow-hidden">
        <TopLeftImg />
        <Navbar />
        <SideBar />
        <div className='container mx-auto h-full mt-12 flex flex-col justify-center'>
            <h2 className='xl:text-[35px] text-2xl font-bold text-center xl:mb-8 '>What clients <span className='text-accent'> Say.</span></h2>
            <div>
            <Swiper 
            navigation={true}
            pagination={{
            clickable: true,
        }}
        modules={{Navigation, Pagination}}
        className='h-[380px] xl:w-[1180px] '
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
                                    <div className='text-lg'>{person.name}</div>
                                    <div className='text-[12px] uppercase font-extralight tracking-wide'>{person.position}</div>
                                </div>
                            </div>
                            {/* message */}
                            <div className='flex-1 flex flex-col justify-center  before:w-[2px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20 max-w-[600px]'>
                                <div className='mt-4 mb-4'>
                                    <FaQuoteLeft className='text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0'/>
                                </div>
                                <div className='px-12 xl:px-0 xl:text-lg text-center md:text-left'>{person.message}</div>
                            </div>
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>

            </div>
        </div>
        
    </div>
  )
}

export default Testimonials