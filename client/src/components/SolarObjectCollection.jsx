import React from 'react'
import SolarObjectCard from './SolarObjectCard'

export default function SolarObjectCollection({ solarObjects, setCategory}) {

    const solarObjectCards = solarObjects.map((solarObjectCard) => 
        <SolarObjectCard 
            key={solarObjectCard.id}
            id={solarObjectCard.id}
            solarObjectCard={solarObjectCard}/>
    )

    const handleObjectClick = (e) => {
        setCategory(e.target.value)
    }

    return (
        <div className='relative '>
            <div className='absolute h-[50%] w-[80%]'>
                <div className='flex items-center justify-center '>
                    <div className='grid grid-cols-4 grid-rows-1 gap-x-10 '>
                        <button value="planet" onClick={handleObjectClick}>Planets</button>
                        <button value="moon" onClick={handleObjectClick}>Moons</button>
                        <button value="other" onClick={handleObjectClick}>Sun / Other </button>
                    </div>
                </div>
                <div className='mx-32 mt-16 h-[80%] w-[85%] grid grid-cols-4 grid-rows-auto gap-y-10 '>
                    {solarObjectCards}
                </div>
            </div>
        </div>
    )
}
