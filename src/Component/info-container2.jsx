import React from "react";

export default function InfoContainer2({ children, heading, headingColor }) {
  return (
    <div
      className="flex flex-col items-center text-center  justify-center p-16 w-full 
    max-w-6xl mx-auto space-x-6"
    >
      <p
        className="text-3xl lg:text-5xl font-bold font-sans
      space-x-2"
      >
        <span>{heading}</span>
        <span className="text-primaryLight">{headingColor}</span>
      </p>
      <div className="bg-gray-500/50 h-[3px] w-[200px] my-6"></div>
      {children}
    </div>
  );
}
