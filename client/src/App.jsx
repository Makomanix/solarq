import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import About from './components/About';
import SolarObjectContainer from './components/SolarObjectContainer';
import UserContainer from './components/UserContainer';
import UserQuizContainer from './components/UserQuizContainer';
import QuestionContainer from './components/QuestionContainer';



function App() {
  const [ users, setUsers ] = useState([])

  useEffect(() => {
    fetch(`/users`)
    .then((res) => res.json())
    .then((users) => setUsers(users))
  },[setUsers])

  return (
    <div>
      <Routes>
        <Route path='/' element={<UserContainer users={users}/>} />
        <Route path='/login' element={<Login users={users} setUsers={setUsers}/>}/>
        <Route path='/sign_up' element={<SignUp />} />
        <Route path='/about' element={<About />} />
        <Route path='/solar_system' element={<SolarObjectContainer />} />
        <Route path='/quizes' element={<QuestionContainer />} />
        <Route path='/user_quizes' element={<UserQuizContainer />} />
      </Routes>
    </div>
  );
}

export default App;
