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
    <div className='relative h-screen w-screen'>
      <img className="absolute w-full h-full mix-blend-overlay" src={background} alt='nightsky'/>
      <NavBar />
        <Routes>
          <Route path='/poop' element={<Home users={users} />} />
          <Route path='/login' element={<Login users={users} setUsers={setUsers} />} />
          <Route path='/sign_up' element={<SignUp />} />
          <Route path='/about' element={<About />} />
          <Route path='/' element={<SolarObjectContainer />} />
          <Route path='/quizzes' element={<QuizContainer />} />
          <Route path='/leaderboard' element={<Leaderboard />} />
        </Routes>
    </div>
  );
}

export default App;


{/* <img className='z-1' src={background} alt={background} /> */}