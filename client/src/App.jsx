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
  const [ user, setUser ] = useState({})
  const [ solarObjects, setSolarObjects ] = useState([])

  useEffect(() => {
    fetch(`/solar_objects`)
      .then((res) => res.json())
      .then((solarObjects) => setSolarObjects(solarObjects))
  }, [setUser])

  return (
    <div className='relative'>
      <img className="absolute w-full h-screen mix-blend-overlay" src={background} alt='nightsky'/>
      <NavBar user={user} setUser={setUser} solarObjects={solarObjects} />
        <Routes>
          <Route path='/' element={<Home user={user} setUser={setUser}/>} />
          <Route path='/login' element={<Login setUser={setUser} />} />
        <Route path='/sign_up' element={<SignUp user={user} setUser={setUser} />} />
          <Route path='/about' element={<About />} />
          <Route path='/solar_system' element={<SolarObjectContainer user={user} setUser={setUser} solarObjects={solarObjects} setSolarObjects={setSolarObjects}/>} />
          <Route path='/quizzes' element={<QuizContainer />} />
          <Route path='/leaderboard' element={<Leaderboard />} />
        </Routes>
    </div>
  );
}

export default App;


