import React from "react";
import "./index.css";
import Hero from "./components/Hero/Hero";
import JobCard from "./components/JobSection/Jobs";
import axios from "axios";
import data from "./data.json";
import GlobalContext from "./context/GlobalContext";

class App extends React.Component {
  state = {
    jobs: [],
    searchedText: "",
    loading: true,
    error: { status: false, message: "" },
    filterValue: "",
    filteredJobs: [],
  };
  onSearched = ({ target: { value } }) => {
    this.setState({ searchedText: value });
  };
  onFilter = ({ target: { value } }) => {
    this.setState({ filterValue: value });
  };
  onSubmit = e => {
    e.preventDefault();
    console.log(`on Submit Called`);
    const { searchedText } = this.state;
    if (searchedText && searchedText.trim()) {
      // Call the api
      const URL = `/positions.json?description=${searchedText}&location=new+york`;
      this.setState({ loading: true });
      axios.get(URL).then(el => {
        const { data } = el;
        console.log("TCL: data", data);
        this.setState({ jobs: data, loading: false, searchedText: "" });
      });
    }
  };
  componentDidMount() {
    // this.setState({ jobs: data, loading: false });
    const URL = `/positions.json`;
    axios.get(URL).then(el => {
      const { data } = el;
      console.log("TCL: data", data);
      this.setState({ jobs: data, loading: false });
    });
  }

  render() {
    return (
      <GlobalContext.Provider
        value={{
          ...this.state,
          onSubmit: this.onSubmit,
          onSearched: this.onSearched,
          onFilter: this.onFilter,
        }}
      >
        <div>
          <Hero />
          <JobCard />
        </div>
      </GlobalContext.Provider>
    );
  }
}

export default App;
