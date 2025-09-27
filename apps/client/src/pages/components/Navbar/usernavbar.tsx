import React from 'react';
import { MdOutlineSearch } from 'react-icons/md';
import Image from 'next/image'; // Import the Image component

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
      <button className="rounded-full overflow-hidden w-11 h-11">
        <Image
          width={40}
          height={40}
          src="/image/mocupcatna.jpeg"
          alt="profile"
          className="object-cover w-full h-full"
        />
      </button>
    </div>
  )
}

export default Usernavbar;
