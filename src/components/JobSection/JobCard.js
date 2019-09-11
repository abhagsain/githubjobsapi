import React, { Component } from "react";
import Job from "./Job";
import data from "../../data.json";
export default class JobCard extends Component {
  render() {
    const { jobs: data } = this.props;
    return (
      <div className="flex flex-col justify-center items-center my-10 mx-5">
        {/* <h2 className="text-2xl self-start my-5">20 Jobs Found</h2> */}
        {data &&
          data.map(res => {
            return <Job key={res.id} data={res} />;
          })}
      </div>
    );
  }
}
