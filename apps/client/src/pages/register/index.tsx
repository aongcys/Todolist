import React from 'react'
import Wallpaper from '../../components/login&register/wallpaper'
import Registerlayout from '../../components/login&register/Registerlayout';

function Registerpage() {

  return (
    <div className='grid grid-cols-[55%_45%] bg-[#f2f7f9] h-auto '>
      <Wallpaper />
      <Registerlayout />
    </div>
  )
}

export default Registerpage
