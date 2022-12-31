import React from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import banner from "../assets/banner.jpg"


export default function NavBar() {
    const currentUser = sessionStorage.getItem("user_id")
    const navigate = useNavigate()

    const handleLogOut = () => {
        sessionStorage.removeItem("user_id")
        navigate('/login')
    }

    return (
        <div className='relative overflow-hidden'>
            <NavLink className="absolute top-20 right-[5%] text-white text-3xl underline" to="/about">About</NavLink>
            <h1 className='absolute top-0 left-4 mt-2 text-white text-8xl'>Solar Quiz</h1> 
            <img className="h-32 w-full" src={banner}/>
            {currentUser ?
            <>
                <button 
                    className='absolute top-4 right-4 text-red-500 text-2xl' 
                    onClick={handleLogOut}>Log Out
                </button>
                <NavLink className='absolute top-20 right-[30%] text-white text-3xl underline' to="/leaderboard">Leaderboard</NavLink>
                <NavLink className='absolute top-20 right-[47.3%] text-white text-3xl underline' to="/quizzes">Quizzes</NavLink> 
                <NavLink className='absolute top-20 right-[17%] text-white text-3xl underline' to="/">Home</NavLink>
            </> : null
            }
        </div>
            
        
    )
}
