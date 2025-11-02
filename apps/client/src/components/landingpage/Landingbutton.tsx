import React from 'react'
import Link from 'next/link'

function Landingbutton() {

  return (
    <div>
      <div className='flex justify-center items-center gap-5'>
        <Link href="/login"><button className='bg-[#6CAAF9] text-white px-6 py-3 rounded-full mt-10 hover:bg-white border border-[#6CAAF9] hover:text-[#6CAAF9] transition duration-300 w-36 font-semibold'>Sign Up</button></Link>
        <button className='bg-white text-[#6CAAF9] border border-[#6CAAF9] px-6 py-3 rounded-full mt-10 hover:bg-[#6CAAF9] font-semibold hover:text-white transition duration-300 w-36'>Contact us</button>
      </div>
    </div>
  )
}

export default Landingbutton
