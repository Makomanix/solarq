import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Question from './Question';
import QuizComplete from './QuizComplete';

export default function CurrentQuiz({ selectedQuiz, handleQuizClick, setQuiz}) {
    const [ currentQuestion, setCurrentQuestion ] = useState(0);
    const [ score, setScore ] = useState(0);
    const [ totalScore, setTotalScore ] = useState(0)
    const [ points, setPoints] = useState(0);
    const [ pointsPossible, setPointsPossible ] = useState(0)
    const [ answer, setAnswer] = useState("1");
    const [ choice, setChoice] = useState("0");
    const [ showQuizResults, setShowQuizResults ] = useState(false)
    const [notSelected, setNotSelected] = useState(false)
    
    
    const resetValues = () => {
        setAnswer("1")
        setChoice("0")
    }

    const nextQuestion = () => {
        if(choice === answer) {
            setScore((score) => score + points)
            setPointsPossible((pointsPossible) => pointsPossible + points) 
            resetValues()   
        } else {
            setPointsPossible((pointsPossible) => pointsPossible + points)
            resetValues()
        }

        if(currentQuestion + 1 < selectedQuiz.length) {
            setCurrentQuestion((currentQuestion) => currentQuestion + 1)
            // setPoints
            resetValues()   
        } else {
            setShowQuizResults(true);
            resetValues()
            setCurrentQuestion(0)
        }
    }

    console.log(choice)
    console.log(answer)
    console.log(score)

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
                <button value="planet" onClick={handleQuizClick}>Planet Quiz</button>
                <button value="moon" onClick={handleQuizClick}>Moon Quiz</button>
                <button value="other" onClick={handleQuizClick}>Sun and Other Quiz</button>
            </div>
            <form>
                <select className='absolute top-24 left-[43%]'>
                    <option value=''>Select Difficulty</option>
                    <option value=''>Easy</option>
                    <option value=''>Medium</option>
                    <option value=''>Hard</option>
                    <option value=''>All Difficulties</option>
                </select>
                <select className='absolute top-24 left-[50%]'>
                    <option value=''>Select Quiz</option>
                    <option value=''>Planet Quiz</option>
                    <option value=''>Moon Quiz</option>
                    <option value=''>Other Quiz</option>
                    <option value=''>Everything Quiz</option>
                </select>
                <div>{notSelected ? "Select an Answer to Continue" : null }</div>
            </form>
            {/* <div> {(selectedQuiz >= 0) ?
                null :             
                <span className='absolute top-60 left-[45%]'>Current Score: {score} out of {pointsPossible}</span>               
                }
            </div> */}
            <div className='absolute top-72 left-[39.5%]'>{showQuizResults ? 
            <QuizComplete setQuiz={setQuiz} score={score} pointsPossible={pointsPossible} setShowQuizResults={setShowQuizResults} /> :
            <>
            {questionCards[currentQuestion]}
            </>
            }
            </div>
        </div>
    )
}
