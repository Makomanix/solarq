import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"

const emptyForm ={
    username: "",
    email: "",
    favorite_planet: ""
}

export default function SignUp() { 

    const [ formData, setFormData ] = useState(emptyForm);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData, [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`/users`, {
            method: 'POST',
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({...formData})
        })
        .then((res) => res.json())
        .then((newUser) => {
            sessionStorage.setItem("user_id", newUser.id);
        })       
        .then(navigate("/"))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Username:</label>
                <input name="username" placeholder="your name" type="text" onChange={handleChange}/>
                <label>Password:</label>
                <input name="password" placeholder="password" type="text" onChange={handleChange}/>
                <label>Email:</label>
                <input name="email" placeholder="your email" type="text" onChange={handleChange} />
                <label>Favorite Planet</label>
                <input name="favorite planet" placeholder="your favorite planet" type="text"/>
                <button>Sign Up!</button>
            </form>
        </div>
    )
}
