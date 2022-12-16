import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function UserContainer() {
    const [ user, setUser ] = useState([]);
    const [ solarObjects, setSolarObjects ] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const currentUser = sessionStorage.getItem("user_id")
        if (currentUser == null){
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

    return (
        <div>user</div>
    )
}
