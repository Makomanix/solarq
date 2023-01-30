import React, {useState} from 'react'
import AddQuestion from './AddQuestion';
import DeleteQuestion from './DeleteQuestion'

export default function Admin({ solarObjects, questions, setQuestions }) {

    const [ addQuestion, setAddQuestion ] = useState(false);
    const [ removeQuestion, setRemoveQuestion ] = useState(false);

    
    const handleAddQuestion = () => {
        setAddQuestion(!addQuestion)
    };

    const handleDeleteQuestion = () => {
        setRemoveQuestion(!removeQuestion)
    };
        


    return (
        <div className='relative'>
            <div className='absolute h-auto w-screen grid grid-cols-2 text-white'>
                <button className='ml-[50%] mt-8 bg-blue-400 hover:bg-blue-500 h-12 mx-8 text-3xl text-white rounded-md' onClick={handleAddQuestion}>Add Question</button>
                <button className='mr-[50%] mt-8 bg-blue-400 hover:bg-blue-500 h-12 mx-8 text-3xl text-white rounded-md' onClick={handleDeleteQuestion}>Remove Question</button>
            </div>
            <div>
                {addQuestion ? <AddQuestion solarObjects={solarObjects}/> : null}
                {removeQuestion ? <DeleteQuestion questions={questions} setQuestions={setQuestions}/> : null}
            </div>
        </div>
    )
}

