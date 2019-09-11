import React, { Component } from "react";
import GlobalContext from "../../context/GlobalContext";
export default class SearchBar extends Component {
  static contextType = GlobalContext;
  componentDidMount() {
    console.log(this.context);
  }

  render() {
    const { searchedText, onSearched, onSubmit } = this.context;
    return (
      <div className="w-full max-w-xl">
        <form onSubmit={onSubmit}>
          <input
            value={searchedText}
            type="text"
            onChange={onSearched}
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
