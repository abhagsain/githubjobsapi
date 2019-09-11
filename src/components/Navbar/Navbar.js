/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export default function Navbar() {
  return (
    <nav className="flex w-full bg-gray-900 text-white py-6 px-10 items-baseline justify-between">
      <a href="#" className="text-2xl font-bold">
        Github Jobs
      </a>
      <a
        href="https://github.com/abhagsain/githubjobsapi"
        target="_blank"
        className="text-base opacity-75"
      >
        View on Github
      </a>
    </nav>
  );
}
