import { useContext, useState } from "react";
import EarthquakeDetails from "./EarthquakeDetails";
import { GlobalContext } from "../utils/Context";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
// import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Menu = ({ setPopUpInfo }) => {
  const { flyToHandler, earthquakes } = useContext(GlobalContext);
  const [clicked, setClicked] = useState(false);
  const lastArr = earthquakes.length - 1

  return (  
    <div
      className={`menu absolute rounded-2xl h-[85%] md:h-auto w-[100%] md:w-[38%]
      ${
        clicked
          ? "bottom-[-81%] transition-all duration-500"
          : "bottom-[-40%] transition-all duration-500"
      }
      bg-[#020202a0] backdrop-blur-xl 
      px-4 py-8 md:py-6 md:top-4 md:left-4 md:bottom-auto md:right-auto`}
    > 
      <button
        onClick={() => setClicked((prevClick) => !prevClick)}
        className="block md:hidden text-white mx-auto mt-[-1.5rem] mb-4"
      >
        <FontAwesomeIcon
          icon={clicked ? faChevronUp : faChevronDown}
          className="text-[1rem] "
        />
      </button>

      {/* <ReactDatePicker
        selected={startDate}
        onChange={(date) => {
          setStartDate(date);
        }}
        dateFormat="MM-dd-yyyy"
        maxDate={new Date()}
        portalId="root"
      /> */}
      <div className="mb-2 px-4">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-br from-[#fefefe] to-[#2a1515] text-[1.5rem] sm:text-[1.6rem] font-ubuntu pb-2 font-bold">
          Seismic Activities
        </h1>
        <p className="font-ubuntu sm:text-[.8rem] text-[.7rem] text-[#f2eeee80]">
          Earthquakes in the Philippines for the past 30 days
        </p>
      </div>
      <div className=" overflow-y-auto md:h-[auto] max-h-[400px] h-[35%]">
        <div className="flex gap-[1rem] flex-col p-4 ">
          {earthquakes[lastArr]?.map((earthquake, index) => (
            <EarthquakeDetails
              key={index}
              earthquake={earthquake}
              title={earthquake?.properties?.title}
              place={earthquake?.properties?.place}
              time={earthquake?.properties?.time}
              longitude={earthquake?.geometry?.coordinates[0]}
              latitude={earthquake?.geometry?.coordinates[1]}
              flyToHandler={flyToHandler}
              setPopUpInfo={setPopUpInfo}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
