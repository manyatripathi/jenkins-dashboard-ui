import Jenkins from "../components/widgets/jenkins/JenkinsDashboard";
import globalStyles from "../styles/global";

export default function Index() {
  return (
    <Jenkins>
      {" "}
      <style jsx global>
        {globalStyles}
      </style>
    </Jenkins>
  );
}
