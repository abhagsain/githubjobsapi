import React from "react";

export default function ModalSkeleton() {
  return (
    <div className="h-screen fixed w-2/4 right-0 bg-gray-200 z-50 right-0 overflow-auto p-5 ">
      <div className="m-12">
        <div className="items-center flex justify-between  pb-5">
          <div className="flex items-center w-full">
            <div className="w-full">
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold mr-2 skeleton h-12" />
                <div className="">
                  <div
                    className="h-12 w-32 skeleton"
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                </div>
              </div>
              <div className="desc flex mt-2 items-center flex-wrap">
                {Array.from({ length: 3 }, (v, i) => (
                  <div
                    key={v + " " + i}
                    className="flex items-center mr-4 h-8 skeleton inline bg-red-200 w-20"
                    title="Company Name"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 text-lg modal__content ">
          <div
            className="flex items-center mr-4 h-8 skeleton mt-2 bg-red-200 w-3/3"
            title="Company Name"
          />
          <div
            className="flex items-center mr-4 h-8 skeleton mt-2 bg-red-200 w-2/3"
            title="Company Name"
          />
          <div
            className="flex items-center mr-4 h-8 skeleton mt-2 bg-red-200 w-1/3"
            title="Company Name"
          />
        </div>
      </div>
    </div>
  );
}
