import React from 'react'
import Wallpaper from '../components/login&register/wallpaper'
import { easeIn, motion, AnimatePresence } from "framer-motion";
import Loginlayout from '../components/login&register/loginlayout'

function Loginpage() {

  const sectionVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: easeIn } },
  };


  return (
    <div className='flex h-screen bg-[#f2f7f9]'>
      <AnimatePresence>
        <motion.section
          className="h-screen scroll-snap-start grid grid-cols-[55%_45%] w-full"
          variants={sectionVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.8 }}
        >
          <Wallpaper />
          <Loginlayout />
        </motion.section>
      </AnimatePresence>

    </div>
  )
}

export default Loginpage
