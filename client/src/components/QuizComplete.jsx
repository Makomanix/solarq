import React from 'react'

export default function QuizComplete({user, setUser, score, highScore, pointsPossible, setShowQuizResults, setQuiz }) {


    let percentage = (Math.round((score/pointsPossible) * 100).toFixed(2))

    const handleNextQuiz = () => {
        setShowQuizResults(false)
        setQuiz([]); 
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
            }))
    }

    

    

    return (
        <div>
            <div>Final Results</div>
            <div>{score} out of {pointsPossible} Points!</div>
            <div>{percentage}%</div>
            <button onClick={handleNextQuiz}>Choose Another Quiz</button>
        </div>
    )
}
