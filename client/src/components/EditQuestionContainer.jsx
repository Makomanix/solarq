import React, { useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import EditQuestions from './EditQuestions';

export default function EditQuestionContainer({ questions, setQuestions, handleEditQuestion, solarObjects }) {
    const [ edit, setEdit ] = useState(null)
    const navigate = useNavigate()
    
    useEffect(() => {
        fetch(`/questions`)
        .then((res) => res.json())
        .then((data) => setQuestions(data))
    }, [navigate, setQuestions]);
    
    const filteredQuestions = questions.filter(question => question.id !== edit)

        
    function handleDelete(question) {     
        fetch(`/questions/${question.id}`, {
            method: 'DELETE',
        })
        .then(navigate('/admin'))
        .then(fetch(`/questions`)
            .then((res) => res.json())
            .then((data) => setQuestions(data))
            .then(handleEditQuestion)
    );
};

console.log(edit)



    return (
        <div>  
            <EditQuestions questions={filteredQuestions} edit={edit} setEdit={setEdit} handleEditQuestion={handleEditQuestion} handleDelete={handleDelete} solarObjects={solarObjects} />
        </div>
    )
}
