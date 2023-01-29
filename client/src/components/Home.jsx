import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export default function UserContainer({user, setUser}) {

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
    }, [navigate, setUser]);

    const handleOnClick = (e) => {
        navigate(`${e.target.value}`)
    }



    return (
        <div className='relative'>
            <div className='absolute h-56 w-screen top-20 content-center grid grid-cols-3 grid-rows-1 gap-x-20 outline text-center text-white'> 
                <span className='outline'>
                    <button value="/quizzes" onClick={handleOnClick}>Take A Quiz</button>
                </span> 
                <span className='outline'>              
                    <button className="bg" value="/solar_system" onClick={handleOnClick}>Discover Your Solar System</button>
                    <h1>Explore all the wonders of our solar system, from the Sun, to the planets, and all their moons. But this is not all that makes up our cosmic neighborhood, asteroid belts, comets, and more are waiting to be explored </h1>
                </span> 
                <span className='outline'>             
                    <button value="/leaderboard" onClick={handleOnClick}>See the Leaderboard</button>
                </span>
            </div>
        </div>
    )
}
