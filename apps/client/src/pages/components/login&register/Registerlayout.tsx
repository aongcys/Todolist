import React from 'react'
import Link from 'next/link'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useState } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa";

type RegisterArgs = {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmpassword: string;
}

function Registerlayout() {

  const { register, handleSubmit } = useForm<RegisterArgs>({ mode: 'onChange' });
  const [alert, setAlert] = useState<string>('');
  const [showpass, setShowpass] = useState<boolean>(false);
  const [showconpass, setShowconpass] = useState<boolean>(false);


  const OnSubmit: SubmitHandler<RegisterArgs> = data => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if ((!data.email && !data.password) || !emailPattern.test(data.email)) {
      console.log('Email Incorrect');
      setAlert("Email are Incorrect");
    } else if (data.firstname.length < 1 || data.lastname.length < 1) {
      console.log('Name Incorrect');
    } else if (data.password.length < 8) {
      console.log('Password Incorrect');
    } else if (data.password !== data.confirmpassword) {
      console.log('Password not match');
    } else {
      console.log('Rgister in with', data);
      setAlert("");
    }
  }

  return (
    <div className='flex flex-col justify-center items-center gap-5'>
      <p className='text-4xl font-semibold'>Register</p>
      <div>
        <form
          className='flex flex-col gap-3 mt-5'
          onSubmit={handleSubmit(OnSubmit)}
        >
          <div className='grid grid-cols-2 gap-3 w-md justify-between'>
            <div>
              <p>Firstname</p>
              <input
                type="text"
                placeholder='Firstname'
                {...register('firstname', { required: false })}
                className='w-full border border-gray-300 rounded-xl bg-white p-3 focus:outline-none focus:ring-1 focus:ring-[#6CAAF9]' />
            </div>
            <div>
              <p>Lastname</p>
              <input
                type="text"
                placeholder='Lastname'
                {...register('lastname', { required: false })}
                className='w-full border border-gray-300 rounded-xl bg-white p-3 focus:outline-none focus:ring-1 focus:ring-[#6CAAF9]' />
            </div>

          </div>
          <div>
            <p>Email</p>

            <input
              type="text"
              placeholder='example@gmail.com'
              {...register('email', { required: false })}
              className='border border-gray-300 rounded-xl bg-white p-3 w-md focus:outline-none focus:ring-1 focus:ring-[#6CAAF9]' />
          </div>
          <div>
            <p>Password</p>
            <div className='relative'>
              <input
                type={showpass ? "text" : "password"}
                placeholder='***********'
                className='border border-gray-300 rounded-xl bg-white w-md p-3 focus:outline-none focus:ring-1 focus:ring-[#6CAAF9]'
                {...register('password', { required: false })}
              />
              <button
                onClick={() => setShowpass(prev => !prev)}
                className='absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black'
              >
                {showpass ? <FaEye /> : <FaEyeSlash />}
              </button>
              {/* prev ช่วยเรื่องของ การทำ booleen Ex จาก flase เป็น true โดย prev คือ ค่าปัจจุบันของ booleen*/}
            </div>
          </div>
          <div>
            <p>ConfirmPassword</p>
            <div className='relative'>
              <input
                type={showconpass ? "text" : "password"}
                placeholder='***********'
                className='border border-gray-300 rounded-xl bg-white w-md p-3 focus:outline-none focus:ring-1 focus:ring-[#6CAAF9]'
                {...register('confirmpassword', { required: false })}
              />
              <button
                onClick={() => setShowconpass(prev => !prev)}
                className='absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black'
              >
                {showconpass ? <FaEye /> : <FaEyeSlash />}
              </button>
              {/* prev ช่วยเรื่องของ การทำ booleen Ex จาก flase เป็น true โดย prev คือ ค่าปัจจุบันของ booleen*/}
            </div>
          </div>
          {alert && <p className="text-red-500 text-base mt-1">{alert}</p>}
          <button
            type="submit" className='bg-[#6CAAF9] text-white rounded-xl font-semibold text-lg p-[10px] w-md hover:bg-[#6c99f9] transition-colors mt-5'>Register</button>
        </form>
      </div>
      <div>
        <p className='mt-10'> Already have an account? <Link href='/login' className='text-[#6CAAF9] hover:underline'>Login</Link></p>
      </div>
    </div>
  )
}

export default Registerlayout