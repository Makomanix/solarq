import React, { useState } from 'react'

export default function Question({question, setAnswer, setChoice, setPoints, nextQuestion, currentQuestion, selectedQuiz}) {
    const { text, difficulty, points, answer, option1, option2, option3, option4, hint } = question

    const [ showHint, setShowHint ] = useState(false)

    const handleChoiceClick = (e) => {
        setChoice(e.target.value)
        setAnswer(answer)
        setPoints(points)
        console.log(e.target.value)
        console.log(answer)
        console.log(points)
    }
    

    const handleAnswerClick = (e) => {
        nextQuestion()
    }

    const handleHint = () => {
        setShowHint(!showHint)
    }

    return (
        <div className='h-72 w-96 outline'>
            <span className='flex items-center justify-center'>Question # {currentQuestion + 1} out of {selectedQuiz.length}</span>
                <span className='flex items-center justify-center h-16 outline'>{text}</span>
                <div className='grid grid-cols-1 pt-6 gap-y-2'>
                    <button value={option1} onClick={handleChoiceClick}>{option1}</button>
                    <button value={option2} onClick={handleChoiceClick}>{option2}</button>
                    <button value={option3} onClick={handleChoiceClick}>{option3}</button>
                    <button value={option4} onClick={handleChoiceClick}>{option4}</button> 
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
