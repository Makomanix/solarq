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
            <div className='absolute h-72 w-screen top-56 content-center grid grid-cols-3 grid-rows-1 gap-x-20  text-center text-white'> 
                <span className='bg-slate-900 ml-8 rounded-md'>
                    <button className="bg-blue-400 hover:bg-blue-500 h-10 w-96 my-6 mx-20 text-3xl text-white rounded-md" value="/quizzes" onClick={handleOnClick}>Take A Quiz</button>
                    <h1 className='mx-8 text-3xl text-white'>Test your knowledge of the solar system by taking 3 quizzes, each with a different focus: planets, moons, the sun and other solar bodies.</h1>
                </span> 
                <span className='bg-slate-900 rounded-md'>              
                    <button className="bg-blue-400 hover:bg-blue-500 h-10 w-96 my-6 mx-20 text-3xl text-white rounded-md" value="/solar_system" onClick={handleOnClick}>Discover Your Solar System</button>
                    <h1 className='mx-8 text-3xl text-white'>Explore and learn about the wonders of our solar system, from the Sun, to the planets, and all their moons. But this is not all that makes up our cosmic neighborhood, asteroid belts, comets, and more are waiting for you.</h1>
                </span> 
                <span className='bg-slate-900 mr-8 rounded-md'>             
                    <button className="bg-blue-400 hover:bg-blue-500 h-10 w-96 my-6 mx-20 text-3xl text-white rounded-md" value="/leaderboard" onClick={handleOnClick}>See the Leaderboard</button>
                    <h1 className='mx-8 text-3xl text-white'>Check the top scores. Compare overall scores of completing each of the 3 quizzes, or see who holds the top spots for each of the individual quizzes. Measure yourself against the best.</h1>
                </span>
            </div>
        </div>
    )
}
