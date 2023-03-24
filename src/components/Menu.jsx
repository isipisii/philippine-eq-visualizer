import { useContext } from "react";
import EarthquakeDetails from "./EarthquakeDetails";
import { GlobalContext } from "../utils/Context";

const Menu = ({ setPopUpInfo }) => {
  const { earthquakes, flyToHandler } = useContext(GlobalContext);

  return (
      <div className="absolute top-4 left-4 bottom-4 rounded-2xl bg-[#020202a0] backdrop-blur-xl px-4 py-8  sm:top-4 sm:left-4 sm:bottom-4">
        <div className="mb-2 px-4">
          <h1 className="text-white text-[1.7rem] font-ubuntu mb-2 font-medium">
            Seismic Activities
          </h1>
          <p className="font-ubuntu text-[#f2eeeebd]">Recent earthquakes in the Philippines</p>
        </div>
        <div className=" overflow-y-auto h-[90%] ">
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
