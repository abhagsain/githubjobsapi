import React, { Component } from "react";
import Job from "./Job";
export default class JobCard extends Component {
  render() {
    const { jobs: data } = this.props;
    return (
      <div className="flex flex-col justify-center items-center my-10 mx-5">
        <div className="w-full xl:w-2/3">
          <div className="flex justify-between my-5">
            <h2 className="text-2xl my-5 ">
              Showing Jobs for Javascript
              <small className="text-sm block">
                Found {data.length} results
              </small>
            </h2>
            <input
              type="text"
              className="shadow appearance-none rounded py-4 px-6 text-gray-700 leading-tight focus:outline-none focus: inline w-1/3 self-center"
              placeholder="Filter Searches eg. Engineer, Manager"
            />
          </div>

          {/* <h2 className="text-2xl self-start my-5">20 Jobs Found</h2> */}
          {data &&
            data.map(res => {
              return <Job key={res.id} data={res} />;
            })}
        </div>
      </div>
    );
  }
}
