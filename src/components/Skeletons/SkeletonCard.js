import React from "react";

export default function SkeletonCard() {
  /* 
  bg-white appearance-none rounded  text-gray-700  
 leading-tight focus:outline-none focus: inline w-full lg:w-2/3 self-center h-12 skeleton
   */
  return (
    <div className="z-10 w-full mx-auto shadow-md xl:w-2/3">
      <div className="flex flex-col justify-between my-5 lg:flex-row">
        <div className="w-40 h-12 my-5 text-gray-800 bg-white skeleton" />
        <div className="self-center inline w-full h-12 bg-white rounded appearance-none lg:w-2/3 skeleton" />
      </div>
      <div className="w-full h-16 mt-2 mb-10 bg-gray-200 skeleton" />
      {Array.from({ length: 5 }, (v, i) => (
        <div
          key={i}
          className="w-full h-20 mb-1 bg-gray-200 lg:h-32 skeleton "
        ></div>
      ))}
    </div>
  );
}
