import React,{useState} from 'react'

export default function EditQuestionForm({question, patchEdit, setEdit, solarObjects}) {

    const {text,
        difficulty, 
        points, 
        category, 
        answer, 
        option1, 
        option2, 
        option3, 
        option4, 
        hint, 
        solar_object_id} = question

    const [ editFormData, setEditFormData ] = useState({
        text: text,
        difficulty: difficulty,
        points: points,
        category: category,
        answer: answer,
        option1: option1,
        option2: option2,
        option3: option3,
        option4: option4,
        hint: hint,
        solar_object_id: solar_object_id
    })

    const matchObjectIdToName = solarObjects.filter((solarObject) => solarObject.id === solar_object_id)

    const nameOfObject = matchObjectIdToName.map((object) => {
        return object.name
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditFormData({
            ...editFormData, [name]: value
        })
    };

    const handleSelect = (e) => {
        const { name, value } = e.target
        setEditFormData({
            ...editFormData, [name]: value,
        })
    };

    console.log("editFormData", editFormData)
    console.log("question", question)

    return (
        <div className='absolute bg-slate-900 top-40 ml-[10%] h-96 w-[80%] pt-16 px-8 rounded-md outline'>
            <form className='grid grid-cols-3 gap-x-8 gap-y-8' onSubmit={patchEdit}>
                <input className="bg-slate-100 text-center text-2xl rounded-md h-8 mb-1 outline" name="text" placeholder={text} type="text" onChange={handleChange} />
                <input className="bg-slate-100 text-center text-2xl rounded-md h-8 mb-1 outline" name="answer" placeholder={answer} type="text" onChange={handleChange} />
                <input className="bg-slate-100 text-center text-2xl rounded-md h-8 mb-1 outline" name="hint" placeholder={hint} type="text" onChange={handleChange} />
                <input className="bg-slate-100 text-center text-2xl rounded-md h-8 mb-1 outline" name="option2" placeholder={option2} type="text" onChange={handleChange} />
                <input className="bg-slate-100 text-center text-2xl rounded-md h-8 mb-1 outline" name="option3" placeholder={option3} type="text" onChange={handleChange} />
                <input className="bg-slate-100 text-center text-2xl rounded-md h-8 mb-1 outline" name="option4" placeholder={option4} type="text" onChange={handleChange} />
                <div>
                    <label className='text-center text-2xl text-blue-400 mr-9'>Object</label>
                    <select className="bg-slate-100 text-center text-2xl rounded-md h-8 w-80 outline" name="solar_object" type="number" onChange={handleSelect}>
                        <option >{nameOfObject}</option>
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
                </div>
                <div>
                    <label className='text-center text-2xl text-blue-400 mr-10'>Category</label>
                    <select className="bg-slate-100 text-center text-2xl rounded-md h-8 w-80 outline" name="category" placeholder="category" type="text" onChange={handleSelect}>
                        <option>{category}</option>
                        <option value="planet">Planet</option>
                        <option value="moon">Moon</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div>
                    <label className='text-center text-2xl text-blue-400 mr-10 '>Difficulty</label>
                    <select className="bg-slate-100 text-center text-2xl rounded-md h-8 w-80 outline" name="difficulty" type="text" onChange={handleSelect}>
                        <option>{difficulty}</option>
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                    </select>
                </div>
                <div>
                    <label className='text-center text-2xl text-blue-400 mr-10 '>Points</label>
                    <select className="bg-slate-100 text-center text-2xl rounded-md h-8 w-80 outline" name="points" placeholder="points" type="text" onChange={handleSelect}>
                        <option >{points}</option>
                        <option value="100">100</option>
                        <option value="200">200</option>
                        <option value="300">300</option>
                    </select>
                </div>
                <button className='bg-blue-400  hover:bg-blue-500 h-12 mt-2 mx-32 text-white text-center text-2xl rounded-md'>Save</button>
            </form>
        </div>
    )
}
