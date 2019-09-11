import React, { Component } from "react";
import GlobalContext from "../../context/GlobalContext";
export default class SearchBar extends Component {
  static contextType = GlobalContext;
  disableButton = () => {
    const { searchedText, type, location } = this.context;
    return (
      searchedText.trim() === "" && type.trim() === "" && location.trim() === ""
    );
  };
  render() {
    const {
      searchedText,
      onSearched,
      onSubmit,
      onTextChanged,
      location,
      type,
    } = this.context;
    const buttonClass =
      "text-white font-bold text-xl py-2 px-4 rounded w-full bg-blue-900 ";
    const btnClass = this.disableButton()
      ? buttonClass.concat("opacity-75  cursor-not-allowed")
      : buttonClass.concat(
          "active:bg-red-100 active:bg-blue-800 shadow-2xl hover:shadow-xl active:shadow"
        );
    return (
      <div className="w-full max-w-xl p-5 lg:p-0">
        <div className="w-full">
          <input
            value={searchedText}
            type="text"
            name="searchedText"
            onChange={onSearched}
            className="shadow-xl appearance-none rounded py-4 px-6 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-2xl hover:shadow-2xl inline w-full"
            placeholder="eg. Senior React Developer"
          />
        </div>
        <div className="w-full flex justify-between">
          <input
            name="location"
            value={location}
            type="text"
            onChange={onTextChanged}
            className="shadow-xl appearance-none rounded py-4 px-6 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-2xl hover:shadow-2xl inline w-1/2 mr-3"
            placeholder="Location: Berlin"
          />
          <input
            name="type"
            value={type}
            type="text"
            onChange={onTextChanged}
            className="shadow-xl appearance-none rounded py-4 px-6 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-2xl hover:shadow-2xl inline w-1/2"
            placeholder="Type: Full Time"
          />
        </div>
        <div className="text-center mt-5">
          <button
            disabled={this.disableButton()}
            onClick={onSubmit}
            className={btnClass}
          >
            Search
          </button>
        </div>
        {/* <button className="bg-blue-500 px-5 py-3 text-white rounded inline">
          Search
        </button> */}
      </div>
    );
  }
}
