import React, { useState } from 'react'

export default function Question({ question, questions, stateAnswer, setAnswer, choice, setChoice, setPoints, updateScore, currentQuestion, setNotSelected}) {
    const { text, difficulty, points, answer, option1, option2, option3, option4, hint } = question
    const [ showHint, setShowHint ] = useState(false)
    const [answerOptions, setAnswerOptions] = useState([])
    const [ seeOptions, setSeeOptions] = useState(false)

    
    const options = [option1, option2, option3, option4]
    
    // console.log("choice", choice)
    // console.log("answer", stateAnswer)
    
    const handleChoiceClick = (e) => {
        setChoice(e.target.value)
        setAnswer(answer)
        setPoints(points)
    }
    
    const shuffleOptions = () => { 
        setSeeOptions(!seeOptions)
        setAnswerOptions(options.sort(() => Math.random() - 0.5))}
        
    
        const handleAnswerClick = () => {
            if (choice === "0" && stateAnswer === "1") {
                setNotSelected(true)
            } else {           
                setNotSelected(false)               
                updateScore()
                shuffleOptions()
            }
        }

    const handleHint = () => {
        setShowHint(!showHint)
    }
    
    return (
        <div className='h-72 w-96 outline'>
            <span className='flex items-center justify-center'>
                Question # {currentQuestion + 1} out of {questions.length} : {points} Points
            </span>
            <span className='flex items-center justify-center h-16 outline'>
                {text}
            </span>
            <div>
                <div className='grid grid-cols-1 pt-6 gap-y-2'>
                    <button value={answerOptions[0]} onClick={handleChoiceClick}>{answerOptions[0]}</button>
                    <button value={answerOptions[1]} onClick={handleChoiceClick}>{answerOptions[1]}</button>
                    <button value={answerOptions[2]} onClick={handleChoiceClick}>{answerOptions[2]}</button>
                    <button value={answerOptions[3]} onClick={handleChoiceClick}>{answerOptions[3]}</button>
                </div>
            </div>                
            <div className='grid grid-cols-2 pt-4'>
                {showHint ?
                <button className='' onClick={handleHint}>{hint}</button>
                :
                <button className='' onClick={handleHint}>See Hint</button>
                }
                { seeOptions ? 
                <button onClick={handleAnswerClick}>Submit Answer</button> :
                <button onClick={ shuffleOptions }>See Options</button>
                }
            </div>
        </div>
    )
}

{/* <button value={answer} onClick={handleAnswerClick}>Submit Answer</button> */}
{/* {answerOptions === options ?
<div className='grid grid-cols-1 pt-6 gap-y-2'>                 
<button value={answerOptions[0]} onClick={handleChoiceClick}>{answerOptions[0]}</button>
<button value={answerOptions[1]} onClick={handleChoiceClick}>{answerOptions[1]}</button>
<button value={answerOptions[2]} onClick={handleChoiceClick}>{answerOptions[2]}</button>
<button value={answerOptions[3]} onClick={handleChoiceClick}>{answerOptions[3]}</button>
</div> 
: */}
// const shuffleOptions = answerOptions.sort(() => Math.random() - 0.5)

// const setshuffleOptions = setAnswerOptions(shuffleOptions)