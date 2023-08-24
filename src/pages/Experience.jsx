import React, { useState } from 'react'
import TopLeftImg from '../components/TopLeftImg'
import Navbar from '../components/Navbar'
import SideBar from '../components/SideBar'
import {
  FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNode
} from 'react-icons/fa'
import { SiAdobexd, SiAdobephotoshop } from 'react-icons/si'
import { TbSql } from 'react-icons/tb'

import CountUp from 'react-countup'
import { motion } from 'framer-motion'
import { fadeIn } from '../assets/js/variants'


export const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <FaNode />,
          <TbSql />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
    ],
  },
  // {
  //   title: 'awards',
  //   info: [
  //     {
  //       title: 'Best employee & Best performance - I.S.D.C',
  //       stage: '2020',
  //     },
  //     {
  //       title: 'Top 3 Rope Access - Finalist',
  //       stage: '2009 - 2010',
  //     },
  //   ],
  // },
  {
    title: 'experience',
    info: [
      {
        title: 'Full Stack Developer - Tricornio Technologies',
        stage: '2022 - present',
      },
      {
        title: 'Safety Trainer cum Data Analyst - I.S.D.C',
        stage: '2019 - 2021',
      },
      {
        title: 'Direct Sales Associate - Karur Vysys Bank Pvt Ltd.',
        stage: '2016 - 2019',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Full stack Developement - Newton School Coding Bootcamp',
        stage: '2021',
      },
      {
        title: 'Master of Business Administration - Subharti University, U.P, India',
        stage: '2018',
      },
      {
        title: 'Bachelor of Computer Application - I.M.S, U.P, India',
        stage: '2014',
      },

    ],
  },
];


const About = () => {

  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className="main bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900 w-screen h-screen overflow-hidden 
    dark:bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] dark:from-sky-400 dark:to-indigo-900 transition duration-500 ease-in-out">
      <TopLeftImg />
      <Navbar />
      <SideBar />
      <div className='hidden xl:flex absolute
         bottom-0 -left-[370px]'>
      </div>
      <div className='container mx-auto '>
        <div className='h-full flex flex-col items-center xl:flex-row gap-x-6 mt-48 xl:mt-40 dark:text-gray-100 transition duration-500 ease-in-out'>
          {/* text */}
          <div className='flex flex-1 flex-col justify-center mt-0 xl:pl-40 '>
            <motion.h2
              variants={fadeIn('right', 0.2)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='xl:text-[35px] text-2xl xl:text-left text-center font-bold mb-4 '>Captivating <span className='text-accent'>stories</span> birth magnification designs.</motion.h2>
            <motion.p
              variants={fadeIn('right', 0.4)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='xl:text-left text-center max-w-[500px] mx-auto xl:mx-0 xl:mb-12 px-2 xl:px-0 text-slate-500 dark:text-slate-300 '>4 years ago, I restart my career as a Data Analyst with full stack developer, Since then, I've done remote work for companies, and work done on digital products for business and consumer use.</motion.p>
            <motion.div
              variants={fadeIn('right', 0.6)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'>
              <div className='flex flex-1 xl:gap-x-6'>
                <div className='relative flex-1 after:w-[1px] after:
                h-full after:bg-white-10 after:absolute after:top-0 after:
                right-0'>
                  <div className='text-2xl xl:text-4xl font-extrabold text-accent dark:text-red-300 mb-2'>
                    <CountUp start={0} end={2} duration={5} />
                    +
                  </div>
                  <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] '>Years of experience</div>
                </div>
                <div className='relative flex-1 after:w-[1px] after:
                h-full after:bg-white-10 after:absolute after:top-0 after:
                right-0'>
                  <div className='text-2xl xl:text-4xl font-extrabold text-accent dark:text-red-300 mb-2'>
                    <CountUp start={0} end={8} duration={5} />
                    +
                  </div>
                  <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] '>Satisfied clients</div>
                </div>
                <div className='relative flex-1 after:w-[1px] after:
                h-full after:bg-white-10 after:absolute after:top-0 after:
                right-0'>
                  <div className='text-2xl xl:text-4xl font-extrabold text-accent dark:text-red-300 mb-2'>
                    <CountUp start={0} end={10} duration={5} />
                    +
                  </div>
                  <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] '>Finished projects</div>
                </div>
                <div className='relative flex-1'>
                  <div className='text-2xl xl:text-4xl font-extrabold text-accent dark:text-red-300 mb-2'>
                    <CountUp start={0} end={2} duration={5} />
                    +
                  </div>
                  <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] '>Winning awards</div>
                </div>
              </div>
            </motion.div>
          </div>
          {/* info */}
          <motion.div
            variants={fadeIn('left', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='flex flex-col mt-4 w-full xl:pt-20 xl:max-w-[48%] h-[480px]'>
            <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
              {aboutData.map((item, itemIndex) => {
                return (
                  <div key={itemIndex}
                    className={`${index === itemIndex && 'text-accent after:w-[100%]  after:transition-all after:duration-300'} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-zinc-400 after:absolute after:-bottom-1 after:left-0`} onClick={() => setIndex(itemIndex)}>{item.title}</div>
                )
              })}
            </div>
            <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
              {aboutData[index].info.map((item, itemIndex) => {
                return (
                  <div key={itemIndex} className='flex flex-1 flex-col md:flex-row max-w-max gap-x-2 items-center text-center text-white/60'>
                    <div className='font-light mb-2 md:mb-0 text-slate-500 dark:text-slate-300'>{item.title}</div>
                    <div className='hidden md:flex text-slate-500 dark:text-slate-300'>--</div>
                    <div className='text-slate-500 dark:text-slate-300'>{item.stage}</div>
                    <div className='flex gap-x-4'>
                      {item.icons?.map((icon, indexItem) => {
                        return (
                          <div className='text-2xl text-slate-500 dark:text-white '>{icon}</div>
                        )
                      })}
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default About
