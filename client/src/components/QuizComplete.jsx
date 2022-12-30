import React from 'react'

export default function QuizComplete({ user, setUser, score, highScore, pointsPossible, setPointsPossible, setShowQuizResults, quiz, setQuiz, setPlanetScore, setMoonScore, setOtherScore }) {


    let percentage = (Math.round((score/pointsPossible) * 100).toFixed(2))
        
    const handleNextQuiz = () => {
        setPlanetScore(score)
        if (quiz === "planet") {
            setPlanetScore(score)
        } else if (quiz === "moon") {
            setMoonScore(score)
        } else {
            setOtherScore(score)
        }
        setShowQuizResults(false)
        setQuiz(""); 
        fetch(`/users/${user.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: user.id,
                username: user.username,
                score: score,
                highScore: highScore
            })
        })
            .then(res => res.json())
            .then(user => setUser({
                id: user.id,
                username: user.username,
                score: 0,
                highScore: user.high_score,
            }),
            setPointsPossible(0))
        }
    
    // const handleNextQuiz = () => {
    // }
    
    // console.log(quiz)




    return (
        <div>
            <div>Final Results</div>
            <div>{score} out of {pointsPossible} Points!</div>
            <div>{percentage}%</div>
            <button onClick={handleNextQuiz}>Choose Another Quiz</button>
        </div>
    )
}
