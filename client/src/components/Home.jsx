import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar';
import QuizContainer from './QuizContainer';
import SolarObjectContainer from './SolarObjectContainer';
import UserQuizContainer from './UserQuizContainer';

export default function UserContainer() {
    const [user, setUser] = useState([]);
    const [solarObjects, setSolarObjects] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const currentUser = sessionStorage.getItem("user_id")
        if (currentUser == null) {
            navigate('/login')
        } else {
            fetch(`/users/${currentUser}`)
                .then((res) => res.json())
                .then((user) => setUser(user))
        }
    }, [solarObjects]);

    useEffect(() => {
        fetch('/solar_objects')
            .then((res) => res.json())
            .then((solarObjects) => setSolarObjects(solarObjects));
    }, []);

    const handleOnClick = (e) => {
        navigate(`${e.target.value}`)
    }

    return (
        <div>
            <QuizContainer solarObjects={solarObjects} />
            <button value="/quizzes" onClick={handleOnClick}>Test Your Solar System Knowledge</button>
            <SolarObjectContainer solarObjects={solarObjects} setSolarObjects={setSolarObjects} />
            <button value="/solar_system" onClick={handleOnClick}>Discover Your Solar System</button>
            <UserQuizContainer />
            <button value="/user_quizzes" onClick={handleOnClick}>See your past</button>
        </div>
    )
}
