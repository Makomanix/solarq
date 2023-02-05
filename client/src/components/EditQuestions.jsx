import React from 'react'
import EditQuestionCards from './EditQuestionCards'
import EditQuestionForm from './EditQuestionForm'
export default function EditQuestions({ questions, edit, setEdit, patchEdit, handleEditQuestion, solarObjects }) {

    const editQuestionCards = questions.map((question) => 
        <EditQuestionCards 
            key={question.id}
            question={question} 
            setEdit={setEdit}
            patchEdit={patchEdit}
            handleEditQuestion={handleEditQuestion}
            />)

    return (
        <div>
            { edit ? 
                <div>
                <EditQuestionForm question={edit} setEdit={setEdit} patchEdit={patchEdit} solarObjects={solarObjects}/>
                </div>
            :
                <div className='absolute bg-slate-900 top-32 mx-[2.5%] h-auto w-auto pb-8 pt-8 px-8 rounded-md outline'>
                    <div className='grid grid-cols-3 gap-y-6 gap-x-4'>
                    {editQuestionCards}
                    </div>
                </div>
        }
        </div>
    )
}

