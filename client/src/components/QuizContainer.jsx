import React, {useState, useEffect} from 'react';
import CurrentQuiz from './CurrentQuiz';
import { useNavigate } from 'react-router-dom';

export default function QuizContainer() {
    const [ user, setUser ] = useState([])
    const [ questions, setQuestions ] = useState([])
    const [ quiz, setQuiz ] = useState([])

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

    // function updateUser(score){
    //     fetch(`/users/${user.id}`,)
    // })


    const selectedQuiz = questions.filter((question) => question.category === `${quiz}`)
    
    const handleQuizClick = (e) => {
        setQuiz(e.target.value)
        getRandom(selectedQuiz)
    }


    // console.log(user.score)
    // const handleDifficulty = (e)

    function getRandom(selectedQuiz) {
        const shuffled = [...selectedQuiz].sort(() => 0.5 - Math.random());

        return shuffled.slice(0, 6)
    }

    // console.log(questions)

    return (
        <div>
            <CurrentQuiz
            setQuiz={setQuiz}
            selectedQuiz={getRandom(selectedQuiz)} 
            handleQuizClick={handleQuizClick}/>             
        </div>
    )
}
