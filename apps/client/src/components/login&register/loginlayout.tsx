import React from 'react'
import Link from 'next/link'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useState } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useRouter } from 'next/navigation';
import { login as userlogin } from '@/service/user';
import { LoginArgs } from '@/service/user/types';

function Loginlayout() {

  const { register, handleSubmit } = useForm<LoginArgs>({ mode: 'onChange' });
  const [alert, setAlert] = useState<string>('');
  const [showpass, setShowpass] = useState<boolean>(false);
  const router = useRouter();


  const OnSubmit: SubmitHandler<LoginArgs> = async (data) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if ((!data.email && !data.password) || !emailPattern.test(data.email) || data.password.length < 8) {
      console.log('Email or Password is Incorrect');
      setAlert("Email or Password is Incorrect");
    } else {
      // console.log('Logging in with', data);
      try { 
        const login = await userlogin({
          email: data.email,
          password: data.password
        });
        if (!login.success) {
          setAlert(login.message);
          return;
        }
      localStorage.setItem('token', login.data.access_token);
      router.push('/dashboard/thisday')
      }
      catch (error) {
        console.error('Login failed:', error);        
        }
    }
  }

  return (
    <div className='flex flex-col justify-center items-center'>
      <p className='text-4xl font-semibold'>Login</p>

      <div className='flex flex-col justify-center items-center'>
        <form
          className='flex flex-col gap-3 mt-10 items-center'
          onSubmit={handleSubmit(OnSubmit)}
        >
          <div>
            <p>Email</p>
            <input
              type="text"
              placeholder='example@gmail.com'
              className='border border-gray-300 rounded-xl bg-white p-3 w-md focus:outline-none focus:ring-1 focus:ring-[#6CAAF9]'
              {...register('email', { required: false })}
            />
          </div>
          <div className='flex flex-col'>
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
            <div className='flex justify-end'>
              <Link href='' className='text-[#6CAAF9] hover:underline'>Forgot Password</Link>
            </div>
          </div>
          <button type="submit" className='bg-[#6CAAF9] text-white rounded-xl font-semibold text-lg p-[10px] w-md hover:bg-[#6c99f9] transition-colors'>Login</button>
          {alert && <p className="text-red-500 text-base mt-1">{alert}</p>}
        </form>
      </div>
      <div>
        <p className='mt-10'> Don&apos;t have an account? <Link href='/register' className='text-[#6CAAF9] hover:underline'>Register</Link></p>
      </div>
    </div>
  )
}

export default Loginlayout
