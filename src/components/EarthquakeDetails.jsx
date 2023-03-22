import React from 'react'

const EarthquakeDetails = ({ title, time, longitude, latitude, flyToHandler, earthquake, setPopUpInfo }) => {
  const date = new Date(time);
  const normalTime = date.toLocaleString();
  const magnitude = title.split("").slice(0, 5).join("");
  
  return (
    <div className='bg-black'
      onClick={() => {
        flyToHandler(latitude, longitude)
        setPopUpInfo(earthquake)
      }}
    >
        <p className='text-white'>{title}</p>
        <p className='text-white'>{normalTime}</p>
        <p className='text-white'>{magnitude}</p>
    </div>
  )
}

export default EarthquakeDetails