import React, {useState} from 'react'
import DeleteAccount from './DeleteAccount'

const emptyForm = {
    username: "",
    password: "",
    email: "",
    favorite_planet: ""
}
export default function Profile({user, setUser, handleLogOut, setProfileDisplay }) {
    
    const {id, username, password, email, favorite_planet, high_score, } = user
    const [ edit, setEdit ] = useState(false)
    const [ formData, setFormData ] = useState (emptyForm)
    const [ showDelete, setShowDelete ] = useState (false)
    

    const handleEdit = () => {
        setEdit(!edit)
    };

    const handleSetShowDelete = () => {
        setShowDelete(!showDelete)
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData, [name]: value
        })
    };

    const handleSelect = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData, [name]: value,
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`/users/${user.id}`, {
            method: 'PATCH',
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({ 
                username: formData.username,
                password: formData.password,
                email: formData.email,
                favorite_planet: formData.favorite_planet
            })
        })
            .then((res) => res.json())
            .then((user) => setUser({
                username: username,
                password: password,
                email: email,
                favorite_planet: favorite_planet
            })
            )
            .then(setEdit(!edit))
            .then(reload())
    };

    const reload = () => {
        window.location.reload(true)
    }

    // console.log(user.id)
    // console.log(formData)

    return (
        <div className='bg-slate-900 bg-cover top-28 right-0 fixed h-auto w-[18%] z-40 px-2 rounded-md'>
            <div className='grid grid-cols-1'>
                <h1 className='text-blue-400 text-center text-lg underline' >Profile</h1>
                <p className='text-blue-400 pl-4 text-lg text-left'>Username: {username}</p>
                <p className='text-blue-400 pl-4 text-lg text-left'>Email: {email}</p>
                <p className='text-blue-400 pl-4 text-lg text-left'>Favorite Planet: {favorite_planet}</p>
                <p className='text-blue-400 pl-4 text-lg text-left'>High Score: {high_score}</p>
                <button className='bg-blue-400 mt-4 text-lg rounded-md' onClick={handleEdit}>Toggle Edit</button>
                <br></br>
                    { edit ? 
                    <div className='relative '>
                        <form className='grid grid-cols-1 gap-y-4' onSubmit={handleSubmit}>
                            {/* <label>Username</label> */}
                            <input className="bg-slate-100 text-center rounded-md h-8 outline" name="username" placeholder="username" type="text" onChange={handleChange} />
                            {/* <label>Password</label> */}
                            <input className='bg-slate-100 text-center rounded-md h-8 outline' name="password" placeholder="password" type="text" onChange={handleChange} />
                            {/* <label>Email</label> */}
                            <input className="bg-slate-100 text-center rounded-md h-8 outline" name="email" placeholder="email" type="text" onChange={handleChange} />
                            <label className='text-center text-blue-400 '>Favorite Planet</label>
                            <select className="bg-slate-100 text-center rounded-md h-8 outline" name="favorite_planet" type="text" onChange={handleSelect}>
                                <option className=""></option>
                                <option value="Mercury">Mercury</option>
                                <option value="Venus">Venus</option>
                                <option value="Earth">Earth</option>
                                <option value="Mars">Mars</option>
                                <option value="Jupiter">Jupiter</option>
                                <option value="Saturn">Saturn</option>
                                <option value="Uranus">Uranus</option>
                                <option value="Neptune">Neptune</option>
                            </select>
                            <button className='bg-blue-400 h-8 mt-4 text-center text-xl rounded-md outline'>Save Changes</button>
                        </form> 
                        <button className='h-8 ml-[30%] mt-4 mb-4 w-32 bg-red-500 rounded-md' onClick={handleLogOut}>Logout</button>
                        <br></br>
                        <br></br>
                        <button className='ml-[20%] mb-4 w-48 bg-red-500 rounded-md' onClick={handleSetShowDelete}>Toggle Delete Account</button>
                        <div>{ showDelete ?
                        <DeleteAccount user={user} setProfileDisplay={setProfileDisplay}/> : null }
                        </div>
                    </div>
                : null }
            </div>
        </div>
    )
}
