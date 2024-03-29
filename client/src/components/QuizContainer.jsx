import React, {useState, useEffect} from 'react';
import CurrentQuiz from './CurrentQuiz';
import { useNavigate } from 'react-router-dom';

export default function QuizContainer({ questions, setQuestions }) {
    const navigate = useNavigate();
    
    const [ quiz, setQuiz ] = useState("")
    const [ user, setUser ] = useState({
    id: 0,
    username: "",
        score: 0,
        high_score: 0,        
})
    

    useEffect(() => {
        const currentUser = sessionStorage.getItem("user_id")
        if (currentUser == null) {
            navigate('/login')
        } else {
            fetch(`/users/${currentUser}`)
                .then((res) => res.json())
                .then((user) => setUser({
                    id: user.id,
                    username: user.username,
                    score: 0,
                    high_score: user.high_score,
                }))
            }
        }, [navigate]);
        
        


    useEffect(() => {
        fetch(`/questions/${quiz}`)
            .then((res) => res.json())
            .then((data) => setQuestions(data))
    }, [quiz]);
    

    const handleQuizClick = (e) => {
        setQuiz(e.target.value)
    };

    

    return (
        <div>
            <CurrentQuiz
            user={user}
            setUser={setUser}
            quiz={quiz}
            setQuiz={setQuiz}
            questions={questions}
            setQuestions={setQuestions}
            handleQuizClick={handleQuizClick}/> 
        </div>
    )
};
