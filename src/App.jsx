import {
  useContext,
  useEffect,
  useState,
  // useRef,
  // useCallback,
  // useMemo,
} from "react";
import Map, { NavigationControl, Marker, useMap } from "react-map-gl";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

import { GlobalContext } from "./utils/Context";

import Pin from "./components/Pin";
import Menu from "./components/Menu";
import PopUp from "./components/PopUp";

const App = () => {
  const { getEarthquakes, earthquakes, flyToHandler } =
    useContext(GlobalContext);
  const [popUpInfo, setPopUpInfo] = useState(null);
  const { VITE_MAP_KEY } = import.meta.env;

  useEffect(() => {
    getEarthquakes();
  }, []);

  const earthquakeMarkers = earthquakes[0]?.map((earthquake, index) => {
    return (
      <Marker
        key={index}
        longitude={earthquake?.geometry?.coordinates[0]}
        latitude={earthquake?.geometry?.coordinates[1]}
        onClick={(e) => {
          e.originalEvent.stopPropagation();
          setPopUpInfo(earthquake);
          flyToHandler(
            earthquake?.geometry?.coordinates[1],
            earthquake?.geometry?.coordinates[0]
          );
        }}
        style={{ cursor: "pointer" }}
      >
        <Pin />
      </Marker>
    );
  });

  return (
    <>
      <Map
        id="map"
        mapLib={maplibregl}
        initialViewState={{
          longitude: 122.982,
          latitude: 11.552,
          zoom: 6,
          pitch: 30,
        }}
        style={{ width: "100%", height: "100vh" }}
        mapStyle={`https://api.maptiler.com/maps/ch-swisstopo-lbm-dark/style.json?key=${VITE_MAP_KEY}`}
      >
        <NavigationControl />
        {earthquakeMarkers}
        <Menu earthquakes={earthquakes} />

        {popUpInfo && (
          // pop for details of earthquake
          <PopUp popUpInfo={popUpInfo} setPopUpInfo={setPopUpInfo} />
        )}
      </Map>
    </>
  );
};

export default App;
