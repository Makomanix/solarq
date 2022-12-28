import React from 'react'

export default function SolarObjectCollection({solarObjects, handleObjectClick, filteredBodies}) {

    console.log(solarObjects)
    // console.log(filteredBodies)

    return (
        <div className='relative'>
            <div className='grid grid-cols-3 grid-rows-1'>
                <button value="planet" onClick={handleObjectClick}>Planets</button>
                <button value="moon" onClick={handleObjectClick}>Moons</button>
                <button value="other" onClick={handleObjectClick}>Sun / Other Bodies</button>
            </div>
        </div>
    )
}
