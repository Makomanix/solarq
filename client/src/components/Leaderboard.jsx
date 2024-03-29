import React, {useState, useEffect} from 'react';
import LeaderboardCollection from './LeaderboardCollection';
import { useNavigate } from 'react-router-dom';

export default function Leaderboard() {
    const [ leaderboardData, setLeaderboardData ] = useState([])
    const [ updateFetch, setUpdateFetch ] = useState("")
    const navigate = useNavigate() 
    const [user, setUser] = useState({
        id: 0,
        username: "",
        score: 0,
        high_score: 0,
    })


    useEffect(() => {
        const currentUser = sessionStorage.getItem("user_id")
        if (currentUser == null) {
            navigate('/login')
        } else {
            fetch(`/users/${currentUser}`)
                .then((res) => res.json())
                .then((user) => setUser({
                    id: user.id,
                    username: user.username,
                    score: 0,
                    high_score: user.high_score,
                }))
        }
    }, [navigate]);

    useEffect(() => {
        const timer = setTimeout(() => {
        fetch(`/leaderboards/${updateFetch}`)
        .then((res) =>res.json())
        .then((leaderboardData) => setLeaderboardData(leaderboardData))
        }, 500);
        return () => clearTimeout(timer);
    }, [updateFetch]);


    return (
        <div>
            <LeaderboardCollection leaderboardData={leaderboardData}
                setLeaderboardData={setLeaderboardData} setUpdateFetch={setUpdateFetch} />
        </div>
    )
}
