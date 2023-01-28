import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SolarObjectCollection from './SolarObjectCollection';


export default function SolarObjectContainer({solarObjects, setSolarObjects}) {

    // const favoriteObject = solarObjects.find((solarObject) => solarObject.name === user.favorite_planet);
    const [solarObjectId, setSolarObjectId] = useState(null)
    const [ category, setCategory ] = useState("")
    const navigate = useNavigate();
    const [user, setUser] = useState({
        id: 0,
        username: "",
        score: 0,
        high_score: 0,
        favorite_planet: "",
    })
    
    let favoriteObject = null
    
    // solarObjects.find((solarObject) => solarObject.name === user.favorite_planet)
    
    const handleFavoriteObject = () => {
            favoriteObject = setTimeout(() => {
                console.log(user)   
            }, 500);
            // let favoriteObject = solarObjects.find((solarObject) => solarObject.name === user.favorite_planet)
            // return favoriteObject
        };
    
    
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
                    favorite_planet: user.favorite_planet,
                }))
                .then(console.log(solarObjects))
                .then(console.log(solarObjectId))
                .then(handleFavoriteObject())
                // .then(console.log(user.favorite_planet))
            
            }
        }, [, setUser]);
        

    useEffect(() => {
        fetch(`/solar_objects/${category}`)
        .then((res) => res.json())
        .then((solarObjects) => setSolarObjects(solarObjects));
    }, [category]);

    

    return (
        <div>
            <SolarObjectCollection user={user} solarObjects={solarObjects} setSolarObjects={setSolarObjects} setCategory={setCategory} solarObjectId={solarObjectId} setSolarObjectId={setSolarObjectId}/>
        </div>
    )
}
