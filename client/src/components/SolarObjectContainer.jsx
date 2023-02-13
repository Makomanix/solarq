import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SolarObjectCollection from './SolarObjectCollection';


export default function SolarObjectContainer({user, setUser, solarObjects, setSolarObjects}) {
    const [solarObjectId, setSolarObjectId] = useState()
    const [ category, setCategory ] = useState("")
    const navigate = useNavigate();
    
    
    
    const handleFavoriteObject = () => {  
        let favoriteObject = solarObjects.find((solarObject) => solarObject.name === user.favorite_planet)
        setSolarObjectId(favoriteObject.id)
        };
    
    
    useEffect(() => {
        const currentUser = sessionStorage.getItem("user_id")
        if (currentUser == null) {
            navigate('/login')
        } else {
            fetch(`/users/${currentUser}`)
            .then((res) => res.json())
            .then((user) => setUser(user))
            .then(handleFavoriteObject())       
            }
        }, [navigate, setUser]);
        

    useEffect(() => {
        fetch(`/solar_objects/${category}`)
        .then((res) => res.json())
        .then((solarObjects) => setSolarObjects(solarObjects));
    }, [category, setSolarObjects]);

    // console.log(user)

    return (
        <div>
            <SolarObjectCollection user={user} solarObjects={solarObjects} setSolarObjects={setSolarObjects} setCategory={setCategory} solarObjectId={solarObjectId} setSolarObjectId={setSolarObjectId}/>
        </div>
    )
};
