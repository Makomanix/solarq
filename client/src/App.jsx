import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import About from './components/About';
import SolarObjectContainer from './components/SolarObjectContainer';
import Home from './components/Home';
import QuizContainer from './components/QuizContainer';
import NavBar from './components/NavBar';
import Leaderboard from './components/Leaderboard';
import background from "./assets/background.jpg"


function App() {
  const [users, setUsers] = useState([])


  useEffect(() => {
    fetch(`/users`)
      .then((res) => res.json())
      .then((users) => setUsers(users))
  }, [setUsers])

  return (
    <div className='relative'>
      <img className="absolute w-full h-screen mix-blend-overlay" src={background} alt='nightsky'/>
      <NavBar />
        <Routes>
          <Route path='/' element={<Home users={users} />} />
          <Route path='/login' element={<Login users={users} setUsers={setUsers} />} />
          <Route path='/sign_up' element={<SignUp users={users} setUsers={setUsers} />} />
          <Route path='/about' element={<About />} />
          <Route path='/solar_system' element={<SolarObjectContainer />} />
          <Route path='/quizzes' element={<QuizContainer />} />
          <Route path='/leaderboard' element={<Leaderboard />} />
        </Routes>
    </div>
  );
}

export default App;


