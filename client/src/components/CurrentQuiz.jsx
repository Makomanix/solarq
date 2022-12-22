import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Question from './Question';
import QuizComplete from './QuizComplete';

export default function CurrentQuiz({ selectedQuiz, handleQuizClick, setQuiz}) {
    const [ currentQuestion, setCurrentQuestion ] = useState(0);
    const [ score, setScore ] = useState(0);
    const [ points, setPoints] = useState(0);
    const [ pointsPossible, setPointsPossible ] = useState(0)
    const [ answer, setAnswer] = useState("");
    const [ choice, setChoice] = useState("");
    const [ quizResults, setQuizResults ] = useState(false)
    
    

    const nextQuestion = () => {
        if(choice === answer) {
            setScore((score) => score + points)
            setPointsPossible((pointsPossible) => pointsPossible + points)    
        } else {
            setPointsPossible((pointsPossible) => pointsPossible + points)
        }

        if(currentQuestion + 1 < selectedQuiz.length) {
            setCurrentQuestion((currentQuestion) => currentQuestion + 1)   
        } else {
            setQuizResults(true);
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
            currentQuestion={currentQuestion}
            selectedQuiz={selectedQuiz}
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
                <select className='absolute top-24 left-[44%]'>Question Difficulty
                    <option value=''>Easy</option>
                    <option value=''>Medium</option>
                    <option value=''>Hard</option>
                    <option value=''>All</option>
                </select>
                <select className='absolute top-24 left-[49%]'>Question Difficulty
                    <option value=''>Planet Quiz</option>
                    <option value=''>Moon Quiz</option>
                    <option value=''>Other Quiz</option>
                    <option value=''>Everything Quiz</option>
                </select>
            </form>
            <div> {(selectedQuiz >= 0) ?
                null :             
                <span className='absolute top-60 left-[45%]'>Current Score: {score} out of {pointsPossible}</span>               
                }
            </div>
            <div className='absolute top-72 left-[39.5%]'>{quizResults ? 
            <QuizComplete setQuiz={setQuiz} score={score} pointsPossible={pointsPossible} setQuizResults={setQuizResults} /> :
            <>
            {questionCards[currentQuestion]}
            </>
            }
            </div>
        </div>
    )
}
