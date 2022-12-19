import React, {useState, useEffect} from 'react';
import QuizCollection from './QuizCollection';
import { useNavigate } from 'react-router-dom';

export default function QuizContainer() {
    const [ user, setUser ] = useState([])
    const [solarObjects, setSolarObjects ] = useState([])
    // const [ quiz, setQuiz ] = useState([])
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
        fetch('/solar_objects')
            .then((res) => res.json())
            .then((solarObjects) => setSolarObjects(solarObjects));
    }, [navigate]);
    console.log(solarObjects)

    return (
        <div>
            <QuizCollection solarObjects={solarObjects}/>             
        </div>
    )
}
