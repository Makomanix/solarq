import React,{ useState, useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";


export default function Login({users}) {

    const [ formData, setFormData ] = useState({});
    const [ errors, setErrors ] = useState("");
    const navigate = useNavigate();

    // useEffect(() => {
    //     const currentUser = sessionStorage.getItem("user_id")
    //     if (currentUser) {
    //         navigate("/")
    //     } 
    // }, []);



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
                res.json().then(data => setErrors(data.errors))
            }
        })
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value})
    }

    

    return (
        <div >
            <div className='absolute top-[200%] mx-[33%] h-[307%] w-[35%] bg-slate-900 rounded-md outline'>                
                <form className="grid grid-cols-1 gap-y-8 bg-slate-900 rounded-md" onSubmit={handleSubmit}>
                    <label className='mt-10 mx-[20%] text-blue-400 text-xl'>Username:</label>
                    <input className='-mt-6 mx-[20%] h-10 w-[60%] text-xl text-center rounded-lg' type='username' name='username' value={username} onChange={handleChange}/>
                    <label className='mt-4 mx-[20%] text-blue-400 text-xl'>Password:</label>
                    <input className='-mt-6 mx-[20%] h-10 w-[60%] text-xl text-center rounded-lg' type='password' name='password' value={password} onChange={handleChange} />
                    <button className='mx-[35%] h-12 w-52 text-white bg-blue-400 hover:bg-blue-500 rounded-md font-bold text-xl' value='Log in!'>Log in!</button>                    
                    <NavLink className='m-2 px-8 text-center text-blue-400 hover:text-blue-500 text-lg' to='/sign_up'>First time? Sign Up here!</NavLink>
                </form>                
            </div>
            {errors? <div>{errors}</div> : null}
        </div>
    );
}
