import React from "react";

export default function InfoContainer({
  children,
  heading,
  headingColor,
  image,
  flipImage = false,
}) {
  const mainContent = (
    <div className=" w-full">
      <div className="text-3xl lg:text-5xl font-bold font-sans  flex flex-col">
        <span>{heading}</span>
        <span className="text-primaryLight pt-4">{headingColor}</span>
      </div>
      <div className="bg-gray-500/50 h-[3px] w-[200px] my-6"></div>
      {children}
    </div>
  );
  const imageContent =
    image != undefined ? (
      <div className=" w-full">
        <img className="w-full" src={image} />
      </div>
    ) : null;
  return (
    <div
      className="flex flex-col md:flex-row justify-center p-16 w-full 
    max-w-6xl mx-auto space-x-6"
    >
      {flipImage ? (
        <>
          {imageContent}
          {mainContent}
        </>
      ) : (
        <>
          {mainContent}
          {imageContent}
        </>
      )}
    </div>
  );
}
