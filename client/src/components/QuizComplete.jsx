import React from 'react'

export default function QuizComplete({ score, pointsPossible, setPointsPossible, showQuizResults, setShowQuizResults, quiz, setQuiz, setPlanetScore, setMoonScore, setOtherScore, updateHighScore, updateScore, patchEachQuiz, saveQuizResults, setSaveQuizResults }) {


    let percentage = (Math.round((score/pointsPossible) * 100).toFixed(2))
        
    
    const seeResults = () => {
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
        <div className='relative'>{saveQuizResults ?
                <div className='absolute top-14 left-[40%] h-80 w-96 grid-cols-1 text-center bg-slate-900 outline rounded-md'>
                    <div className='text-blue-400 mt-6 text-3xl'>Final Results</div>
                <div className='text-blue-400 my-4 text-3xl'>{score} out of {pointsPossible} Points!</div>
                <div className='text-blue-400 text-3xl'>{percentage}%</div>
                <button className='bg-blue-400 h-12 w-80 mt-16 text-3xl hover:bg-blue-500 rounded-md' onClick={handleNextQuiz}>Choose Another Quiz</button>
                </div> :
                <div className='absolute top-14 left-[40%] h-80 w-96 grid-cols-1 text-center bg-slate-900 outline rounded-md'>
                    <button className='h-20 w-80 bg-blue-400 text-white text-6xl mt-28 rounded-lg' onClick={seeResults}>See Results</button>
                </div>
                }
        </div>
    )
}
