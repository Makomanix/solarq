import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Profile from './Profile'


export default function NavBar({user, setUser, questions, solarObjects}) {
    const currentUser = sessionStorage.getItem("user_id")
    const navigate = useNavigate()
    const [ profileDisplay, setProfileDisplay ] = useState(false)


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
}, [navigate, currentUser, setUser]);

    const handleLogOut = () => {
        sessionStorage.removeItem("user_id")
        setProfileDisplay(false)
        navigate('/login')
    }

    const handleProfileDisplay = () => {
        setProfileDisplay(!profileDisplay)
    }

    const handleAdminDisplay = () => {
        navigate('/admin')
        setProfileDisplay(false)
    }

    

    return (
        <div className='relative'>
            {user.admin ?
            <div>
                <button className='absolute top-4 right-14 h-8 w-24 text-white text-2xl' onClick={handleAdminDisplay}>Admin</button> 
                </div> : null }
            <h1 className='absolute top-0 left-4 mt-2 text-white text-8xl'>Solar Explorer</h1> 
            <div className="h-32 w-full"></div>
            {currentUser  ? 
            <div>
                    <p className='absolute top-8 left-[44.5%] h-auto w-72 bg-slate-900 text-blue-500 text-4xl text-center font-semibold rounded-md outline'>Welcome {user.username}</p>
                <div className='absolute top-16 right-[7.5%] grid grid-cols-4' >
                        <NavLink className=' text-white text-3xl text-center hover:text-blue-500' to="/">Home</NavLink>
                    <NavLink className=' text-white text-3xl text-center hover:text-blue-500' to="/solar_system">Solar System</NavLink>  
                    <NavLink className=' text-white text-3xl text-center hover:text-blue-500' to="/quizzes">Quizzes</NavLink> 
                    <NavLink className=' text-white text-3xl text-center hover:text-blue-500' to="/leaderboard">Leaderboard</NavLink>
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
        