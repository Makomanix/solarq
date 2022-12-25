import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Question from './Question';
import QuizComplete from './QuizComplete';

export default function CurrentQuiz({ selectedQuiz, handleQuizClick, quiz, setQuiz, user, setUser, patchUserScores}) {
    const { score, highScore } = user
    const [ currentQuestion, setCurrentQuestion ] = useState(0);
    const [ points, setPoints ] = useState(0);
    const [ pointsPossible, setPointsPossible ] = useState(0)
    const [ answer, setAnswer ] = useState("1");
    const [ choice, setChoice ] = useState("0");
    const [ showQuizResults, setShowQuizResults ] = useState(false)
    const [ notSelected, setNotSelected ] = useState(false)
    
    // setUser{...user, user.score: score , user.highScore: highScore}

    const resetAnswerChoice = () => {
        setAnswer("1")
        setChoice("0")
    }

    const updateHighScore = () => {
        if(score > highScore) {
            setUser({ ...user, highScore: score })
        }
    }

    console.log(score, highScore)

    const nextQuestion = () => {
        if(choice === answer) { 
            setUser( {...user, score: (score + points)}  )
            setPointsPossible((pointsPossible) => pointsPossible + points)
            updateHighScore()
            resetAnswerChoice()   
        } else {
            setPointsPossible((pointsPossible) => pointsPossible + points)
            resetAnswerChoice()
        }
        
        if(currentQuestion + 1 < selectedQuiz.length) {
            setCurrentQuestion((currentQuestion) => currentQuestion + 1)
            
            resetAnswerChoice()   
        } else {
            setShowQuizResults(true);
            resetAnswerChoice()
            setCurrentQuestion(0)
        }
    }

    // const updateHighScore = () => {

    // }


    const questionCards = selectedQuiz.map((question) =>
        <Question 
            key={question.id}
            id={question.id}
            question={question}
            setAnswer={setAnswer}
            setChoice={setChoice}
            setPoints={setPoints}
            nextQuestion={nextQuestion}
            currentQuestion={currentQuestion}
            selectedQuiz={selectedQuiz}
            choice={choice}
            setNotSelected={setNotSelected}
            stateAnswer={answer}
            />);

            // const resetCurrentQuestion = () => {
            //     if(currentQuestion === selectedQuiz.length)
            //     setCurrentQuestion(0)
            // }


    return (
        <div className='relative'>
            <div className='grid grid-cols-3 grid-rows-1'> 
            {/* {quiz === "planet" || "moon" || "other" ? null : */}
            <>
                <button value="planet" onClick={handleQuizClick}>Planet Quiz</button>               
                <button value="moon" onClick={handleQuizClick}>Moon Quiz</button>                               
                <button value="other" onClick={handleQuizClick}>Sun and Other Quiz</button>               
            </>
            {/* } */}
            </div>
            {highScore}
                <div>{notSelected ? "Select an Answer to Continue" : null }</div>
            <div className='absolute top-72 left-[39.5%]'>{showQuizResults ? 
            <QuizComplete user={user} setUser={setUser} setQuiz={setQuiz} score={score} highScore={highScore} pointsPossible={pointsPossible} setShowQuizResults={setShowQuizResults} /> :
            <>
            {questionCards[currentQuestion]}
            </>
            }
            </div>
        </div>
    )
}
