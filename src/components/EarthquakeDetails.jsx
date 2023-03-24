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
      className="p-4 bg-[#403e3ea3] hover:scale-105 transition rounded-[7px] flex justify-between cursor-pointer"
      onClick={() => {
        flyToHandler(latitude, longitude);
        setPopUpInfo(earthquake);
      }}
    >
      {" "}
      <div>
        <p className="text-white font-bold text-[.9rem] font-ubuntu">{place}</p>
        <p className="text-[#ffffff] font-ubuntu">{normalTime}</p>
      </div>
      <div>
        <p className="font-ubuntu text-[#ffffff] font-medium">{magnitude}</p>
      </div>
    </div>
  );
};

export default EarthquakeDetails;
