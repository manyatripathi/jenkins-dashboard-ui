import { Doughnut } from "react-chartjs-2";

const FullDoughnut = props => {
  const data = {
    labels: props.labels,
    datasets: [
      {
        data: props.data,
        backgroundColor: props.colors,
        hoverBackgroundColor: props.colors,
        borderWidth: 8,
        hoverBorderWidth: 5
      }
    ]
  };

  const options = {
    legend: {
      display: props.legendDisplay,
      position: props.legendPosition
    },
    maintainAspectRatio: false,
    cutoutPercentage: 75,
    layout: {
      padding: 0
    }
  };

  return <Doughnut data={data} options={options} />;
};

export default FullDoughnut;
