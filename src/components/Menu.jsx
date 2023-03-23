import { useContext } from "react";
import { useMap } from "react-map-gl";
import EarthquakeDetails from "./EarthquakeDetails";
import { GlobalContext } from "../utils/Context";

const Menu = ({ setPopUpInfo }) => {
  const { earthquakes, flyToHandler } = useContext(GlobalContext);

  return (
      <div className="absolute top-4 left-4 rounded-2xl shadow-2xl shadow-black bg-[#6c757da0] backdrop-blur-2xl p-4">
        <div className="p-2">
          <h1 className="text-white text-[1.7rem] font-ubuntu mb-2 font-medium">
            Philippine Earthquake Visualizer
          </h1>
          <p className="font-ubuntu text-[#f2eeeebc]">Recent earthquakes in the Philippines</p>
        </div>
        <div className=" overflow-y-auto h-[500px] px-4">
          <div className="flex gap-[1rem] flex-col">
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
