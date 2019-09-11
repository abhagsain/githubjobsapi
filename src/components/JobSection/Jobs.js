import React, { Component } from "react";
import Job from "./Job";
import Spinner from "../Spinner";
import GlobalContext from "../../context/GlobalContext";
export default class JobCard extends Component {
  static contextType = GlobalContext;
  render() {
    const { jobs, loading, filterValue, onFilter } = this.context;
    const data = jobs.filter(el => {
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
    return (
      <div className="flex flex-col justify-center items-center my-10 mx-5">
        {loading ? (
          <Spinner />
        ) : (
          <div className="w-full xl:w-2/3">
            <div className="flex flex-col lg:flex-row justify-between my-5">
              <h2 className="text-4xl my-5 text-gray-800 ">
                Explore
                <small className="text-sm block">
                  Found {data.length} results
                </small>
              </h2>
              <input
                type="text"
                value={filterValue}
                onChange={onFilter}
                className="shadow appearance-none rounded py-4 px-6 text-gray-700 leading-tight focus:outline-none focus: inline w-full lg:w-2/3 self-center"
                placeholder="Filter Searches eg. Engineer, Remote, Berlin etc"
              />
            </div>
            {data &&
              data.map(res => {
                return <Job key={res.id} data={res} />;
              })}
            {data && data.length === 0 && (
              <div className="text-center">
                <h2 className="text-4xl py-5">
                  No Result {filterValue && "for"}
                  {filterValue && (
                    <p className="text-gray-600 inline">{filterValue}</p>
                  )}
                  <small className="block text-base">
                    {filterValue && "Clear filter to see all the results"}
                    {!filterValue &&
                      "Search a broader term. Example React Developer "}
                  </small>
                </h2>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}
