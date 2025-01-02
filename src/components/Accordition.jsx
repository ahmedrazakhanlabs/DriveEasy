import { ChevronRight } from "lucide-react";
import React, { useState } from "react";

const Accordition = ({ items }) => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion((prev) => (prev === index ? null : index));
  };

  const AccordionItem = ({ index, title, content, onClick }) => (
    <div
      onClick={() => {
        toggleAccordion(index), onClick();
      }}
      className="bg-white rounded-2xl shadow-lg transition-all cursor-pointer duration-700 my-2"
    >
      <div
        className={`px-4 w-full flex justify-between items-center transition-all duration-700 ease-in-out pt-4 text-slate-800 focus:outline-none ${
          activeAccordion === index ? "" : "pb-4"
        }`}
      >
        <span
          className={`font-MonsterratBold text-[14px] cursor-pointer font-bold transition-all duration-700 ease-in-out rounded-full text-gray-600`}
        >
          {title}
        </span>
        <span
          className={`text-slate-800 transition-transform duration-700 ease-in-out ${
            activeAccordion === index ? "rotate-90" : ""
          }`}
        >
          <ChevronRight />
        </span>
      </div>
      <div
        className={`overflow-hidden transition-[max-height,opacity] duration-700 ease-in-out ${
          activeAccordion === index
            ? "max-h-[500px] opacity-100 px-4 pt-3 transition-all duration-700"
            : "max-h-0 opacity-0 transition-all duration-700"
        }`}
      >
        <div className="border-gray-100 border-t-2 w-full  pb-3  rounded-xl"></div>
        <div className="pb-5 text-sm text-slate-500">{content}</div>
      </div>
    </div>
  );

  return (
    <div>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          index={index}
          title={item.title}
          content={item.content}
          onClick={item.onClick}
        />
      ))}
    </div>
  );
};

export default Accordition;
