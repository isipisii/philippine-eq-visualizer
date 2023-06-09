import React from "react";

const EarthquakePopUp = ({  place, latitude, longitude, depth }) => {
  
  return (
    <div className="p-2">
      <h1 className="text-black font-ubuntu font-bold text-[1rem] mb-2">{place}</h1>
      <p className="text-black font-ubuntu"> Longitude: {longitude} <br/> Latitude: {latitude} <br /> Depth: {depth} km</p>
    </div>
  );
};

export default EarthquakePopUp;
