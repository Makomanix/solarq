import React from 'react'

export default function EditQuestionCards({ question, setEdit}) {
    const {text} = question

    const handleClick = () => {
        setEdit(question)       
    }



    return (
        <button className='h-12 px-2 bg-blue-400 hover:bg-blue-500 text-center text-2xl text-white truncate rounded-md'
        onClick={handleClick}>
            {text}
        </button>
    )
}
