import Link from 'next/link'
import { CalendarRange } from 'lucide-react'
import React from 'react'

function Footer() {
  return (
    <div className='bg-[#1b4276] h-full p-5 px-10 flex justify-center'>
      <Link href='/' className='flex gap-3 items-center text-white'>
        <CalendarRange className='size-6' />
        <p className='font-semibold text-lg'>Todo list</p>
      </Link>
    </div>
  )
}

export default Footer
