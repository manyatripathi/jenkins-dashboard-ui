import { useState, useEffect } from "react";

const TableWithPagination = props => {
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [allData, setAllData] = useState(props.allData);
  const [currentData, setCurrentData] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage, setDataPerPage] = useState(props.dataPerPage);
  const [pageNumbers, setPageNumbers] = useState();

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
    // Logic for displaying current data

    let indexOfLastData = currentPage * dataPerPage;
    let indexOfFirstData = indexOfLastData - dataPerPage;
    let currentData = props.allData.slice(indexOfFirstData, indexOfLastData);

    // Logic for displaying page numbers
    const pageNumber = [];
    for (let i = 1; i <= Math.ceil(props.allData.length / dataPerPage); i++) {
      pageNumber.push(i);
    }
    setCurrentData(currentData);
    setPageNumbers(pageNumber);
    setIsDataLoaded(true);
  }, []);

  useEffect(() => {}, [currentPage]);

  if (!isDataLoaded) {
    return (
      <div className="mdl-cell mdl-cell--12-col mdl-shadow--2dp mdl-color--white">
        <center>
          <div className="mdl-spinner mdl-js-spinner is-active"></div>
        </center>
      </div>
    );
  } else {
    return (
      <div className="mdl-cell mdl-cell--12-col mdl-shadow--2dp mdl-color--white">
        <div className="table-responsive">
          <table className="mdl-data-table mdl-js-data-table">
            <thead>
              <tr>
                {props.tableHeadings.map((heading, index) =>
                  index == 0 ? (
                    <th className="mdl-data-table__cell--non-numeric">
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
                  {props.dataFields.map((dataField, childIndex) =>
                    childIndex == 0 ? (
                      <td className="mdl-data-table__cell--non-numeric">
                        <a href={data.urls} target="_blank">
                          {data[dataField] ? data[dataField] : "None"}
                        </a>
                      </td>
                    ) : (
                      <td>{data[dataField] ? data[dataField] : "None"}</td>
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
                (currentPage * dataPerPage - dataPerPage + currentData.length) +
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
    );
  }
};

export default TableWithPagination;
