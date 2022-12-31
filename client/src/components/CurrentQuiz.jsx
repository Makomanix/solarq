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

console.log("score", score)
console.log("total score", totalScore)    
console.log("high_score",high_score)


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
            postLeaderboard()
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
                    score: high_score
                })
                .then(navigate("/leaderboard"))
            })
    }


    
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
    />);

    
    return (
        <div className='relative'>
            <div className='grid grid-cols-3 grid-rows-1'> 
                <button value="planet" onClick={handleQuizClick}>Planet Quiz {planetScore}</button>               
                <button value="moon" onClick={handleQuizClick}>Moon Quiz {moonScore}</button>                               
                <button value="other" onClick={handleQuizClick}>Sun and Other Quiz {otherScore}</button>               
            </div>
            High Score : {high_score} Total Score : {totalScore}
            <div>
                {notSelected ? "Select an Answer to Continue" : null }
            </div>
            <div>{(quiz === "planet" || quiz === "moon" || quiz === "other") ?
                <div className='absolute top-72 left-[39.5%]'>{showQuizResults ? 
                    <QuizComplete  
                    setPlanetScore={setPlanetScore} 
                    setMoonScore={setMoonScore} 
                    setOtherScore={setOtherScore}
                    quiz={quiz} 
                    setQuiz={setQuiz} 
                    score={score}  
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
                    {questionCards[currentQuestion]}
                    </div>
                }
                </div>
            : null }
            </div>
        </div>
    )
};

