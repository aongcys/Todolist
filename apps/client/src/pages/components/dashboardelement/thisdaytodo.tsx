import React from 'react'
import { FaRegStar } from 'react-icons/fa6';
import { IoIosArrowForward } from 'react-icons/io';

interface ThisdaytodoProps {
  taskname: string;
  duedate: string;
  iscompleted: boolean;
  improtant: boolean;
}

function Thisdaytodo() {
  const today = new Date().toISOString().split('T')[0]
  const [showIncomplete, setShowIncomplete] = React.useState(true);
  const [showCompleted, setShowCompleted] = React.useState(false);

  const tasks: ThisdaytodoProps[] = [
    {
      taskname: 'task 1',
      duedate: '2025-10-28',
      iscompleted: false,
      improtant: true
    },
    {
      taskname: 'task 2',
      duedate: '2025-10-28',
      iscompleted: true,
      improtant: true
    },
    {
      taskname: 'task 3',
      duedate: '2025-10-28',
      iscompleted: false,
      improtant: true
    },
    {
      taskname: 'task 4',
      duedate: '2025-10-28',
      iscompleted: false,
      improtant: false
    },
    {
      taskname: 'task 5',
      duedate: '2025-10-28',
      iscompleted: false,
      improtant: false
    },
    {
      taskname: 'task 6',
      duedate: '2025-10-28',
      iscompleted: false,
      improtant: false
    },
    {
      taskname: 'task 7',
      duedate: '2025-10-28',
      iscompleted: false,
      improtant: false
    },
    {
      taskname: 'task 8',
      duedate: '2025-10-28',
      iscompleted: false,
      improtant: false
    },
    {
      taskname: 'task 9',
      duedate: '2025-10-28',
      iscompleted: false,
      improtant: false
    },
    {
      taskname: 'task 10',
      duedate: '2025-10-28',
      iscompleted: false,
      improtant: false
    },
    {
      taskname: 'task 11',
      duedate: '2025-10-28',
      iscompleted: false,
      improtant: false
    },
    {
      taskname: 'task 12',
      duedate: '2025-10-28',
      iscompleted: false,
      improtant: false
    },
  ]


  const todayTasks = tasks.filter(task => task.duedate === today)
  const todaylist = todayTasks
  const completedtasks = todaylist.filter(task => task.iscompleted)
  const incompletetasks = todaylist.filter(task => !task.iscompleted)

  const toggleShowIncomplete = () => {
    setShowIncomplete(prev => !prev);
  };

  const toggleShowCompleted = () => {
    setShowCompleted(prev => !prev);
  };

  // console.log(today);
  // console.log(todayTasks);
  // console.log(incompletetasks);

  return (
    <div >
      {todaylist.length === 0 ? (
        <div className='flex justify-center items-center'>
          <p className='text-gray-400'>You have no tasks for today</p>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <button
              className="flex items-center font-normal text-gray-500"
              onClick={toggleShowIncomplete}
            >
              <p>Incomplete tasks {incompletetasks.length}</p>
              <IoIosArrowForward
                className={`size-5 transition-transform duration-700 ${showIncomplete ? "rotate-90" : "rotate-0"
                  }`}
              />
            </button>

            <div
              className={`overflow-auto transition-all duration-700 ease-in-out flex flex-col gap-3 ${showIncomplete ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                }`}
            >
              {incompletetasks.map(task => (
                <div key={task.taskname} className="p-4 pl-7 bg-white shadow-sm rounded-lg flex justify-between items-center">
                  <div className='flex gap-4 items-center'>
                    <input type="checkbox" className="checkbox checkbox-primary rounded-full border-[#3a77c8] checked:bg-[#3a77c8] size-[18px]" />
                    {task.taskname}
                  </div>
                  <FaRegStar />
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2 pb-4">
            <button
              className="flex items-center font-normal text-gray-500"
              onClick={toggleShowCompleted}
            >
              <p>Completed tasks {completedtasks.length}</p>
              <IoIosArrowForward
                className={`size-5 transition-transform duration-700 ${showCompleted ? "rotate-90" : "rotate-0"
                  }`}
              />
            </button>

            <div
              className={`overflow-auto transition-all duration-700 ease-in-out flex flex-col gap-3 ${showCompleted ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                }`}
            >
              {completedtasks.map(task => (
                <div key={task.taskname} className="p-4 pl-7 bg-white shadow-sm rounded-lg flex justify-between items-center">
                  <div className='flex gap-4 items-center'>
                    <input type="checkbox" defaultChecked className="checkbox checkbox-primary rounded-full border-[#3a77c8] checked:bg-[#3a77c8] size-[18px]" />
                    {task.taskname}
                  </div>
                  <button ><FaRegStar /></button>
                </div>
              ))}
            </div>
          </div>
        </div>

      )
      }
    </div >
  )
}

export default Thisdaytodo
