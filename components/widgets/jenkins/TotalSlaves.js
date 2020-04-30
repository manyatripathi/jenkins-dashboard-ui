const TotalSlaves = props => {
  return (
    <div className="mdl-cell mdl-cell--3-col mdl-color--white mdl-shadow--2dp">
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--8-col">
          <span className="dashboard-top-card-title">TOTAL SLAVES</span>
          {props.isLoading ? (
            <h6 className="dashboard-top-card-data">
              <div className="mdl-spinner mdl-js-spinner is-active"></div>
            </h6>
          ) : (
            <h4 className="dashboard-top-card-data">{props.totalSlaves}</h4>
          )}
        </div>
        <div className="mdl-cell mdl-cell--4-col">
          <span className="mdl-chip__contact mdl-color--primary mdl-color-text--white">
            <i className="material-icons icon">devices_other</i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default TotalSlaves;
