import React from 'react'
import Wallpaper from '../components/login&register/wallpaper'
import { motion, AnimatePresence } from "framer-motion";
import { sectionvariants } from '../components/changepageanimate/sectionvariants';
import Loginlayout from '../components/login&register/loginlayout'

function Loginpage() {


  return (
    <div className='flex h-screen bg-[#f2f7f9]'>
      <AnimatePresence>
        <motion.div
          className="h-screen scroll-snap-start grid grid-cols-[55%_45%] w-full"
          variants={sectionvariants}
          initial="hidden"
          animate="show"
        >
          <Wallpaper />
          <Loginlayout />
        </motion.div>
      </AnimatePresence>


    </div>
  )
}

export default Loginpage
