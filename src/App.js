import React from "react";
import "./index.css";
import Hero from "./components/Hero/Hero";
import JobCard from "./components/JobSection/JobCard";
import axios from "axios";
class App extends React.Component {
  state = {
    jobs: [],
    searchedText: "",
  };
  onSearched = ({ target: { value } }) => {
    this.setState({ searchedText: value });
  };
  onSubmit = e => {
    e.preventDefault();
    console.log(`on Submit Called`);
    const { searchedText } = this.state;
    if (searchedText && searchedText.trim()) {
      // Call the api
      const URL = `/positions.json?description=${searchedText}&location=new+york`;
      axios.get(URL).then(el => {
        const { data } = el;
        console.log("TCL: data", data);
        this.setState({ jobs: data });
      });
    }
  };
  componentDidMount() {
    const URL = `/positions.json?description=javascript&location=new+york`;
    axios.get(URL).then(el => {
      const { data } = el;
      console.log("TCL: data", data);
      this.setState({ jobs: data });
    });
  }

  render() {
    const { searchedText, jobs } = this.state;
    return (
      <div>
        <Hero
          onSearch={this.onSearched}
          searchedValue={searchedText}
          onSubmit={this.onSubmit}
        />
        <JobCard jobs={jobs} />
      </div>
    );
  }
}

export default App;
