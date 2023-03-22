import React from "react";

const EarthquakePopUp = ({ time, place, latitude, longitude }) => {
  
  const date = new Date(time);
  const normalTime = date.toLocaleString(); //convert time into 

  return (
    <div>
      <h1 className="text-black">{place}</h1>
      <p className="text-black">{normalTime}</p>
      <p className="text-black">Lat: {latitude} <br /> Longi: {longitude}</p>
    </div>
  );
};

export default EarthquakePopUp;
