import React from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
// import banner from "../assets/banner.jpg"


export default function NavBar() {
    const currentUser = sessionStorage.getItem("user_id")
    const navigate = useNavigate()

    const handleLogOut = () => {
        sessionStorage.removeItem("user_id")
        navigate('/login')
    }

    return (
        <div className='relative overflow-hidden'>
            <NavLink className="absolute top-16 right-[13%] text-white text-3xl underline" to="/about">About</NavLink>
            <h1 className='absolute top-0 left-4 mt-2 text-white text-8xl'>Solar Quiz</h1> 
            <div className="h-32 w-full"></div>
            {currentUser ?
            <div >
                <div className='absolute top-16 right-[19%] grid-cols-4 gap-x-20' >
                    <NavLink className=' text-white text-3xl mx-8 underline' to="/">Solar System</NavLink>  
                    <NavLink className=' text-white text-3xl mx-8 underline' to="/quizzes">Quizzes</NavLink> 
                    <NavLink className=' text-white text-3xl mx-8 underline' to="/leaderboard">Leaderboard</NavLink>
                </div>             
                <button 
                    className=' absolute top-16 right-16 text-red-500 text-3xl outline' 
                    onClick={handleLogOut}>Log Out
                </button>                
            </div> : null
            }
        </div>
            
        
    )
}
