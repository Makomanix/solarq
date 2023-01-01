import React, { useState } from 'react'
import LeaderboardCard from './LeaderboardCard'

export default function LeaderboardCollection({leaderboardData, setLeaderboardData}) {

    const leaderboardCards = leaderboardData.map((leaderboardCard) => 
    <LeaderboardCard 
        key={leaderboardCard.id}
        id={leaderboardCard.id}
        leaderboardCard={leaderboardCard}/>)
    
    return (
        <div className='relative outline'>
            <div className='absolute top-20 h-full w-screen outline'>
                <div className='grid grid-cols-1 grid-rows-auto outline'>
                    {leaderboardCards}
                </div>
            </div>
        </div>
    )
}
