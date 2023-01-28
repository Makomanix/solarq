import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function QuizComplete({ score, pointsPossible, postLeaderboard, setPointsPossible, setShowQuizResults, quiz, setQuiz, planetScore, setPlanetScore, moonScore, setMoonScore, otherScore, setOtherScore, updateHighScore, patchEachQuiz, saveQuizResults, setSaveQuizResults }) {

    const navigate = useNavigate();

    let percentage = (Math.round((score/pointsPossible) * 100).toFixed(2));
        
    
    const seeResults = () => {
        if (quiz === "planet") {
            setPlanetScore(score)
            // planetScore = score
            updateHighScore()
            
        } else if (quiz === "moon") {
            setMoonScore(score)
            // moonScore = score
            updateHighScore()
            
        } else {
            setOtherScore(score)
            // otherScore = score
            updateHighScore()    
        }
            setSaveQuizResults(true)
        };

    const handleNextQuiz = () => {
        setShowQuizResults(false)
        setSaveQuizResults(false)
        setQuiz("");
        setPointsPossible(0)
        patchEachQuiz()
    };

    const handleLastQuiz = () => {
        postLeaderboard()
        navigate("/leaderboard")
    }

    const chooseAnotherQuiz = ((planetScore > 0 && moonScore > 0 && otherScore > 0) ?
        <button className='bg-blue-400 h-12 w-80 mt-16 text-3xl hover:bg-blue-500 rounded-md' onClick={handleLastQuiz}>Check the Leaderboard</button> :
        <button className='bg-blue-400 h-12 w-80 mt-16 text-3xl hover:bg-blue-500 rounded-md' onClick={handleNextQuiz}>Choose Another Quiz</button>);

    return (
        <div className='relative'>{saveQuizResults ?
                <div className='absolute top-14 left-[42.15%] h-80 w-96 grid-cols-1 text-center bg-slate-900 outline rounded-md'>
                    <div className='text-blue-400 mt-6 text-3xl'>Final Results</div>
                <div className='text-blue-400 my-4 text-3xl'>{score} out of {pointsPossible} Points!</div>
                <div className='text-blue-400 text-3xl'>{percentage}%</div>
                {chooseAnotherQuiz}
                </div> :
                <div className='absolute top-14 left-[42.15%] h-56 w-96 grid-cols-1 text-center bg-slate-900 outline rounded-md'>
                    <button className='h-16 w-80 bg-blue-400 text-white text-5xl mt-20 rounded-lg' onClick={seeResults}>See Results</button>
                </div>
                }
        </div>
    )
};
