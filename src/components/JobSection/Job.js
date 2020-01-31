/* eslint-disable react/jsx-no-target-blank */
import React from "react";

export default function Job({
  data: { id, title, type, company, url, location, company_url, onModelOpen },
}) {
  return (
    <div
      className="shadow-md  bg-white p-5 border-b hover:bg-gray-100 cursor-pointer"
      onClick={() => onModelOpen(id)}
    >
      <h2 className="text-base sm:text-xl  font-semibold">{title}</h2>
      <div className="flex justify-between">
        <div className="w-2/3 ">
          <div className="flex mt-2 ">
            <a
              href={company_url}
              target="_blank"
              className="text-sm lg:text-base hover:underline"
            >
              {company}
            </a>
            <p className="ml-5 text-green-800 font-bold text-sm lg:text-base hidden sm:block">
              {type}
            </p>
          </div>
        </div>

        <div className="1/3 self-end justify-end text-sm lg:text-base">
          {location}
        </div>
      </div>
    </div>
  );
}
/* 

            {company_logo && (
              <img
                src={company_logo}
                alt=""
                className="h-6 w-6 object-cover object-center"
              />
            )}
 */
