import React, {useState, useEffect} from 'react';
import QuizCollection from './QuizCollection';
import { useNavigate } from 'react-router-dom';

export default function QuizContainer({solarObjects}) {
    const [ quiz, setQuiz ] = useState([])
    const navigate = useNavigate();
    
//     const selectedQuiz = solarObjects.filter((solarObject) => solarObject[`${click}`] === true)
//         setQuiz(selectedQuiz)
    const handleOnClick = (e) => {
        navigate('/quizes')
    }
    // const handleQuizClick = (e) => {
    //     setClick`${e.target.value}`
    // }

    return (
        <div>
            <QuizCollection />             
        </div>
    )
}
