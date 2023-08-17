import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import TopLeftImg from '../components/TopLeftImg'
import Navbar from '../components/Navbar'
import SideBar from '../components/SideBar'
import {BsArrowRight} from 'react-icons/bs'
import { motion } from 'framer-motion'
import { fadeIn } from '../assets/js/variants'

const Contacts = () => {
  const [client, setClient] = useState({
    from_name: "",
    from_email:"",
    subject:"",
    message:""

  })

  const handleChange = e => {
    const { name, value } = e.target
    setClient({
        ...client,
        [name]: value
    })
    
};


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const { from_name, from_email, subject, message } = client
    if(from_name && from_email && subject && message){
      emailjs.sendForm('service_fs5tmfs', 'template_o31np26', form.current, '1_Ntxm131uxGGJPy0')
      .then((result) => {
          console.log(result);
          alert("Submit Successfully");
      }, (error) => {
          console.log(error);
      });
    }else {
      alert("All field Rquired Or invalid input");
    }
   
  };



  return (
    <div className="main bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-gray-900 via-gray-100 to-gray-900  w-screen h-screen overflow-hidden dark:bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] dark:from-sky-400 dark:to-indigo-900">
        <TopLeftImg />
        <Navbar />
        <SideBar />
        <div className="h-full mt-8 container mx-auto py-8 text-center xl:text-left flex items-center justify-center dark:text-gray-100 transition duration-500 ease-in-out">
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
            exit='hidden'className='p-8'
            ref={form} onSubmit={sendEmail} >
              <div className="flex gap-x-6 w-full">
                <input type="text" name="from_name" placeholder='Name' value={client.from_name} onChange={ handleChange } className='w-full h-[52px] rounded-lg pl-6 capitalize outline-none bg-transparent shadow-2xl'/>
                <input type="email" name="from_email" placeholder='Email' value={client.from_email} onChange={ handleChange } className='w-full h-[52px] rounded-lg pl-6 capitalize outline-none bg-transparent shadow-2xl'/>
              </div>
              <input type="text" name="subject" placeholder='subject' value={client.subject} onChange={ handleChange } className='w-full h-[52px] rounded-lg pl-6 capitalize outline-none bg-transparent shadow-2xl my-4'/>
              <textarea name="message" id="text" placeholder='Message' value={client.message} onChange={ handleChange } className='w-full h-[180px] rounded-lg p-6 capitalize resize-none outline-none bg-transparent shadow-2xl '></textarea>
              <button type='submit' className='rounded-lg border border-white/20 max-w-[170px]
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