import React, { useContext } from "react";
import "./index.css";
import Hero from "./components/Hero/Hero";
import JobCard from "./components/JobSection/Jobs";
import axios from "axios";
import data from "./data.json";
import GlobalContext from "./context/GlobalContext";
import Navbar from "./components/Navbar/Navbar";
import ModalSkeleton from "./components/Skeletons/ModalSkeleton";
const CompanyIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="2" y="10" width="20" height="12" rx="2" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 4H18C18 2.89543 17.1046 2 16 2H8C6.89543 2 6 2.89543 6 4ZM4 8H20C20 6.89543 19.1046 6 18 6H6C4.89543 6 4 6.89543 4 8Z"
      fill="#3182CE"
    />
  </svg>
);

const ModalContent = ({
  company,
  title,
  company_url,
  description,
  type,
  location,
  url,
}) => {
  return (
    <div className="h-screen fixed right-0 bg-gray-200 z-40 right-0 overflow-auto p-4 w-full md:w-4/5 lg:w-3/5">
      <div className=" md:m-6 lg:m-12">
        <div className="items-center flex justify-between border-b border-gray-400 pb-5">
          <div className="flex items-center w-full">
            <div className="w-full">
              <div className="flex flex-col xs:flex-row items-center justify-between">
                {title && (
                  <h2 className="text-sm xs:text-sm sm:text-xl md:text-2xl font-bold mr-2">
                    {title}
                  </h2>
                )}
                {url && (
                  <div className="text-xs xs:text-sm mt-2 md:mt-0 w-full max-w-sm md:max-w-auto md:w-auto">
                    <a
                      href={url}
                      className="text-sm sm:text-lg md:text-lg  font-bold px-12 flex items-center  w-full shadow-sm py-2 bg-blue-200 uppercase text-blue-700 tracking rounded-full hover:bg-blue-300 
                      justify-center
                      "
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
              <div className="desc flex mt-2 items-center flex-wrap justify-between sm:justify-start">
                {company && (
                  <div
                    className="flex items-center mr-4 mt-2"
                    title="Company Name"
                  >
                    <CompanyIcon className="h-5 w-5 fill-current text-blue-500 mr-1" />
                    <h2 className="text-sm md:text-lg">{company}</h2>
                  </div>
                )}
                {type && (
                  <div className="flex items-center mr-4 mt-2" title="Job Type">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="h-5 w-5 fill-current text-blue-500 mr-1"
                    >
                      <path d="M8 7V5c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2h4a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9c0-1.1.9-2 2-2h4zm8 2H8v10h8V9zm2 0v10h2V9h-2zM6 9H4v10h2V9zm4-2h4V5h-4v2z" />
                    </svg>
                    <h3 className="text-sm md:text-lg">{type}</h3>
                  </div>
                )}
                {location && (
                  <div className="flex items-center mt-2" title="Location">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="h-5 w-5 fill-current text-blue-500 mr-1"
                    >
                      <path d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 1 0-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                    </svg>
                    <h3 className="text-sm md:text-lg">{location}</h3>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <p
          className="mt-5 text-lg modal__content"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </div>
  );
};
const Modal = () => {
  document.body.style.overflow = "hidden";
  const localContext = useContext(GlobalContext);
  return (
    <div className="">
      <div
        className="h-screen fixed hidden md:block md:w-1/5 lg:w-2/5 left-0 bg-gray-800 opacity-75 overflow-hidden z-20
        xl:block
        "
        onClick={localContext.onModalClose}
      ></div>
      <div className="flex" onClick={localContext.onModalClose}>
        <svg
          className="md:hidden h-16 w-16 close__button "
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.4142 12L16.2427 14.8284C16.6332 15.219 16.6332 15.8521 16.2427 16.2427C15.8521 16.6332 15.219 16.6332 14.8284 16.2427L12 13.4142L9.17158 16.2427C8.78106 16.6332 8.1479 16.6332 7.75737 16.2427C7.36685 15.8521 7.36685 15.219 7.75737 14.8284L10.5858 12L7.75737 9.17158C7.36685 8.78106 7.36685 8.1479 7.75737 7.75737C8.1479 7.36685 8.78106 7.36685 9.17158 7.75737L12 10.5858L14.8284 7.75737C15.219 7.36685 15.8521 7.36685 16.2427 7.75737C16.6332 8.1479 16.6332 8.78106 16.2427 9.17158L13.4142 12Z"
            fill="#0D2B3E"
          />
        </svg>
      </div>

      <div className="flex">
        {/* <Close /> */}
        {localContext.singleJob ? (
          <ModalContent {...localContext.singleJob} />
        ) : (
          <ModalSkeleton />
        )}
        {/* 
          <ModalContent
            company="Simba, Inc."
            type="Full Time"
            description="This is some description"
            location="New Orlando"
            title="Software Engineer"
          /> */}
      </div>
    </div>
  );
};
class App extends React.Component {
  state = {
    jobs: [],
    searchedText: "",
    loading: true,
    singleJob: null,
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
  onEscKeyDown = event => {
    if (event.keyCode === 27) {
      this.onModalClose();
    }
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
  toggleModal = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  onModalOpen = jobID => {
    this.setState({ isOpen: true });
    this.getJobInformation(jobID);
  };
  onModalClose = () => {
    document.body.style.overflow = "auto";
    this.setState({ isOpen: false, singleJob: "" });
  };
  getJobInformation = ID => {
    const URL = `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions/${ID}.json`;
    axios
      .get(URL)
      .then(el => {
        const { data } = el;
        this.setState({ singleJob: data, loading: false, isOpen: true });
      })
      .catch(err => {
        document.body.style.overflow = "auto";
        this.setState({
          loading: false,
          isOpen: false,
          error: { message: err.message, status: true },
        });
      });
  };
  // componentDidMount() {
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
  // this.setState({ jobs: data, loading: false });
  // }

  componentDidMount() {
    // this.setState({ jobs: data, loading: false });
    document.addEventListener("keydown", this.onEscKeyDown, false);
    const URL = `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json`;
    axios
      .get(URL)
      .then(el => {
        const { data } = el;
        this.setState({ jobs: data, loading: false });
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
  componentWillUnmount() {
    document.removeEventListener("keydown", this.onEscKeyDown, false);
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
          onJobClicked: this.getJobInformation,
          onModalClose: this.onModalClose,
          onModalOpen: this.onModalOpen,
        }}
      >
        <div>
          {this.state.isOpen && <Modal />}
          <Navbar />
          {/* <Hero /> */}
          <JobCard />
        </div>
      </GlobalContext.Provider>
    );
  }
}

export default App;
