import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";

const ChartToggler = ({ setIsChartOpen }) => (
  <div
    className="absolute right-[.5rem] top-[7rem] flex flex-col cursor-pointer hover:bg-[#6060605f] bg-[#0202026e] rounded-[7px] px-4 py-2"
    onClick={() => setIsChartOpen((prevState) => !prevState)}
  >
    <FontAwesomeIcon icon={faChartLine} className="text-white text-[1.3rem]" />
    <p className="text-center text-[.5rem] text-white">Chart</p>
  </div>
);

export default ChartToggler;
