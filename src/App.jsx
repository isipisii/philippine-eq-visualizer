import { useContext, useEffect, useState } from "react";
import Map, { NavigationControl, Marker } from "react-map-gl";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

import { GlobalContext } from "./utils/Context";

import Pin from "./components/Pin";
import Menu from "./components/Menu";
import PopUp from "./components/PopUp";
import Load from "./components/Load";

const App = () => {
  const { getEarthquakes, earthquakes, flyToHandler, loading, mapStyle } =
    useContext(GlobalContext);
  const [popUpInfo, setPopUpInfo] = useState(null);

  //for caching the map tile

  useEffect(() => {
    getEarthquakes();
  }, []);

  // const findInEarthquakeDetails = (id) => {
  //   const temporaryArr = earthquakes[0]?.map((earthquake) =>
  //     earthquake?.id === id ? { ...earthquake, isActive: true } : earthquake
  //   );

  // };
  //map markers
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

  return loading ? (
    <Load loading={loading}/>
  ) : (
    <>
      <Map
        id="map"
        mapLib={maplibregl}
        initialViewState={{
          longitude: 122.982,
          latitude: 11.552,
          zoom: 6,
          pitch: 85
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
