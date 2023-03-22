import { Popup } from "react-map-gl";
import EarthquakePopUp from "./EarthquakePopUp";

const PopUp = ({ setPopUpInfo, popUpInfo}) => {
  return (
    <Popup
      anchor="bottom"
      longitude={popUpInfo?.geometry?.coordinates[0]}
      latitude={popUpInfo?.geometry?.coordinates[1]}
      onClose={() => setPopUpInfo(null)}
    >
      <EarthquakePopUp
        place={popUpInfo?.properties?.place}
        time={popUpInfo?.properties?.time}
        longitude={popUpInfo?.geometry?.coordinates[0]}
        latitude={popUpInfo?.geometry?.coordinates[1]}
      />
    </Popup>
  );
};

export default PopUp;
