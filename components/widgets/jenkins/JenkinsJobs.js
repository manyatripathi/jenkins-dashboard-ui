import { useState, useEffect } from "react";
import Layout from "../../static/Layout";

const JenkinsJobs = props => {
  const [isDataLoading, setIsDataLoading] = useState(true);
  const [allData, setAllData] = useState();
  const [currentData, setCurrentData] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage, setDataPerPage] = useState(10);
  const [pageNumbers, setPageNumbers] = useState();

  const [tableHeadings, setTableHeadings] = useState([
    "Pipeline Name",
    "Current Status",
    "Last Successful Build",
    "Last Failed Build",
    "No Of Today Builds",
    "Last 7 Day Builds",
    "Last 14 Day Builds"
  ]);
  const [dataFields, setDataFields] = useState([
    "name",
    "color",
    "lastSuccessfulBuild",
    "lastFailedBuild",
    "noOfTodayBuilds",
    "lastSevenDayBuilds",
    "lastFourteenDayBuilds"
  ]);

  const handleClick = buttonValue => {
    var presentPage;
    if (buttonValue == "first") {
      presentPage = pageNumbers[0];
      handleData(presentPage);
    } else if (buttonValue == "prev") {
      presentPage = currentPage - 1;
      handleData(presentPage);
    } else if (buttonValue == "next") {
      presentPage = currentPage + 1;
      handleData(presentPage);
    } else if (buttonValue == "last") {
      presentPage = pageNumbers[pageNumbers.length - 1];
      handleData(presentPage);
    }
    setCurrentPage(presentPage);
  };

  const handleData = presentPage => {
    // Logic for displaying current data
    let indexOfLastData = presentPage * dataPerPage;
    let indexOfFirstData = indexOfLastData - dataPerPage;
    let currentData = allData.slice(indexOfFirstData, indexOfLastData);
    setCurrentData(currentData);
  };

  useEffect(() => {
    fetchJobsDetails();
  }, []);

  const fetchJobsDetails = async () => {
    setIsDataLoading(true);
    try {
      const res = await fetch(process.env.jobsAPI);
      const data = await res.json();
      const allData = data;
      setAllData(allData);
      let indexOfLastData = currentPage * dataPerPage;
      let indexOfFirstData = indexOfLastData - dataPerPage;
      let currentData = allData.slice(indexOfFirstData, indexOfLastData);

      // Logic for displaying page numbers
      const pageNumber = [];
      for (let i = 1; i <= Math.ceil(allData.length / dataPerPage); i++) {
        pageNumber.push(i);
      }
      setCurrentData(currentData);
      setPageNumbers(pageNumber);
      setIsDataLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setIsDataLoading(false);
    }
  };

  useEffect(() => {}, [currentPage]);

  if (isDataLoading) {
    return (
      <Layout>
        <main className="mdl-layout__content ">
          <div className="mdl-grid">
            <div className="mdl-cell mdl-cell--12-col"></div>
            <div className="mdl-cell mdl-cell--12-col mdl-shadow--2dp mdl-color--white">
              <center>
                <div className="mdl-spinner mdl-js-spinner is-active"></div>
              </center>
            </div>
          </div>
        </main>
        {props.children}
      </Layout>
    );
  } else {
    return (
      <Layout>
        <main className="mdl-layout__content ">
          <div className="mdl-grid">
            <div className="mdl-cell mdl-cell--12-col"></div>
            <div className="mdl-cell mdl-cell--12-col mdl-shadow--2dp mdl-color--white">
              <div className="table-responsive">
                <table className="mdl-data-table mdl-js-data-table">
                  <thead>
                    <tr>
                      {tableHeadings.map((heading, index) =>
                        index == 0 ? (
                          <th className="mdl-data-table__cell--non-numeric">
                            {heading}
                          </th>
                        ) : heading == "Current Status" ? (
                          <th className="mdl-data-table__cell--non-numeric-status">
                            {heading}
                          </th>
                        ) : (
                          <th>{heading}</th>
                        )
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {currentData.map((data, index) => (
                      <tr key={currentPage * dataPerPage - dataPerPage + index}>
                        {dataFields.map((dataField, childIndex) =>
                          childIndex == 0 ? (
                            <td className="mdl-data-table__cell--non-numeric">
                              <a
                                href={data.url}
                                target="_blank"
                                className="pipeline-name"
                              >
                                {data[dataField] ? data[dataField] : "None"}
                              </a>
                            </td>
                          ) : dataField == "color" ? (
                            <td className="mdl-data-table__cell--non-numeric-status">
                              {data[dataField] == "notbuilt" && (
                                <span className=" mdl-color--brown-50 mdl-chip mdl-color-text--black">
                                  <span className="mdl-chip__text">
                                    Never Built
                                  </span>
                                </span>
                              )}
                              {data[dataField] == "blue" && (
                                <span className="mdl-color--green mdl-chip mdl-color-text--white">
                                  <span className="mdl-chip__text">
                                    Success
                                  </span>
                                </span>
                              )}
                              {data[dataField] == "red" && (
                                <span className=" mdl-color--red mdl-chip mdl-color-text--white">
                                  <span className="mdl-chip__text">
                                    Failure
                                  </span>
                                </span>
                              )}

                              {data[dataField] == "yellow" && (
                                <span className=" mdl-color--yellow mdl-chip mdl-color-text--black">
                                  <span className="mdl-chip__text">
                                    Unstable
                                  </span>
                                </span>
                              )}

                              {data[dataField] == "aborted" && (
                                <span className=" mdl-color--brown mdl-chip mdl-color-text--white">
                                  <span className="mdl-chip__text">
                                    Aborted
                                  </span>
                                </span>
                              )}

                              {data[dataField] == "disabled" && (
                                <span className=" mdl-color--blue-grey-700 mdl-chip mdl-color-text--white">
                                  <span className="mdl-chip__text">
                                    Disabled
                                  </span>
                                </span>
                              )}

                              {(data[dataField] == "blue_anime" ||
                                data[dataField] == "red_anime" ||
                                data[dataField] == "yellow_anime" ||
                                data[dataField] == "aborted_anime") && (
                                <span className=" mdl-color--yellow-200 mdl-chip mdl-color-text--black">
                                  <span className="mdl-chip__text">
                                    In Progress
                                  </span>
                                </span>
                              )}
                            </td>
                          ) : (
                            <td>
                              {data[dataField] ? data[dataField] : "None"}
                            </td>
                          )
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="pagination">
                {currentPage == pageNumbers[0] ? (
                  <div id="page-numbers">
                    <button
                      className="mdl-button mdl-js-button mdl-button--icon"
                      disabled
                    >
                      <i className="material-icons">first_page</i>
                    </button>
                    <button
                      className="mdl-button mdl-js-button mdl-button--icon"
                      disabled
                    >
                      <i className="material-icons">navigate_before</i>
                    </button>
                  </div>
                ) : (
                  <div id="page-numbers">
                    <button
                      className="mdl-button mdl-js-button mdl-button--icon"
                      onClick={() => handleClick("first")}
                    >
                      <i className="material-icons">first_page</i>
                    </button>
                    <button
                      className="mdl-button mdl-js-button mdl-button--icon"
                      onClick={() => handleClick("prev")}
                    >
                      <i className="material-icons">navigate_before</i>
                    </button>
                  </div>
                )}
                <div id="page-numbers">
                  <span>
                    {currentPage * dataPerPage -
                      dataPerPage +
                      1 +
                      "-" +
                      (currentPage * dataPerPage -
                        dataPerPage +
                        currentData.length) +
                      " of " +
                      allData.length +
                      " "}
                  </span>
                </div>

                {currentPage == pageNumbers[pageNumbers.length - 1] ? (
                  <div id="page-numbers">
                    <button
                      className="mdl-button mdl-js-button mdl-button--icon"
                      disabled
                    >
                      <i className="material-icons">navigate_next</i>
                    </button>
                    <button
                      className="mdl-button mdl-js-button mdl-button--icon"
                      disabled
                    >
                      <i className="material-icons">last_page</i>
                    </button>
                  </div>
                ) : (
                  <div id="page-numbers">
                    <button
                      className="mdl-button mdl-js-button mdl-button--icon"
                      onClick={() => handleClick("next")}
                    >
                      <i className="material-icons">navigate_next</i>
                    </button>
                    <button
                      className="mdl-button mdl-js-button mdl-button--icon"
                      onClick={() => handleClick("last")}
                    >
                      <i className="material-icons">last_page</i>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
        {props.children}
      </Layout>
    );
  }
};

export default JenkinsJobs;
