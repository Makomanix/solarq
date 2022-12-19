import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function QuizCollection() {
    const [click, setClick] = useState("");
    const navigate = useNavigate();

    const handleQuizClick = (e) => {
        navigate(`${e.target.value}`)
    }

    return (
        <div>
            <button value="isPlanet" onClick={handleQuizClick}>Planet Quiz</button>
            <button value="isMoon" onClick={handleQuizClick}>Moon Quiz</button>
            <button value="isOther" onClick={handleQuizClick}>Sun and Other Bodies</button>
        </div>
    )
}
