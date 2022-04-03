import React from "react";
import InfoContainer2 from "./info-container2";
import { BiChevronDown } from "react-icons/bi";
import image from "./../assets/fzq.svg";

export default function FAQView() {
  return (
    <div className="p-16 max-w-6xl mx-auto">
      <InfoContainer2
        heading="FREQUENTLY"
        headingColor="ASKED QUESTIONS"
      ></InfoContainer2>

      {/*  */}
      <div className="flex space-x-4 flex-col-reverse md:flex-row ">
        <div className="space-y-4 mt-4 md:mt-0 flex-1">
          <FAQExpander
            title=" Why Use the Orbit Local Bulk Page Speed Test instead of Google Page
        Speed Test?"
          >
            The majority of website speed test tools on the market today only
            allow you to test one page at a time. This is a time-consuming
            process that makes it hard to spot problem pages on your website.
            For many sites, 500 pages at a time is more than enough to test the
            entire site in one go.
          </FAQExpander>
          <FAQExpander title="Is the Data Reliable?">Answer 1</FAQExpander>
          <FAQExpander title="Are There Limitations to the Tool?">
            Answer 2
          </FAQExpander>
        </div>
        {/*  */}
        <div className="flex-1">
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
}

function FAQExpander({ children, title }) {
  return (
    <details
      className="bg-white
        drop-shadow-2xl
        p-6 rounded-xl cursor-pointer
        list-none
    "
    >
      <summary className="flex items-center">
        <p className="grow text-primary font-bold">{title}</p>
        <div
          className="bg-white text-primary
        drop-shadow-xl rounded-full p-1
        "
        >
          <BiChevronDown size={25} />
        </div>
      </summary>
      <p>{children}</p>
    </details>
  );
}
