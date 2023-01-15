import React, { useState } from 'react'
import { NavLink, useNavigate } from "react-router-dom"
import NavBar from './NavBar';

// const emptyForm ={
//     username: "",
//     password: "",
//     email: "",
//     favorite_planet: ""
// }

export default function SignUp({ users, setUsers, addUser }) { 

    const navigate = useNavigate();
    const [ errors, setErrors] = useState([])
    const [ formData, setFormData ] = useState({
        username: "",
        password: "",
        email: "",
        favorite_planet: ""
    });


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

                // }))
    //     .then((newUser) => {
    //         sessionStorage.setItem("user_id", newUser.id);
    //     })
    //     .then(handleLogin(formData))       
    //     .then(navigate("/"))
    // }

    // const handleLogin = (formData) => {
    //     sessionStorage.setItem("user_id", formData.id)
    // }

    return (
        <div className=''>
            <div className='absolute top-[200%] mx-[33%] h-[300%] w-[35%] bg-slate-900 outline rounded-md'>
                <h1 className='text-center pt-4 text-blue-400 text-2xl font-bold'>Sign Up!</h1>
                <p className='text-center pt-2 text-blue-400 pb-10'>It's quick and easy</p>
                <form className="grid  grid-cols-2 grid-rows-4 mx-4 gap-px gap-x-4 gap-y-10 grid-flow-row w-auto h-auto" onSubmit={handleSubmit}>
                    
                    <input className="bg-slate-100 text-center rounded-md h-12" name="username" placeholder="username" type="text" value={formData.username} onChange={handleChange}/>
                    
                    <input className='bg-slate-100 text-center rounded-md h-12' name="password" placeholder="password" type="password" value={formData.password} onChange={handleChange}/>
                    
                    <input className="bg-slate-100 text-center rounded-md h-12" name="email" placeholder="email" type="text" value={formData.email} onChange={handleChange} />
                    
                    <select className="bg-slate-100 text-center rounded-md h-12" name="favorite_planet" type="text" value={formData.favorite_planet} onChange={handleSelect}>
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
                    <button className='absolute top-[70%] mx-[32.5%] h-12 w-52 font-bold bg-blue-400 hover:bg-blue-500 text-white text-xl rounded-md'>Sign Up!</button>
                    <NavLink className='absolute top-[90%] mx-[44%]  font-bold text-blue-400 hover:text-blue-500 text-lg rounded-md' to='/login'>Login</NavLink>
                </form>
            </div>
        </div>
    )
}
