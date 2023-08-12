import {motion} from 'framer-motion';



const transitionVariants = {
    initial: {
        x: '100%',
        width: '100%'
    },
    animate: {
        x: '0%',
        width: '0%'
    },
    exit: {
        x: ['0%', '100%'],
        width: ['0%', '100%']
    }
}

const Transition = () =>{
    return (
        <>
        <div className='fixed top-0 bottom-0 right-full h-screen w-screen z-30 bg-[#2e2257]' variants={transitionVariants} initial='initial' animation='animate' exit='exit' transition={{delay: 0.2, duration:0.6, ease: 'easeInOut'}}></div>
        <div></div>
        <div></div>
        </>
    )
};

export default Transition;
