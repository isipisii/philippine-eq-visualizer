import { useEffect, useState } from "react"


const EarthquakeDetails = ({ title, time, longitude, latitude, flyToHandler, earthquake, setPopUpInfo, place }) => {
  const [color, setColor] = useState("")
  const date = new Date(time);
  const normalTime = date.toLocaleString();
  const magnitude = title.split("").slice(1, 5).join("");
  const parsedMagnitude = parseFloat(magnitude);

  
  useEffect(() => {
    function styleMagnitude(m) {
      if (m >= 1.0 && m <= 4.9) {
        setColor("text-lime-600");
      } else if (m >= 5.0 && m <= 6.0) {
        setColor("text-cyan-600");
      } else if (m >= 7.0 && m <= 7.9) {
        setColor("text-yellow-400")
      } else if (m >= 8.0 && m <= 9.9) {
        setColor("text-yellow-400")
      } else setColor("text-red")
    }
    styleMagnitude(parsedMagnitude);
  }, [parsedMagnitude]);

  console.log(color)

  return (
    <div
      className="p-4 bg-[#403e3ea3] hover:scale-105 transition rounded-[7px] flex justify-between cursor-pointer active:bg-[#343333a3]"
      onClick={() => {
        flyToHandler(latitude, longitude);
        setPopUpInfo(earthquake);
      }}
    >
      <div>
        <p className="text-white font-bold sm:text-[1rem] text-[.9rem] font-ubuntu mb-2">{place}</p>
        <p className="text-[#ffffff8b] font-ubuntu sm:text-[.8rem] text-[.7rem] ">{normalTime}</p>
      </div>
      <div>
        <p className={`font-ubuntu font-bold ${color}`}>M {magnitude}</p>
      </div>
    </div>
  );
};

export default EarthquakeDetails;
