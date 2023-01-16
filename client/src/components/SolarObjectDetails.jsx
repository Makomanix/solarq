import React from 'react'

export default function SolarObjectDetails({solarObject}) {

    const {id, name, category, story, image } = solarObject

    return (
            <div className='grid grid-cols-2 '>
                    <img className='object-contain pt-0 pb-4 mt-8 ml-28 h-[90%] w-[80%] rounded-lg ' src={require(`../assets/${image}.jpg`)} alt={name} />
                <div>
                    <p className='absolute left-[62.5%] h-12 -mt-[1.7%] w-80 bg-slate-900 text-white text-4xl text-center rounded-md '>{name}</p>
                    <p className='mt-14 mb-4 px-6 py-3 h-72 w-[88%] bg-slate-900 text-white text-xl overflow-auto rounded-md '>{story}</p>
                </div>
            </div>
    )
}
