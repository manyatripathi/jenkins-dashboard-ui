import Bar from "../../static/Bar";

const LatestJobResults = props => {
  return (
    <div className="mdl-cell mdl-cell--8-col mdl-shadow--2dp mdl-color--white dashboard-card">
      <span className="content-heading">Latest Builds Results</span>
      <hr className="content-heading-hr" />
      {props.isLoading ? (
        <h6 className="dashboard-top-card-data">
          <div className="mdl-spinner mdl-js-spinner is-active"></div>
        </h6>
      ) : (
        <Bar
          labels={props.last7DaysDates}
          firstLabel="Successful Builds"
          firstData={props.last7DaysSuccess}
          secondLabel="Failed Builds"
          secondData={props.last7DaysFailure}
          legendDisplay={true}
          legendPosition="top"
        />
      )}
    </div>
  );
};

export default LatestJobResults;
