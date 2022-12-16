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
        <div className='relative'>
            <h1 className='fixed top-0 mt-4 ml-[37%] mr-[37%] text-white text-8xl font-semibold'>Solar Quiz</h1> 
            <img className="h-32 w-full" src={banner}/>
            {currentUser ? 
            <button 
            className='absolute top-0 right-0 mr-8 mt-8 text-white text-4xl' 
            onClick={handleLogOut}>Log Out
            </button> : null
            }
        </div>
            
        
    )
}
