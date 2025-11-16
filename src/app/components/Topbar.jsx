"use client";

import {  FiMenu } from "react-icons/fi";

export default function Topbar({ onMenuClick,toggle,isOpen }) {
  return (
    <div className="w-full bg-white shadow-sm px-4 md:px-6 md:py-4 py-3 flex items-center justify-between ">
      <button
        className="md:hidden p-2 border rounded-lg"
        onClick={onMenuClick}
      >
        <FiMenu size={20} />
      </button>

      <button 
      onClick={() => toggle(prev => !prev)}
      className="hidden md:block text-[#1DB7CC] px-4 py-2 border rounded-lg lg:text-[16px] text-[14px]  font-medium w-[74px] w-[36px]">
       {isOpen? "Close":"Menu"}
      </button>

      <div className="flex items-center gap-3 ml-auto">
        <button className="bg-[#0BA57F] text-white px-4 py-2 rounded-lg flex items-center font-medium gap-2 xl:text-[14px] text-[12px]">
          <img src="/icons/Primary.png" className="w-[18px] h-[16px]"/> Start Chat
        </button>

        <button className="hidden md:flex p-2 border border-[#1DB7CC] rounded-lg">
          <img src="/icons/clock.png" className="w-[16px] h-[16px]"/>
        </button>

        <button className="hidden md:flex p-2 border border-[#1DB7CC] rounded-lg">
          <img src="/icons/Sidebar.png" className="w-[16px] h-[16px]"/>
        </button>
      </div>
    </div>
  );
}
