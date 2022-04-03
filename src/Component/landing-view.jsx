import React from "react";
import bgimage from "./../assets/bg.jpg";
import tickIcon from "./../assets/icons/tick.svg";

export default function LandingView() {
  return (
    <div className="items-center flex  flex-col ">
      <div
        style={{
          backgroundImage: `url(${bgimage})`,
          backgroundSize: "cover",
        }}
        className="w-full flex justify-center items-center
        p-8 lg:p-20 text-white
        "
      >
        <div className="w-full max-w-2xl flex items-center flex-col">
          <div className="space-x-6 font-bold ">
            <button className="text-[#ffcdb6]">CRAWL WEBSITE</button>
            <button>URL-LIST</button>
            <button>KEYWORD</button>
          </div>
          <div className=" py-8 flex w-full ">
            <input
              placeholder="Enter your Website Address"
              className="px-6 py-4 rounded-tl-lg rounded-bl-lg grow text-black "
            ></input>
            <button
              className="px-4 py-4 w-36 font-bold  bg-primary text-white
              rounded-tr-lg rounded-br-lg hover:bg-secondary transition-all
            "
            >
              START TEST
            </button>
          </div>
          <div>
            <div className="lg:text-5xl text-3xl font-bold font-sans pt-16">
              <span>BULK PAGE SPEED TEST & CORE WEB VITALS CHECK</span>
            </div>
            <div className="pt-16 pb-20 space-y-4">
              {subHeading(
                "Use this free bulk page speed test and core web vitals tool to save time."
              )}
              {subHeading("Check mobile and desktop speed.")}
              {subHeading("Get an overview of 500 pages at once.")}
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  );
}
function subHeading(text) {
  return (
    <div className="flex space-x-2 items-center">
      <img src={tickIcon} alt="" />
      <p>{text}</p>
    </div>
  );
}
