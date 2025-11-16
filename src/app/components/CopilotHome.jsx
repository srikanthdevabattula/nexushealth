"use client";

import { useState, useEffect, useRef } from "react";

export default function CopilotHome() {
  const inputRef = useRef(null);
  const [inputFocused, setInputFocused] = useState(false);

  // Detect input focus/blur
  useEffect(() => {
    const input = inputRef.current;
    if (!input) return;

    const focusHandler = () => setInputFocused(true);
    const blurHandler = () => setInputFocused(false);

    input.addEventListener("focus", focusHandler);
    input.addEventListener("blur", blurHandler);

    return () => {
      input.removeEventListener("focus", focusHandler);
      input.removeEventListener("blur", blurHandler);
    };
  }, []);

  const cards = [
    {
      title: "Analyze Lab Results",
      desc: "Upload and review patient lab reports",
      icon: "/icons/file-plus.png",
    },
    {
      title: "Clinical Decision Support",
      desc: "Get treatment recommendations",
      icon: "/icons/stethoscope.png",
    },
    {
      title: "Drug Interaction Check",
      desc: "Verify medication compatibility",
      icon: "/icons/prescription.png",
    },
    {
      title: "Differential Diagnosis",
      desc: "Explore possible conditions",
      icon: "/icons/brain.png",
    },
  ];

  return (
    <div className="flex flex-col overflow-auto h-[80%] items-center justify-center xl:mt-6 mt-1 pb-10 text-center">
      
      {/* HEADER */}
      <div className="mb-3">
        <div className="rounded-full flex items-center justify-center text-3xl">
          <img
            src="/icons/robo.png"
            alt=""
            className="xl:w-[56px] lg:w-[45px] md:w-[40px] w-[25px] xl:h-[56px] lg:h-[45px] md:h-[40px] h-[25px]"
          />
        </div>

        <h2 className="xl:text-[24px] lg:text-[20px] md:text-[18px] text-[14px] font-semibold">
          Welcome to AI Copilot
        </h2>

        <p className="text-[#45556C] xl:text-[14px] lg:text-[13px] md:text-[11px] text-[8px] mt-2 max-w-md px-4 md:px-0">
          Your AI assistant for medical consultations, document analysis, and
          clinical decision support.
        </p>
      </div>

      {/* CARDS GRID */}
      <div className="grid grid-cols-2 lg:gap-3 gap-2 xl:mt-2 mt-1">
        {cards.map((card) => (
          <div
            key={card.title}
            className="bg-[#F1F5F9] xl:p-6 lg:p-5 md:p-3 p-2 rounded-[8px] flex flex-col items-start xl:h-[109px] lg:h-[100px] md:h-[85px] h-[70px] xl:w-[290px] lg:w-[290px] md:w-[240px] w-[100%] cursor-pointer hover:shadow-md transition"
          >
            <img
              src={card.icon}
              className="w-[8px] lg:w-[15px] md:w-[13px] h-[10px] lg:h-[20px] md:h-[16px]"
            />
            <h3 className="font-medium xl:text-[16px] lg:text-[15px] md:text-[13px] text-[10px] my-1 text-[#1D293D]">
              {card.title}
            </h3>
            <p className="text-[#45556C] xl:text-[14px] lg:text-[13px] md:text-[10px] text-[7px]">
              {card.desc}
            </p>
          </div>
        ))}
      </div>

      {/* BOTTOM INPUT BAR */}
      <div
        className={`
          w-full flex justify-center items-center bg-white
          ${inputFocused ? "absolute bottom-[300px]" : "fixed bottom-0"}  
          xl:h-[120px] lg:h-[100px] md:h-[80px] h-[60px]
          transition-all duration-300
        `}
        style={{
          paddingBottom: inputFocused ? 0 : "env(safe-area-inset-bottom)",
        }}
      >
        <div className="lg:w-[78%] md:w-[70%] w-[95%]">
          
          {/* Input container */}
          <div className="border border-[#E2E8F0] rounded-[12px] w-full flex items-center xl:text-[14px] lg:text-[12px] md:text-[10px] text-[8px]">
            <input
              ref={inputRef}
              placeholder="Ask about patient cases, analyze documents, or get medical insights..."
              className="flex-1 bg-white focus:outline-none xl:px-5 lg:px-4 md:px-3 px-2 xl:py-4 lg:py-3 py-2 rounded-[12px]"
            />
            <img
              src="/icons/icon (9).png"
              className="xl:w-[40px] lg:w-[37px] md:w-[30px] w-[20px] xl:h-[40px] lg:h-[37px] md:h-[30px] h-[20px] mr-2"
              alt=""
            />
          </div>

          {/* Bottom small text */}
          <div className="flex items-center justify-between text-[#45556C] mt-2 px-1 xl:text-[12px] lg:text-[11px] md:text-[10px] text-[6px]">
            <span className="flex items-center">
              <img src="/icons/shield.png" className="md:w-[16px] w-[10px] md:h-[16px] h-[10px] mr-[2px]" />
              HIPAA Compliant
              <img src="/icons/lock.png" className="md:w-[12px] w-[7px] md:h-[17px] h-[10px] ml-2 mr-[2px]" />
              End-to-End Encrypted
            </span>
            <span>
              Press Enter to send
              <span className="hidden md:inline">, Shift+Enter for new line</span>
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}
