import React, {useState, useEffect} from 'react';
import CurrentQuiz from './CurrentQuiz';
import { useNavigate } from 'react-router-dom';

export default function QuizContainer() {
    const [ user, setUser ] = useState({
        id: 0,
        username: "",
        score: 0,
        highScore: 0,
})

    const [ questions, setQuestions ] = useState([])
    const [ quiz, setQuiz ] = useState("")
    // const [ shuffledQuiz, setShuffledQuiz] = useState([])

    const navigate = useNavigate();

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
                    highScore: user.high_score,
                }))
        }
    }, [navigate]);

    useEffect(() => {
        fetch('/questions')
            .then((res) => res.json())
            .then((questions) => setQuestions(questions))
    }, [navigate]);
    

    const selectedQuiz = questions.filter((question) => question.category === `${quiz}`)
    
    const handleQuizClick = (e) => {
        setQuiz(e.target.value)
        // getRandom()
    }
    
    // function getRandom() {
    //     const shuffled = [...selectedQuiz].sort(() => 0.5 - Math.random()).slice(0, 6);
        
    //     setShuffledQuiz(shuffled)
    // };
    
    console.log(selectedQuiz)
    // console.log(shuffledQuiz)

    return (
        <div>
            <CurrentQuiz
            user={user}
            setUser={setUser}
            quiz={quiz}
            setQuiz={setQuiz}
            selectedQuiz={selectedQuiz}
            // shuffledQuiz={shuffledQuiz} 
            handleQuizClick={handleQuizClick}/>
        </div>
    )
}
