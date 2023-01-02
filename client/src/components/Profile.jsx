import React from 'react'

export default function Profile({user, handleLogOut}) {
    return (
        <div className='absolute object-cover bg-slate-700 bg-cover top-8 right-2 w-[60%]  '>
            <form>
                <label></label>
                <input></input>
                <label></label>
                <input></input>
                <label></label>
                <input></input>
                <label></label>
                <select>
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
            </form>
            <button>Edit</button>
        </div>
    )
}
