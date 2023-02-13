import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import DeleteAccount from './DeleteAccount'

export default function Profile({ user, setUser, handleLogOut, setProfileDisplay, handleProfileDisplay }) {
    
    const emptyForm = {
        username: user.username,
        password: user.password,
        email: user.email,
        favorite_planet: user.favorite_planet
    };

    const navigate = useNavigate()
    const [ edit, setEdit ] = useState(false)
    const [ formData, setFormData ] = useState (emptyForm)
    const [ showDelete, setShowDelete ] = useState (false)

    useEffect(() => {
        const currentUser = sessionStorage.getItem("user_id")
        if (currentUser == null) {
            navigate('/login')
        } else {
            fetch(`/users/${currentUser}`)
                .then((res) => res.json())
                .then((user) => setUser(user))            
        }
    }, [navigate, setUser]);

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
                id: user.id,
                username: formData.username,
                password: formData.password,
                email: formData.email,
                favorite_planet: formData.favorite_planet
            })
        })
            .then((res) => res.json())
            .then((user) => setUser(user))
                .then(setEdit(!edit))
                .then(setProfileDisplay(false))
                .then(navigate('/'))
            };
            
            
    return (
        <div className='bg-slate-900 bg-cover top-28 right-0 pb-1 fixed h-auto w-[18%] z-40 px-2 rounded-md outline'>
            <div className='grid grid-cols-1'>
                <button className='text-blue-400 mr-3 text-right text-2xl' onClick={handleProfileDisplay} >x</button>
                <p className='text-blue-400 -mt-3 pl-10 text-2xl text-left'>Username: {user.username}</p>
                <p className='text-blue-400  pl-10 text-2xl text-left'>Email: {user.email}</p>
                <p className='text-blue-400  pl-10 text-2xl text-left'>Favorite Planet: {user.favorite_planet}</p>
                <p className='text-blue-400  pl-10 text-2xl text-left'>High Score: {user.high_score}</p>
                <button className='bg-blue-400 hover:bg-blue-500 h-8 my-6 mx-20 text-2xl text-white rounded-md' onClick={handleEdit}>Edit</button>
                
                    { edit ? 
                    <div className='relative '>
                        <form className='grid grid-cols-1 mx-6 gap-y-4' onSubmit={handleSubmit}>
                            <input className="bg-slate-100 text-center text-2xl rounded-md h-12 outline" name="username" placeholder="username" type="text" onChange={handleChange} />
                            <input className='bg-slate-100 text-center text-2xl rounded-md h-12 outline' name="password" placeholder="password" type="text" onChange={handleChange} />
                            <input className="bg-slate-100 text-center text-2xl rounded-md h-12 outline" name="email" placeholder={emptyForm.email} type="text" onChange={handleChange} />
                            <label className='text-center text-2xl text-blue-400 '>Favorite Planet</label>
                            <select className="bg-slate-100 text-center text-2xl rounded-md h-12 outline" name="favorite_planet" type="text" onChange={handleSelect}>
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
                            <button className='bg-blue-400  hover:bg-blue-500 h-8 mt-2 mx-14 text-white text-center text-2xl rounded-md'>Save</button>
                        </form>
                        <div className='grid grid-cols-1'>
                            <button className='h-8 mt-12 mx-20 bg-red-700 hover:bg-red-500 text-white rounded-md text-center text-2xl' onClick={handleLogOut}>Logout</button>
                            {/* <br></br>
                            <br></br> */}
                            <button className='h-8 mt-6 mb-4 mx-20  bg-red-700 hover:bg-red-500 text-white rounded-md text-2xl' onClick={handleSetShowDelete}>Delete Account?</button>
                        </div>
                        <div>{ showDelete ?
                            <DeleteAccount user={user} setProfileDisplay={setProfileDisplay}/> : null }
                        </div>
                    </div>
                : null }
            </div>
        </div>
    )
}
