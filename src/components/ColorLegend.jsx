import React from 'react'

const ColorLegend = () => {
  return (
    <div className="absolute md:right-4 md:bottom-8 mt-4 ml-4 ">
      <h3 className='text-white font-bold'>Earthquake Energy</h3>
      <div className='flex gap-2 items-center'>
        <div className='bg-lime-600 h-2 w-2 rounded-full'/>
        <p className="text-[#fff]">Small</p>
      </div>

      <div className='flex gap-2 items-center'>
        <div className='bg-cyan-600 h-2 w-2 rounded-full'/>
        <p className='text-[#fff]'>Moderate</p>
      </div>

      <div className='flex gap-2 items-center'>
        <div className='bg-cyan-600 h-2 w-2 rounded-full'/>
        <p className='text-[#fff]'>Major</p>
      </div>

      <div className='flex gap-2 items-center'>
        <div className='bg-orange-600 h-2 w-2 rounded-full'/>
        <p className='text-[#fff]'>Great</p>
      </div>

      <div className='flex gap-2 items-center'>
      <div className='bg-red-600 h-2 w-2 rounded-full'/>
        <p className='text-[#fff]'>Super</p>
      </div>

    </div>
  )
}

export default ColorLegend