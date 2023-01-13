import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Profile from './Profile'
import Admin from './Admin'


export default function NavBar({questions, solarObjects}) {
    const currentUser = sessionStorage.getItem("user_id")
    const navigate = useNavigate()
    const [ adminDisplay, setAdminDisplay] = useState(false)
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
}, [navigate, currentUser]);

    const handleLogOut = () => {
        sessionStorage.removeItem("user_id")
        setProfileDisplay(false)
        navigate('/login')
    }

    const handleProfileDisplay = () => {
        setProfileDisplay(!profileDisplay)
        setAdminDisplay(false)
    }

    const handleAdminDisplay = () => {
        setAdminDisplay(!adminDisplay)
        setProfileDisplay(false)
    }

    

    return (
        <div className='relative'>
            {user.admin ?
            <div>
                <button className='absolute top-4 right-14 h-8 w-24 text-white text-2xl' onClick={handleAdminDisplay}>Admin</button> {adminDisplay ?
                <Admin questions={questions} solarObjects={solarObjects} handleAdminDisplay={handleAdminDisplay} />  : null }
                </div> : null }
            {/* <NavLink className="absolute top-16 right-[12%] text-white text-3xl hover:text-blue-500" to="/about">About</NavLink> */}
            <h1 className='absolute top-0 left-4 mt-2 text-white text-8xl'>Solar Explorer</h1> 
            <div className="h-32 w-full"></div>
            {currentUser  ? 
            <div>
                <div className='absolute top-16 right-[9.3%] grid-cols-4 gap-x-20' >
                        {/* <NavLink className=' text-white text-3xl mx-8 hover:text-blue-500' to="/">Home</NavLink> */}
                        <NavLink className=' text-white text-3xl mx-8 hover:text-blue-500' to="/">Solar System</NavLink>  
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
        