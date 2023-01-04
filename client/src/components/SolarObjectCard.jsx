import React from 'react'

export default function SolarObjectCard({solarObjectCard}) {

    const {id, name, category, story, image } = solarObjectCard

    return (
        <div className='relative'>
            <div className='flex items-center justify-center'>
                <div className='grid grid-cols-1 grid-rows-auto gap-x-4 text-2xl text-center h-60 w-[50%]  '>
                    <div className='text-white'>{name}</div>
                    <img className='' src={require(`../assets/${image}.jpg`)} /> 
                </div>
            </div>
        </div>
    )
}
