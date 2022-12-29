import React, { useState } from 'react'

export default function Question({ question, questions, stateAnswer, setAnswer, choice, setChoice, setPoints, updateScore, currentQuestion, setNotSelected}) {
    const { text, difficulty, points, answer, option1, option2, option3, option4, hint } = question
    const [ showHint, setShowHint ] = useState(false)

    const handleChoiceClick = (e) => {    
        setChoice(e.target.value)
        setAnswer(answer)
        setPoints(points)
    }

    let options = [option1, option2, option3, option4]
    
    const shuffleOptions = options.sort(() => Math.random() - 0.5)

    console.log(shuffleOptions)
    
    const handleAnswerClick = (e) => {
        if (choice === "0" && stateAnswer === "1") {
            setNotSelected(true)
        } else {           
            setNotSelected(false)
        updateScore()
        }
    }

    const handleHint = () => {
        setShowHint(!showHint)
    }

    return (
        <div className='h-72 w-96 outline'>
            <span className='flex items-center justify-center'>Question # {currentQuestion + 1} out of {questions.length} : {points} Points</span>
                <span className='flex items-center justify-center h-16 outline'>{text}</span>
                <div className='grid grid-cols-1 pt-6 gap-y-2'>
                <button value={shuffleOptions[0]} onClick={handleChoiceClick}>{shuffleOptions[0]}</button>
                <button value={shuffleOptions[1]} onClick={handleChoiceClick}>{shuffleOptions[1]}</button>
                <button value={shuffleOptions[2]} onClick={handleChoiceClick}>{shuffleOptions[2]}</button>
                <button value={shuffleOptions[3]} onClick={handleChoiceClick}>{shuffleOptions[3]}</button> 
                </div>
                <div className='grid grid-cols-2 pt-4'>
                    {showHint ?
                    <button className='' onClick={handleHint}>{hint}</button>
                    :
                    <button className='' onClick={handleHint}>See Hint</button>
                    }
                    <button value={answer} onClick={handleAnswerClick}>Submit Answer</button>
            </div>
        </div>
    )
}
