import React,{ useState, useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import NavBar from "./NavBar";
import screen from "../assets/screen.jpg"


export default function Login() {

    const [ formData, setFormData ] = useState("");
    const [ errors, setErrors ] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const currentUser = sessionStorage.getItem("user_id")
        if (currentUser) {
            navigate("/")
        }
    }, [navigate]);

    const { username, password } = formData;

    const handleLogin = (user) => {
        sessionStorage.setItem("user_id", user.id);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const user = {
            username,
            password
        }
        fetch(`/login`,{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res => {
            if(res.ok){
                res.json().then(currentUser => handleLogin(currentUser)).then(() => {navigate("/")})
            } else {
                res.json().then(json => setErrors(json.errors))
            }
        })
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value})
    }

    // const handleClick = () => {
    //     navigate("/sign_up")
    // }

    return (
        <div>
            <NavBar/>
            <div className="absolute top-48 mx-[42%]">                
                <form className="grid grid-cols-1 m-auto outline h-72 w-72" onSubmit={handleSubmit}>
                    <label className='mt-4 ml-2'>Username:</label>
                    <input className='-mt-2 mx-2' type='username' name='username' value={username} onChange={handleChange}/>
                    <label className='mt-4 ml-2'>Password:</label>
                    <input className='-mt-2 mx-2' type='password' name='password' value={password} onChange={handleChange} />
                    <button className='m-2 bg-green-500 rounded-md font-bold' value='Log in!'>Log in!</button>                    
                    <NavLink className='justify-center m-2 px-8 text-center' to='/sign_up'>First time? Sign Up here!</NavLink>
                </form>                
            </div>
            {errors? <div>{errors}</div> : null}
        </div>
    );
}
