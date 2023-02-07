import React from 'react'
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
        <div className='relative'>
            <div className='absolute top-16 h-full w-screen'>
                <div className='flex items-center justify-center pb-6'>
                    <div className='grid grid-cols-5 h-14 w-[50%] outline rounded-md bg-slate-900'>
                        <span className='bg-slate-900 text-blue-400 text-xl pt-[7.5%] text-center'>Username</span>
                        <button className='bg-slate-900 text-blue-400 text-xl hover:bg-blue-400 hover:text-white rounded-md focus:bg-blue-400 focus:text-white' value={""} onClick={ handleLeaderboardClick }>Total Score</button>
                        <button className='bg-slate-900 text-blue-400 text-xl hover:bg-blue-400 hover:text-white rounded-md focus:bg-blue-400 focus:text-white' value={"planet_score"} onClick={ handleLeaderboardClick }>Planet Score</button>
                        <button className='bg-slate-900 text-blue-400 text-xl hover:bg-blue-400 hover:text-white rounded-md focus:bg-blue-400 focus:text-white' value={"moon_score"} onClick={ handleLeaderboardClick }>Moon Score</button>
                        <button className='bg-slate-900 text-blue-400 text-xl hover:bg-blue-400 hover:text-white rounded-md focus:bg-blue-400 focus:text-white' value={"other_score"}  onClick={ handleLeaderboardClick }>Other Score</button>
                    </div>
                </div>
                <div className='absolute left-[24.9%] grid grid-cols-1 grid-rows-auto pt-1 w-[50%] pb-4 bg-slate-900 rounded outline'>
                    {leaderboardCards}
                </div>
            </div>
        </div>
    )
}
