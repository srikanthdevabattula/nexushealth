"use client";

import { FiX } from "react-icons/fi";

export default function Sidebar({ open, onClose, isOpen }) {
  const menu = [
    { label: "Dashboard", icon: "/icons/dashboard.png" },
    { label: "Appointment Requests", icon: "/icons/icon (1).png" },
    { label: "My Schedule", icon: "/icons/icon (2).png" },
    { label: "Patients", icon: "/icons/icon (3).png" },
    { label: "Medical Records", icon: "/icons/icon (4).png" },
    { label: "Messages", icon: "/icons/icon (5).png" },
    { label: "Settings", icon: "/icons/icon (6).png" },
    { label: "Copilot", icon: "/icons/icon (7).png" },
  ];

  return (
    <>
      {/* overlay when menu open in mobile */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed md:static h-[100vh] lg:w-[20%] md:w-[25%] w-[70%] bg-gradient-to-b 
        from-[#108797] to-[#399A5F] text-white   flex flex-col z-50
        transform transition-transform duration-900 ease-in-out
           
        /* MOBILE — slide in/out */
        ${open ? "translate-x-0" : "-translate-x-full"}
            ${isOpen ? "md:translate-x-0" : "md:hidden"}
        
      `}
      >
        {/* Close button on mobile */}
        <button className="md:hidden absolute top-4 right-4" onClick={onClose}>
          <FiX size={22} />
        </button>

        {/* Logo */}
        <div className="flex items-center gap-3 mb-10 mt-8 md:mt-0">
          <div>
            <img
              src="/nh-logo.png"
              className="xl:w-[159px] lg:w-[140px] md:w-[120px]_ w-[100%] xl:h-[40px] lg:h-[37px] md:h-[33px] h-[33px] mt-6 ml-6"
            />
          </div>
        </div>

        {/* Menu */}
        <nav className="flex flex-col  gap-2">
          {menu.map((item) => (
            <div
              key={item.label}
              className={`flex items-center gap-2 xl:pl-[24px] lg:pl-[18px] md:pl-[15px] pl-[10px] py-2  cursor-pointer xl:text-[16px] lg:text-[14px] md:text-[14px] text-[14px] font-sans
              hover:bg-white/10 transition
              ${
                item.label === "Copilot"
                  ? "bg-white/20 border-l-[3px] border-[#3FFF9F]"
                  : ""
              }`}
            >
              <img
                src={item.icon}
                className="xl:h-[20px] lg:h-[18px] md:h-[15px] h-[14px] xl:w-[20px] lg:w-[18px] md:w-[15px] w-[14px]"
              />
              <p>{item.label}</p>
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
}
