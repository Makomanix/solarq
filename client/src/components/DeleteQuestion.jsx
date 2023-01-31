import React from 'react'

export default function DeleteQuestion({ question, setDeleted, handleDelete, handleDeleteQuestion }) {
    const {text} = question

    const handleClick = (e) => {
        setDeleted(e.target.value)
        handleDelete(e.target.value)
        handleDeleteQuestion()
        
        
    }

    return (
        <button className='h-12 px-2 bg-blue-400 hover:bg-blue-500 text-center text-2xl text-white truncate rounded-md'
        value={question.id} onClick={handleClick}>
            {text}
        </button>
    )
}
