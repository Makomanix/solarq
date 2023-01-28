import React, {useState} from 'react'

const emptyForm = {
    text: "",
    difficulty: "",
    points: 0,
    category: "",
    answer: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    hint: "",
    solar_object_id: ""
}

export default function Admin({ solarObjects, handleAdminDisplay }) {

    const [ formData, setFormData ] = useState(emptyForm)

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

    const selectedObject = solarObjects.filter((solarObject) => solarObject.name === formData.solar_object)

    const filteredObject = selectedObject.map((object) => {
        return object.id
}
        ) 
        

    const handleSubmit = () => {
        if (formData.text === "" || 
        formData.difficulty === "" || 
        formData.points === 0 || 
        formData.category === "" || 
        formData.answer === "" || 
        formData.option2 === "" || 
        formData.option3 === "" || 
        formData.option4 === "" || 
        formData.hint === "" || 
        filteredObject.length === 0) 
        { alert("Please Complete Form")  
        } else {
            fetch(`/questions`, {
                method: 'POST',
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({
                    text: formData.text,
                    difficulty: formData.difficulty,
                    points: formData.points,
                    category: formData.category,
                    answer: formData.answer,
                    option1: formData.answer,
                    option2: formData.option2,
                    option3: formData.option3,
                    option4: formData.option4,
                    hint: formData.hint,
                    solar_object_id: filteredObject[0]
                })

            })
        }
    };


    return (
        <div className='bg-slate-900 bg-cover top-28 pb-12 right-0 fixed h-auto w-[25%] z-40 px-2 rounded-md outline'>
            <div className='grid grid-cols-1'>
                <button className='text-blue-400 mr-3 text-right text-2xl' onClick={handleAdminDisplay}>x</button>
                <h1 className='text-blue-400 text-2xl text-center pb-4 underline'>Add a Question</h1>
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
            </div>
        </div>
    )
}
