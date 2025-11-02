import { CalendarRange } from 'lucide-react'
import React from 'react'

function Publicnavbar() {
  return (
    <div className='flex h-10 items-center p-14 px-15'>
      <div className='flex gap-3 items-center'>
        <CalendarRange className='size-8' />
        <p className='font-semibold text-lg'>Todo list</p>
      </div>
    </div>
  )
}

export default Publicnavbar
