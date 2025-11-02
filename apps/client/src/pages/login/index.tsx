import React from 'react'
import Wallpaper from '../../components/login&register/wallpaper'
import Loginlayout from '../../components/login&register/loginlayout'

function Loginpage() {


  return (
    <div className='grid grid-cols-[55%_45%] bg-[#f2f7f9] h-auto '>
      <Wallpaper />
      <Loginlayout />
    </div>
  )
}

export default Loginpage
