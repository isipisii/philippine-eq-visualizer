import { useContext, useState } from "react";
import EarthquakeDetails from "./EarthquakeDetails";
import { GlobalContext } from "../utils/Context";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'

const Menu = ({ setPopUpInfo }) => {
  const { earthquakes, flyToHandler } = useContext(GlobalContext);
  const [clicked, setClicked] = useState(false);

  return (
    <div
      className={`menu absolute rounded-2xl h-[85%] left-4 right-4
      ${
        clicked
          ? "bottom-[-79%] transition-all duration-500"
          : "bottom-[-40%] transition-all duration-500"
      }
      bg-[#020202a0] backdrop-blur-xl 
      px-4 py-8 md:py-6 md:top-4 md:left-4 md:bottom-4 md:right-auto`}
    >
      <button
        onClick={() => setClicked((prevClick) => !prevClick)}
        className="block md:hidden text-white mx-auto mt-[-1.5rem] mb-4"
      >
        <FontAwesomeIcon icon={clicked ? faChevronUp : faChevronDown} className="text-[1rem] "/>
      </button>
      <div className="mb-2 px-4">
        <h1 className="text-white text-[1.5rem] sm:text-[1.7rem] font-ubuntu mb-2 font-medium">
          Seismic Activities
        </h1>
        <p className="font-ubuntu sm:text-[.8rem] text-[.7rem] text-[#f2eeeebd]">
          Recent earthquakes in the Philippines
        </p>
      </div>
      <div className=" overflow-y-auto h-[40%] sm:h-[90%]">
        <div className="flex gap-[1rem] flex-col p-4 ">
          {earthquakes[0]?.map((earthquake, index) => (
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
