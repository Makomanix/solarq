import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Profile from './Profile'
// import banner from "../assets/banner.jpg"


export default function NavBar() {
    const currentUser = sessionStorage.getItem("user_id")
    const navigate = useNavigate()
    const [ profileDisplay, setProfileDisplay ] = useState(false)
    const [ user, setUser ] = useState({
        id: "",
        username: "",
        password: "",
        email: "",
        favorite_planet: "",
        high_score: 0,
        admin: false
})

    useEffect(() => {
        fetch(`/users/${currentUser}`)
            .then((res) => res.json())
            .then((user) => setUser({
                id: user.id,
                username: user.username,
                password: user.password,
                email: user.email,
                favorite_planet: user.favorite_planet,
                high_score: user.high_score,
                admin: user.admin
            }))
}, [navigate, user]);

    const handleLogOut = () => {
        sessionStorage.removeItem("user_id")
        setProfileDisplay(false)
        navigate('/login')
    }

    const handleProfileDisplay = () => {
        setProfileDisplay(!profileDisplay)
    }
    

    return (
        <div className='relative'>
            <NavLink className="absolute top-16 right-[12%] text-white text-3xl hover:text-blue-500" to="/about">About</NavLink>
            <h1 className='absolute top-0 left-4 mt-2 text-white text-8xl'>Solar Quiz</h1> 
            <div className="h-32 w-full"></div>
            {currentUser ? 
            <div>
                <div className='absolute top-16 right-[18%] grid-cols-4 gap-x-20' >
                        <NavLink className=' text-white text-3xl mx-8 hover:text-blue-500' to="/">Home</NavLink>
                        <NavLink className=' text-white text-3xl mx-8 hover:text-blue-500' to="/solar_system">Solar System</NavLink>  
                        <NavLink className=' text-white text-3xl mx-8 hover:text-blue-500' to="/quizzes">Quizzes</NavLink> 
                        <NavLink className=' text-white text-3xl mx-8 hover:text-blue-500' to="/leaderboard">Leaderboard</NavLink>
                </div>             
                <button 
                        className=' absolute top-16 right-16 text-white hover:text-blue-500 text-3xl' 
                    onClick={handleProfileDisplay}>Profile
                </button>
                <div>{profileDisplay ? 
                        <Profile user={user} setUser={setUser} handleLogOut={handleLogOut} setProfileDisplay={setProfileDisplay} handleProfileDisplay={handleProfileDisplay} /> : null }
                </div>                
            </div> : null 
            }
        </div>
            
            
            )
        }
        