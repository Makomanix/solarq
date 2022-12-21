import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Question from './Question';

export default function QuizCollection({ selectedQuiz, handleQuizClick, setAnswer, answer, choice, setChoice, points, setPoints}) {
    const [ currentQuestion, setCurrentQuestion ] = useState(0);
    const [ score, setScore ] = useState(0);
    

    const nextQuestion = () => {
        if(choice === answer) {
            setScore((score) => score + points)
            setCurrentQuestion((currentQuestion) => currentQuestion + 1)
        }
    }
    const questionCards = selectedQuiz.map((question) =>
        <Question 
            key={question.id}
            id={question.id}
            question={question}
            setAnswer={setAnswer}
            setChoice={setChoice}
            setPoints={setPoints}
            nextQuestion={nextQuestion}
            />);


    console.log(choice, answer, points)

    return (
        <div>
            <div className='grid grid-cols-3 grid-rows-1'>
                <button value="planet" onClick={handleQuizClick}>Planet Quiz</button>
                <button value="moon" onClick={handleQuizClick}>Moon Quiz</button>
                <button value="other" onClick={handleQuizClick}>Sun and Other Quiz</button>
            </div>
            <span>Current Score: {score}</span>
            {questionCards[currentQuestion]}
        </div>
    )
}
