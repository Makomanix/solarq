import React, {useState, useEffect} from 'react';
import CurrentQuiz from './CurrentQuiz';
import { useNavigate } from 'react-router-dom';

export default function QuizContainer() {
    const [ user, setUser ] = useState([])
    const [ questions, setQuestions ] = useState([])
    const [ quiz, setQuiz ] = useState([])
    const [points, setPoints] = useState(0)
    const [ answer, setAnswer ] = useState("")
    const [ choice, setChoice ] = useState("")
    const navigate = useNavigate();

    useEffect(() => {
        const currentUser = sessionStorage.getItem("user_id")
        if (currentUser == null) {
            navigate('/login')
        } else {
            fetch(`/users/${currentUser}`)
                .then((res) => res.json())
                .then((user) => setUser(user))
        }
    }, [navigate]);

    useEffect(() => {
        fetch('/questions')
            .then((res) => res.json())
            .then((questions) => setQuestions(questions))
    }, []);


    const selectedQuiz = questions.filter((question) => question.catagory === `${quiz}`)
    
    const handleQuizClick = (e) => {
        setQuiz(e.target.value)
    }

    return (
        <div>
            <CurrentQuiz  choice={choice} 
            setChoice={setChoice} 
            answer={answer} 
            setAnswer={setAnswer}
            points={points}
            setPoints={setPoints}
            selectedQuiz={selectedQuiz} 
            handleQuizClick={handleQuizClick}/>             
        </div>
    )
}
