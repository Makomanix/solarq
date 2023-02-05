import React, {useState} from 'react'
import AddQuestion from './AddQuestion';
import EditQuestionContainer from './EditQuestionContainer'

export default function Admin({ solarObjects, questions, setQuestions }) {

    const [ addQuestion, setAddQuestion ] = useState(false);
    const [ editQuestion, setEditQuestion ] = useState(false);

    
    const handleAddQuestion = () => {
        setAddQuestion(!addQuestion)
        setEditQuestion(false)
    };

    const handleEditQuestion = () => {
        setEditQuestion(!editQuestion)
        setAddQuestion(false)
    };
        


    return (
        <div className='relative'>
            <div className='absolute w-screen grid grid-cols-2 text-white'>
                <button className='ml-[50%] mt-8 bg-blue-400 hover:bg-blue-500 h-12 mx-8 text-3xl text-white rounded-md' onClick={handleAddQuestion}>Add Question</button>
                <button className='mr-[50%] mt-8 bg-blue-400 hover:bg-blue-500 h-12 mx-8 text-3xl text-white rounded-md' onClick={handleEditQuestion}>Edit Question</button>
            </div>
            <div>
                {addQuestion ? <AddQuestion solarObjects={solarObjects}/> : null}
                {editQuestion ? <EditQuestionContainer questions={questions} solarObjects={solarObjects} setQuestions={setQuestions} handleEditQuestion={handleEditQuestion}/> : null}
            </div>
        </div>
    )
}

