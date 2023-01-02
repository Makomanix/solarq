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
        email: "",
        score: 0,
        high_score: 0,
        admin: false
})

    useEffect(() => {
        fetch(`/users/${currentUser}`)
            .then((res) => res.json())
            .then((user) => setUser({
                id: user.id,
                username: user.username,
                email: user.email,
                score: 0,
                high_score: user.high_score,
                admin: user.admin
            }))
}, [navigate]);

    const handleLogOut = () => {
        sessionStorage.removeItem("user_id")
        navigate('/login')
    }

    const handleProfileDisplay = () => {
        setProfileDisplay(!profileDisplay)
    }

    console.log(profileDisplay)
    

    return (
        <div className='relative overflow-hidden'>
            <NavLink className="absolute top-16 right-[13%] text-white text-3xl underline" to="/about">About</NavLink>
            <h1 className='absolute top-0 left-4 mt-2 text-white text-8xl'>Solar Quiz</h1> 
            <div className="h-32 w-full"></div>
            {currentUser ?
            <div>
                <div className='absolute top-16 right-[19%] grid-cols-4 gap-x-20' >
                    <NavLink className=' text-white text-3xl mx-8 underline' to="/">Home</NavLink>  
                    <NavLink className=' text-white text-3xl mx-8 underline' to="/quizzes">Quizzes</NavLink> 
                    <NavLink className=' text-white text-3xl mx-8 underline' to="/leaderboard">Leaderboard</NavLink>
                </div>             
                <button 
                    className=' absolute top-16 right-16 text-red-500 text-3xl outline' 
                    onClick={handleProfileDisplay}>Profile
                </button>
                <div>{profileDisplay ? 
                    <Profile user={user} handleLogOut={handleLogOut}/> : null }
                </div>                
            </div> : null
            }
        </div>
            
        
    )
}
