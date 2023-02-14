import React, { useState } from 'react'
import { NavLink, useNavigate } from "react-router-dom"


export default function SignUp() { 

    const navigate = useNavigate();
    const [ errors, setErrors] = useState([])
    const [ formData, setFormData ] = useState({
        username: "",
        password: "",
        email: "",
        favorite_planet: "",
        high_score: 0
    });

    // takes user sign up data and adds to formData(username, password, email)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData, [name]: value
        })
    }

    // takes user sign up data and adds to formData(favorite_planet)
    const handleSelect = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData, [name]: value,
        })
    }

    //submits formData, session created as user.id, and receives back any failed validation 
    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`/users`, {
            method: 'POST',
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({...formData})
        })
        .then((res) => {
            if(res.ok){
                res.json().then(user => {
                    sessionStorage.setItem("user_id", user.id)
                    setErrors([])
                    navigate("/")
                })
            } else {
                res.json().then(data => {
                    console.log(data.errors)
                    setErrors(data.errors)
                    console.log("RES NOT OK")
                })
            }
        })
    }

// Displays user sign up form
    return (
        <div className=''>
            <div className='absolute top-[200%] mx-[33%] h-[300%] w-[35%] bg-slate-900 outline rounded-md'>
                <h1 className='text-center pt-4 text-blue-400 text-3xl font-bold'>Sign Up!</h1>
                <p className='text-center pt-2 text-blue-400 text-xl pb-10'>It's quick and easy</p>
                <form className="grid grid-cols-2 grid-rows-4 mx-4 gap-px gap-x-4 gap-y-6 grid-flow-row w-auto h-auto" onSubmit={handleSubmit}>
                    
                    <input className="bg-slate-100 text-center text-2xl rounded-md h-12" name="username" placeholder="username" type="text" value={formData.username} onChange={handleChange}/>
                    
                    <input className='bg-slate-100 text-center text-2xl rounded-md h-12' name="password" placeholder="password" type="password" value={formData.password} onChange={handleChange}/>
                    
                    <input className="bg-slate-100 text-center text-2xl rounded-md h-12" name="email" placeholder="email" type="text" value={formData.email} onChange={handleChange} />
                    
                    <select className="bg-slate-100 text-center text-2xl rounded-md h-12" name="favorite_planet" type="text" value={formData.favorite_planet} onChange={handleSelect}>
                        <option className=""> Select Favorite Planet</option>
                        <option value="Mercury">Mercury</option>
                        <option value="Venus">Venus</option>
                        <option value="Earth">Earth</option>
                        <option value="Mars">Mars</option>
                        <option value="Jupiter">Jupiter</option>
                        <option value="Saturn">Saturn</option>
                        <option value="Uranus">Uranus</option>
                        <option value="Neptune">Neptune</option>                    
                    </select>
                    <button className='absolute top-[70%] mx-[35%] h-12 w-52 font-bold bg-blue-400 hover:bg-blue-500 text-white text-2xl rounded-md'>Sign Up!</button>
                    <NavLink className='absolute top-[90%] mx-[43.5%]  font-bold text-blue-400 hover:text-blue-500 text-2xl rounded-md' to='/login'>Login</NavLink>
                </form>
                <div>
                    {errors? 
                    <div className='grid grid-cols-1 grid-rows-auto h-auto w-auto mx-20 bg-slate-900 text-center text-2xl rounded-md'>
                        <p className='text-red-600'>{errors[0]}</p>
                        <p className='text-red-600'>{errors[1]}</p>
                        <p className='text-red-600'>{errors[2]}</p>
                        <p className='text-red-600'>{errors[3]}</p>
                        <p className='text-red-600'>{errors[4]}</p>
                        <p className='text-red-600'>{errors[5]}</p>
                        <p className='text-red-600'>{errors[6]}</p>
                    </div> : null }
                </div>
            </div>
        </div>
    )
}
