import React,{ useState, useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";


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

    const onSubmit = (e) => {
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

    const handleClick = () => {
        navigate('/sign_up')
    }

    return (
        <div>
            <button onClick={navigate('/About')}>About</button>
            <form onSubmit={onSubmit}>
                <label>Username:</label>
                <input type='username' name='username' value={username} onChange={handleChange}/>
                <label>Password:</label>
                <input type='password' name='password' value={password} onChange={handleChange} />
                <button>Login!</button>
                <NavLink onClick={handleClick}>Sign Up Here</NavLink>
            </form>
            {errors? <div>{errors}</div> : null}
        </div>
    );
}
