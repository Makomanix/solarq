import React, { useState } from 'react'
import LeaderboardCard from './LeaderboardCard'

export default function LeaderboardCollection({ leaderboardData, setLeaderboardData, setUpdateFetch, planetLeaderboard }) {

    const leaderboardCards = leaderboardData.map((leaderboardCard) => 
    <LeaderboardCard 
        key={leaderboardCard.id}
        id={leaderboardCard.id}
        leaderboardCard={leaderboardCard}/>)

        const handleLeaderboardClick = (e) => {  
            setUpdateFetch(e.target.value)
        }

        
    
    return (
        <div className='relative outline'>
            <div className='absolute top-16 h-full w-screen'>
                <div className='flex items-center justify-center'>
                    <div className='grid grid-cols-5 h-10 w-[50%]'>
                        <span className='text-center pt-2'>Username</span>
                        <button className='' value={""} onClick={ handleLeaderboardClick }>Total Score</button>
                        <button className='' value={"planet_score"} onClick={ handleLeaderboardClick }>Planet Score</button>
                        <button className='' value={"moon_score"} onClick={ handleLeaderboardClick }>Moon Score</button>
                        <button className='' value={"other_score"}  onClick={ handleLeaderboardClick }>Other Score</button>
                    </div>
                </div>
                <div className='grid grid-cols-1 grid-rows-auto outline'>
                    {leaderboardCards}
                </div>
            </div>
        </div>
    )
}
