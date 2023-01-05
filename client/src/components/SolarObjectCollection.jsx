import React, { useState } from 'react'
import SolarObjectCard from './SolarObjectCard'
import SolarObjectDetails from './SolarObjectDetails'

export default function SolarObjectCollection({ solarObjects, setCategory}) {

    const [solarObjectId, setSolarObjectId ] = useState(null)

    
    const selectedSolarObject = solarObjects.find((solarObject) => solarObject.id === solarObjectId)
    
    const handleObjectClick = (e) => {
        setCategory(e.target.value)
        setSolarObjectId(null)
    }
    
    const detailsClick = (solarObject) => {
        setSolarObjectId(solarObject.id)
    }
    
    const solarObjectCards = solarObjects.map((solarObjectCard) => 
        <SolarObjectCard 
            key={solarObjectCard.id}
            id={solarObjectCard.id}
            solarObjectCard={solarObjectCard}
            detailsClick={detailsClick}/>
    )

    console.log(selectedSolarObject)

    return (
        <div className='relative'>             
            <div className='w-[40%] h-12 mx-[30.3%] mt-4 grid grid-cols-3 grid-rows-1 bg-slate-900 rounded-lg outline'>
                <button className='text-2xl text-blue-400 hover:bg-blue-400 hover:text-white rounded-md' value="planet" onClick={handleObjectClick}>Planets</button>
                <button className='text-2xl text-blue-400 hover:bg-blue-400 hover:text-white rounded-md' value="moon" onClick={handleObjectClick}>Moons</button>
                <button className='text-2xl text-blue-400 hover:bg-blue-400 hover:text-white rounded-md' value="other" onClick={handleObjectClick}>Sun / Other </button>
            </div>
            <div className='absolute top-32 h-[1200%] w-[70%] '>{ solarObjectId ?
            <SolarObjectDetails solarObject={selectedSolarObject}/> : null }
            </div>
            <div className='absolute pt-8 top-0 right-0 h-[1700%] w-[25%] bg-slate-900 grid grid-cols-2 gap-y-14 overflow-auto rounded-md outline'>
                    {solarObjectCards}
            </div>
        </div>
    )
}
