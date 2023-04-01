import { useContext, useEffect, useState } from "react";
import Map, { NavigationControl, Marker } from "react-map-gl";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

import { GlobalContext } from "../utils/Context";

import Pin from "../components/Pin";
import Menu from "../components/Menu";
import PopUp from "../components/PopUp";
import Load from "../components/Load";
import ColorLegend from "../components/ColorLegend";
import Title from "../components/Title";
import LineChart from "../components/LineChart";
import ChartToggler from "../components/ChartToggler";

const MapPage = () => {
  const { getEarthquakes, earthquakes, flyToHandler, loading, key, lastArr, handleOnFocus } =
    useContext(GlobalContext);
  const [popUpInfo, setPopUpInfo] = useState(null);
  const [isChartOpen, setIsChartOpen] = useState(false)

  useEffect(() => {
    getEarthquakes();
  }, []);

  const earthquakeMarkers = earthquakes[lastArr]?.map((earthquake, index) => {
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
          handleOnFocus(earthquake?.id)
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
        }}
        style={{ width: "100%", height: "100vh" }}
        mapStyle={`https://api.maptiler.com/maps/ch-swisstopo-lbm-dark/style.json?key=${key}`}
      > 
        <NavigationControl  style={{ backgroundColor: "#020202a0", }} />
        <ChartToggler setIsChartOpen={setIsChartOpen}/>
        <Title />
        {earthquakeMarkers}
        <Menu setPopUpInfo={setPopUpInfo} />
        {popUpInfo && (
          // pop up details of the earthquake
          <PopUp popUpInfo={popUpInfo} setPopUpInfo={setPopUpInfo} />
        )}
        <ColorLegend />
        <LineChart isChartOpen={isChartOpen} setIsChartOpen={setIsChartOpen}/>
      </Map>
    </>
  );
};

export default MapPage;
