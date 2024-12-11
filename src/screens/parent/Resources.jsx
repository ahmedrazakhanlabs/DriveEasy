import React from "react";
import Accordition from "../../components/Accordition";
import Menubar from "../../components/Menubar";

const Resources = () => {
  const accordionData = [
    {
      title: "Book Theory Test",
      content:
        "Material Tailwind is a framework that enhances Tailwind CSS with additional styles and components.",
    },
    {
      title: "Book Driving Test",
      content:
        "You can use Material Tailwind by importing its components into your Tailwind CSS project.",
    },
    {
      title: "MOT Check",
      content:
        "Material Tailwind allows you to quickly build modern, responsive websites with a focus on design.",
    },
  ];
  return (
    <div className="px-5">
      <h1 className="text-center font-MonsterratBold my-7 text-[18px] font-semibold">
        Resources
      </h1>

      <Accordition items={accordionData} />
      <br />
      <br />
      <Menubar />
    </div>
  );
};

export default Resources;
