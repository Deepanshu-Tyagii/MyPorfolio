import './App.css';
import Main from './Main';
import {Route, Router, Routes} from 'react-router-dom'
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';
import Testimonials from './pages/Testimonials';
import Transition from './transition/Transition';

import {AnimatePresence, motion} from 'framer-motion';
import About from './pages/Experience';

function App() {
  return (
    <>
    <AnimatePresence mode='wait'>
      <motion.div key={Route} className='h-full'>
        <Transition />
      <Routes>
        <Route index element={<Main />} />
        <Route path='/about' element={<About />} />
        <Route path='/testimonials' element={<Testimonials />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contacts' element={<Contacts />} />
      </Routes>
      </motion.div>
    </AnimatePresence>
    
    </>
  );
}

export default App;
