import React, { useState } from 'react'
import UserContainer from './UserContainer'
import SolarObjectContainer from './SolarObjectContainer'
import About from './About'
import { useNavigate } from 'react-router-dom'

export default function QuizContainer() {
    const [ ifUser, setIfUser ] = useState(false);
    const navigate = useNavigate();

    const handleIfUser = () => {
        setIfUser(ifUser => !ifUser)
    }

    return (
        <div>
            <div>{
            ifUser ?
            <UserContainer 
            onUserCreate={handleIfUser}
            /> : navigate("/login")
            }
            </div>
            <SolarObjectContainer />
            <About />
        </div>
    )
}
