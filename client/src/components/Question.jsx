import React, { useState } from 'react'

export default function Question({question, setAnswer, setChoice, setPoints, nextQuestion}) {
    const { text, difficulty, points, answer, option1, option2, option3, option4, hint } = question

    const [ showHint, setShowHint ] = useState(false)

    const handleChoiceClick = (e) => {
        setChoice(e.target.value)
        setAnswer(answer)
        setPoints(points)
    }

    const handleAnswerClick = (e) => {
        nextQuestion()
    }

    const handleHint = () => {
        setShowHint(!showHint)
    }

    return (
        <div className='h-72 w-80 outline'>
                <div className='text-center h-16 w-full outline'>{text}</div>
                <div className='grid grid-cols-1'>
                    <button value={option1} onClick={handleChoiceClick}>{option1}</button>
                    <button value={option2} onClick={handleChoiceClick}>{option2}</button>
                    <button value={option3} onClick={handleChoiceClick}>{option3}</button>
                    <button value={option4} onClick={handleChoiceClick}>{option4}</button> 
                </div>
                {showHint ?
                <button className='' onClick={handleHint}>{hint}</button>
                :
                <button className='' onClick={handleHint}>See Hint</button>
                }
                <button value={answer} onClick={handleAnswerClick}>Submit Answer</button>
        </div>
    )
}
