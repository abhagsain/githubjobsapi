/* eslint-disable react/jsx-no-target-blank */
import React from "react";

export default function Job({
  data: { title, type, company, url, location, company_url },
}) {
  return (
    <div className="shadow-md  bg-white p-5 border-b">
      <div className="flex justify-start lg:justify-between">
        <div className="w-2/3">
          <a
            href={url}
            target="_blank"
            className="text-xl lg:text-2xl font-semibold hover:underline"
          >
            {title}
          </a>
          <div className="flex mt-2">
            <a href={company_url} target="_blank" className="hover:underline">
              {company}
            </a>
            <p className="ml-5 text-green-800 font-bold">{type}</p>
          </div>
        </div>
        {<div className="1/3 self-end">{location}</div>}
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
