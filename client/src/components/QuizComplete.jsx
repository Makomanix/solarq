import React from 'react'

export default function QuizComplete({score, pointsPossible, setQuizResults, setQuiz }) {


    let percentage = (Math.round((score/pointsPossible) * 100).toFixed(2))

    const handleNextQuiz = () => {
        setQuizResults(false)
        setQuiz([])
        
        
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
