import React, { Component } from "react";
import Job from "./Job";
import Spinner from "../Spinner";
import GlobalContext from "../../context/GlobalContext";
export default class JobCard extends Component {
  static contextType = GlobalContext;
  render() {
    const { jobs: data, loading, filterValue, onFilter } = this.context;
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
                className="shadow appearance-none rounded py-4 px-6 text-gray-700 leading-tight focus:outline-none focus: inline w-full lg:w-1/3 self-center"
                placeholder="Filter Searches eg. Engineer, Manager"
              />
            </div>

            {/* <h2 className="text-2xl self-start my-5">20 Jobs Found</h2> */}
            {data &&
              data.map(res => {
                return <Job key={res.id} data={res} />;
              })}
          </div>
        )}
      </div>
    );
  }
}
