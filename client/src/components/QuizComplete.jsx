import React from 'react'

export default function QuizComplete({ score, pointsPossible, setPointsPossible, showQuizResults, setShowQuizResults, quiz, setQuiz, setPlanetScore, setMoonScore, setOtherScore, updateHighScore, updateScore, patchEachQuiz, saveQuizResults, setSaveQuizResults }) {


    let percentage = (Math.round((score/pointsPossible) * 100).toFixed(2))
        
    // const handleNextQuiz = () => {
    const handleClick = () => {
        if (quiz === "planet") {
            setPlanetScore(score)
            updateHighScore()
            
        } else if (quiz === "moon") {
            setMoonScore(score)
            updateHighScore()
            
        } else {
            setOtherScore(score)
            updateHighScore()    
        }
            setSaveQuizResults(true)
        }

    const handleNextQuiz = () => {
        setShowQuizResults(false)
        setSaveQuizResults(false)
        setQuiz("");
        setPointsPossible(0)
        patchEachQuiz()
    }

    return (
        <div>{saveQuizResults ?
                <div>
                    <div>Final Results</div>
                    <div>{score} out of {pointsPossible} Points!</div>
                    <div>{percentage}%</div>
                    <button onClick={handleNextQuiz}>Choose Another Quiz</button>
                </div> :
                <div>
                    <button onClick={handleClick}>See Results</button>
                </div>
                }
        </div>
    )
}
