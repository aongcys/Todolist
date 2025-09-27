import React from 'react'
import { FaRegCalendarDays } from 'react-icons/fa6'
import { IoIosList } from 'react-icons/io'

function Calenderlistbutton() {
  return (
    <div>
      <div className='flex gap-5'>
        <button
          className=' text-lg flex gap-2 items-center hover:'>
          <FaRegCalendarDays />
          <p>Calender</p>
        </button>
        <button
          className=' flex text-lg items-center gap-2'>
          <IoIosList />
          <p>List</p>
        </button>
      </div>
    </div>
  )
}

export default Calenderlistbutton
