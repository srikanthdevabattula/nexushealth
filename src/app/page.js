"use client";

import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import CopilotHome from "./components/CopilotHome";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
// console.log(isOpen)
  return (
    <div className="flex overflow-hidden h-[100dvh]">
      <Sidebar open={sidebarOpen} isOpen={isOpen}   onClose={() => setSidebarOpen(false)} />

      <div className="flex flex-col flex-1   ">
        <Topbar 
          onMenuClick={() => setSidebarOpen(true)} 
          onClose={() => setSidebarOpen(false)}
          toggle={setIsOpen}
          isOpen={isOpen}
        />

        <div className="flex-1 bg-[#E2E8F0]  overflow-y-auto p-4 md:p-6">
          <CopilotHome />
        </div>
      </div>
    </div>
  );
}
