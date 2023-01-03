import React, {useState} from 'react'

export default function Profile({user, setUser, handleLogOut, profileDisplay, setProfileDisplay}) {
    
    const {id, username, password, email, favorite_planet, high_score, } = user
    const [ edit, setEdit ] = useState(false)

    const handleEdit = () => {
        setEdit(!edit)
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user, [name]: value
        })
    };

    const handleSelect = (e) => {
        const { name, value } = e.target
        setUser({
            ...user, [name]: value,
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`/users/${user.id}`, {
            method: 'PATCH',
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({ ...user })
        })
            .then((res) => res.json())
            .then((user) => setUser(user)              
            )
    };

    return (
        <div className='bg-slate-700 bg-cover top-32 right-0 fixed h-auto w-[18%] z-40 px-2'>
            <div className='grid grid-cols-1'>
                <h1 className='text-center'>My Profile</h1>
                <p className='text-center'>{username}</p>
                <p className='text-center'>{email}</p>
                <p className='text-center'>{favorite_planet}</p>
                <p className='text-center'>{high_score}</p>
                <button className='' onClick={handleEdit}>EDIT</button>
                    { edit ? 
                    <div className='relative '>
                        <form className='grid grid-cols-1 gap-y-4' onSubmit={handleSubmit}>
                            {/* <label>Username</label> */}
                            <input className="bg-slate-100 text-center rounded-md h-12" name="username" placeholder="username" type="text" onChange={handleChange} />
                            {/* <label>Password</label> */}
                            <input className='bg-slate-100 text-center rounded-md h-12' name="password" placeholder="password" type="text" onChange={handleChange} />
                            {/* <label>Email</label> */}
                            <input className="bg-slate-100 text-center rounded-md h-12" name="email" placeholder="email" type="text" onChange={handleChange} />
                            <label className='text-center'>Favorite Planet</label>
                            <select className="bg-slate-100 text-center rounded-md h-12" name="favorite_planet" type="text" onChange={handleSelect}>
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
                            <button className='mt-4 text-center outline'>Save Changes</button>
                        </form> 
                        <br></br>
                        <button>Delete Account</button>
                    </div>
                : null }
            </div>
        </div>
    )
}
