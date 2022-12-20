import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Question from './Question';

export default function QuizCollection({questions}) {

    const questionCards = questions.map((question) =>
        <Question 
            key={question.id}
            id={question.id}
            question={question}
            />)

    const [quiz, setQuiz] = useState([])
    
    
    const handleQuizClick = (e) => {
        setQuiz(`${e.target.value}`)
    }

    return (
        <div>
            <div className='grid grid-cols-3 grid-rows-1'>
                <button value="isPlanet" onClick={handleQuizClick}>Planet Quiz</button>
                <button value="isMoon" onClick={handleQuizClick}>Moon Quiz</button>
                <button value="isOther" onClick={handleQuizClick}>Sun and Other Quiz</button>
            </div>
            {/* <Quiz currentQuiz={quiz}/> */}
        </div>
    )
}
