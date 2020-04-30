import Jenkins from "../components/widgets/jenkins/JenkinsSlaves";
import globalStyles from "../styles/global";

export default function Slaves() {
  return (
    <Jenkins>
      {" "}
      <style jsx global>
        {globalStyles}
      </style>
    </Jenkins>
  );
}
