import React from "react";
import Button, { Button2 } from "./button";
import logo from "./../assets/logo.svg";
import { FiPhoneCall } from "react-icons/fi";
import { BiMenu } from "react-icons/bi";
import HeaderButton from "./header-button";

export default function Header() {
  return (
    <div
      className="flex h-20 px-4 w-full justify-between items-center
    max-w-7xl mx-auto
    "
    >
      <div className="flex h-20 w-full  space-x-6 items-center">
        <img className="w-[150px]" src={logo} />
        <div
          className=" justify-evenly  flex-row space-x-6 h-full 
        
          hidden lg:flex
        "
        >
          <HeaderButton> Services</HeaderButton>
          <HeaderButton> Plans</HeaderButton>
          <HeaderButton> Resoures</HeaderButton>
          <HeaderButton> Login</HeaderButton>
        </div>
      </div>
      <div
        className="space-x-4
       items-center font-bold text-sm 
       p-4 hidden lg:flex w-full"
      >
        <p className="flex">
          <span>
            <FiPhoneCall size={25} className="mr-1 text-secondary" />
          </span>
          <span>1-888-852-0653</span>
        </p>
        <Button>GET MORE LEADS</Button>
        <Button2>BOOK 15 MIN CALL</Button2>
      </div>
      <div
        className="bg-secondary p-2 
        lg:hidden
      
      text-white cursor-pointer hover:bg-primary transition-all"
      >
        <BiMenu size={30} />
      </div>
    </div>
  );
}
