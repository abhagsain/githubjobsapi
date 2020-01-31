/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from "react";
import Job from "./Job";
import GlobalContext from "../../context/GlobalContext";
import Pagination from "../pagination/Pagination";
import SkeletonCard from "../Skeletons/SkeletonCard";
export default class JobCard extends Component {
  static contextType = GlobalContext;
  filterSearches = (jobs, filterValue) => {
    return jobs.filter(el => {
      const title = el.title.toLowerCase();
      const type = el.type.toLowerCase();
      const location = el.location.toLowerCase();
      const globalFilterValue = filterValue.toLowerCase();
      return (
        title.includes(globalFilterValue) ||
        type.includes(globalFilterValue) ||
        location.includes(globalFilterValue)
      );
    });
  };

  showNoResults = (data, filterValue) => {
    return (
      data &&
      data.length === 0 && (
        <div className="text-center">
          <h2 className="text-4xl py-5">
            No Result {filterValue && " for "}
            {filterValue && (
              <p className="text-gray-600 inline">{filterValue}</p>
            )}
            <small className="block text-base mt-3">
              {filterValue && "Clear filter to see all the results"}
              {!filterValue &&
                "Search a broader term. Example React Developer "}
            </small>
          </h2>
        </div>
      )
    );
  };
  render() {
    const {
      jobs,
      loading,
      filterValue,
      pagination: { currentPage, postPerPage },
      onFilter,
      error,
      onModalOpen,
    } = this.context;
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const d = this.filterSearches(jobs, filterValue);
    const data = d.slice(indexOfFirstPost, indexOfLastPost);
    return (
      <div
        className="flex flex-col justify-center items-center my-10 mx-5 output__content"
        id="main__content"
      >
        {loading ? (
          <SkeletonCard />
        ) : (
          <React.Fragment>
            {!error.status && (
              <div className="w-full xl:w-2/3">
                <div className="flex flex-col lg:flex-row justify-between my-5">
                  <h2 className="text-4xl my-5 text-gray-800 ">
                    Explore
                    <small className="text-sm block">
                      {data.length} results on this page
                    </small>
                  </h2>
                  <input
                    type="text"
                    value={filterValue}
                    onChange={onFilter}
                    className="shadow appearance-none rounded py-4 px-6 text-gray-700  
                  
                  leading-tight focus:outline-none focus: inline w-full lg:w-2/3 self-center"
                    placeholder="Filter Searches eg. Engineer or Remote or Berlin etc"
                  />
                </div>
                {data.length > 0 && (
                  <Pagination
                    totalPosts={d.length}
                    postsPerPage={postPerPage}
                  />
                )}
                {data &&
                  data.map(res => {
                    return (
                      <Job
                        key={res.id}
                        data={{ ...res, onModelOpen: onModalOpen }}
                      />
                    );
                  })}
                {data && data.length === 0 && (
                  <div className="text-center">
                    <h2 className="text-4xl py-5">
                      No Result {filterValue && " for "}
                      {filterValue && (
                        <p className="text-gray-600 inline">{filterValue}</p>
                      )}
                      <small className="block text-base mt-3">
                        {filterValue && "Clear filter to see all the results"}
                        {!filterValue &&
                          "Search a broader term. Example React Developer "}
                      </small>
                    </h2>
                  </div>
                )}
              </div>
            )}
            {error.status && (
              <div className="text-center">
                <h2 className="text-2xl lg:text-3xl py-5">
                  Oops! Something went wrong
                  <small className="block text-base mt-3">
                    Please refresh the page
                    <br />
                    If the problem persists
                  </small>
                  <nav className="sm:flex bg-gray-900 text-white py-3 px-2 sm:px-10 items-baseline justify-between items-center my-10 rounded text-center">
                    <a
                      href="https://github.com/abhagsain/githubjobsapi/issues"
                      className="text-base text-center sm:text-xl font-bold hover:underline"
                      target="_blank"
                    >
                      Please create an issue on GitHub
                    </a>
                  </nav>
                </h2>
              </div>
            )}
            {!error.status && (
              <nav className="flex bg-gray-900 text-white py-3 px-10 items-baseline justify-between my-10 rounded text-center">
                <a
                  href="https://abhagsain.com/"
                  className="sm:text-xl font-bold hover:underline"
                  target="_blank"
                >
                  Made with &hearts; by Anurag Bhagsain
                </a>
              </nav>
            )}
          </React.Fragment>
        )}
      </div>
    );
  }
}
