import React from 'react'
import { IoAddCircleOutline, IoArrowDownCircleOutline } from 'react-icons/io5'
import { LuCalendarClock } from 'react-icons/lu';

function Addtodo() {

  const [showinput, setShowinput] = React.useState(false)

  const clickaddtodo = () => {
    setShowinput(true);
  }

  const closeaddtodo = () => {
    setShowinput(!showinput);
  }

  return (
    <div>
      <button
        className={`bg-white mt-7 p-6 shadow-sm rounded-xl w-full flex items-center gap-3 text-[#3a77c8] transitionall duration-700 ${showinput ? "rounded-b-none" : "rounded-xl"}  `}
        onClick={clickaddtodo}
      >
        {showinput === false ? (
          <IoAddCircleOutline className="size-6 cursor-pointer" />
        ) : (
          <IoArrowDownCircleOutline className="size-6" />
        )}
        <input
          type="text"
          title="ss"
          placeholder="Add an Task"
          className="outline-none flex-1"
        />
      </button>

      <div
        className={`transition-all duration-1000 overflow-hidden bg-gray-100 p-1 pl-5 flex items-center justify-between rounded-b-xl shadow-md
  ${showinput ? "h-14 opacity-100" : "h-0 opacity-0"}`}
      >
        <div className='tooltip tooltip-right flex items-center p-2 bg-white rounded-lg hover:bg-[#8caae9] hover:text-white hover:transition hover:duration-500' data-tip="Add Date">
          <button className='flex cursor-pointer'><LuCalendarClock className='size-5' /></button>
        </div>
        <div className='flex gap-2'>
          <button
            className='border-[1.5px] border-[#3f8ae7] p-1.5 rounded-lg text-sm font-semibold text-[#3f8ae7] hover:text-white hover:bg-[#3f8ae7] hover:transition hover:duration-500 cursor-pointer'>Add Task</button>
          <button
            className='border-[1.5px] border-[#e73f61] p-1.5 rounded-lg text-sm font-semibold text-[#e73f61] hover:text-white hover:bg-[#e73f61] hover:transition hover:duration-500 cursor-pointer'
            onClick={closeaddtodo}
          >Cancel</button>

        </div>
      </div>

    </div>
  )
}

export default Addtodo
