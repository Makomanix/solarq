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
    }, [navigate]);
    
    const filteredQuestions = questions.filter(question => question.id !== edit)

    const questionToEdit = questions.filter(question => question.id === edit)
        
//     function handleDelete(question) {     
//         fetch(`/questions/${question.id}`, {
//             // method: 'DELETE',
//         })
//         // .then(navigate('/admin'))
//     //     .then(fetch(`/questions`)
//     //         .then((res) => res.json())
//     //         .then((data) => setQuestions(data))
//     //         .then(setEdit(null))
//     // );
// };

console.log(edit)

    function patchEdit(question) {
        fetch(`/question/${question.id}`, {
            method: 'PATCH',
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({

            })
        })
        //    .then(setEdit(null))
    }

    return (
        <div>  
            <EditQuestions questions={filteredQuestions} patchEdit={patchEdit} edit={edit} setEdit={setEdit} handleEditQuestion={handleEditQuestion} solarObjects={solarObjects} />
        </div>
    )
}
