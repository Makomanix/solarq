import React,{ useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";


export default function Login({setUser}) {

    const navigate = useNavigate();

    const [ formData, setFormData ] = useState({
        username: "",
        password: ""
    });

    const [ errors, setErrors ] = useState([]);
    
    const handleSubmit = (e) => {
        e.preventDefault()

        const login = {
            ...formData
        };

        fetch(`/login`,{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(login)
            
        })
        .then(res => {
            if(res.ok){
                res.json()
                .then(user => {
                    sessionStorage.setItem("user_id", user.id)
                    setUser({id: user.id,
                        username: user.username,
                        score: user.score,
                        high_score: user.high_score,
                        favorite_planet: user.favorite_planet,
                    })
                    navigate("/", { state: { user: user } })
                })
            } else {
                res.json().then(data=> {
                    setErrors(data.error.login)
                })
            }
        })
    };


    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value})
    };
    
    
    return (
        <div >
            <div className='absolute top-[200%] mx-[33%] h-[307%] w-[35%] bg-slate-900 rounded-md outline'>                
                <form className="grid grid-cols-1 gap-y-8 bg-slate-900 rounded-md" onSubmit={handleSubmit}>
                    <label className='mt-10 mx-[20%] text-blue-400 text-xl'>Username:</label>
                    <input className='-mt-6 mx-[20%] h-10 w-[60%] text-xl text-center rounded-lg' placeholder='Username' type='text' name='username' value={formData.username} onChange={handleChange}/>
                    <label className='mt-4 mx-[20%] text-blue-400 text-xl'>Password:</label>
                    <input className='-mt-6 mx-[20%] h-10 w-[60%] text-xl text-center rounded-lg' placeholder='Password' type='password' name='password' value={formData.password} onChange={handleChange} />
                    <button className='mx-[37.5%] h-12 w-52 text-white bg-blue-400 hover:bg-blue-500 rounded-md font-bold text-xl' value='Login!'>Login!</button>                    
                    <NavLink className='m-2 px-8 text-center mx-72 text-blue-400 hover:text-blue-500 text-lg' to='/sign_up'>First time? Sign Up here!</NavLink>
                </form>                
            </div>
            {errors? <div className="absolute top-[306%] left-[44%] text-red-500 text-2xl z-40">{errors}</div> : null}
        </div>
    );
}


