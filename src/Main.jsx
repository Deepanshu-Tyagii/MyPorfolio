import React from 'react'
import Navbar from './components/Navbar'
import TopLeftImg from './components/TopLeftImg'
import SideBar from './components/SideBar'
import { TypeAnimation } from 'react-type-animation';
import actor from './assets/images/actor.png'
import curved from './assets/images/curved.png'
import shade from './assets/images/shade.png'
import arrow from './assets/images/arrow.png'
import { Link } from 'react-router-dom';
import ParticalsContainer from './components/particalsContainer';



const Main = () => {

  // download link
  const google = 'https://www.google.com';


  return (
    <div className="main bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-screen h-screen overflow-hidden">

      <TopLeftImg />
      <Navbar />
      <SideBar />
      <div className='h-full'>
        <div className='w-full h-full'>
          <ParticalsContainer />
          <div className='container text-center xl:pl-32 flex flex-col justify-center xl:pt-28 xl:text-left h-full mx-auto'>
            <h1 className='text-[55px] font-bold'>Hello,</h1>
            <div className='text-[22px] lg:text-[40px] font-semibold font-secondary uppercase'>
              <span className=''>I am a </span>
              <TypeAnimation sequence={[
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
              <p className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 text-sm xl:w-6/12 px-8 xl:px-0 pt-4 text-slate-300'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            </div>
            <div className='relative xl:mt-0 mt-4 xl:mx-0 mx-auto'>
              <Link to={google}><img className='w-24 animate-spin-slow' src={curved} alt="curved" /></Link>
              <Link to={google}><img className='absolute w-8 top-8 left-8' src={arrow} alt="arrow" /></Link>
            </div>
          </div>
          <div className='flex-1 items-center'>

            <img className='z-10 absolute bottom-0 right-40 w-4/12 xl:block hidden' src={shade} alt="shade" />
          </div>
          <img className='rounded-full shadow-2xl absolute z-20 bottom-20 right-80 xl:block hidden w-4/12' src={actor} alt="actor" />
        </div>
      </div>
    </div>
  )
}

export default Main