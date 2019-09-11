import React, { Component } from "react";
import axios from "axios";
export default class SearchBar extends Component {
  render() {
    const { searchedValue, onSearch, onSubmit } = this.props;
    return (
      <div className="w-full max-w-xl">
        <form onSubmit={onSubmit}>
          <input
            value={searchedValue}
            type="text"
            onChange={onSearch}
            className="shadow-xl appearance-none rounded py-4 px-6 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-2xl hover:shadow-2xl inline w-full"
            placeholder="eg. Senior React Developer"
          />
        </form>
        {/* <button className="bg-blue-500 px-5 py-3 text-white rounded inline">
          Search
        </button> */}
      </div>
    );
  }
}
