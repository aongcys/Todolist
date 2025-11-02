import React from 'react';
import { MdOutlineSearch } from 'react-icons/md';
import Image from 'next/image';
import { FaRegUserCircle } from 'react-icons/fa';
import { LuLogOut } from 'react-icons/lu';


const Usernavbar = () => {
  return (
    <div className='flex w-full justify-between items-center p-5'>
      <div className="relative max-w-5xl w-full">
        <MdOutlineSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 size-5" />
        <input
          type="text"
          placeholder="Find your to do"
          className="border p-3 pl-10 border-gray-200 bg-white rounded-full w-full focus:outline-none focus:border-gray-400"
        />
      </div>
      <div className="dropdown dropdown-bottom dropdown-end">
        <div tabIndex={0} role="button" className="rounded-full overflow-hidden w-11 h-11 cursor-pointer">
          <Image
            width={40}
            height={40}
            src="/image/mocupcatna.jpeg"
            alt="profile"
            className="object-cover w-full h-full"
          />
        </div>
        <ul tabIndex={-1}
          className="dropdown-content menu bg-base-100 rounded-box w-full min-w-[150px] p-2 shadow-sm mt-2">
          <li><a className='flex justify-start'><FaRegUserCircle className='size-4.5' />Profile</a></li>
          <li><a className='flex justify-start'><LuLogOut className='size-4.5 rotate-180' />Logout</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Usernavbar;
