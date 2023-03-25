import { useEffect, useState } from "react"
import { BiPulse } from 'react-icons/bi'

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
        setColor("text-orange-600")
      } else setColor("text-red-600")
    }
    styleMagnitude(parsedMagnitude);
  }, [parsedMagnitude]);

  return (
    <div
      className="p-4 bg-[#403e3ea3] hover:scale-105 transition rounded-[7px] flex justify-between cursor-pointer active:bg-[#343333a3]"
      onClick={() => {
        flyToHandler(latitude, longitude);
        setPopUpInfo(earthquake);
      }}
    >
      <div>
        <p className="text-white font-bold md:text-[1rem] sm:text-[.9rem] text-[.8rem] font-ubuntu sm:mb-2 mb-1" >{place}</p>
        <p className="text-[#ffffff8b] font-ubuntu sm:text-[.8rem] text-[.7rem] ">{normalTime}</p>
      </div>
      <div>
        <p className={`font-ubuntu font-bold ${color}`}> <BiPulse className={` text-[1.3rem] md:text-[1.5rem] ${color}`} /> M {magnitude}</p>
      </div>
    </div>
  );
};

export default EarthquakeDetails;
