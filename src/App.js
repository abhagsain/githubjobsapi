import React from "react";
import "./index.css";
import Hero from "./components/Hero/Hero";
import JobCard from "./components/JobSection/Jobs";
import axios from "axios";
// import data from "./data.json";
import GlobalContext from "./context/GlobalContext";
import Navbar from "./components/Navbar/Navbar";

class App extends React.Component {
  state = {
    jobs: [],
    searchedText: "",
    loading: true,
    error: { status: false, message: "" },
    filterValue: "",
    filteredJobs: [],
    location: "",
    type: "",
    pagination: {
      currentPage: 1,
      postPerPage: 10,
    },
  };
  onSearched = ({ target: { value } }) => {
    this.setState({ searchedText: value });
  };
  onTextChanged = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };
  onFilter = ({ target: { value } }) => {
    this.setState({
      filterValue: value,
      pagination: { ...this.state.pagination, currentPage: 1 },
    });
  };
  onSubmit = e => {
    e.preventDefault();
    const { searchedText: description, location } = this.state;
    if (description && description.trim()) {
      // Call the api
      const URL = `/positions.json`;
      this.setState({ loading: true });
      let params = { description };
      if (location && location.trim()) {
        params.location = location;
      }
      axios
        .get(URL, {
          params: params,
        })
        .then(el => {
          const { data } = el;
          this.setState({
            jobs: data,
            loading: false,
          });
        })
        .catch(err => {
          this.setState({
            loading: false,
            searchedText: "",
            location: "",
            error: { message: err.message, status: true },
          });
        });
    }
  };
  clearSearch = () => {
    const { searchedText, location } = this.state;
    if (searchedText || location)
      this.setState({ searchedText: "", location: "" });
  };
  paginate = pageNumber => {
    this.setState({
      pagination: { ...this.state.pagination, currentPage: pageNumber },
    });
  };
  componentDidMount() {
    // this.setState({ jobs: data, loading: false });
    // this.setState({ loading: false });
    const URL = `/positions.json`;
    axios.get(URL).then(el => {
      const { data } = el;
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
          onTextChanged: this.onTextChanged,
          clearSearch: this.clearSearch,
          paginate: this.paginate,
        }}
      >
        <div>
          <Navbar />
          <Hero />
          <JobCard />
        </div>
      </GlobalContext.Provider>
    );
  }
}

export default App;
