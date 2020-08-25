import { Line } from "react-chartjs-2";

const CustomLine = props => {
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
        data: props.firstData
      },
      {
        label: props.secondLabel,
        backgroundColor: "rgba(247, 7, 7,0.7)",
        borderColor: "rgba(247, 7, 7,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(247, 7, 7)",
        hoverBorderColor: "rgba(247, 7, 7,1)",
        data: props.secondData
      },
	  {
        label: props.thirdLabel,
        backgroundColor: "rgba(0, 0, 255,0.7)",
        borderColor: "rgba(0, 0, 255,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(0, 0, 255)",
        hoverBorderColor: "rgba(0, 0, 255,1)",
        data: props.thirdData
      },
	  {
        label: props.fourthLabel,
        backgroundColor: "rgba(255, 255, 0,0.7)",
        borderColor: "rgba(255, 255, 0,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255, 225, 0)",
        hoverBorderColor: "rgba(255, 255, 0,1)",
        data: props.fourthData
      }
    ]
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
			//stepSize: 1
          }
        }
      ]
    },
    legend: {
      display: props.legendDisplay,
      position: props.legendPosition
    }
  };

  return <Line data={data} options={options} />;
};

export default CustomLine;
