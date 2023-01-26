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
  // const currentUser = localStorage.getItem("user_id")
  const [user, setUser] = useState([])
  const [ solarObjects, setSolarObjects ] = useState([])
  const [ questions, setQuestions] = ([])

  useEffect(() => {
    fetch(`/solar_objects`)
      .then((res) => res.json())
      .then((solarObjects) => setSolarObjects(solarObjects))
  }, [setSolarObjects])

  useEffect(() => {
    fetch(`/questions`)
      .then((res) => res.json())
      .then((questions) => setQuestions(questions))
  }, [setQuestions])

  return (
    <div className='relative'>
      <img className="absolute w-full h-screen mix-blend-overlay" src={background} alt='nightsky'/>
      <NavBar questions={questions} solarObjects={solarObjects} />
        <Routes>
          {/* <Route path='/' element={<Home users={users} />} /> */}
          <Route path='/login' element={<Login  />} />
        <Route path='/sign_up' element={<SignUp  />} />
          <Route path='/about' element={<About />} />
          <Route path='/' element={<SolarObjectContainer />} />
          <Route path='/quizzes' element={<QuizContainer />} />
          <Route path='/leaderboard' element={<Leaderboard />} />
        </Routes>
    </div>
  );
}

export default App;


