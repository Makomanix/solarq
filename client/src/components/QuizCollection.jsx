import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Question from './Question';

export default function QuizCollection({questions}) {
    const [quiz, setQuiz] = useState([])

    const questionCards = questions.map((question) =>
        <Question 
            key={question.id}
            id={question.id}
            question={question}
            />)

    const selectedQuiz = questions.filter((question) => question.catagory === `${quiz}`)
    
    const handleQuizClick = (e) => {
        setQuiz(e.target.value)
    }

    console.log(selectedQuiz)

    return (
        <div>
            <div className='grid grid-cols-3 grid-rows-1'>
                <button value="planet" onClick={handleQuizClick}>Planet Quiz</button>
                <button value="moon" onClick={handleQuizClick}>Moon Quiz</button>
                <button value="other" onClick={handleQuizClick}>Sun and Other Quiz</button>
            </div>
            {/* <Quiz currentQuiz={quiz}/> */}
        </div>
    )
}
