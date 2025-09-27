import React from "react";
import Usernavbar from "../Navbar/usernavbar";
import Dashbordlayout from "./dashbord";

const Applayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Dashbordlayout />

      {/* เนื้อหาหลัก */}
      <div className="flex-1 flex flex-col overflow-hidden bg-[#f8fdff]">
        {/* Navbar */}
        <Usernavbar />

        {/* เนื้อหาของเพจ */}
        <main className="flex-1 overflow-auto bg-[#f8fdff] px-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Applayout;

