import React from "react";
import GlobalContext from "../../context/GlobalContext";
export default function Pagination({ totalPosts, postsPerPage }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="my-10">
      <GlobalContext.Consumer>
        {context => {
          return (
            <nav className="bg-white flex items-center justify-between w-full">
              <ul className="flex justify-center py-5 w-full justify-around lg:justify-start">
                {pageNumbers.map(el => {
                  const _cls = `px-4 lg:px-3 py-1 self-center rounded lg:mx-5 text-xl font-bold flex `;
                  const pClass =
                    el === context.pagination.currentPage
                      ? _cls.concat("  text-white bg-blue-500")
                      : _cls.concat(" bg-white");
                  return (
                    <li key={el} className={pClass}>
                      <a href="#!" onClick={() => context.paginate(el)}>
                        {el}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          );
        }}
      </GlobalContext.Consumer>
    </div>
  );
}
