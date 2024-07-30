"use client";
import { useState, ReactNode } from "react";

interface AccordionProps {
  title: string;
  children: ReactNode;
}

const AccordionList: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-200 w-10/12">
      <button className="w-full p-4 text-left text-gray-800 bg-white hover:bg-gray-100 focus:outline-none" onClick={toggleAccordion}>
        <div className="flex justify-between items-center">
          <span>{title}</span>
          <svg
            className={`w-6 h-6 transition-transform transform ${isOpen ? "rotate-180" : "rotate-0"}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
      </button>
      {isOpen && <div className="p-4 bg-white text-gray-800">{children}</div>}
    </div>
  );
};

export default AccordionList;
