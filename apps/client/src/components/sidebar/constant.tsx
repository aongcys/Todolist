import { FaRegStar } from "react-icons/fa";
import { LuListTodo } from "react-icons/lu";
import { RiMedalLine } from "react-icons/ri";
import { TbBrandDaysCounter } from "react-icons/tb";


export const Sidebarconstant = [
  {
    id: 1,
    name: 'This day',
    route: '/dashboard/thisday',
    icon: <TbBrandDaysCounter />,
  },
  {
    id: 2,
    name: 'Alltodolist',
    route: '/dashboard/alltodolist',
    icon: <LuListTodo />,
  },
  {
    id: 3,
    name: 'Important',
    route: '/dashboard/Userinformation',
    icon: <FaRegStar />,
  },
  {
    id: 4,
    name: 'Accomplishments',
    route: '/dashboard/accomplishments',
    icon: <RiMedalLine />,
  }
]
