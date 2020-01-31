import React, { useContext } from "react";
import "./index.css";
import Hero from "./components/Hero/Hero";
import JobCard from "./components/JobSection/Jobs";
import axios from "axios";
import data from "./data.json";
import GlobalContext from "./context/GlobalContext";
import Navbar from "./components/Navbar/Navbar";
const CompanyIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="2" y="10" width="20" height="12" rx="2" />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M6 4H18C18 2.89543 17.1046 2 16 2H8C6.89543 2 6 2.89543 6 4ZM4 8H20C20 6.89543 19.1046 6 18 6H6C4.89543 6 4 6.89543 4 8Z"
      fill="#3182CE"
    />
  </svg>
);

const Close = () => {
  const localContext = useContext(GlobalContext);
  console.log("TCL: Close -> localContext", localContext);
  return (
    <div
      className="bg-red-900 absolute z-50 mt-10 mr-6 flex items-center text-white"
      style={{ left: "60px" }}
      onClick={() => {
        localContext.onJobClicked();
      }}
    >
      <h2 className="text-lg text-white mr-2">Esc</h2>
      <svg
        className="h-8 w-8 "
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
          stroke="#fff"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.4141 12.0004L16.2425 14.8288C16.6331 15.2193 16.6331 15.8525 16.2425 16.243C15.852 16.6335 15.2188 16.6335 14.8283 16.243L11.9999 13.4146L9.17146 16.243C8.78094 16.6335 8.14777 16.6335 7.75725 16.243C7.36672 15.8525 7.36672 15.2193 7.75725 14.8288L10.5857 12.0004L7.75725 9.17195C7.36672 8.78143 7.36672 8.14826 7.75725 7.75774C8.14777 7.36721 8.78094 7.36721 9.17146 7.75774L11.9999 10.5862L14.8283 7.75774C15.2188 7.36721 15.852 7.36721 16.2425 7.75774C16.6331 8.14826 16.6331 8.78143 16.2425 9.17195L13.4141 12.0004Z"
          fill="#fff"
        />
      </svg>
    </div>
  );
};
const ModalContent = ({
  company,
  title,
  company_url,
  description,
  type,
  company_logo,
  location,
  url,
}) => {
  const parsed = JSON.parse('""');
  return (
    <div className="h-screen fixed w-2/4 right-0 bg-gray-200 z-50 right-0 overflow-auto p-5 ">
      <div className="m-12">
        <div className="items-center flex justify-between border-b border-gray-400 pb-5">
          <div className="flex items-center">
            {/* company_logo && (
              <div className="rounded-full justify-center items-center border border-gray-300 flex object-center w-24 overflow-hidden mr-2">
                <img src={company_logo} alt="" />
              </div>
            ) */}
            <div>
              <div className="flex items-center">
                {title && <h2 className="text-2xl font-bold mr-2">{title}</h2>}
                {company_url && (
                  <div className="">
                    <a
                      href={company_url}
                      className="text-xl font-bold px-12 flex items-center  w-full shadow-sm py-2 bg-blue-200 uppercase text-blue-700 tracking rounded-full hover:bg-blue-300 "
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Apply
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        className="h-4 w-4 ml-2 inline fill-current"
                      >
                        <path d="M19 6.41L8.7 16.71a1 1 0 1 1-1.4-1.42L17.58 5H14a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V6.41zM17 14a1 1 0 0 1 2 0v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2h5a1 1 0 0 1 0 2H5v12h12v-5z" />
                      </svg>
                    </a>
                  </div>
                )}
              </div>
              <div></div>
              <div className="desc flex mt-2 items-center">
                {company && (
                  <div className="flex items-center mr-4" title="Company Name">
                    <CompanyIcon className="h-5 w-5 fill-current text-blue-500 mr-1" />
                    <h2 className="text-lg">{company}</h2>
                  </div>
                )}
                {type && (
                  <div className="flex items-center mr-4" title="Job Type">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="h-5 w-5 fill-current text-blue-500 mr-1"
                    >
                      <path d="M8 7V5c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2h4a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9c0-1.1.9-2 2-2h4zm8 2H8v10h8V9zm2 0v10h2V9h-2zM6 9H4v10h2V9zm4-2h4V5h-4v2z" />
                    </svg>
                    <h3 className="full-time text-lg">{type}</h3>
                  </div>
                )}
                {location && (
                  <div className="flex items-center" title="Location">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="h-5 w-5 fill-current text-blue-500 mr-1"
                    >
                      <path d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 1 0-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                    </svg>
                    <h3 className="full-time text-lg">{location}</h3>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <p
          className="mt-5 text-lg"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </div>
  );
};
const Modal = () => {
  document.body.style.overflow = "hidden";

  const localContext = useContext(GlobalContext);
  console.log("TCL: Close -> localContext", localContext);
  return (
    <div className="">
      <div className="h-screen fixed w-2/4 left-0  bg-gray-800 opacity-75 overflow-hidden"></div>
      <div className="flex">
        <Close />
        {/* <ModalContent
          company="Simba, Inc."
          type="Full Time"
          description="This is some description"
          location="New Orlando"
          title="Software Engineer"
        /> */}
        {<ModalContent {...localContext.singleJob} />}
      </div>
    </div>
  );
};
class App extends React.Component {
  state = {
    jobs: [],
    searchedText: "",
    loading: true,
    singleJob: "",
    error: { status: false, message: "" },
    filterValue: "",
    filteredJobs: [],
    location: "",
    type: "",
    pagination: {
      currentPage: 1,
      postPerPage: 10,
    },
    isOpen: false,
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
    if ((description && description.trim()) || (location && location.trim())) {
      // Call the api
      const URL = `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json`;
      this.setState({ loading: true });
      let params = { description };
      if (location && location.trim()) {
        params.location = location;
      }
      document.querySelector("#main__content").scrollIntoView({
        behavior: "smooth",
      });
      axios
        .get(URL, {
          params: params,
        })
        .then(el => {
          const { data } = el;

          this.setState({
            jobs: data,
            loading: false,
            pagination: { ...this.state.pagination, currentPage: 1 },
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
  getJobInformation = () => {
    const URL = `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions/d4013adb-449f-4a38-a1ca-5254ffd868b5.json`;
    axios
      .get(URL)
      .then(el => {
        const { data } = el;
        console.log("TCL: getJobInformation -> data ", data);
        this.setState({ singleJob: data, loading: false });
      })
      .catch(err => {
        this.setState({
          loading: false,
          error: { message: err.message, status: true },
        });
      });
  };
  componentDidMount() {
    //   const URL = `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json`;
    //   axios
    //     .get(URL)
    //     .then(el => {
    //       const { data } = el;
    //       this.setState({ jobs: data, loading: false });
    //     })
    //     .catch(err => {
    //       this.setState({
    //         loading: false,
    //         searchedText: "",
    //         location: "",
    //         error: { message: err.message, status: true },
    //       });
    //     });
    this.setState({ jobs: data, loading: false });
  }

  // componentDidMount() {
  //   // this.setState({ jobs: data, loading: false });
  //   // this.setState({ loading: false });
  //   const URL = `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json`;
  //   axios
  //     .get(URL)
  //     .then(el => {
  //       const { data } = el;
  //       this.setState({ jobs: data, loading: false });
  //     })
  //     .catch(err => {
  //       this.setState({
  //         loading: false,
  //         searchedText: "",
  //         location: "",
  //         error: { message: err.message, status: true },
  //       });
  //     });
  // }

  render() {
    console.log(this.state.jobs);
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
          onJobClicked: this.getJobInformation,
        }}
      >
        <div>
          <Modal />
          <Navbar />
          {/* <Hero /> */}
          <JobCard />
        </div>
      </GlobalContext.Provider>
    );
  }
}

export default App;
