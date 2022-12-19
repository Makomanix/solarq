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
            <NavLink className="absolute top-16 left-40 text-white text-4xl underline" to="/about">About</NavLink>
            <h1 className='absolute top-0 mt-4 mx-[37.5%] text-white text-8xl font-semibold'>Solar Quiz</h1> 
            <img className="h-32 w-full" src={banner}/>
            {currentUser ?
            <>
                <button 
            className='absolute top-16 right-0 mr-8 text-white text-4xl underline' 
            onClick={handleLogOut}>Log Out
                </button>
                <NavLink className='absolute top-16 left-72 text-white text-4xl underline' to="/quizzes">Quizzes</NavLink> 
                <NavLink className='absolute top-16 ml-8 text-white text-4xl underline' to="/">Home</NavLink>
            </> : null
            }
        </div>
            
        
    )
}
