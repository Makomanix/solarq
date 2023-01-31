import React, { useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import DeleteQuestions from './DeleteQuestions';

export default function DeleteQuestionContainer({ questions, setQuestions, handleDeleteQuestion }) {
    const [ deleted, setDeleted ] = useState()
    const navigate = useNavigate()
    
    useEffect(() => {
        fetch(`/questions`)
        .then((res) => res.json())
        .then((data) => setQuestions(data))
    }, [navigate]);
    
    const filteredQuestions = questions.filter(question => question.id !== deleted)
        
    function handleDelete(id) {     
        fetch(`/questions/${id}`, {
            method: 'DELETE',
        })
        .then(navigate('/admin'))
    //     .then(fetch(`/questions`)
    //         .then((res) => res.json())
    //         .then((data) => setQuestions(data))
    // );
};

    return (
        <div className='absolute bg-slate-900 top-32 ml-[2.5%] h-auto w-[95%] pb-8 pt-8 px-8 rounded-md outline'>  
            <DeleteQuestions questions={filteredQuestions} handleDelete={handleDelete} setDeleted={setDeleted} handleDeleteQuestion={handleDeleteQuestion} />
        </div>
    )
}
