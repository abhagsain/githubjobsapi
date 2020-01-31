import React from "react";

export default function SkeletonCard() {
  /* 
  bg-white appearance-none rounded  text-gray-700  
 leading-tight focus:outline-none focus: inline w-full lg:w-2/3 self-center h-12 skeleton
   */
  return (
    <div className="w-full xl:w-2/3 mx-auto z-10">
      <div className="flex flex-col lg:flex-row justify-between my-5">
        <div className=" bg-white w-40 h-12 my-5 text-gray-800 skeleton" />
        <div className="bg-white appearance-none rounded inline w-full lg:w-2/3 self-center h-12 skeleton" />
      </div>
      <div className="h-16 bg-gray-200 w-full skeleton mt-2 mb-10" />
      {Array.from({ length: 5 }, (v, i) => (
        <div
          key={i}
          className="h-20 lg:h-32 mb-1 bg-gray-200 w-full skeleton "
        ></div>
      ))}
    </div>
  );
}
