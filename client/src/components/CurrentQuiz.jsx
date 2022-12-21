import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Question from './Question';

export default function QuizCollection({ selectedQuiz, handleQuizClick}) {
    const [ currentQuestion, setCurrentQuestion ] = useState(0);
    const [ score, setScore ] = useState(0);
    const [ points, setPoints] = useState(0);
    const [ pointsPossible, setPointsPossible ] = useState(0)
    const [ answer, setAnswer] = useState("");
    const [ choice, setChoice] = useState("");
    
    

    const nextQuestion = () => {
        if(choice === answer) {
            setScore((score) => score + points)
            setPointsPossible((pointsPossible) => pointsPossible + points)
            setCurrentQuestion((currentQuestion) => currentQuestion + 1)   
        } else {
            setPointsPossible((pointsPossible) => pointsPossible + points)
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

    // console.log(selectedQuiz[1].points)
    // console.log(choice, answer, points)
    

    return (
        <div>
            <div className='grid grid-cols-3 grid-rows-1'>
                <button value="planet" onClick={handleQuizClick}>Planet Quiz</button>
                <button value="moon" onClick={handleQuizClick}>Moon Quiz</button>
                <button value="other" onClick={handleQuizClick}>Sun and Other Quiz</button>
            </div>
            {questionCards[currentQuestion]}
            <span>Current Score: {score} out of {pointsPossible}</span>
        </div>
    )
}
