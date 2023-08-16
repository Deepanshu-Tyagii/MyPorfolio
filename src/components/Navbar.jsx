import React, { useEffect, useState } from 'react'
import { FaBell, FaInstagram, FaLinkedin, FaMoon, FaSun } from 'react-icons/fa'
import { Link } from 'react-router-dom';



const Navbar = () => {

  const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");
  const element = document.documentElement;

  // Social Links
  const linkedInUrl = 'https://www.google.com';
  const instaUrl = 'https://www.google.com';


  const handleOn = () => {
    setTheme("dark");
    localStorage.setItem('theme', theme);
  }

  const handleOff = () => {
    setTheme("light");
    localStorage.setItem('theme', theme);
  }

  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem('theme', 'dark');
        break;
        case "light":
          element.classList.remove("dark");
          localStorage.setItem('theme', 'light');
          break;
          default:
            localStorage.removeItem('theme');
            break;
    }
    
  }, [theme]);


  return (
    <header className='absolute z-30 w-full flex items-center  xl:px-0 xl:h-[90px]'>
      <div className='container mx-auto'>
        <div className="flex flex-col lg:flex-row justify-between px-32 items-center gap-y-6 py-8 xl:mt-16 dark:text-gray-100">
          <h2
            className='text-[26px] xl:text-[36px] lg:text-left xl:text-left text-center w-screen font-bold transition duration-500 ease-in-out'>Deepanshu <span className=''>Tyagi</span></h2>

          <div className="flex gap-6 items-center text-center">
            <Link to={linkedInUrl} target='_blanck'><FaLinkedin className='cursor-pointer xl:hover:text-sky-300 text-xl xl:text-xl xl:hover:scale-150 transition duration-500 ease-in-out' /></Link>

            <Link to={instaUrl}><FaInstagram className='cursor-pointer xl:hover:text-orange-300 text-xl xl:text-xl xl:hover:scale-150 transition duration-500 ease-in-out' /></Link>
            <FaBell className='cursor-pointer hover:text-fuchsia-300 text-xl xl:text-xl xl:hover:scale-150 transition duration-500 ease-in-out' />
            {
              theme === "light"
                ?
                <FaMoon onClick={handleOn} className='cursor-pointer xl:hover:text-sky-300 text-xl xl:text-xl xl:hover:scale-150 transition duration-500 ease-in-out' />
                :
                <FaSun onClick={handleOff} className='cursor-pointer xl:hover:text-orange-300 text-slate-100 text-xl xl:text-xl xl:hover:scale-150 transition duration-500 ease-in-out' />
            }

          </div>
        </div>


      </div>
    </header>
  )
}

export default Navbar