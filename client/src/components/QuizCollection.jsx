import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function QuizCollection({solarObjects}) {
    const [quiz, setQuiz] = useState([])
    const [click, setClick] = useState("");
    // const navigate = useNavigate();
    const selectedQuiz = solarObjects.filter((solarObject) => solarObject[`${click}`] === true)
    
    const handleQuizClick = (e) => {
        setClick(`${e.target.value}`)
        setQuiz(selectedQuiz)
        console.log(quiz)
    }

    return (
        <div className='grid grid-cols-3 grid-rows-1'>
            <button value="isPlanet" onClick={handleQuizClick}>Planet Quiz</button>
            <button value="isMoon" onClick={handleQuizClick}>Moon Quiz</button>
            <button value="isOther" onClick={handleQuizClick}>Sun and Other Quiz</button>
        </div>
    )
}
