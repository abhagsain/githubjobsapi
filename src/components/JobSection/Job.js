import React from "react";

export default function Job({
  data: { title, type, company, url, company_url },
}) {
  return (
    <div className="shadow-md w-full xl:w-2/3 bg-white p-5 border-b">
      <div className="flex justify-start lg:justify-between">
        <div className="w-2/3">
          <a
            href={url}
            // eslint-disable-next-line react/jsx-no-target-blank
            target="_blank"
            className="text-xl lg:text-2xl font-semibold hover:underline"
          >
            {title}
          </a>
          <div className="flex mt-2">
            <p>{company}</p>
            <p className="ml-5 text-green-800 font-bold">{type}</p>
          </div>
        </div>
        {/* <div className="1/3">soms</div> */}
      </div>
    </div>
  );
}
