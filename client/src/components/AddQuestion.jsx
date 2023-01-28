import React from 'react'

export default function AddQuestion() {
    return (
        <div className='relative '>
            <form className='grid grid-cols-1 mx-6 gap-y-4' onSubmit={handleSubmit}>
                <input className="bg-slate-100 text-center text-xl rounded-md h-8 mb-1 outline" name="text" placeholder="question" type="text" onChange={handleChange} />
                <input className="bg-slate-100 text-center text-xl rounded-md h-8 mb-1 outline" name="answer" placeholder="answer" type="text" onChange={handleChange} />
                <input className="bg-slate-100 text-center text-xl rounded-md h-8  mb-1 outline" name="option2" placeholder="option" type="text" onChange={handleChange} />
                <input className="bg-slate-100 text-center text-xl rounded-md h-8 mb-1 outline" name="option3" placeholder="option" type="text" onChange={handleChange} />
                <input className="bg-slate-100 text-center text-xl rounded-md h-8 mb-1 outline" name="option4" placeholder="option" type="text" onChange={handleChange} />
                <input className="bg-slate-100 text-center text-xl rounded-md h-8 mb-1 outline" name="hint" placeholder="hint" type="text" onChange={handleChange} />
                <label className='text-center text-xl text-blue-400 '>Points</label>
                <select className="bg-slate-100 text-center rounded-md h-8 outline" name="points" placeholder="points" type="text" onChange={handleSelect}>
                    <option className=""></option>
                    <option value="100">100</option>
                    <option value="200">200</option>
                    <option value="300">300</option>
                </select>
                <label className='text-center text-xl text-blue-400 '>Category</label>
                <select className="bg-slate-100 text-center rounded-md h-8 outline" name="category" placeholder="category" type="text" onChange={handleSelect}>
                    <option className=""></option>
                    <option value="planet">Planet</option>
                    <option value="moon">Moon</option>
                    <option value="other">Sun+</option>
                </select>
                <label className='text-center text-xl text-blue-400 '>Difficulty</label>
                <select className="bg-slate-100 text-center rounded-md h-8 outline" name="difficulty" type="text" onChange={handleSelect}>
                    <option className=""></option>
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                </select>
                <label className='text-center text-xl text-blue-400 '>Solar Object</label>
                <select className="bg-slate-100 text-center rounded-md h-8 outline" name="solar_object" type="number" onChange={handleSelect}>
                    <option className=""></option>
                    <option value="The Sun">The Sun</option>
                    <option value="Mercury">Mercury</option>
                    <option value="Venus">Venus</option>
                    <option value="Earth">Earth</option>
                    <option value="Mars">Mars</option>
                    <option value="Jupiter">Jupiter</option>
                    <option value="Saturn">Saturn</option>
                    <option value="Uranus">Uranus</option>
                    <option value="Neptune">Neptune</option>
                    <option value="Pluto">Pluto</option>
                    <option value="Moon">Moon</option>
                    <option value="Phobos">Phobos</option>
                    <option value="Deimos">Deimos</option>
                    <option value="Ganymede">Ganymede</option>
                    <option value="Titan">Titan</option>
                    <option value="Asteroid Belt">Asteroid Belt</option>
                    <option value="Oort Cloud">Oort Cloud</option>
                    <option value="Kuiper Belt">Kuiper Belt</option>
                    <option value="Halley's Comet">Halley's Comet</option>
                </select>
                <button className='bg-blue-400  hover:bg-blue-500 h-8 mt-2 mx-14 text-white text-center text-xl rounded-md'>Save</button>
            </form>
        </div>
    )
}
