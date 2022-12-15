import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"

const emptyForm ={
    username: ""
}

export default function SignUp({ users, setUsers}) { 

    const [ formData, setFormData ] = useState(emptyForm);
    const navigate = useNavigate();

    const addUser = (newUser) => {
        setUsers([...users, newUser])
    }

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
            addUser(newUser)
        })
        .then(handleLogin(formData))
        .then(navigate("/"))
    }

    const handleLogin = (formData) => {
        sessionStorage.setItem("user_id", formData.id);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Username:</label>
                <input name="username" placeholder="your name" type="text" onChange={handleChange}/>
                <label>Password:</label>
                <input name="password" placeholder="password" type="text" onChange={handleChange}/>
            </form>
        </div>
    )
}
