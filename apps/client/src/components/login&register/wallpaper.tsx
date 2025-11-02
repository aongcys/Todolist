import { CalendarRange } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

function Wallpaper() {
  return (
    <div>
      < div className='h-screen bg-[#6CAAF9] p-10 rounded-r-4xl min-w-[800px]' >
        <div className='mb-28 inline-flex'>
          <Link href='/' className='flex gap-3 items-center text-white'>
            <CalendarRange className='size-8' />
            <p className='font-semibold text-xl'>Todo list</p>
          </Link>
        </div>
        <div className='flex flex-col text-white px-10 relative'>
          <h1 className='text-5xl mb-4'>Todo List for you</h1>
          <p className='text-lg w-80'>Please Login or Register to enter your schedule</p>

          <Image
            src="/image/login&regisimg.png"
            alt=""
            width={700}
            height={700}
            className='absolute top-0 left-1/2 -translate-x-1/2'
          />
        </div>
      </div >
    </div>
  )
}

export default Wallpaper


