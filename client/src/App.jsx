import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import SolarObjectContainer from './components/SolarObjectContainer';
import About from './components/About';


function App() {
  const [ users, setUsers ] = useState([])

  useEffect(() => {
    fetch(`/users`)
    .then((res) => res.json())
    .then((users) => setUsers(users))
  },[setUsers])

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<SolarObjectContainer />} />
        <Route path='/login' element={<Login users={users} setUsers={setUsers}/>}/>
        <Route path='/sign_up' element={<SignUp />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
