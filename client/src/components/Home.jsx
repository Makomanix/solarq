import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export default function UserContainer() {
    const [user, setUser] = useState([]);
    const navigate = useNavigate();
    
    
    useEffect(() => {
        const currentUser = sessionStorage.getItem("user_id")
        if (sessionStorage.getItem("user_id") === null) {
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

    console.log(user)

    return (
        <div className='relative'>
            <div className='absolute h-56 w-screen top-20 content-center grid grid-cols-3 grid-rows-1 gap-x-20 outline text-center text-white'> 
                <span className='outline'>
                    <button value="/quizzes" onClick={handleOnClick}>Take A Quiz</button> 
                </span> 
                <span className='outline'>              
                    <button value="/solar_system" onClick={handleOnClick}>Discover Your Solar System</button> 
                </span> 
                <span className='outline'>             
                    <button value="/leaderboard" onClick={handleOnClick}>See the Leaderboard</button>
                </span>
            </div>
        </div>
    )
}
