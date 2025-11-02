// import Link from 'next/link'
// import React from 'react'

// type Props = {
//   name: string;
//   route: string;
//   currentRoute: string;
//   icon: React.ReactNode;
// }

// const Sidebaritem: React.FC<Props> = ({ name, route, currentRoute, icon }) => {
//   return (
//     <div>
//       <Link
//         href={route}
//         className={`flex flex-row gap-3 p-[9px] pl-6 items-center  ${route === currentRoute ? 'bg-slate-100 text-black border-r-[3px] border-[#6b92df] rounded-r-lg' : 'bg-white text-zinc-500'} transition-all hover:bg-slate-100 hover:text-black`}>
//         {/* {icon} */}
//         <span className="text-xl">{icon}</span>
//         <p className='text-lg'>{name}</p>
//       </Link>
//     </div>
//   )
// }

// export default Sidebaritem

import Link from "next/link";
import React from "react";

type Props = {
  name: string;
  route: string;
  currentRoute: string;
  icon: React.ReactNode;
  collapsed: boolean;
};

const Sidebaritem: React.FC<Props> = ({ name, route, currentRoute, icon, collapsed }) => {
  return (
    <div className="relative group">
      <Link
        href={route}
        className={`flex flex-row gap-3 p-[10px] pl-6 items-center
          ${route === currentRoute
            ? "bg-slate-100 text-black border-r-[3px] border-[#6b92df] rounded-r-lg"
            : "bg-white text-zinc-500"}
          transition-all hover:bg-slate-100 hover:text-black`}
      >
        <span className="text-xl">{icon}</span>
        <p className={` transition-all duration-500 ease-in-out overflow-hidden whitespace-nowrap ${collapsed ? "opacity-0 max-w-0" : "opacity-100 max-w-xs"}`}>
          {name}
        </p>
      </Link>

      {collapsed && (
        <span className="absolute left-full top-1/2 -translate-y-1/2 ml-2
          bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100
          transition-opacity whitespace-nowrap z-50"
        >
          {name}
        </span>
      )}
    </div>
  );
};

export default Sidebaritem;
