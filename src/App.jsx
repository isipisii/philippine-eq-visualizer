import {
  useContext,
  useEffect,
  useState,
  // useRef,
  // useCallback,
  // useMemo,
} from "react";
import Map, { NavigationControl, Marker } from "react-map-gl";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import LRUCache from "lru-cache";

import { GlobalContext } from "./utils/Context";

import Pin from "./components/Pin";
import Menu from "./components/Menu";
import PopUp from "./components/PopUp";

const App = () => {
  const { getEarthquakes, earthquakes, flyToHandler } = useContext(GlobalContext);
  const [popUpInfo, setPopUpInfo] = useState(null);
  const key = import.meta.env.VITE_MAP_KEY;
  const [mapStyle, setMapStyle] = useState();

  const cache = new LRUCache({
    max: 50,
    maxAge: 1000 * 60 * 60, 
  });

  useEffect(() => {
    const cachedStyle = cache.get(key);

    if (cachedStyle) {
      setMapStyle(cachedStyle);
    } else {
      fetch(`https://api.maptiler.com/maps/toner-v2/style.json?key=${key}`)
        .then((response) => response.json())
        .then((style) => {
          cache.set(key, style);
          setMapStyle(style);
        })
        .catch((error) => {
          console.error("Error fetching map style:", error);
        });
    }
  }, [key]);

  useEffect(() => {
    getEarthquakes();
  }, []);

  console.log(earthquakes);

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
          pitch: 30,
          minZoom: 5,
        }}
        style={{ width: "100%", height: "100vh" }}
        mapStyle={mapStyle}
      >
        <NavigationControl />
        {earthquakeMarkers}
        <Menu earthquakes={earthquakes} setPopUpInfo={setPopUpInfo} />
        {popUpInfo && (
          // pop up details of the earthquake
          <PopUp popUpInfo={popUpInfo} setPopUpInfo={setPopUpInfo} />
        )}
      </Map>
    </>
  );
};

export default App;
