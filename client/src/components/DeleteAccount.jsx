import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function DeleteAccount({user, setProfileDisplay}) {
    const navigate = useNavigate()


    const handleDelete = () => {
        fetch( `/users/${user.id}`, {
            method: 'DELETE',
        })
        .then(setProfileDisplay(false))
        .then(sessionStorage.removeItem("user_id"))
        .then(navigate('/login'))
    };

    return (
        <div className='grid grid-cols-1'>
            <h1 className='text-center text-2xl text-red-700 underline'>Warning!</h1>
            <p className='text-center text-2xl text-red-700'>By continuing you will permanently delete your account and all associated data</p>
            <br></br>
            <button className='h-10 mx-24 bg-red-700 text-white text-xl hover:bg-red-500 rounded-md' onClick={handleDelete}>Delete</button>
            <br></br>
        </div>
    )
}
