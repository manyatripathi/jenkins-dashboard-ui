import { useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";
import Layout from "../../static/Layout";
import TotalJobs from "./TotalJobs";
import TotalMasters from "./TotalMasters";
import TotalSlaves from "./TotalSlaves";
import TotalExecutors from "./TotalExecutors";
import LatestScanResults from "./LatestScanResults";
import JobsStatus from "./JobsStatus";
import SASTStatus from "./SASTStatus"

const JenkinsScans = props => {
  const [isSlaveDataLoading, setIsSlaveDataLoading] = useState(false);
  const [isScanDataLoading, setIsScanDataLoading] = useState(false);
  const [totalJobs, setTotalJobs] = useState();
  const [totalMasters, setTotalMasters] = useState();
  const [critical, setCritical] = useState();
  const [high, setHigh] = useState();
  const [medium, setMedium] = useState();
  const [informative, setInformative] = useState();
  const [low, setLow] = useState();
  const [last7Builds, setLast7Builds] = useState();
  const [last7SASTScans, setlast7SASTScans] = useState();
  const [last7SCAScans, setlast7SCAScans] = useState();
  const [last7DASTScans, setlast7DASTScans] = useState();
  const [last7IASTScans, setlast7IASTScans] = useState();

  useEffect(() => {
    fetchSlaveDetails();
    fetchJobsDetails();
  }, []);

  const fetchSlaveDetails = async () => {
    try {
      setIsSlaveDataLoading(true);

      const res = await fetch(process.env.slaveAPI);
      const data = await res.json();
      setTotalMasters(data.totalMasters);
      setTotalSlaves(data.totalSlaves);
      setTotalExecutors(data.totalExecutors);
      setIsSlaveDataLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setIsSlaveDataLoading(false);
    }
  };

  const fetchJobsDetails = async () => {
    setIsJobsDataLoading(true);
    try {
      const res = await fetch(process.env.jobsAPI);
      const data = await res.json();
      var totalSuccess = 0;
      var totalFailure = 0;
      var totalUnstable = 0;
      var last7DayDates = [];
      for (let i = 7; i >= 1; i--) {
        var day = new Date(Date.now() - i * 24 * 60 * 60 * 1000);
        var date = day.getDate() + " ";
        var month = day.getMonth() + 1;
        switch (month) {
          case 1:
            date += "January";
            break;
          case 2:
            date += "February";
            break;
          case 3:
            date += "March";
            break;
          case 4:
            date += "April";
            break;
          case 5:
            date += "May";
            break;
          case 6:
            date += "June";
            break;
          case 7:
            date += "July";
            break;
          case 8:
            date += "August";
            break;
          case 9:
            date += "September";
            break;
          case 10:
            date += "October";
            break;
          case 11:
            date += "November";
            break;
          case 12:
            date += "December";
            break;
        }
        last7DayDates.push(date);
      }
      var last1DaySuccess = 0;
      var last1DayFailure = 0;
      var last2DaySuccess = 0;
      var last2DayFailure = 0;
      var last3DaySuccess = 0;
      var last3DayFailure = 0;
      var last4DaySuccess = 0;
      var last4DayFailure = 0;
      var last5DaySuccess = 0;
      var last5DayFailure = 0;
      var last6DaySuccess = 0;
      var last6DayFailure = 0;
      var last7DaySuccess = 0;
      var last7DayFailure = 0;

      data.map(job => {
        if (job.color == "blue" || job.color == "blue_anime") {
          totalSuccess += 1;
        } else if (job.color == "red" || job.color == "red_anime") {
          totalFailure += 1;
        } else if (job.color == "yellow" || job.color == "yellow_anime") {
          totalUnstable += 1;
        }

        last7DaySuccess += job.lastSevenDaysSuccess[0];
        last6DaySuccess += job.lastSevenDaysSuccess[1];
        last5DaySuccess += job.lastSevenDaysSuccess[2];
        last4DaySuccess += job.lastSevenDaysSuccess[3];
        last3DaySuccess += job.lastSevenDaysSuccess[4];
        last2DaySuccess += job.lastSevenDaysSuccess[5];
        last1DaySuccess += job.lastSevenDaysSuccess[6];

        last7DayFailure += job.lastSevenDaysFailure[0];
        last6DayFailure += job.lastSevenDaysFailure[1];
        last5DayFailure += job.lastSevenDaysFailure[2];
        last4DayFailure += job.lastSevenDaysFailure[3];
        last3DayFailure += job.lastSevenDaysFailure[4];
        last2DayFailure += job.lastSevenDaysFailure[5];
        last1DayFailure += job.lastSevenDaysFailure[6];
      });

      setLast7DaysSuccess([
        last7DaySuccess,
        last6DaySuccess,
        last5DaySuccess,
        last4DaySuccess,
        last3DaySuccess,
        last2DaySuccess,
        last1DaySuccess
      ]);

      setLast7DaysFailure([
        last7DayFailure,
        last6DayFailure,
        last5DayFailure,
        last4DayFailure,
        last3DayFailure,
        last2DayFailure,
        last1DayFailure
      ]);
      setLast7DaysDates(last7DayDates);
      setTotalSuccess(totalSuccess);
      setTotalFailure(totalFailure);
      setTotalUnstable(totalUnstable);
      setTotalJobs(data.length);
      setIsJobsDataLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setIsJobsDataLoading(false);
    }
  };
  return (
    <Layout>
      <main className="mdl-layout__content ">
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--12-col"></div>
		  <div className="mdl-cell mdl-cell--1-col"></div>
		  <LatestScanResults
            isLoading={isScanDataLoading}
            last7Builds={last7Builds}
            last7SASTScans={last7SASTScans}
            last7SCAScans={last7SCAScans}
			last7DASTScans={last7DASTScans}
			last7IASTScans={last7IASTScans}
          />
		  <div className="mdl-cell mdl-cell--12-col"></div>
          <SASTStatus
            isLoading={isScanDataLoading}
            critical={critical}
            high={high}
            medium={medium}
			low={low}
			informative={informative}
          />
		  <SASTStatus
            isLoading={isScanDataLoading}
            critical={critical}
            high={high}
            medium={medium}
			low={low}
			informative={informative}
          />
		  <SASTStatus
            isLoading={isScanDataLoading}
            critical={critical}
            high={high}
            medium={medium}
			low={low}
			informative={informative}
          />
		  <SASTStatus
            isLoading={isScanDataLoading}
            critical={critical}
            high={high}
            medium={medium}
			low={low}
			informative={informative}
          />
          <div className="mdl-cell mdl-cell--12-col"></div>
        </div>
      </main>
      {props.children}
    </Layout>
  );
};

export default JenkinsScans;
