import Line from "../../static/Line";

const LatestScanResults = props => {
  return (
    <div className="mdl-cell mdl-cell--10-col mdl-shadow--2dp mdl-color--white dashboard-card" style={{height: "200"}}>
      <span className="content-heading">Latest Vulnerability Scan Results</span>
      <hr className="content-heading-hr" />
      {props.isLoading ? (
        <h6 className="dashboard-top-card-data">
          <div className="mdl-spinner mdl-js-spinner is-active"></div>
        </h6>
      ) : (
        <Line
          labels={props.last7Builds}
          firstLabel="SAST"
          firstData={props.last7SASTScans}
          secondLabel="SCA"
          secondData={props.last7SCAScans}
		  thirdLabel="DAST"
          thirdData={props.last7SASTScans}
		  fourthLabel="IAST"
          fourthData={props.last7IASTScans}
          legendDisplay={true}
          legendPosition="bottom"
        />
      )}
    </div>
  );
};

export default LatestScanResults;
