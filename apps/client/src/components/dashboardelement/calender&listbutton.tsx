import React from 'react'
import { FaRegCalendarDays } from 'react-icons/fa6'
import { IoIosList } from 'react-icons/io'

function Calenderlistbutton() {
  return (
    <div>
      <div className='flex gap-5'>
        <button
          className=' text-lg flex gap-2 items-center hover:border-b-2 text-gray-600 hover:text-black transition-all duration-150 cursor-pointer'>
          <FaRegCalendarDays />
          <p>Calender</p>
        </button>
        <button
          className=' flex text-lg items-center gap-2 text-gray-600 transition-all duration-150 hover:text-black hover:border-b-2 cursor-pointer'>
          <IoIosList />
          <p>List</p>
        </button>
      </div>
    </div>
  )
}

export default Calenderlistbutton
