import React, {useState, useEffect} from 'react';
import LeaderboardCollection from './LeaderboardCollection';
import { useNavigate } from 'react-router-dom';

export default function Leaderboard() {
    const [ leaderboardData, setLeaderboardData ] = useState([])
    const navigate = useNavigate() 

    useEffect(() => {
        fetch("/leaderboards")
        .then((res) =>res.json())
        .then((leaderboardData) => setLeaderboardData(leaderboardData))
    }, [navigate]);

    // const totalScoreLeaderboard = () => {

    // }

    console.log(leaderboardData)

    return (
        <div>
            <LeaderboardCollection leaderboardData={leaderboardData}
                setLeaderboardData={setLeaderboardData}/>
        </div>
    )
}
