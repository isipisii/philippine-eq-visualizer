import { Popup } from "react-map-gl";
import EarthquakePopUp from "./EarthquakePopUp";

const PopUp = ({ setPopUpInfo, popUpInfo}) => {
  const depth = Math.trunc(popUpInfo?.geometry?.coordinates[2])
  return (
    <Popup
      anchor="bottom"
      longitude={popUpInfo?.geometry?.coordinates[0]}
      latitude={popUpInfo?.geometry?.coordinates[1]}
      onClose={() => setPopUpInfo(null)}
    > 
      <EarthquakePopUp
        place={popUpInfo?.properties?.place}
        longitude={popUpInfo?.geometry?.coordinates[0]}
        latitude={popUpInfo?.geometry?.coordinates[1]}
        depth={depth}
      />
    </Popup>
  );
};

export default PopUp;
