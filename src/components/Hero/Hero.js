import React from "react";
import SearchBar from "./SearchBar";
const heroStyle = {
  height: "70vh",
};
export default function Hero({ onSearch, searchedValue, onSubmit }) {
  return (
    <div
      style={heroStyle}
      className="bg-white flex justify-center items-center"
    >
      <SearchBar
        onSearch={onSearch}
        searchedValue={searchedValue}
        onSubmit={onSubmit}
      />
    </div>
  );
}
