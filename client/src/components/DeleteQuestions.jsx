import React from 'react'
import DeleteQuestion from './DeleteQuestion'
export default function DeleteQuestions({ questions, setDeleted, handleDelete, handleDeleteQuestion }) {

    const deleteQuestion = questions.map((question) => 
        <DeleteQuestion 
            key={question.id}
            question={question} 
            setDeleted={setDeleted}
            handleDelete={handleDelete}
            handleDeleteQuestion={handleDeleteQuestion}
            />)

    return (
        <div className='grid grid-cols-3 gap-y-6 gap-x-4'>
            {deleteQuestion}
        </div>
    )
}

// <div className=' bg-blue-400 hover:bg-blue-500 text-white rounded-md text-center'>
    {/* <button className='h-24 px-2 text-xl overflow-hidden' value={question.id} onClick={handleClick}>{text}</button> */}
// </div>