import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import About from './components/About';
import SolarObjectContainer from './components/SolarObjectContainer';
import Home from './components/Home';
import UserQuizContainer from './components/UserQuizContainer';
import QuizContainer from './components/QuizContainer';
import NavBar from './components/NavBar';



function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch(`/users`)
      .then((res) => res.json())
      .then((users) => setUsers(users))
  }, [setUsers])

  return (
    <div>
      <NavBar />
      <div>
        <Routes>
          <Route path='/' element={<Home users={users} />} />
          <Route path='/login' element={<Login users={users} setUsers={setUsers} />} />
          <Route path='/sign_up' element={<SignUp />} />
          <Route path='/about' element={<About />} />
          <Route path='/solar_system' element={<SolarObjectContainer />} />
          <Route path='/quizzes' element={<QuizContainer />} />
          <Route path='/user_quizzes' element={<UserQuizContainer />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
