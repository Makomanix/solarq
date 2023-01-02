import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SolarObjectCollection from './SolarObjectCollection';

export default function SolarObjectContainer() {
    const [solarObjects, setSolarObjects] = useState([])
    const [ category, setCategory ] = useState("")
    const navigate = useNavigate();
    const [user, setUser] = useState({
        id: 0,
        username: "",
        score: 0,
        high_score: 0,
    })

    useEffect(() => {
        const currentUser = sessionStorage.getItem("user_id")
        if (currentUser == null) {
            navigate('/login')
        } else {
            fetch(`/users/${currentUser}`)
                .then((res) => res.json())
                .then((user) => setUser({
                    id: user.id,
                    username: user.username,
                    score: 0,
                    high_score: user.high_score,
                }))
        }
    }, [navigate]);

    useEffect(() => {
        fetch(`/solar_objects/${category}`)
        .then((res) => res.json())
        .then((solarObjects) => setSolarObjects(solarObjects));
    }, [category]);
    
    console.log(user)
    console.log(solarObjects)
    // console.log(category)
    

    return (
        <div>
            <SolarObjectCollection solarObjects={solarObjects} setSolarObjects={setSolarObjects} setCategory={setCategory} />
        </div>
    )
}
