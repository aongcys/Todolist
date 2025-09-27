import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Sidebarconstant } from "./constant";
import "@fontsource/alan-sans/300.css";
import { RiMenuFold4Fill } from "react-icons/ri";
import Sidebaritem from "./items";
import { useRouter } from "next/router";

function Sidebardesktop() {
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => { // เอาค่า collapsed จาก localStorage แล้วมาตรวจสอบ
    const keepcollapsed = localStorage.getItem('sidebar-collapsed');
    if (keepcollapsed !== null) {
      setCollapsed(JSON.parse(keepcollapsed));// เป็น string ต้องแปลงเป็น boolean ใช้ JSON.parse
    }
    if (keepcollapsed === 'true') {

    }
  }, []);

  const clickocollapsed = () => {
    setCollapsed(prev => {
      localStorage.setItem("sidebar-collapsed", JSON.stringify(!prev));
      return !prev;
    });
  };

  return (
    <div
      className={`${collapsed ? "w-[70px]" : "w-64"}
       bg-white h-screen flex flex-col gap-2 text-black border-r border-gray-200 transition-all duration-700`}>
      <div>
        <div className="flex gap-2 items-center m-3 mt-5">
          <button
            aria-label="Menu"
            onClick={clickocollapsed}
            className="text-black p-2 rounded-full hover:bg-stone-100 hover:shadow-2xl transition-transform duration-700"
          >
            <RiMenuFold4Fill className={`h-auto w-7 ${collapsed ? "rotate-180" : ""} transition-transform duration-700`} />
          </button>

          <Link href="/" >
            <p
              style={{ fontFamily: "Alan Sans, sans-serif" }}
              className={`font-semibold text-3xl text-[#4d97f8] transition-all duration-500 ease-in-out overflow-hidden whitespace-nowrap
              ${collapsed ? "opacity-0 max-w-0" : "opacity-100 max-w-xs"}`}
            >
              Todo list
            </p>
          </Link>
        </div>

        <div className="mt-5 flex flex-col">
          {Sidebarconstant.map((item) => (
            <Sidebaritem
              key={item.id}
              name={item.name}
              route={item.route}
              currentRoute={router.pathname}
              icon={item.icon}
              collapsed={collapsed}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebardesktop;
