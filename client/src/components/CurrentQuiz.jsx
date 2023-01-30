import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Question from './Question';
import QuizComplete from './QuizComplete';

export default function CurrentQuiz({ questions, setQuestions, handleQuizClick, quiz, setQuiz, user, setUser,}) {
    const { id, username, score, high_score } = user
    const [ planetScore, setPlanetScore] = useState(0)
    const [ moonScore, setMoonScore ] = useState(0)
    const [ otherScore, setOtherScore ] = useState(0)
    const [ totalScore, setTotalScore ] = useState(0)
    const [ currentQuestion, setCurrentQuestion ] = useState(0);
    const [ points, setPoints ] = useState(0);
    const [ pointsPossible, setPointsPossible ] = useState(0)
    const [ answer, setAnswer ] = useState("1");
    const [ choice, setChoice ] = useState("0");
    const [ showQuizResults, setShowQuizResults ] = useState(false)
    const [ saveQuizResults, setSaveQuizResults ] = useState(false)
    const [ notSelected, setNotSelected ] = useState(false)
    const navigate = useNavigate()


    const resetAnswerChoice = () => {
        setAnswer("1")
        setChoice("0")
    };

    
    const updateHighScore = () => {
        if(totalScore > high_score ) {
            setUser({...user, high_score: totalScore })
        }
    };


    const updateScore = () => {
        if(choice === answer) {
            setTotalScore((totalScore) => totalScore + points)
            setUser({...user, score: (score + points)})
            setPointsPossible((pointsPossible) => pointsPossible + points)
            resetAnswerChoice()
            nextQuestion()
            
        } else {
            setPointsPossible((pointsPossible) => pointsPossible + points)
            resetAnswerChoice()
            nextQuestion()
        }
    };


    const nextQuestion = () => {
        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion((currentQuestion) => currentQuestion + 1)
        } else {
            setShowQuizResults(true);
            setCurrentQuestion(0)

        }
    };

    
    const patchEachQuiz = () => {
        fetch(`/users/${user.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id,
                username: username,
                score: score,
                high_score: high_score
            })
        })
            .then(res => res.json())
            .then(user => setUser({
                id: id,
                username: username,
                score: 0,
                high_score: high_score
            }))
    };


    const postLeaderboard = () => {
        if(planetScore > 0 && moonScore > 0 && otherScore > 0) 
            fetch(`/leaderboards`, {
                method: 'POST',
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({
                    username: username,
                    total_score: totalScore,
                    planet_score: planetScore,
                    moon_score: moonScore,
                    other_score: otherScore
                })
                
            })
            
    };


    const planetQuizComplete = (planetScore > 0 ? 
        <button className='h-14 w-72 bg-blue-400 text-4xl text-white-400 rounded-md' value="planet" >Planet Quiz {planetScore}</button> :
        <button className='h-14 w-72 bg-slate-900 text-4xl text-blue-400 rounded-md hover:text-white hover:bg-blue-400' value="planet" onClick={handleQuizClick}>Planet Quiz</button>);

    const moonQuizComplete = (moonScore > 0 ?
        <button className='h-14 w-72 bg-blue-400 text-4xl text-white-400 rounded-md ' value="moon" >Moon Quiz {moonScore}</button> :
        <button className='h-14 w-72 bg-slate-900 text-4xl text-blue-400 rounded-md hover:text-white hover:bg-blue-400' value="moon" onClick={handleQuizClick}>Moon Quiz</button>);   
        
    const otherQuizComplete = (otherScore > 0 ?
        <button className='h-14 w-72 bg-blue-400 text-4xl text-white-400 rounded-md ' value="other" >Sun+ Quiz {otherScore}</button> :
        <button className='h-14 w-72 bg-slate-900 text-4xl text-blue-400 rounded-md hover:text-white hover:bg-blue-400' value="other" onClick={handleQuizClick}>Sun+ Quiz</button>);    


    
    const questionCards = questions.map((question) =>
    <Question 
        key={question.id}
        id={question.id}
        question={question}
        setAnswer={setAnswer}
        setChoice={setChoice}
        setPoints={setPoints}
        updateScore={updateScore}
        currentQuestion={currentQuestion}
        questions={questions}
        choice={choice}
        setNotSelected={setNotSelected}
        stateAnswer={answer}
        score={score}
    />);

    
    return (
        <div className='relative'>
            <div className='h-16 ml-[16.5%] w-auto grid grid-cols-3 mt-4 grid-rows-1 '>
                <div>
                    {planetQuizComplete}
                </div>
                <div>
                    {moonQuizComplete}
                </div>
                <div>
                    {otherQuizComplete}
                </div>            
            </div>
            <div>{(quiz === "planet" || quiz === "moon" || quiz === "other") ?
                <div className='relative'>{showQuizResults ? 
                    <QuizComplete  
                    planetScore={planetScore}
                    setPlanetScore={setPlanetScore}
                    moonScore={moonScore}
                    setMoonScore={setMoonScore}
                    otherScore={otherScore}
                    setOtherScore={setOtherScore}
                    quiz={quiz} 
                    setQuiz={setQuiz} 
                    score={score}
                    postLeaderboard={postLeaderboard}
                    pointsPossible={pointsPossible} 
                    setPointsPossible={setPointsPossible}
                    setShowQuizResults={setShowQuizResults}
                    showQuizResults={showQuizResults}
                    saveQuizResults={saveQuizResults} 
                    setSaveQuizResults={setSaveQuizResults}
                    updateHighScore={updateHighScore}
                    updateScore={updateScore}
                    patchEachQuiz={patchEachQuiz}/> :
                    <div>
                        <div className='mx-[27%] h-72 w-[46%]'>
                        {questionCards[currentQuestion]}
                        </div>
                        <div className='absolute -top-16 left-[23%] w-[13%] h-10 text-white bg-blue-400 text-2xl text-center rounded-md '>
                            High Score: {high_score} 
                        </div>
                        <div className='absolute -top-16 left-[63.5%] w-[13%] h-10  text-white bg-blue-400 text-2xl text-center rounded-md '>
                            Current Score: {score} 
                        </div>
                        <div className='absolute -top-[21%] left-[41.6%] h-10 w-80 grid grid-cols-1 rounded-md'>
                            <span className='text-3xl text-center font-bold text-red-500 '>{notSelected ? "Answer to Continue" : null}</span>
                        </div>
                    </div>
                }
                </div>
                : null }
            </div>
        </div>
    )
};

