import React, { Component } from "react";

export default class SearchBar extends Component {
  state = {
    searchTerm: "",
  };
  render() {
    const { searchTerm } = this.state;
    return (
      <div className="w-full max-w-xl">
        <input
          value={searchTerm}
          type="text"
          onChange={e => this.setState({ searchTerm: e.target.value })}
          className="shadow-2xl appearance-none rounded w-full py-4 px-6 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-xl hover:shadow-xl"
          placeholder="eg. Senior React Developer"
        />
      </div>
    );
  }
}
