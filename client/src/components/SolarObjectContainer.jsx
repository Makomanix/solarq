import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SolarObjectCollection from './SolarObjectCollection';

export default function SolarObjectContainer() {
    const [user, setUser] = useState([])
    const [solarObjects, setSolarObjects] = useState([])
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
    }, [navigate]);

    useEffect(() => {
        fetch('/solar_objects')
            .then((res) => res.json())
            .then((solarObjects) => setSolarObjects(solarObjects));
    }, [navigate]);
    
    return (
        <div>
            <SolarObjectCollection solarObjects={solarObjects} />
        </div>
    )
}
