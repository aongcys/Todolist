import React from 'react'
import Wallpaper from '../components/login&register/wallpaper'
import { easeOut, motion } from "framer-motion";
import Registerlayout from '../components/login&register/Registerlayout';

function Registerpage() {

  const sectionVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: easeOut } },
  };


  return (
    <div className='flex h-screen bg-[#f2f7f9]'>
      <motion.section
        className="h-screen scroll-snap-start grid grid-cols-[55%_45%] w-full"
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.8 }}
      >


        <Wallpaper />
        <Registerlayout />
      </motion.section>

    </div>
  )
}

export default Registerpage
