import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine, faLightbulb } from "@fortawesome/free-solid-svg-icons";

const Togglers = ({ setIsChartOpen, mouseEnterChart, setMouseEnterChart,  handleRemovePulse, mouseEnterPulse, setMouseEnterPulse, pulseRemoved }) => {
``
  return (
    <>
      {mouseEnterChart && <p className="text-white py-1 px-2 bg-[#020202ab] text-[.6rem] absolute right-[3rem] md:right-[3.5rem] top-[7.1rem] md:top-[7.4rem] rounded font-ubuntu">Show chart</p>}
      <div
        className="absolute right-[.5rem] top-[7rem] flex items-center justify-center cursor-pointer hover:bg-[#00000084] bg-[#0202026e] rounded-[7px] w-8 h-8 md:w-10 md:h-10 backdrop-blur-xl "
        onClick={() => setIsChartOpen((prevState) => !prevState)}
        onMouseEnter={() => setMouseEnterChart(true)}
        onMouseLeave={() => setMouseEnterChart(false)}
      >
        <FontAwesomeIcon
          icon={faChartLine}
          className="text-white text-[1rem]"
        />
      </div>

      {mouseEnterPulse && <p className="font-ubuntu text-white py-1 px-2 bg-[#020202ab] text-[.6rem] absolute right-[3rem] md:right-[3.5rem] top-[9.7rem] md:top-[10.3rem] rounded">Turn {pulseRemoved ? "off" : "on"} pulse effect</p>}
      <div
        className="absolute right-[.5rem] top-[9.5rem] md:top-[10rem] cursor-pointer hover:bg-[#00000084] bg-[#0202026e] rounded-[7px] w-8 h-8 md:w-10 md:h-10 flex items-center justify-center  backdrop-blur-xl "
        onClick={handleRemovePulse}
        onMouseEnter={() => setMouseEnterPulse(true)}
        onMouseLeave={() => setMouseEnterPulse(false)}
      >
        <FontAwesomeIcon
          icon={faLightbulb}
          className={`${pulseRemoved ? "text-yellow-300" : "text-white"  } text-[1rem]`}
        />
      </div>
    </>
  );
};

export default Togglers;
