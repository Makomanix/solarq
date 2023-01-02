import React from 'react'

export default function SolarObjectCard({solarObjectCard}) {

    const {id, name, category, story, image } = solarObjectCard

    return (
        <div className='relative'>
            <div className='flex items-center justify-center'>
                <div className='grid grid-cols-2 grid-rows-auto gap-x-6 text-2xl text-center h-20 w-[50%] my-2 '>
                    <div>{name}</div>
                    <div className='text-red-500 outline z-40' >{image}</div>
                </div>
            </div>
        </div>
    )
}
