import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Question from './Question';
import QuizComplete from './QuizComplete';

export default function CurrentQuiz({ questions, setQuestions, handleQuizClick, quiz, setQuiz, user, setUser,}) {
    const { id, username, score, highScore } = user
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
    const [ notSelected, setNotSelected ] = useState(false)
    
    const resetAnswerChoice = () => {
        setAnswer("1")
        setChoice("0")
    };
    
    const updateHighScore = () => {
        if(score > highScore) {
            setUser({ ...user, highScore: score })
        }
    };
    
    const updateScore = () => {
        if(choice === answer) { 
            // setUser( { score: (score + points)} )
            fetch(`/users/${id}`, {
                method: "PATCH",
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({
                    id: id,
                    username: username,
                    score: (score + points),
                    highScore: highScore
                })
            })
                .then(res => res.json())
                .then(user => setUser ({
                    id: id,
                    username: username,
                    score: user.score,
                    highScore: highScore
                }))
            setPointsPossible((pointsPossible) => pointsPossible + points)
            updateHighScore()
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

    console.log("score", score)
    console.log("points", points)
    console.log("points possible", pointsPossible)
    console.log("choice", choice)
    console.log("answer", answer)
    
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
                <button value="moon" onClick={handleQuizClick}>Moon Quiz</button>                               
                <button value="other" onClick={handleQuizClick}>Sun and Other Quiz</button>               
            </div>
            {highScore} : {planetScore}
            <div>{notSelected ? "Select an Answer to Continue" : null }</div>
            <div>{(quiz === "planet" || quiz === "moon" || quiz === "other") ?
                <div className='absolute top-72 left-[39.5%]'>{showQuizResults ? 
                    <QuizComplete user={user} 
                    setUser={setUser} 
                    setPlanetScore={setPlanetScore} 
                    setMoonScore={setMoonScore} 
                    setOtherScore={setOtherScore} 
                    quiz={quiz} 
                    setQuiz={setQuiz} 
                    score={score} 
                    highScore={highScore} 
                    pointsPossible={pointsPossible} 
                    setPointsPossible={setPointsPossible}
                    setShowQuizResults={setShowQuizResults} /> :
                    <div>
                {questionCards[currentQuestion]}
                </div>
                }
                </div>
            : null }
            </div>
        </div>
    )
}

// console.log(questions)
// const updateCurrentQuizScore () => {
    //     if (quiz === "planet") {
        //         setPlanetScore(score)
        //         patchQuizScore()
        //     } else if (quiz === "moon") {
            //         setMoonScore(score)
            //     } else {
                //         setOtherScore(score)
                //     }
                // }
                
                // console.log()

                // setUser{...user, user.score: score , user.highScore: highScore}
                // console.log(planetScore)
                
                // const displayQuiz = () => {
                    // if(quiz === "planet" || quiz === "moon" || quiz === "other")
                
                // }
                // console.log(choice)
                // console.log(answer)