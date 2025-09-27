import { sectionvariants } from '@/pages/components/changepageanimate/sectionvariants'
import Applayout from '@/pages/components/layout/Applayout'
import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { TbBrandDaysCounter } from 'react-icons/tb'
import Calendarlistbutton from '@/pages/components/dashboardelement/calender&listbutton'

function Importantpage() {

  const currentDate = new Date();
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  };
  const formattedDate = currentDate.toLocaleDateString('en-US', options);
  console.log(formattedDate);

  return (
    <div>
      <AnimatePresence>
        <motion.div
          variants={sectionvariants}
          initial="hidden"
          animate="show">
          <Applayout>
            <div>
              <div className='flex flex-col'>
                <div className='flex items-center justify-between'>
                  <div>
                    <div className='flex flex-col gap-2'>
                      <div className='flex items-center gap-3'>
                        <TbBrandDaysCounter className='size-7' />
                        <h1 className='text-2xl'>This day</h1>
                      </div>
                      <p className='text-xs'>{formattedDate}</p>
                    </div>
                  </div>
                  <Calendarlistbutton></Calendarlistbutton>
                </div>
              </div>
            </div>
          </Applayout>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default Importantpage