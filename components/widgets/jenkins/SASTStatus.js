import FullDoughnut from "../../static/FullDoughnut";

const SASTStatus = props => {
  return (
    <div className="mdl-cell mdl-cell--3-col mdl-shadow--2dp mdl-color--white dashboard-card">
      <span className="content-heading">SAST Status</span>
      <hr className="content-heading-hr" />
      {props.isLoading ? (
        <div className="mdl-spinner mdl-js-spinner is-active"></div>
      ) : (
        <div>
          <div className="chartContainer">
            <FullDoughnut
              labels={["Critical", "High", "Medium","Low","Informative"]}
              data={[
                props.critical,
                props.high,
                props.medium,
				props.low,
				props.informative
              ]}
              //colors={["#228c3e", "#f21b13"]}
              colors={["#06b81b", "#f70707", "#faee07","#228c3e", "#f21b13"]}
              text=""
              legendDisplay={false}
              legendPosition="bottom"
            />
          </div>
          <div className="mdl-grid">
            
            <div className="mdl-cell mdl-cell--12-col">
              <span>Critical</span>
              <br />
              <span >{props.critical}</span>
            </div>
            
            <div className="mdl-cell mdl-cell--12-col">
              <span>High</span>
              <br />
              <span >{props.high}</span>
            </div>
            <div className="mdl-cell mdl-cell--12-col">
              <span>Medium</span>
              <br />
              <span >{props.medium}</span>
            </div>
			<div className="mdl-cell mdl-cell--12-col">
              <span>Low</span>
              <br />
              <span >{props.low}</span>
			</div>
			<div className="mdl-cell mdl-cell--12-col">
              <span>Informative</span>
              <br />
              <span >{props.informative}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SASTStatus;
