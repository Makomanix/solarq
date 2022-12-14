import React, { useState } from 'react'

export default function Question({ question, questions, stateAnswer, setAnswer, choice, setChoice, setPoints, updateScore, currentQuestion, setNotSelected, score}) {
    const { text, difficulty, points, answer, option1, option2, option3, option4, hint } = question
    const [ showHint, setShowHint ] = useState(false)
    const [answerOptions, setAnswerOptions] = useState([])
    const [ seeOptions, setSeeOptions] = useState(false)

    
    const options = [option1, option2, option3, option4]

    
    const handleChoiceClick = (e) => {
        setChoice(e.target.value)
        setAnswer(answer)
        setPoints(points)
    };

    
    const shuffleOptions = () => { 
        setSeeOptions(!seeOptions)
        setAnswerOptions(options.sort(() => Math.random() - 0.5))
    };
        
    
    const handleAnswerClick = () => {
        if (choice === "0" && stateAnswer === "1") {
            setNotSelected(true)
        } else {           
            setNotSelected(false)               
            updateScore()
            shuffleOptions()
        }
    };


    const handleHint = () => {
        setShowHint(!showHint)
    };

    
    return (
        <div className='mt-28 h-[200%] w-[100%] bg-slate-900 outline rounded-md'>
            <span className='flex items-center justify-center py-4 bg-blue-400 text-white text-xl'>
                <p>Question # {currentQuestion + 1} out of {questions.length} : {points} Points</p>
            </span>
            <span className='grid grid-cols-1 pt-2 h-14 text-center text-blue-400 text-xl '>
                {text}
            </span>
            <div>
                <div className='grid grid-cols-1 pt-6 gap-y-4'>
                    <button className='mx-24 h-14 bg-blue-400 hover:bg-blue-500 focus:bg-blue-500 text-xl text-white rounded-md' value={answerOptions[0]} onClick={handleChoiceClick}>{answerOptions[0]}</button>
                    <button className='mx-24 h-14 bg-blue-400 hover:bg-blue-500 focus:bg-blue-500 text-xl text-white rounded-md' value={answerOptions[1]} onClick={handleChoiceClick}>{answerOptions[1]}</button>
                    <button className='mx-24 h-14 bg-blue-400 hover:bg-blue-500 focus:bg-blue-500 text-xl text-white rounded-md' value={answerOptions[2]} onClick={handleChoiceClick}>{answerOptions[2]}</button>
                    <button className='mx-24 h-14 bg-blue-400 hover:bg-blue-500 focus:bg-blue-500 text-xl text-white rounded-md' value={answerOptions[3]} onClick={handleChoiceClick}>{answerOptions[3]}</button>
                </div>
            </div>                
            <div className='grid grid-cols-1 pt-8 gap-y-4'>
                {showHint ?
                    <button className='h-14 mx-[30%] w-auto bg-blue-400 text-white text-xl hover:bg-blue-500 rounded-md' onClick={handleHint}>{hint}</button>
                :
                    <button className='h-12 mx-[30%] w-[40%] bg-blue-400 text-white text-xl hover:bg-blue-500 rounded-md' onClick={handleHint}>See Hint</button>
                }
                { seeOptions ? 
                    <button className='h-12 mx-[30%] w-[40%] bg-blue-400 text-white text-xl hover:bg-blue-500 rounded-md' onClick={handleAnswerClick}>Submit Answer</button> :
                    <button className='h-12 mx-[30%] w-[40%] bg-blue-400 text-white text-xl hover:bg-blue-500 rounded-md' onClick={ shuffleOptions }>See Options</button>
                }
            </div>
        </div>
    )
};
