import Jenkins from "../components/widgets/jenkins/JenkinsScans";
import globalStyles from "../styles/global";

export default function Jobs() {
  return (
    <Jenkins>
      {" "}
      <style jsx global>
        {globalStyles}
      </style>
    </Jenkins>
  );
}
