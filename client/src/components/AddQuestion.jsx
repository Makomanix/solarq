import React, { useState } from 'react'

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

export default function AddQuestion({solarObjects}) {

    const [ formData, setFormData ] = useState(emptyForm)
    // const [ returnedQuestion, setReturnedQuestion ] = useState({})

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
    });


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
            filteredObject.length === 0) {
            alert("Please Complete Form")
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
            .then(res => res.json())
            // .then(data => setReturnedQuestion(data))
            // .then(console.log(returnedQuestion))
        }
    };

    // console.log(returnedQuestion)

    return (
        <div className='absolute bg-slate-900 top-40 ml-[10%] h-auto w-[80%] pt-8 pb-8 px-8 rounded-md outline'>
            <form className='grid grid-cols-3 gap-x-8 gap-y-8' onSubmit={handleSubmit}>
                <lable className='text-center text-3xl text-blue-400'>Text</lable>
                <lable className='text-center text-3xl text-blue-400'>Answer</lable>
                <lable className='text-center text-3xl text-blue-400'>Option 2</lable>
                <input className="bg-slate-100 text-center text-3xl rounded-md h-10 mb-1 outline" name="text" placeholder="question" type="text" onChange={handleChange} />
                <input className="bg-slate-100 text-center text-3xl rounded-md h-10 mb-1 outline" name="answer" placeholder="answer" type="text" onChange={handleChange} />
                <input className="bg-slate-100 text-center text-3xl rounded-md h-10 mb-1 outline" name="option2" placeholder="option" type="text" onChange={handleChange} />
                <lable className='text-center text-3xl text-blue-400'>Option 3</lable>
                <lable className='text-center text-3xl text-blue-400'>Option 4</lable>
                <lable className='text-center text-3xl text-blue-400'>Hint</lable>
                <input className="bg-slate-100 text-center text-3xl rounded-md h-10 mb-1 outline" name="option3" placeholder="option" type="text" onChange={handleChange} />                
                <input className="bg-slate-100 text-center text-3xl rounded-md h-10 mb-1 outline" name="option4" placeholder="option" type="text" onChange={handleChange} />
                <input className="bg-slate-100 text-center text-3xl rounded-md h-10 mb-1 outline" name="hint" placeholder="hint" type="text" onChange={handleChange} />
                <div>
                    <label className='text-center text-3xl text-blue-400 mr-9'>Object</label>
                    <select className="bg-slate-100 text-center text-3xl rounded-md h-10 w-80 outline" name="solar_object" type="number" onChange={handleSelect}>
                        <option ></option>
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
                    <label className='text-center text-3xl text-blue-400 mr-10'>Category</label>
                    <select className="bg-slate-100 text-center text-3xl rounded-md h-10 w-80 outline" name="category" placeholder="category" type="text" onChange={handleSelect}>
                        <option className=""></option>
                        <option value="planet">Planet</option>
                        <option value="moon">Moon</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div>
                    <label className='text-center text-3xl text-blue-400 mr-10 '>Difficulty</label>
                    <select className="bg-slate-100 text-center text-3xl rounded-md h-10 w-80 outline" name="difficulty" type="text" onChange={handleSelect}>
                        <option className=""></option>
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                    </select>
                </div>
                <div>
                    <label className='text-center text-3xl text-blue-400 mr-10 '>Points</label>
                    <select className="bg-slate-100 text-center text-3xl rounded-md h-10 w-80 outline" name="points" placeholder="points" type="text" onChange={handleSelect}>
                        <option className=""></option>
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
