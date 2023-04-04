import { useContext, useState } from "react";
import { GlobalContext } from "../utils/Context";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const LineChart = ({ isChartOpen, setIsChartOpen }) => {
  const { earthquakes, lastArr, getDays } = useContext(GlobalContext);

  const [earthquakesData] = useState({
    labels: getDays(),
    datasets: [
      {
        label: "Magnitude",
        data: earthquakes[lastArr].map((e) => e?.properties?.mag),
        fill: false,
        borderColor: "white",
        tension: 0.1,
      },
    ],
  });

  //for chart customization
  const options = {
    plugins: {
      legend: {
        display: true,
      },
    }, 
    animation: {
      duration: 2000,
      easing: "easeInOutQuad",
    },
    scales: {
      yAxes: {
        grid: {
          color: "gray",
        },
        ticks: {
          color: "white",
        },
      },
      xAxes: {
        grid: {
          color: "gray",
        },
        ticks: {
          color: "white",
        },
      },
    },
    elements: {
      point: {
        radius: 5,
      },
    },
    maintainAspectRatio: false,
    responsive: true,
  };

  return (
    <div
      className={`absolute z-50 
        bg-[#020202a0]  rounded-2xl backdrop-blur-xl h-[60vh] md:h-[70vh] w-[95vw] md:w-[70vw] p-8 md:p-10
        ${
          isChartOpen
            ? "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700"
            : "top-[-200%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700"
        }
        `}
    >
      <div className="flex items-center w-full justify-between">
        <h1 className=" text-center text-[#ffffffd5] font-semibold text-[1.3rem] md:text-[1.5rem] font-ubuntu">
          Magnitude Chart
        </h1>
        <FontAwesomeIcon
          icon={faXmark}
          className="text-[1.5rem] text-[white] hover:text-[#ffffff94]"
          onClick={() => setIsChartOpen((prevState) => !prevState)}
        />
      </div>
      <Line data={earthquakesData} options={options} />
    </div>
  );
};

export default LineChart;
