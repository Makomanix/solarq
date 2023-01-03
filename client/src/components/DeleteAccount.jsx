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
            <h1 className='text-center text-2xl text-red-500 underline'>Warning!</h1>
            <p className='text-center text-2xl text-red-500'>By continuing you will permanently delete your account and all associated data</p>
            <br></br>
            <button className='h-8 bg-red-500 text-black text-xl rounded-md' onClick={handleDelete}>Confirm and Delete</button>
            <br></br>
        </div>
    )
}
