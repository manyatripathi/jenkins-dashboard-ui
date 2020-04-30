import FullDoughnut from "../../static/FullDoughnut";

const JobsStatus = props => {
  return (
    <div className="mdl-cell mdl-cell--4-col mdl-shadow--2dp mdl-color--white dashboard-card">
      <span className="content-heading">Jobs Status</span>
      <hr className="content-heading-hr" />
      {props.isLoading ? (
        <div className="mdl-spinner mdl-js-spinner is-active"></div>
      ) : (
        <div>
          <div className="chartContainer">
            <FullDoughnut
              labels={["Success", "Failure", "Unstable"]}
              data={[
                props.totalSuccess,
                props.totalFailure,
                props.totalUnstable
              ]}
              //colors={["#228c3e", "#f21b13"]}
              colors={["#06b81b", "#f70707", "#faee07"]}
              text=""
              legendDisplay={false}
              legendPosition="bottom"
            />
          </div>
          <div className="mdl-grid">
            <div className="mdl-cell mdl-cell--2-col"></div>
            <div className="mdl-cell mdl-cell--2-col">
              <span>Success</span>
              <br />
              <span className="job-status-green">{props.totalSuccess}</span>
            </div>
            <div className="mdl-cell mdl-cell--1-col"></div>
            <div className="mdl-cell mdl-cell--2-col">
              <span>Failure</span>
              <br />
              <span className="job-status-red">{props.totalFailure}</span>
            </div>
            <div className="mdl-cell mdl-cell--1-col"></div>
            <div className="mdl-cell mdl-cell--2-col">
              <span>Unstable</span>
              <br />
              <span className="job-status-yellow">{props.totalUnstable}</span>
            </div>
            <div className="mdl-cell mdl-cell--2-col"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobsStatus;
