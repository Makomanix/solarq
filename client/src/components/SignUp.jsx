import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import NavBar from './NavBar';

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

    const handleSelect = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData, [name]: value,
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
            <div className='absolute top-[30%] left-[38.5%] outline rounded-md'>
                <h1 className='text-center text-2xl font-bold'>Sign Up!</h1>
                <p className='text-center pb-2'>It's quick and easy</p>
                <form className="grid overflow-hidden xl grid-cols-2 grid-rows-4 mx-4 gap-px gap-x-4 gap-y-4 grid-flow-row w-auto h-auto" onSubmit={handleSubmit}>
                    {/* <label className="bg-slate-100 text-center">Username:</label> */}
                    <input className="bg-slate-100 text-center rounded-md h-12" name="username" placeholder="username" type="text" onChange={handleChange}/>
                    {/* <label className="bg-slate-100 text-center">Password:</label> */}
                    <input className='bg-slate-100 text-center rounded-md h-12' name="password" placeholder="password" type="text" onChange={handleChange}/>
                    {/* <label className="bg-slate-100 text-center">Email:</label> */}
                    <input className="bg-slate-100 text-center rounded-md h-12"  name="email" placeholder="email" type="text" onChange={handleChange} />
                    {/* <label className="bg-slate-100 text-center">Favorite Planet</label> */}
                    <select className="bg-slate-100 text-center rounded-md h-12" name="favorite_planet" type="text" onChange={handleSelect}>
                        <option className="">Select Planet</option>
                        <option value="Mercury">Mercury</option>
                        <option value="Venus">Venus</option>
                        <option value="Earth">Earth</option>
                        <option value="Mars">Mars</option>
                        <option value="Jupiter">Jupiter</option>
                        <option value="Saturn">Saturn</option>
                        <option value="Uranus">Uranus</option>
                        <option value="Neptune">Neptune</option>                    
                    </select>
                    <button className='absolute top-[75%] left-[34%] h-12 w-32 font-bold bg-green-500 rounded-md'>Sign Up!</button>
                </form>
            </div>
        </div>
    )
}
