import { Bar } from "react-chartjs-2";

const CustomBar = props => {
  const data = {
    labels: props.labels,
    datasets: [
      {
        label: props.firstLabel,
        backgroundColor: "rgba(6, 184, 27,0.7)",
        borderColor: "rgba(6, 184, 27,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(6, 184, 27)",
        hoverBorderColor: "rgba(6, 184, 27,1)",
        data: props.firstData,
        barThickness: 20
      },
      {
        label: props.secondLabel,
        backgroundColor: "rgba(247, 7, 7,0.7)",
        borderColor: "rgba(247, 7, 7,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(247, 7, 7)",
        hoverBorderColor: "rgba(247, 7, 7,1)",
        data: props.secondData,
        barThickness: 20
      }
    ]
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    },
    legend: {
      display: props.legendDisplay,
      position: props.legendPosition
    }
  };

  return <Bar data={data} options={options} />;
};

export default CustomBar;
