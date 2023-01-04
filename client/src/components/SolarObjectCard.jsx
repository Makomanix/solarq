import React from 'react'

export default function SolarObjectCard({solarObjectCard, detailsClick}) {

    const {id, name, category, story, image } = solarObjectCard

    const handleClick = () => {
        detailsClick(solarObjectCard)
    }

    return (
        <div className='relative'>
            <div className='flex items-center justify-center'>
                <div className='grid grid-cols-1 grid-rows-auto gap-x-4 text-2xl text-center  w-[75%] '>
                    <div className='text-white'>{name}</div>
                    <img className='object-fill h-36 w-60 rounded-md' src={require(`../assets/${image}.jpg`)} alt={name} />
                    <button className='h-10 bg-blue-400 text-white hover:bg-blue-500 rounded-md' onClick={handleClick}>Details</button> 
                </div>
            </div>
        </div>
    )
}
