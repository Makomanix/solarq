import React, { useState, useEffect} from 'react'
import DeleteQuestionCards from './DeleteQuestionCards';

export default function DeleteQuestion({questions, setQuestions}) {

    useEffect(() => {
        fetch(`/questions`)
            .then((res) => res.json())
            .then((data) => setQuestions(data))
    }, []);

    console.log(questions)

    const handleDeleteQuestion = () => {
        
    }

    const deleteQuestionCards = questions.map((question) =>
    <DeleteQuestionCards
        key={question.id}
        id={question.id}
        question={question} />)

    return (
        <div>
        {deleteQuestionCards}
        </div>
    )
}
