import React from "react";
import { BiChevronDown } from "react-icons/bi";

export default function HeaderButton({ children }) {
  return (
    <div
      className="
    cursor-pointer 
    text-black/70 font-bold
    hover:text-secondary
    transition-all h-full flex flex-col
    justify-between group py-1
  "
    >
      <div className="  h-1 "></div>
      <div className="flex items-center">
        <p>{children}</p>
        <BiChevronDown />
      </div>
      <div
        className="bg-secondary  h-1 
        w-0 group-hover:w-full transition-all
      "
      ></div>
    </div>
  );
}
