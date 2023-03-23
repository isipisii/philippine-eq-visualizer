import React from "react";

const EarthquakeDetails = ({
  title,
  time,
  longitude,
  latitude,
  flyToHandler,
  earthquake,
  setPopUpInfo,
  place,
}) => {
  const date = new Date(time);
  const normalTime = date.toLocaleString();
  const magnitude = title.split("").slice(0, 5).join("");

  return (
    <div
      className="p-4 bg-[#fff] border hover:scale-105 transition rounded-[7px] flex justify-between"
      onClick={() => {
        flyToHandler(latitude, longitude);
        setPopUpInfo(earthquake);
      }}
    >
      {" "}
      <div>
        <p className="text-black font-bold text-[.9rem] font-ubuntu">{place}</p>
        <p className="text-black">{normalTime}</p>
      </div>
      <div>
        <p>{magnitude}</p>
      </div>
    </div>
  );
};

export default EarthquakeDetails;
