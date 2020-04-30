import { useState, useEffect } from "react";
import Layout from "../../static/Layout";

const JenkinsSlaves = props => {
  const [isDataLoading, setIsDataLoading] = useState(true);
  const [allData, setAllData] = useState();
  const [currentData, setCurrentData] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage, setDataPerPage] = useState(10);
  const [pageNumbers, setPageNumbers] = useState();
  const [tableHeadings, setTableHeadings] = useState([
    "Node Name",
    "Architecture",
    "Description",
    "Assigned Labels",
    "No of Executors",
    "Free Memory",
    "Status",
    "Remarks"
  ]);
  const [dataFields, setDataFields] = useState([
    "displayName",
    "architecture",
    "description",
    "assignedLabels",
    "numExecutors",
    "freeSpace",
    "offline",
    "offlineCauseReason"
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
    fetchSlaveDetails();
  }, []);

  useEffect(() => {}, [currentPage]);

  const fetchSlaveDetails = async () => {
    setIsDataLoading(true);
    try {
      const res = await fetch(process.env.slaveAPI);
      const data = await res.json();
      const allData = data.computers;
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
                      {tableHeadings.map((heading, index) => (
                        <th className="mdl-data-table__cell--non-numeric">
                          {heading}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {currentData.map((data, index) => (
                      <tr key={currentPage * dataPerPage - dataPerPage + index}>
                        {dataFields.map((dataField, childIndex) => (
                          <td className="mdl-data-table__cell--non-numeric">
                            {dataField == "offline"
                              ? data[dataField]
                                ? "Offline"
                                : "Online"
                              : dataField == "assignedLabels"
                              ? data[dataField].map((label, labelIndex) => {
                                  if (labelIndex == 0) {
                                    return label.name;
                                  } else {
                                    return ", " + label.name;
                                  }
                                })
                              : dataField == "freeSpace"
                              ? data[dataField] == "NA"
                                ? "N/A"
                                : data[dataField] + " GB"
                              : data[dataField]}
                          </td>
                        ))}
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

export default JenkinsSlaves;
