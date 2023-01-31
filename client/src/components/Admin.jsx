import React, {useState} from 'react'
import AddQuestion from './AddQuestion';
import DeleteQuestionContainer from './DeleteQuestionContainer'

export default function Admin({ solarObjects, questions, setQuestions }) {

    const [ addQuestion, setAddQuestion ] = useState(false);
    const [ removeQuestion, setRemoveQuestion ] = useState(false);

    
    const handleAddQuestion = () => {
        setAddQuestion(!addQuestion)
        setRemoveQuestion(false)
    };

    const handleDeleteQuestion = () => {
        setRemoveQuestion(!removeQuestion)
        setAddQuestion(false)
    };
        


    return (
        <div className='relative'>
            <div className='absolute w-screen grid grid-cols-2 text-white '>
                <button className='ml-[50%] mt-8 bg-blue-400 hover:bg-blue-500 h-12 mx-8 text-3xl text-white rounded-md' onClick={handleAddQuestion}>Add Question</button>
                <button className='mr-[50%] mt-8 bg-blue-400 hover:bg-blue-500 h-12 mx-8 text-3xl text-white rounded-md' onClick={handleDeleteQuestion}>Remove Question</button>
            </div>
            <div>
                {addQuestion ? <AddQuestion solarObjects={solarObjects}/> : null}
                {removeQuestion ? <DeleteQuestionContainer questions={questions} setQuestions={setQuestions} handleDeleteQuestion={handleDeleteQuestion}/> : null}
            </div>
        </div>
    )
}

