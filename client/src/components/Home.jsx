import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import background from "../assets/background.jpg"

export default function UserContainer() {
    const [user, setUser] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const currentUser = sessionStorage.getItem("user_id")
        if (currentUser == null) {
            navigate('/login')
        } else {
            fetch(`/users/${currentUser}`)
                .then((res) => res.json())
                .then((user) => setUser(user))
        }
    }, [navigate]);

    const handleOnClick = (e) => {
        navigate(`${e.target.value}`)
    }

    return (
        <div>
            <div className='grid grid-cols-3 grid-rows-1 z-40'>                
                <button value="/quizzes" onClick={handleOnClick}>Test Your Solar System Knowledge</button>                
                <button value="/solar_system" onClick={handleOnClick}>Discover Your Solar System</button>                
                <button value="/leaderboard" onClick={handleOnClick}>See the Leaderboard</button>
            </div>
        </div>
    )
}
