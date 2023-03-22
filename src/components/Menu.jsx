import { useContext } from "react";
import { useMap } from "react-map-gl";
import EarthquakeDetails from "./EarthquakeDetails";
import { GlobalContext } from "../utils/Context";

const Menu = () => {
  const { earthquakes, flyToHandler } = useContext(GlobalContext);

  return (
    <div className=" w-[400px] h-[500px] bg-white absolute">
      <div>
        {earthquakes[0]?.map((earthquake, index) => (
          <EarthquakeDetails
            key={index}
            title={earthquake?.properties?.title}
            time={earthquake?.properties?.time}
            longitude={earthquake?.geometry?.coordinates[0]}
            latitude={earthquake?.geometry?.coordinates[1]}
            flyToHandler={flyToHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;
