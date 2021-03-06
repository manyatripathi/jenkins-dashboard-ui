const TotalExecutors = props => {
  return (
    <div className="mdl-cell mdl-cell--3-col mdl-color--white mdl-shadow--2dp">
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--8-col">
          <span className="dashboard-top-card-title">TOTAL EXECUTORS</span>
          {props.isLoading ? (
            <h6 className="dashboard-top-card-data">
              <div className="mdl-spinner mdl-js-spinner is-active"></div>
            </h6>
          ) : (
            <h4 className="dashboard-top-card-data">{props.totalExecutors}</h4>
          )}
        </div>
        <div className="mdl-cell mdl-cell--4-col">
          <span className="mdl-chip__contact mdl-color--purple mdl-color-text--white">
            <i className="material-icons icon">computer</i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default TotalExecutors;
