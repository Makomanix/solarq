import React from 'react'

export default function LeaderboardCard({leaderboardCard}) {

    const { username, total_score, planet_score, moon_score, other_score } = leaderboardCard


    return (
        <div className='relative'>
            <div className='flex items-center justify-center'>
                <div className='grid grid-cols-5 grid-rows-auto gap-x-6 text-2xl text-center h-10 w-[98%] my-2 bg-blue-400 text-white rounded'>
                    <span className=''>{username}</span>
                    <span className=''>{total_score}</span>
                    <span className=''>{planet_score}</span>
                    <span className=''>{moon_score}</span>
                    <span className=''>{other_score}</span>
                </div>
            </div>
        </div>
    )
}
