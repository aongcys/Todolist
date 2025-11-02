import React from 'react'
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

function About() {
  return (
    <div className='p-16 bg-white flex gap-32 w-full'>
      <div className='shadow-lg inset-shadow-sm rounded-2xl p-10'>
        <Image
          src="/image/cat.png"
          alt=""
          width={900}
          height={900} />
      </div>
      <div className='flex flex-col items-center justify-center w-full gap-10'>
        <div className='flex flex-col items-center'>
          <p className='text-5xl font-semibold'>What we can do?</p>
          <p className='text-lg'>Here are some examples of our features.</p>
        </div>
        <div className='gap-8 flex flex-col'>
          <div className='flex gap-2 '>
            <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#6CAAF9", fontSize: "18px" }} />
            <div className='flex flex-col gap-2'>
              <p className='font-semibold text-lg'>You can creates activity as you want.</p>
              <p className='text-base'>You can create activities as you want add fun games, relaxing breaks, or productive tasks. Mix and match them your way, organize your day effortlessly, and make every moment count exactly how you like it. Your schedule, your style!</p>
            </div>
          </div>
          <div className='flex gap-2 '>
            <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#6CAAF9", fontSize: "18px" }} />
            <div className='flex flex-col gap-2'>
              <p className='font-semibold text-lg'>Note all what you do in activates.</p>
              <p >Note all that you do in your activities to stay organized, track your progress, and never miss a task. By keeping a clear record, you can plan better, reflect on your achievements, and make each day more productive and enjoyable.</p>
            </div>
          </div>
          <div className='flex gap-2 '>
            <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#6CAAF9", fontSize: "18px" }} />
            <div className='flex flex-col gap-2'>
              <p className='font-semibold text-lg'>There are notifications for various activities.</p>
              <p>There are notifications for all your activities, helping you stay on track, never miss important tasks, and keep your day running smoothly. Get timely reminders so you can focus on what matters most without worrying about forgetting anything.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
