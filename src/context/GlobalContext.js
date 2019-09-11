import React from "react";
export default React.createContext({
  jobs: [],
  searchedText: "",
  loading: true,
  error: { status: false, message: "" },
  filterValue: "",
  onSearched: value => {},
  onFilterChange: () => {},
});
