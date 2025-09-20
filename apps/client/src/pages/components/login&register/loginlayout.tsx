import React from 'react'
import Link from 'next/link'

function loginlayout() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <p className='text-4xl font-semibold'>Login</p>
      <div>
        <form className='flex flex-col gap-3 mt-10'>
          <div>
            <p>Email</p>
            <input type="text" placeholder='example@gmail.com' className='border border-gray-300 rounded-xl bg-white p-3 w-md focus:outline-none focus:ring-1 focus:ring-[#6CAAF9]' />
          </div>
          <div className='flex flex-col'>
            <p>Password</p>
            <input type="text" placeholder='***********' className='border border-gray-300 rounded-xl bg-white p-3 w-md focus:outline-none focus:ring-1 focus:ring-[#6CAAF9]' />
            <div className='flex justify-end'>
              <Link href='' className='text-[#6CAAF9] hover:underline'>Forgot Password</Link>
            </div>
          </div>
          <button type="submit" className='bg-[#6CAAF9] text-white rounded-xl font-semibold text-lg p-[10px] w-md hover:bg-[#6c99f9] transition-colors'>Login</button>
        </form>
      </div>
      <div>
        <p className='mt-10'> Don&apos;t have an account? <Link href='/register' className='text-[#6CAAF9] hover:underline'>Register</Link></p>
      </div>
    </div>
  )
}

export default loginlayout
