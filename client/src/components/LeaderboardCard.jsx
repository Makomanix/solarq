import React, {useState} from 'react'

export default function LeaderboardCard({leaderboardCard}) {

    const { id, username, total_score, planet_score, moon_score, other_score } = leaderboardCard


    return (
        <div className='relative'>
            <div className='flex items-center justify-center'>
                <div className='grid grid-cols-5 grid-rows-10'>
                    <span>{username}</span>
                    <span>{total_score}</span>
                    <span>{planet_score}</span>
                    <span>{moon_score}</span>
                    <span>{other_score}</span>
                </div>
            </div>
        </div>
    )
}
