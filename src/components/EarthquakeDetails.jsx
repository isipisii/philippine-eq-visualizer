import React from 'react'

const EarthquakeDetails = ({ title, time, longitude, latitude, flyToHandler, earthquake, setPopUpInfo }) => {
  const date = new Date(time);
  const normalTime = date.toLocaleString();
  const magnitude = title.split("").slice(0, 5).join("");
  
  return (
    <div className="p-2 bg-[#fff]"
      onClick={() => {
        flyToHandler(latitude, longitude)
        setPopUpInfo(earthquake)
      }}
    >
        <p className='text-black'>{title}</p>
        <p className='text-black'>{normalTime}</p>
        <p className='text-black'>{magnitude}</p>
    </div>
  )
}

export default EarthquakeDetails